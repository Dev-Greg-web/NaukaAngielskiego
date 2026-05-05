import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, MessageSquare, Plus, Trash2, Menu, X, Settings, Sparkles, AlertTriangle, Smile, Globe, AlignLeft, Brain } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatBot({ username }) {
  // STAN WSPÓŁDZIELONY (cała baza)
  const [allSessions, setAllSessions] = useState([]);
  const [fullSettings, setFullSettings] = useState({});

  // STAN LOKALNY (tylko dla ChatBot)
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('universal');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const defaultSettings = { memory: 5, tone: 'normal', language: 'pl', length: 'normal' };
  const [botSettings, setBotSettings] = useState(defaultSettings);

  const messagesEndRef = useRef(null);
  const activeSession = sessions.find(s => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [];

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(() => { scrollToBottom() }, [currentMessages, isLoading]);

  // ŁADOWANIE BAZY
  useEffect(() => {
    if (!username) return;
    const fetchHistory = async () => {
      try {
        const res = await fetch('/api/chat_load', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username })
        });
        const data = await res.json();
        
        let loadedSessions = data.messages || [];
        if (loadedSessions.length > 0 && !loadedSessions[0].id) {
          loadedSessions = [{ id: 'default', title: 'Poprzednia rozmowa', messages: loadedSessions, type: 'text' }];
        }
        setAllSessions(loadedSessions);
        
        // FILTROWANIE: Bierzemy tylko czaty tekstowe (lub stare bez podanego typu)
        const textSessions = loadedSessions.filter(s => s.type !== 'voice');
        setSessions(textSessions);
        if (textSessions.length > 0) setActiveSessionId(textSessions[0].id);
        
        // USTAWIENIA: Rozdzielenie na "text" i "voice"
        const loadedSettings = data.settings || {};
        setFullSettings(loadedSettings);
        const extractedTextSettings = loadedSettings.text || { 
          memory: loadedSettings.memory ?? 5, 
          tone: loadedSettings.tone ?? 'normal', 
          language: loadedSettings.language ?? 'pl', 
          length: loadedSettings.length ?? 'normal' 
        };
        setBotSettings({ ...defaultSettings, ...extractedTextSettings });
        
      } catch (err) { console.error("Błąd ładowania z bazy:", err); }
    };
    fetchHistory();
  }, [username]);

  // ZAPISYWANIE Z MERGOWANIEM (Chronimy czaty głosowe przed nadpisaniem!)
  const saveToDatabase = async (newTextSessions, currentTextSettings) => {
    const mergedSessions = [
        ...newTextSessions,
        ...allSessions.filter(s => s.type === 'voice')
    ];
    const newSettings = currentTextSettings || botSettings;
    const mergedSettings = { ...fullSettings, text: newSettings };
    
    setAllSessions(mergedSessions);
    setFullSettings(mergedSettings);

    try {
      await fetch('/api/chat_sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, messages: mergedSessions, settings: mergedSettings })
      });
    } catch (err) { console.error("Błąd zapisu:", err); }
  };

  const handleSettingChange = (settingKey, value) => {
    const newSettings = { ...botSettings, [settingKey]: value };
    setBotSettings(newSettings);
    saveToDatabase(sessions, newSettings);
  };

  const startNewChat = () => { setActiveSessionId(null); setSidebarOpen(false); };

  const deleteChat = (e, idToDelete) => {
    e.stopPropagation();
    if (window.confirm("Na pewno usunąć ten czat?")) {
      const updatedSessions = sessions.filter(s => s.id !== idToDelete);
      setSessions(updatedSessions);
      if (activeSessionId === idToDelete) setActiveSessionId(updatedSessions.length > 0 ? updatedSessions[0].id : null);
      saveToDatabase(updatedSessions, botSettings);
    }
  };

  const deleteAllChats = () => {
    if (window.confirm("UWAGA: Czy na pewno chcesz usunąć WSZYSTKIE CZATY TEKSTOWE? Czaty z Voice Room pozostaną nietknięte.")) {
      setSessions([]);
      setActiveSessionId(null);
      saveToDatabase([], botSettings);
      setShowSettings(false);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    let currentSessions = [...sessions];
    let targetSessionId = activeSessionId;

    if (!targetSessionId) {
      targetSessionId = Date.now().toString();
      const newSession = {
        id: targetSessionId,
        type: 'text', // Oznaczamy jako czat TEKSTOWY
        title: userMsg.substring(0, 25) + (userMsg.length > 25 ? '...' : ''),
        messages: [{ sender: 'user', text: userMsg }, { sender: 'bot', text: '' }]
      };
      currentSessions.unshift(newSession);
      setActiveSessionId(targetSessionId);
    } else {
      const sessionIndex = currentSessions.findIndex(s => s.id === targetSessionId);
      currentSessions[sessionIndex].messages.push({ sender: 'user', text: userMsg }, { sender: 'bot', text: '' });
    }

    setSessions(currentSessions);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMsg, 
          modelType: selectedModel, 
          history: currentSessions.find(s => s.id === targetSessionId).messages.slice(0, -2),
          settings: botSettings 
        }) 
      });
      
      setIsLoading(false);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) { saveToDatabase(currentSessions, botSettings); break; }
        const chunk = decoder.decode(value, { stream: true });
        botReply += chunk;
        setSessions(prev => {
          const updated = [...prev];
          const sIndex = updated.findIndex(s => s.id === targetSessionId);
          const mIndex = updated[sIndex].messages.length - 1;
          updated[sIndex].messages[mIndex].text = botReply;
          return updated;
        });
      }
    } catch (error) { setIsLoading(false); }
  };

  return (
    <div className="flex h-[80vh] md:h-[700px] max-w-6xl mx-auto rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative bg-slate-50 font-sans">
      
      {/* MODAL USTAWIEŃ */}
      {showSettings && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl scale-100 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 py-2 border-b border-slate-100">
              <h3 className="font-black text-2xl text-slate-800 flex items-center gap-2"><Settings className="text-emerald-500" /> Preferencje (Tekst)</h3>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-800 transition bg-slate-100 p-2 rounded-full"><X size={20} /></button>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><Globe size={16} className="text-emerald-500"/> Język odpowiedzi</label>
                <select value={botSettings.language} onChange={(e) => handleSettingChange('language', e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700">
                  <option value="pl">Polski (Z ang. przykładami)</option>
                  <option value="en">Angielski (Pełne zanurzenie)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><Smile size={16} className="text-emerald-500"/> Osobowość Grega</label>
                <select value={botSettings.tone} onChange={(e) => handleSettingChange('tone', e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700">
                  <option value="normal">Standardowy (Prosty konkret)</option>
                  <option value="chill">Wyluzowany (Slang i żarty)</option>
                  <option value="strict">Akademicki (Surowy profesor)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><AlignLeft size={16} className="text-emerald-500"/> Długość odpowiedzi</label>
                <select value={botSettings.length} onChange={(e) => handleSettingChange('length', e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700">
                  <option value="short">Bardzo zwięźle (Szybkie notatki)</option>
                  <option value="normal">Optymalnie (Wyjaśnienie i tabele)</option>
                  <option value="long">Wyczerpująco (Długi esej, wyjątki)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><Brain size={16} className="text-emerald-500"/> Pamięć Kontekstowa</label>
                <select value={botSettings.memory} onChange={(e) => handleSettingChange('memory', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-slate-700">
                  <option value="0">Brak pamięci (Tylko nowe pytania)</option>
                  <option value="5">Pamięta 5 ostatnich pytań</option>
                  <option value="20">Pamięta bardzo długą historię</option>
                </select>
              </div>
              <div className="pt-6 border-t border-slate-100">
                <button onClick={deleteAllChats} className="w-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 border border-red-100"><AlertTriangle size={18} /> Usuń czaty tekstowe</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {sidebarOpen && <div className="fixed md:hidden inset-0 bg-slate-900/50 backdrop-blur-sm z-30 transition-opacity" onClick={() => setSidebarOpen(false)} />}

      {/* SIDEBAR */}
      <div className={`fixed md:relative top-0 left-0 h-full z-40 w-3/4 sm:w-1/2 md:w-80 lg:w-1/4 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 flex items-center justify-between">
          <button onClick={startNewChat} className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-3 rounded-xl font-bold transition shadow-lg shadow-emerald-500/20">
            <Plus size={20} /> Nowy czat (Tekst)
          </button>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden ml-3 p-3 text-slate-400 hover:text-white bg-slate-800 rounded-xl"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-3 mt-2">Historia Tekstowa</p>
          {sessions.length === 0 && <p className="text-sm text-slate-600 px-2 italic">Brak zapisanych czatów.</p>}
          {sessions.map(session => (
            <div 
              key={session.id} 
              onClick={() => { setActiveSessionId(session.id); setSidebarOpen(false); }}
              className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all group ${activeSessionId === session.id ? 'bg-emerald-500/10 text-emerald-400 font-semibold' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'}`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <MessageSquare size={16} className={`shrink-0 ${activeSessionId === session.id ? 'text-emerald-500' : 'text-slate-500'}`} />
                <span className="truncate text-sm">{session.title}</span>
              </div>
              <button onClick={(e) => deleteChat(e, session.id)} className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity p-1 shrink-0"><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
      </div>

      {/* GŁÓWNE OKNO CZATU */}
      <div className="flex-1 flex flex-col bg-slate-50 relative w-full h-full">
        <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200 p-4 flex justify-between items-center z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition"><Menu size={24} /></button>
            <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">GregBot <Sparkles className="text-emerald-500" size={20} /></h2>
          </div>
          <button onClick={() => setShowSettings(true)} className="p-2.5 hover:bg-slate-100 text-slate-500 rounded-xl transition bg-white border border-slate-200 shadow-sm flex items-center gap-2">
             <Settings size={20} /> <span className="hidden sm:block text-sm font-bold text-slate-700">Opcje</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
          {!activeSessionId && sessions.length > 0 && currentMessages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-in fade-in zoom-in duration-500">
              <div className="bg-emerald-100 p-6 rounded-full mb-6 shadow-sm"><Bot size={64} className="text-emerald-500" /></div>
              <h3 className="text-2xl font-black text-slate-700 mb-2">Cześć, {username}!</h3>
              <p className="text-slate-500 text-center max-w-sm">To jest tryb tekstowy. Twoje czaty stąd nie mieszają się z Voice Room.</p>
            </div>
          )}

          {currentMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              {msg.sender === 'bot' && <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mr-3 mt-1 shadow-sm"><Bot size={18} /></div>}
              <div className={`max-w-[85%] md:max-w-[75%] p-4 sm:p-5 shadow-sm ${msg.sender === 'user' ? 'bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl rounded-tr-sm' : 'bg-white border border-slate-100 text-slate-800 rounded-2xl rounded-tl-sm'}`}>
                {msg.sender === 'bot' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm md:prose-base prose-emerald max-w-none break-words"
                    components={{
                      table: ({node, ...props}) => <div className="overflow-x-auto rounded-xl border border-slate-200 my-4"><table className="border-collapse w-full text-sm text-left" {...props} /></div>,
                      th: ({node, ...props}) => <th className="bg-slate-50 px-4 py-3 font-bold text-slate-800 border-b border-slate-200" {...props} />,
                      td: ({node, ...props}) => <td className="px-4 py-3 border-b border-slate-100 text-slate-600 last:border-b-0" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-black text-slate-900" {...props} />
                    }}
                  >{msg.text}</ReactMarkdown>
                ) : (<div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>)}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-in fade-in">
               <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mr-3 mt-1 shadow-sm"><Bot size={18} /></div>
               <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-3 text-slate-500 text-sm">
                 <Loader2 className="animate-spin text-emerald-500" size={18} /> Analiza modelu...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200">
          <form onSubmit={sendMessage} className="max-w-4xl mx-auto flex gap-2 md:gap-3 items-end">
            <div className="relative shrink-0 hidden md:block w-40">
              <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={isLoading} className="appearance-none bg-slate-100 border-none text-slate-700 py-3.5 pl-10 pr-8 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-emerald-500 shadow-inner w-full">
                <option value="universal">Universal</option>
                <option value="fast">Fast</option>
                <option value="pro">Pro</option>
              </select>
              <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            </div>

            <div className="flex-1 relative">
              <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} disabled={isLoading} placeholder="Napisz do Grega..." className="w-full bg-white border border-slate-300 rounded-2xl px-5 py-3.5 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition disabled:opacity-50 shadow-sm" />
            </div>
            
            <button type="submit" disabled={isLoading || !inputValue.trim()} className="shrink-0 bg-emerald-500 text-white p-3.5 rounded-2xl hover:bg-emerald-600 transition flex items-center justify-center disabled:opacity-50 shadow-md">
              <Send size={20} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5" : ""} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;