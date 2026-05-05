import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Loader2, Settings } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function ChatBot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Cześć! Jestem Twoim prywatnym nauczycielem AI - Gładysz Greg. O jakim czasie lub strukturze chcesz dziś pogadać?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('universal'); // NOWOŚĆ: Wybrany model
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => { scrollToBottom() }, [messages, isLoading]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    
    setMessages(prev => [
      ...prev, 
      { sender: 'user', text: userMsg },
      { sender: 'bot', text: '' } 
    ]);
    setInputValue('');
    setIsLoading(true);

    try {
      // NOWOŚĆ: Przesyłamy też wybrany model do Flaska
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, modelType: selectedModel }) 
      });
      
      setIsLoading(false);
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break; 
        
        const chunk = decoder.decode(value, { stream: true });
        botReply += chunk;
        
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = botReply;
          return newMessages;
        });
      }
      
    } catch (error) {
      console.error("Błąd:", error);
      setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = "Błąd serwera. Sprawdź połączenie internetowe.";
          return newMessages;
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-slate-50 h-[600px] max-w-2xl mx-auto rounded-3xl border border-slate-200 shadow-lg overflow-hidden relative">
      
      {/* Nagłówek czatu */}
      <div className="bg-emerald-500 text-white p-4 flex justify-between items-center shadow-md z-10">
        <div className="flex items-center gap-3">
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
        {/* ZĘBATKA USTAWIEŃ */}
        <button className="p-2 hover:bg-emerald-600 rounded-full transition text-emerald-50" title="Ustawienia bota (Wkrótce)">
          <Settings size={24} />
        </button>
      </div>

      {/* Okno z wiadomościami */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl shadow-sm ${
              msg.sender === 'user' 
                ? 'bg-slate-800 text-white rounded-br-none' 
                : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
            }`}>
              {/* NOWOŚĆ: ReactMarkdown renderuje piękne tabele i pogrubienia */}
              {msg.sender === 'bot' ? (
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  className="prose prose-sm md:prose-base prose-emerald max-w-none"
                  components={{
                    table: ({node, ...props}) => <div className="overflow-x-auto"><table className="border-collapse border border-slate-300 w-full my-4 text-sm" {...props} /></div>,
                    th: ({node, ...props}) => <th className="border border-slate-300 bg-slate-100 px-3 py-2 text-left font-bold text-slate-700" {...props} />,
                    td: ({node, ...props}) => <td className="border border-slate-300 px-3 py-2 text-slate-600" {...props} />,
                    strong: ({node, ...props}) => <strong className="font-black text-slate-800" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-2 text-emerald-700" {...props} />,
                    p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />
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
             <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-3 text-slate-500 font-medium">
               <Loader2 className="animate-spin text-emerald-500" size={20} />
               GregBot analizuje (Model: {selectedModel})...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Pole wpisywania z przełącznikiem modeli */}
      <form onSubmit={sendMessage} className="p-4 bg-white border-t border-slate-100 flex gap-2">
        
        {/* SELEKTOR MODELI Z IKONĄ */}
        <div className="relative hidden md:block">
          <select 
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            disabled={isLoading}
            className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-3 pl-10 pr-4 rounded-xl font-bold text-sm outline-none focus:border-emerald-500 transition cursor-pointer h-full shadow-sm"
          >
            <option value="universal">Uniwersalny</option>
            <option value="fast">Szybki</option>
            <option value="pro">Myślący (Pro)</option>
          </select>
          <Bot className="absolute left-3 top-1/2 transform -translate-y-1/2 text-emerald-500" size={20} />
        </div>

        <input 
          type="text" 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          placeholder="Zapytaj mnie o gramatykę..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition disabled:opacity-50 shadow-sm"
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