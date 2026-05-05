import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, MessageSquare, Plus, Trash2, Menu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatBot({ username }) {
  // Stan przechowujący wszystkie wątki (sesje) czatów
  const [sessions, setSessions] = useState([]);
  // ID aktualnie otwartego czatu
  const [activeSessionId, setActiveSessionId] = useState(null);
  
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('universal');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const messagesEndRef = useRef(null);

  // Aktywna sesja i jej wiadomości
  const activeSession = sessions.find(s => s.id === activeSessionId);
  const currentMessages = activeSession ? activeSession.messages : [];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom() }, [currentMessages, isLoading]);

  // 1. ŁADOWANIE CZATÓW Z BAZY DANYCH
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
        
        // MIGRACJA: Jeśli baza ma stary format (pojedynczą listę), zamieniamy ją na format sesji
        if (loadedSessions.length > 0 && !loadedSessions[0].id) {
          loadedSessions = [{ id: 'default', title: 'Poprzednia rozmowa', messages: loadedSessions }];
        }
        
        setSessions(loadedSessions);
        if (loadedSessions.length > 0) {
          setActiveSessionId(loadedSessions[0].id);
        }
      } catch (err) {
        console.error("Błąd ładowania z bazy:", err);
      }
    };
    fetchHistory();
  }, [username]);

  // 2. ZAPISYWANIE DO BAZY SQLALCHEMY
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

  // 3. TWORZENIE NOWEGO CZATU
  const startNewChat = () => {
    setActiveSessionId(null); // Odznaczenie sesji przygotowuje pusty ekran
    if (window.innerWidth < 768) setSidebarOpen(false); // Chowa sidebar na telefonach
  };

  // 4. USUWANIE CZATU
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

  // 5. WYSYŁANIE WIADOMOŚCI
  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    let currentSessions = [...sessions];
    let targetSessionId = activeSessionId;

    // Tworzenie nowego czatu, jeśli żaden nie jest aktywny
    if (!targetSessionId) {
      targetSessionId = Date.now().toString();
      const newSession = {
        id: targetSessionId,
        title: userMsg.substring(0, 25) + (userMsg.length > 25 ? '...' : ''), // Auto-tytuł!
        messages: [{ sender: 'user', text: userMsg }, { sender: 'bot', text: '' }]
      };
      currentSessions.unshift(newSession); // Dodajemy na początek
      setActiveSessionId(targetSessionId);
    } else {
      // Aktualizacja istniejącego czatu
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
        // Wysyłamy historię tylko Z TEGO KONKRETNEGO czatu!
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
          saveToDatabase(currentSessions); // Zapis do SQL po zakończeniu
          break; 
        }
        
        const chunk = decoder.decode(value, { stream: true });
        botReply += chunk;
        
        // Zaktualizuj tekst bota w aktywnym czacie
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
    <div className="flex h-[700px] max-w-5xl mx-auto rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative bg-white">
      
      {/* SIDEBAR - LISTA CZATÓW */}
      <div className={`${sidebarOpen ? 'flex' : 'hidden'} md:flex flex-col w-full md:w-1/3 lg:w-1/4 bg-[#1e1e1e] text-slate-300 border-r border-slate-700/50 absolute md:relative z-20 h-full`}>
        <div className="p-4">
          <button onClick={startNewChat} className="w-full flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-xl font-bold transition">
            <Plus size={20} /> Nowy czat
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto px-3 pb-4 space-y-1">
          <p className="text-xs font-bold text-slate-500 uppercase px-2 mb-2 mt-4">Twoje Czaty</p>
          {sessions.map(session => (
            <div 
              key={session.id} 
              onClick={() => { setActiveSessionId(session.id); if(window.innerWidth < 768) setSidebarOpen(false); }}
              className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition group ${
                activeSessionId === session.id ? 'bg-[#2d2d2d] text-white' : 'hover:bg-[#2a2a2a]'
              }`}
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <MessageSquare size={16} className={activeSessionId === session.id ? 'text-emerald-500' : 'text-slate-500'} />
                <span className="truncate text-sm font-medium">{session.title}</span>
              </div>
              <button 
                onClick={(e) => deleteChat(e, session.id)} 
                className="opacity-0 group-hover:opacity-100 hover:text-red-400 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* GŁÓWNE OKNO CZATU */}
      <div className="flex-1 flex flex-col bg-slate-50 relative w-full">
        
        {/* Nagłówek czatu */}
        <div className="bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm z-10">
          <div className="flex items-center gap-3">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="md:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg">
              <Menu size={24} />
            </button>
            <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
              <Bot size={24} />
            </div>
            <div>
              <h2 className="font-black text-lg text-slate-800 leading-tight">
                GregBot <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-md uppercase tracking-wider ml-1">AI</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Miejsce na wiadomości */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6">
          {!activeSessionId && sessions.length > 0 && currentMessages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-slate-400">
              <Bot size={48} className="mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-slate-600 mb-2">Jak mogę Ci pomóc?</h3>
              <p className="text-sm">Napisz wiadomość poniżej, aby rozpocząć nowy czat.</p>
            </div>
          )}

          {currentMessages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] md:max-w-[80%] p-4 rounded-2xl shadow-sm ${
                msg.sender === 'user' 
                  ? 'bg-slate-800 text-white rounded-br-none' 
                  : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
              }`}>
                {msg.sender === 'bot' ? (
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    className="prose prose-sm md:prose-base prose-emerald max-w-none"
                    components={{
                      table: ({node, ...props}) => <div className="overflow-x-auto"><table className="border-collapse border border-slate-300 w-full my-4 text-sm" {...props} /></div>,
                      th: ({node, ...props}) => <th className="border border-slate-300 bg-slate-100 px-3 py-2 text-left font-bold text-slate-700" {...props} />,
                      td: ({node, ...props}) => <td className="border border-slate-300 px-3 py-2 text-slate-600" {...props} />,
                      strong: ({node, ...props}) => <strong className="font-black text-slate-800" {...props} />
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}
          
          {isLoading && (
            <div className="flex justify-start animate-in fade-in">
               <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-3 text-slate-500 font-medium text-sm">
                 <Loader2 className="animate-spin text-emerald-500" size={18} />
                 Analiza (Model: {selectedModel})...
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Pole wpisywania */}
        <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-200 flex gap-2">
          <div className="relative hidden md:block w-48">
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              disabled={isLoading}
              className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 pl-10 pr-4 rounded-xl font-bold text-sm outline-none focus:border-emerald-500 transition cursor-pointer shadow-sm"
            >
              <option value="universal">Uniwersalny</option>
              <option value="fast">Szybki</option>
              <option value="pro">Myślący (Pro)</option>
            </select>
            <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={18} />
          </div>

          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
            placeholder="Napisz do Grega..."
            className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition disabled:opacity-50 shadow-sm"
          />
          <button type="submit" disabled={isLoading} className="bg-emerald-500 text-white p-3 rounded-xl hover:bg-emerald-600 transition flex items-center justify-center disabled:opacity-50 shadow-sm">
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatBot;