import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';

function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Cześć! Jestem Bot Greg. Zapytaj mnie o jakiś czas gramatyczny!' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  // Automatyczne przewijanie czatu w dół
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom() }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    
    // Dodajemy wiadomość użytkownika do czatu
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInputValue('');

    try {
      // Wysyłamy zapytanie do naszego Flaska (/api/chat)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
      });
      
      const data = await res.json();
      
      // Dodajemy odpowiedź bota do czatu
      setMessages(prev => [...prev, { sender: 'bot', text: data.response }]);
      
    } catch (error) {
      console.error("Błąd połączenia z botem:", error);
      setMessages(prev => [...prev, { sender: 'bot', text: "Błąd serwera. Sprawdź połączenie." }]);
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 h-[600px] max-w-2xl mx-auto rounded-3xl border border-slate-200 shadow-lg overflow-hidden">
      
      {/* Nagłówek czatu */}
      <div className="bg-violet-600 text-white p-4 flex items-center gap-3 shadow-md z-10">
        <div className="bg-white p-2 rounded-full text-violet-600">
          <Bot size={24} />
        </div>
        <div>
          <h2 className="font-black text-xl">GregBot</h2>
          <p className="text-violet-200 text-xs font-bold uppercase tracking-widest">Wirtualny Asystent</p>
        </div>
      </div>

      {/* Okno z wiadomościami */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {/* TUTAJ WPROWADZONO ZMIANĘ: whitespace-pre-wrap i max-w-[85%] */}
            <div className={`whitespace-pre-wrap max-w-[85%] p-4 rounded-2xl ${
              msg.sender === 'user' 
                ? 'bg-violet-600 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Pole wpisywania */}
      <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Napisz do bota (np. present simple)..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition"
        />
        <button 
          type="submit" 
          className="bg-violet-600 text-white p-3 rounded-xl hover:bg-violet-700 transition flex items-center justify-center"
        >
          <Send size={24} />
        </button>
      </form>

    </div>
  );
}

export default ChatBot;