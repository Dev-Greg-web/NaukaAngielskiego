import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';

function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Cześć! Jestem Twoim prywatnym nauczycielem AI - Gładysz Greg. O jakim czasie lub strukturze chcesz dziś pogadać?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false); // NOWOŚĆ: Stan ładowania
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom() }, [messages, isLoading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    
    // Dodajemy wiadomość użytkownika i blokujemy input
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      
      const data = await res.json();
      
      // Dodajemy odpowiedź AI
      setMessages(prev => [...prev, { sender: 'bot', text: data.response }]);
      
    } catch (error) {
      console.error("Błąd połączenia z botem:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: "Błąd serwera. Sprawdź połączenie internetowe." }]);
    } finally {
      setIsLoading(false); // Odblokowujemy input
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 h-[600px] max-w-2xl mx-auto rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
      
      {/* Nagłówek czatu */}
      <div className="bg-emerald-500 text-white p-4 flex items-center gap-3 shadow-md z-10">
        <div className="bg-white p-2 rounded-full text-emerald-600 shadow-sm">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="font-black text-xl flex items-center gap-2">
            GregBot <span className="bg-emerald-700 text-xs px-2 py-0.5 rounded-md uppercase tracking-widest">AI Powered</span>
          </h2>
          <p className="text-emerald-100 text-xs font-bold uppercase tracking-widest">Wirtualny Asystent Gładysz Greg</p>
        </div>
      </div>

      {/* Okno z wiadomościami */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`whitespace-pre-wrap max-w-[85%] p-4 rounded-2xl ${
              msg.sender === 'user' 
                ? 'bg-slate-800 text-white rounded-br-none shadow-md' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        
        {/* Wskaźnik ładowania, gdy AI "myśli" */}
        {isLoading && (
          <div className="flex justify-start animate-in fade-in">
             <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-3 text-slate-500 font-medium">
               <Loader2 className="animate-spin text-emerald-500" size={20} />
               GregBot analizuje i pisze odpowiedź...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Pole wpisywania */}
      <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          placeholder="Zapytaj mnie o gramatykę, słówka, albo poproś o test..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition disabled:opacity-50"
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="bg-emerald-500 text-white p-3 rounded-xl hover:bg-emerald-600 transition flex items-center justify-center disabled:opacity-50 shadow-sm"
        >
          <Send size={24} />
        </button>
      </form>

    </div>
  );
}

export default ChatBot;