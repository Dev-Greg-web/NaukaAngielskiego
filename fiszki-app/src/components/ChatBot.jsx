import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, MessageSquare, Plus, Trash2, Menu, X, Settings, Sparkles, AlertTriangle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatBot({ username }) {
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('universal');
  
  // Stany UI
  const [sidebarOpen, setSidebarOpen] = useState(false); // Domyślnie ukryty na telefonach
  const [showSettings, setShowSettings] = useState(false);

  const messagesEndRef = useRef(null);
  const activeSession = sessions.find(s => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom() }, [currentMessages, isLoading]);

  // Ładowanie bazy
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
          loadedSessions = [{ id: 'default', title: 'Poprzednia rozmowa', messages: loadedSessions }];
        }
        setSessions(loadedSessions);
        if (loadedSessions.length > 0) setActiveSessionId(loadedSessions[0].id);
      } catch (err) {
        console.error("Błąd ładowania z bazy:", err);
      }
    };
    fetchHistory();
  }, [username]);

  const saveToDatabase = async (newSessions) => {
    try {
      await fetch('/api/chat_sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, messages: newSessions, settings: {} })
      });
    } catch (err) {
      console.error("Błąd zapisu:", err);
    }
  };

  const startNewChat = () => {
    setActiveSessionId(null);
    setSidebarOpen(false); 
  };

  const deleteChat = (e, idToDelete) => {
    e.stopPropagation();
    if (window.confirm("Na pewno usunąć ten czat?")) {
      const updatedSessions = sessions.filter(s => s.id !== idToDelete);
      setSessions(updatedSessions);
      if (activeSessionId === idToDelete) {
        setActiveSessionId(updatedSessions.length > 0 ? updatedSessions[0].id : null);
      }
      saveToDatabase(updatedSessions);
    }
  };

  const deleteAllChats = () => {
    if (window.confirm("UWAGA: Czy na pewno chcesz usunąć WSZYSTKIE czaty? Tej akcji nie da się cofnąć!")) {
      setSessions([]);
      setActiveSessionId(null);
      saveToDatabase([]);
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
        title: userMsg.substring(0, 25) + (userMsg.length > 25 ? '...' : ''),
        messages: [{ sender: 'user', text: userMsg }, { sender: 'bot', text: '' }]
      };
      currentSessions.unshift(newSession);
      setActiveSessionId(targetSessionId);
    } else {
      const sessionIndex = currentSessions.findIndex(s => s.id === targetSessionId);
      currentSessions[sessionIndex].messages.push(
        { sender: 'user', text: userMsg },
        { sender: 'bot', text: '' }
      );
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
          history: currentSessions.find(s => s.id === targetSessionId).messages.slice(0, -2)
        }) 
      });
      
      setIsLoading(false);
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          saveToDatabase(currentSessions);
          break; 
        }
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
    } catch (error) {
      setSessions(prev => {
          const updated = [...prev];
          const sIndex = updated.findIndex(s => s.id === targetSessionId);
          const mIndex = updated[sIndex].messages.length - 1;
          updated[sIndex].messages[mIndex].text = "Błąd serwera. Sprawdź połączenie.";
          return updated;
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[80vh] md:h-[700px] max-w-6xl mx-auto rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative bg-slate-50 font-sans">
      
      {/* MODAL USTAWIEŃ */}
      {showSettings && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl scale-100 animate-in zoom-in-95">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-2xl text-slate-800 flex items-center gap-2">
                <Settings className="text-slate-400" /> Ustawienia Czatu
              </h3>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-800 transition bg-slate-100 p-2 rounded-full">
                <X size={20} />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="bg-emerald-50 text-emerald-800 p-4 rounded-2xl flex gap-3">
                <Bot className="shrink-0 text-emerald-600" />
                <p className="text-sm font-medium">Twój wirtualny nauczyciel używa zaawansowanych modeli z OpenRouter. Konwersacje są zapisywane w bazie danych powiązanej z Twoim kontem <strong>{username}</strong>.</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-sm font-bold text-slate-800 mb-2">Zarządzanie danymi</p>
                <button onClick={deleteAllChats} className="w-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3.5 rounded-xl transition flex justify-center items-center gap-2 border border-red-100 hover:border-red-600">
                  <AlertTriangle size={18} /> Usuń wszystkie czaty z bazy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* OVERLAY NA TELEFONY (Przyciemnia tło, gdy menu jest otwarte) */}
      {sidebarOpen && (
        <div 
          className="fixed md:hidden inset-0 bg-slate-900/50 backdrop-blur-sm z-30 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR (Wysuwany na telefonie, stały na PC) */}
      <div className={`
        fixed md:relative top-0 left-0 h-full z-40 
        w-3/4 sm:w-1/2 md:w-80 lg:w-1/4 
        bg-slate-900 text-slate-300 border-r border-slate-800 
        flex flex-col shadow-2xl md:shadow-none
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-4 flex items-center justify-between">
          <button onClick={startNewChat} className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-3 rounded-xl font-bold transition shadow-lg shadow-emerald-500/20">
            <Plus size={20} /> Nowy czat
          </button>
          {/* Przycisk zamknięcia tylko na mobile */}
          <button onClick={() => setSidebarOpen(false)} className="md:hidden ml-3 p-3 text-slate-400 hover:text-white bg-slate-800 rounded-xl">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-3 mt-2">Historia rozmów</p>
          {sessions.length === 0 && (
            <p className="text-sm text-slate-600 px-2 italic">Brak zapisanych czatów.</p>
          )}
          {sessions.map(session => (
            <div 
              key={session.id} 
              onClick={() => { setActiveSessionId(session.id); setSidebarOpen(false); }}
              className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all group ${
                activeSessionId === session.id 
                  ? 'bg-emerald-500/10 text-emerald-400 font-semibold' 
                  : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <MessageSquare size={16} className={`shrink-0 ${activeSessionId === session.id ? 'text-emerald-500' : 'text-slate-500'}`} />
                <span className="truncate text-sm">{session.title}</span>
              </div>
              <button 
                onClick={(e) => deleteChat(e, session.id)} 
                className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity p-1 shrink-0"
                title="Usuń czat"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
        
        {/* Dolny profil na pasku */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white font-black shadow-md">
              {username ? username.charAt(0).toUpperCase() : 'G'}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-bold text-white truncate">{username}</p>
              <p className="text-xs text-emerald-400 truncate">Zalogowano</p>
            </div>
          </div>
        </div>
      </div>

      {/* GŁÓWNE OKNO CZATU */}
      <div className="flex-1 flex flex-col bg-slate-50 relative w-full h-full">
        
        {/* Nowoczesny Nagłówek (Glassmorphism) */}
        <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200 p-4 flex justify-between items-center z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition">
              <Menu size={24} />
            </button>
            <div>
              <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">
                GregBot <Sparkles className="text-emerald-500" size={20} />
              </h2>
            </div>
          </div>
          <button onClick={() => setShowSettings(true)} className="p-2.5 hover:bg-slate-100 text-slate-500 rounded-xl transition" title="Ustawienia">
            <Settings size={22} />
          </button>
        </div>

        {/* Miejsce na wiadomości */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth">
          {!activeSessionId && sessions.length > 0 && currentMessages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-in fade-in zoom-in duration-500">
              <div className="bg-emerald-100 p-6 rounded-full mb-6 shadow-sm">
                <Bot size={64} className="text-emerald-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-700 mb-2">Cześć, {username}!</h3>
              <p className="text-slate-500 text-center max-w-sm">Wybierz czat z lewego menu lub napisz wiadomość poniżej, aby rozpocząć nowy temat.</p>
            </div>
          )}

          {currentMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              {msg.sender === 'bot' && (
                 <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mr-3 mt-1 shadow-sm">
                   <Bot size={18} />
                 </div>
              )}
              <div className={`max-w-[85%] md:max-w-[75%] p-4 sm:p-5 shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl rounded-tr-sm' 
                  : 'bg-white border border-slate-100 text-slate-800 rounded-2xl rounded-tl-sm'
              }`}>
                {msg.sender === 'bot' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm md:prose-base prose-emerald max-w-none break-words"
                    components={{
                      table: ({node, ...props}) => <div className="overflow-x-auto rounded-xl border border-slate-200 my-4"><table className="border-collapse w-full text-sm text-left" {...props} /></div>,
                      th: ({node, ...props}) => <th className="bg-slate-50 px-4 py-3 font-bold text-slate-800 border-b border-slate-200" {...props} />,
                      td: ({node, ...props}) => <td className="px-4 py-3 border-b border-slate-100 text-slate-600 last:border-b-0" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-black text-slate-900" {...props} />,
                      p: ({node, ...props}) => <p className="mb-3 last:mb-0 leading-relaxed" {...props} />,
                      code: ({node, inline, ...props}) => inline ? <code className="bg-emerald-50 text-emerald-700 px-1.5 py-0.5 rounded-md font-mono text-sm" {...props} /> : <code className="block bg-slate-800 text-emerald-400 p-4 rounded-xl font-mono text-sm overflow-x-auto my-3" {...props} />
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  <div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-in fade-in">
               <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shrink-0 mr-3 mt-1 shadow-sm">
                 <Bot size={18} />
               </div>
               <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-3 text-slate-500 text-sm">
                 <Loader2 className="animate-spin text-emerald-500" size={18} />
                 Analizuje ({selectedModel === 'pro' ? 'Głębokie myślenie' : 'Tryb szybki'})...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Nowoczesne Pole wpisywania */}
        <div className="p-4 bg-white/80 backdrop-blur-lg border-t border-slate-200">
          <form onSubmit={sendMessage} className="max-w-4xl mx-auto flex gap-2 md:gap-3 items-end">
            
            {/* Wybór modelu (Zoptymalizowany dla mobile) */}
            <div className="relative shrink-0">
              <select 
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                disabled={isLoading}
                className="appearance-none bg-slate-100 border-none text-slate-700 py-3.5 pl-10 pr-8 rounded-2xl font-bold text-sm outline-none focus:ring-2 focus:ring-emerald-500 transition cursor-pointer shadow-inner h-full"
              >
                <option value="universal">Uniwersalny</option>
                <option value="fast">Szybki</option>
                <option value="pro">Pro</option>
              </select>
              <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={18} />
            </div>

            <div className="flex-1 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                placeholder="Napisz do bota..."
                className="w-full bg-white border border-slate-300 rounded-2xl px-5 py-3.5 outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 transition disabled:opacity-50 shadow-sm"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isLoading || !inputValue.trim()} 
              className="shrink-0 bg-emerald-500 text-white p-3.5 rounded-2xl hover:bg-emerald-600 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-md shadow-emerald-500/30"
            >
              <Send size={20} className={inputValue.trim() ? "translate-x-0.5 -translate-y-0.5 transition-transform" : ""} />
            </button>
          </form>
          <p className="text-center text-[10px] text-slate-400 mt-2 font-medium">Model AI może popełniać błędy. Weryfikuj kluczowe informacje.</p>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;