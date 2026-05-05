import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Loader2, Volume2, Activity, ArrowLeft } from 'lucide-react';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function SpeechPractice({ username, onBack }) {
  const [isListening, setIsListening] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [conversation, setConversation] = useState([]);
  
  const recognitionRef = useRef(null);

  // Inicjalizacja Web Speech API do rozpoznawania mowy
  useEffect(() => {
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.lang = 'en-US'; // Słuchamy języka angielskiego!
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

    return () => {
      window.speechSynthesis.cancel(); // Wyłączamy bota, jeśli uczeń wyjdzie z modułu
    };
  }, []);

  // Kiedy uczeń skończy mówić i mikrofon się wyłączy, wysyłamy tekst do AI
  useEffect(() => {
    if (!isListening && transcript.trim().length > 0 && !isThinking) {
      handleSendToBot(transcript);
      setTranscript(''); // Czyścimy na poczet nowej wiadomości
    }
  }, [isListening]);

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      window.speechSynthesis.cancel(); // Przerywamy botowi, jeśli akurat gada
      setIsSpeaking(false);
      setTranscript('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (e) {
        console.error("Błąd mikrofonu:", e);
      }
    }
  };

  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;
    
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Bot mówi z angielskim akcentem
    utterance.rate = 0.95;    // Troszeczkę wolniej niż naturalnie, by było wyraźnie
    utterance.pitch = 1.0;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleSendToBot = async (userText) => {
    setIsThinking(true);
    const newChat = [...conversation, { role: 'user', text: userText }];
    setConversation(newChat);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userText, 
          modelType: 'fast', // Używamy szybkiego modelu, by konwersacja była płynna
          history: newChat.map(msg => ({ sender: msg.role, text: msg.text })).slice(-6), // Pamięta 3 ostatnie wymiany
          // MAGIA: Wysyłamy wymuszone ustawienia na ten tryb!
          settings: { language: 'en', tone: 'chill', length: 'short', memory: 3 }
        }) 
      });
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let botReply = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        botReply += decoder.decode(value, { stream: true });
      }

      setIsThinking(false);
      setConversation([...newChat, { role: 'bot', text: botReply }]);
      
      // Odczytaj na głos po odebraniu całej wiadomości!
      speakText(botReply);

    } catch (error) {
      console.error("Błąd AI:", error);
      setIsThinking(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-[85vh] max-w-4xl mx-auto pt-6 px-4">
      <div className="w-full mb-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition font-semibold">
          <ArrowLeft size={20} /> Wróć do menu
        </button>
      </div>

      <div className="bg-white rounded-3xl shadow-xl w-full border border-slate-100 flex flex-col overflow-hidden h-[700px]">
        
        {/* Nagłówek */}
        <div className="bg-orange-500 p-6 text-white text-center shadow-md z-10 relative">
          <div className="absolute top-6 right-6 opacity-30"><Volume2 size={48} /></div>
          <h2 className="text-3xl font-black mb-2 relative z-10">Voice Room</h2>
          <p className="text-orange-100 font-medium relative z-10">Mów po angielsku. Greg odpowie głosem.</p>
        </div>

        {/* Ekran konwersacji */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50 flex flex-col justify-end pb-12">
          {conversation.length === 0 && !isListening && !isThinking && (
            <div className="text-center text-slate-400 my-auto animate-in fade-in zoom-in">
              <Activity size={64} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg font-semibold">Kliknij mikrofon, aby zacząć rozmowę!</p>
              <p className="text-sm">Np. powiedz: "Hi Greg, how are you today?"</p>
            </div>
          )}

          {conversation.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                msg.role === 'user' 
                  ? 'bg-slate-800 text-white rounded-br-none shadow-sm' 
                  : 'bg-white border border-orange-100 text-slate-800 rounded-bl-none shadow-md'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}

          {/* Animacja myślenia bota */}
          {isThinking && (
            <div className="flex justify-start">
              <div className="bg-white border border-orange-100 p-4 rounded-2xl rounded-bl-none shadow-sm text-slate-500 flex items-center gap-2">
                <Loader2 className="animate-spin text-orange-500" size={18} /> Greg myśli...
              </div>
            </div>
          )}

          {/* Podgląd tego, co uczeń mówi w locie */}
          {isListening && transcript && (
            <div className="flex justify-end animate-in fade-in">
              <div className="max-w-[80%] p-4 rounded-2xl bg-orange-100 text-orange-800 rounded-br-none shadow-sm italic border border-orange-200">
                {transcript}
              </div>
            </div>
          )}
        </div>

        {/* Panel sterowania z mikrofonem */}
        <div className="bg-white border-t border-slate-200 p-8 flex justify-center items-center relative">
          
          {/* Fale dźwiękowe (animacja, gdy bot mówi) */}
          {isSpeaking && (
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-100 overflow-hidden">
              <div className="h-full bg-orange-500 w-1/3 animate-ping mx-auto rounded-full"></div>
            </div>
          )}

          <button 
            onClick={toggleListen}
            disabled={isThinking}
            className={`h-24 w-24 rounded-full flex items-center justify-center transition-all shadow-xl
              ${isThinking ? 'bg-slate-200 text-slate-400 cursor-not-allowed' : 
                isListening 
                  ? 'bg-red-500 text-white animate-pulse shadow-red-500/50 scale-110' 
                  : 'bg-orange-500 text-white hover:bg-orange-600 hover:scale-105 shadow-orange-500/30'
              }
            `}
          >
            {isListening ? <MicOff size={40} /> : <Mic size={40} />}
          </button>
        </div>

      </div>
    </div>
  );
}

export default SpeechPractice;