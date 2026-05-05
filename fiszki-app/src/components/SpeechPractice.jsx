import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, Volume2, Activity, ArrowLeft, MessageSquare, Plus, Trash2, Menu, X, Settings, Sparkles, AlertTriangle, Smile, Globe, AlignLeft, Brain, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function SpeechPractice({ username, onBack }) {
  // Stan Historii i Ustawień (tak jak w ChatBot.jsx)
  const [sessions, setSessions] = useState([]);
  const [activeSessionId, setActiveSessionId] = useState(null);
  const [selectedModel, setSelectedModel] = useState('universal');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const defaultSettings = { memory: 5, tone: 'normal', language: 'en', length: 'short' };
  const [botSettings, setBotSettings] = useState(defaultSettings);

  // Stan Audio
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  
  const recognitionRef = useRef(null);
  const messagesEndRef = useRef(null);

  const activeSession = sessions.find(s => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [];

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };
  useEffect(() => { scrollToBottom() }, [currentMessages, isThinking, transcript]);

  // 1. ŁADOWANIE BAZY DANYCH
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
        if (data.settings) setBotSettings({ ...defaultSettings, ...data.settings, language: 'en' }); // Wymuszamy domyślnie 'en' dla Voice Room
      } catch (err) { console.error("Błąd ładowania z bazy:", err); }
    };
    fetchHistory();
  }, [username]);

  // 2. INICJALIZACJA MIKROFONU
  useEffect(() => {
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US'; 
      recognitionRef.current.interimResults = true;

      recognitionRef.current.onresult = (event) => {
        let currentTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript;
        }
        setTranscript(currentTranscript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      alert("Twoja przeglądarka nie obsługuje rozpoznawania mowy. Użyj Google Chrome.");
    }

    return () => { window.speechSynthesis.cancel(); };
  }, []);

  // 3. WYSYŁANIE WIADOMOŚCI PO ZAKOŃCZENIU MÓWIENIA
  useEffect(() => {
    if (!isListening && transcript.trim().length > 0 && !isThinking) {
      handleSendToBot(transcript);
      setTranscript(''); 
    }
  }, [isListening]);

  const saveToDatabase = async (newSessions, currentSettings) => {
    try {
      await fetch('/api/chat_sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, messages: newSessions, settings: currentSettings || botSettings })
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
      saveToDatabase(updatedSessions);
    }
  };

  const deleteAllChats = () => {
    if (window.confirm("UWAGA: Czy na pewno chcesz usunąć WSZYSTKIE czaty?")) {
      setSessions([]);
      setActiveSessionId(null);
      saveToDatabase([]);
      setShowSettings(false);
    }
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      window.speechSynthesis.cancel(); 
      setIsSpeaking(false);
      setTranscript('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) { console.error("Błąd mikrofonu:", e); }
    }
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    
    // Usuwamy polskie tłumaczenie oraz znaki Markdown z odczytu TTS!
    const cleanTextToSpeak = text.replace(/\*\([\s\S]*?\)\*/g, '').replace(/[*_#|]/g, '').trim();

    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(cleanTextToSpeak);
    utterance.lang = 'en-US'; 
    utterance.rate = 0.95;    

    utterance.onend = () => { setIsSpeaking(false); };
    window.speechSynthesis.speak(utterance);
  };

  const handleSendToBot = async (userText) => {
    setIsThinking(true);
    
    let currentSessions = [...sessions];
    let targetSessionId = activeSessionId;

    if (!targetSessionId) {
      targetSessionId = Date.now().toString();
      const newSession = {
        id: targetSessionId,
        title: "🎤 " + userText.substring(0, 22) + (userText.length > 22 ? '...' : ''), // Oznaczamy emotikonką!
        messages: [{ sender: 'user', text: userText }, { sender: 'bot', text: '' }]
      };
      currentSessions.unshift(newSession);
      setActiveSessionId(targetSessionId);
    } else {
      const sessionIndex = currentSessions.findIndex(s => s.id === targetSessionId);
      currentSessions[sessionIndex].messages.push({ sender: 'user', text: userText }, { sender: 'bot', text: '' });
    }

    setSessions(currentSessions);

    // Wymuszona instrukcja tłumaczenia dla tego konkretnego trybu (nadpisuje ustawienia)
    const hiddenPrompt = "\n[System: Tryb Voice Room. 1. ZAWSZE ODPOWIADAJ TYLKO PO ANGIELSKU (krótko, naturalnie). 2. Pod spodem ZAWSZE podaj polskie tłumaczenie, otoczone gwiazdkami i nawiasami: *(tutaj tłumaczenie)*. Żadnych tabelek.]";

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userText + hiddenPrompt, 
          modelType: selectedModel, 
          history: currentSessions.find(s => s.id === targetSessionId).messages.slice(0, -2), 
          settings: botSettings 
        }) 
      });
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) { saveToDatabase(currentSessions); break; }
        botReply += decoder.decode(value, { stream: true });
        
        setSessions(prev => {
          const updated = [...prev];
          const sIndex = updated.findIndex(s => s.id === targetSessionId);
          const mIndex = updated[sIndex].messages.length - 1;
          updated[sIndex].messages[mIndex].text = botReply;
          return updated;
        });
      }

      setIsThinking(false);
      speakText(botReply);

    } catch (error) {
      console.error("Błąd AI:", error);
      setIsThinking(false);
    }
  };

  return (
    <div className="flex h-[80vh] md:h-[700px] max-w-6xl mx-auto rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative bg-slate-50 font-sans">
      
      {/* MODAL USTAWIEŃ */}
      {showSettings && (
        <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6 sticky top-0 bg-white z-10 py-2 border-b border-slate-100">
              <h3 className="font-black text-2xl text-slate-800 flex items-center gap-2"><Settings className="text-orange-500" /> Preferencje Voice Room</h3>
              <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-slate-800 transition bg-slate-100 p-2 rounded-full"><X size={20} /></button>
            </div>
            <div className="space-y-5">
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><Smile size={16} className="text-orange-500"/> Osobowość Grega</label>
                <select value={botSettings.tone} onChange={(e) => handleSettingChange('tone', e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 font-medium text-slate-700">
                  <option value="normal">Standardowy (Prosty konkret)</option>
                  <option value="chill">Wyluzowany (Slang i żarty)</option>
                  <option value="strict">Akademicki (Surowy profesor)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-2"><Brain size={16} className="text-orange-500"/> Pamięć Kontekstowa</label>
                <select value={botSettings.memory} onChange={(e) => handleSettingChange('memory', Number(e.target.value))} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500 font-medium text-slate-700">
                  <option value="0">Brak pamięci (Tylko nowe pytania)</option>
                  <option value="5">Pamięta 5 ostatnich wymian</option>
                  <option value="20">Pamięta bardzo długą historię</option>
                </select>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-orange-800 text-sm font-medium border border-orange-100">
                W trybie Voice Room język i długość odpowiedzi są wymuszone systemowo (Angielski z tłumaczeniem) dla optymalnego treningu wymowy.
              </div>
              <div className="pt-6 border-t border-slate-100">
                <button onClick={deleteAllChats} className="w-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white font-bold py-3 rounded-xl transition flex justify-center items-center gap-2 border border-red-100"><AlertTriangle size={18} /> Usuń historię czatów</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {sidebarOpen && <div className="fixed md:hidden inset-0 bg-slate-900/50 backdrop-blur-sm z-30 transition-opacity" onClick={() => setSidebarOpen(false)} />}

      {/* SIDEBAR (Współdzielony z główną historią!) */}
      <div className={`fixed md:relative top-0 left-0 h-full z-40 w-3/4 sm:w-1/2 md:w-80 lg:w-1/4 bg-slate-900 text-slate-300 border-r border-slate-800 flex flex-col shadow-2xl md:shadow-none transform transition-transform duration-300 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="p-4 flex items-center justify-between">
          <button onClick={startNewChat} className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-4 py-3 rounded-xl font-bold transition shadow-lg shadow-orange-500/20">
            <Plus size={20} /> Nowy czat (Voice)
          </button>
          <button onClick={() => setSidebarOpen(false)} className="md:hidden ml-3 p-3 text-slate-400 hover:text-white bg-slate-800 rounded-xl"><X size={20} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-3 mt-2">Historia rozmów</p>
          {sessions.map(session => (
            <div 
              key={session.id} 
              onClick={() => { setActiveSessionId(session.id); setSidebarOpen(false); }}
              className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all group ${activeSessionId === session.id ? 'bg-orange-500/10 text-orange-400 font-semibold' : 'hover:bg-slate-800 text-slate-400 hover:text-slate-200'}`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <MessageSquare size={16} className={`shrink-0 ${activeSessionId === session.id ? 'text-orange-500' : 'text-slate-500'}`} />
                <span className="truncate text-sm">{session.title}</span>
              </div>
              <button onClick={(e) => deleteChat(e, session.id)} className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity p-1 shrink-0"><Trash2 size={16} /></button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-slate-800">
           <button onClick={onBack} className="w-full flex items-center justify-center gap-2 text-slate-400 hover:text-white transition font-semibold p-2 bg-slate-800 rounded-xl"><ArrowLeft size={16} /> Wróć do menu</button>
        </div>
      </div>

      {/* GŁÓWNE OKNO KONWERSACJI */}
      <div className="flex-1 flex flex-col bg-slate-50 relative w-full h-full">
        
        {/* Górny Pasek (Modele i Ustawienia) */}
        <div className="bg-white/80 backdrop-blur-lg border-b border-slate-200 p-4 flex justify-between items-center z-10 sticky top-0">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-xl transition"><Menu size={24} /></button>
            <h2 className="font-black text-xl text-slate-800 flex items-center gap-2">Voice Room <Sparkles className="text-orange-500" size={20} /></h2>
          </div>
          <div className="flex gap-2">
            <div className="relative hidden sm:block">
              <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)} disabled={isThinking} className="appearance-none bg-slate-100 border-none text-slate-700 py-2.5 pl-10 pr-8 rounded-xl font-bold text-sm outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer shadow-inner">
                <option value="universal">Universal</option>
                <option value="fast">Fast</option>
                <option value="pro">Pro</option>
              </select>
              <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-500" size={16} />
            </div>
            <button onClick={() => setShowSettings(true)} className="p-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl transition" title="Ustawienia"><Settings size={20} /></button>
          </div>
        </div>

        {/* Miejsce na wiadomości */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scroll-smooth bg-slate-50/50">
          {!activeSessionId && sessions.length > 0 && currentMessages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 animate-in fade-in zoom-in">
              <div className="bg-orange-100 p-6 rounded-full mb-6"><Volume2 size={64} className="text-orange-500" /></div>
              <h3 className="text-2xl font-black text-slate-700 mb-2">Speak English!</h3>
              <p className="text-center max-w-sm">Wybierz czat lub kliknij mikrofon, by zacząć nową konwersację. Greg odpowie głosem oraz tekstem (z szarym tłumaczeniem pod spodem).</p>
            </div>
          )}

          {currentMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              <div className={`max-w-[85%] md:max-w-[75%] p-4 sm:p-5 shadow-sm ${msg.sender === 'user' ? 'bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl rounded-tr-sm' : 'bg-white border border-orange-100 text-slate-800 rounded-2xl rounded-tl-sm'}`}>
                {msg.sender === 'bot' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm md:prose-base prose-orange max-w-none break-words"
                    components={{
                      p: ({node, ...props}) => <p className="mb-1 last:mb-0 text-base font-semibold leading-relaxed text-slate-800" {...props} />,
                      // SZARA KURSWA NA TŁUMACZENIA *(...)*
                      em: ({node, ...props}) => <em className="block text-sm text-slate-500 opacity-70 italic mt-3 border-t border-slate-100 pt-2" {...props} />
                    }}
                  >{msg.text}</ReactMarkdown>
                ) : (<div className="leading-relaxed whitespace-pre-wrap">{msg.text}</div>)}
              </div>
            </div>
          ))}

          {isThinking && (
             <div className="flex justify-start animate-in fade-in">
               <div className="bg-white border border-orange-100 p-4 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-3 text-slate-500 text-sm">
                 <Loader2 className="animate-spin text-orange-500" size={18} /> Greg myśli ({selectedModel})...
               </div>
            </div>
          )}

          {isListening && transcript && (
            <div className="flex justify-end animate-in fade-in">
              <div className="max-w-[80%] p-4 rounded-2xl bg-orange-100 text-orange-800 rounded-br-none shadow-sm italic border border-orange-200">
                {transcript}
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Panel mikrofonu z falami dźwiękowymi */}
        <div className="bg-white border-t border-slate-200 p-6 flex justify-center items-center relative overflow-hidden">
          {isSpeaking && (
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-100">
              <div className="h-full bg-orange-500 w-1/3 animate-ping mx-auto rounded-full"></div>
            </div>
          )}
          <button 
            onClick={toggleListen}
            disabled={isThinking}
            className={`h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center transition-all shadow-xl z-10
              ${isThinking ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 
                isListening 
                  ? 'bg-red-500 text-white animate-pulse shadow-red-500/50 scale-110' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 shadow-orange-500/30'
              }
            `}
          >
            {isListening ? <MicOff size={32} /> : <Mic size={36} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpeechPractice;