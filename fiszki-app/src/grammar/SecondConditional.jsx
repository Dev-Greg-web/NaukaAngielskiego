import React, { useState } from 'react';
import { BookOpen, Quote, Gem, AlertTriangle, ArrowRightLeft, Zap } from 'lucide-react';

function SecondConditional() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-violet-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B1+ Level</span>
            <span className="bg-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">Gładysz Greg Poleca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Drugi Tryb Warunkowy</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            (Second Conditional). <b>"Gdybanie" o teraźniejszości</b>. Używamy go, gdy marzymy, fantazjujemy lub narzekamy na sytuację, która teraz jest inna. To takie "co by było, gdyby...", ale wiemy, że to mało prawdopodobne lub niemożliwe.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Gem size={18} /> Logika i Trik
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-indigo-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Quote size={18} /> "Were" i Modalne
        </button>
      </div>

      {/* ZAKŁADKA 1: LOGIKA I TRIK (TWOJE NOTATKI) */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          {/* GŁADYSZ GREG INTRO */}
          <div className="bg-white border-l-8 border-violet-500 p-6 rounded-2xl shadow-sm">
            <p className="text-lg font-medium text-slate-700 italic">
              "Cześć! Jako Twój 'Gładysz Greg' - nauczyciel, który nie lubi lania wody i docenia konkret - przygotowałem zestaw, który nie pozwoli Ci zasnąć nad podręcznikiem."
            </p>
          </div>

          <section className="bg-gradient-to-br from-violet-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl border border-violet-700">
            <h2 className="text-3xl font-black text-amber-400 mb-6 flex items-center gap-3">
              <Gem size={32} /> Niestandardowy Gem: Skok w czasie
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-black text-xl text-emerald-300 mb-2">Prosty trik na zapamiętanie:</h3>
                <p className="text-lg text-violet-100">
                  2nd Conditional to <strong>skok o JEDEN czas do tyłu</strong>. <br/>
                  (Mówisz o TERAZ, więc używasz <em>Past Simple</em>).
                </p>
                <div className="mt-4 p-4 bg-black/30 rounded-xl">
                  <p className="text-amber-300 font-bold mb-1">🇵🇱 Polska myśl:</p>
                  <p className="text-xl">„Gdybym <strong>teraz</strong> miał...”</p>
                </div>
              </div>

              <div className="bg-rose-500/20 p-6 rounded-2xl border border-rose-500/50 flex items-start gap-4">
                <AlertTriangle className="text-rose-400 shrink-0 mt-1" size={28} />
                <div>
                  <h3 className="font-black text-rose-300 text-xl mb-1">Uwaga na pułapkę!</h3>
                  <p className="text-rose-100 font-medium text-lg uppercase tracking-wider">
                    Po "IF" nie ma "WOULD"!
                  </p>
                  <p className="text-rose-200 text-sm mt-2">W polskim mówimy "Gdybym bym...", ale w angielskim "would" ląduje dopiero w drugiej części zdania.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm relative">
            <h2 className="text-2xl font-black text-violet-900 mb-6">Jak to działa w praktyce?</h2>
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Type 2 - TERAZ</span>
                <p className="font-bold text-xl mb-2">Jeżeli bym TERAZ zainwestował...</p>
                <p className="text-sm text-slate-500 mt-2">(Ale nie inwestuję, bo nie mam). Skok o 1 czas do tyłu: <strong>Past Simple</strong>.</p>
                <p className="mt-4 font-mono font-bold text-amber-700">If I invested,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-violet-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-violet-500">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Rezultat</span>
                <p className="font-bold text-xl mb-2">...to bym zarobił.</p>
                <p className="text-sm text-slate-500 mt-2">Używamy <strong>would</strong> + bezokolicznik.</p>
                <p className="mt-4 font-mono font-bold text-violet-700">I would make money.</p>
              </div>
            </div>
          </section>

        </div>
      )}

      {/* ZAKŁADKA 2: BUDOWA */}
      {activeTab === 'usage' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Konstrukcja: If + Past Simple, ... would + bezokolicznik
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Przykłady (+)</h3>
                <ul className="space-y-4 text-emerald-900">
                  <li className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-mono font-bold text-lg">If I had a lot of money, I would buy a Ferrari.</p>
                    <p className="text-sm text-slate-500 mt-1">(Gdybym miał dużo pieniędzy [teraz ich nie mam], kupiłbym Ferrari.)</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <ul className="space-y-4 text-red-900">
                  <li className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-mono font-bold text-lg">If I didn't have to work, I wouldn't wake up early.</p>
                    <p className="text-sm text-slate-500 mt-1">(Gdybym nie musiał pracować [a muszę], nie wstawałbym wcześnie.)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-violet-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-violet-700 pb-4 flex items-center gap-3">
              <Quote className="text-amber-400" size={32} /> Ważna uwaga: "Were"
            </h2>
            <p className="mb-6 text-violet-200 text-lg">
              W 2nd Conditional, gdy używasz czasownika "to be" po "if", gramatycznie poprawnie jest używać <strong>were dla wszystkich osób</strong> (np. <em>If I were you...</em>), choć w mowie potocznej usłyszysz też <em>was</em>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 border-t-4 border-t-emerald-400">
                <h3 className="font-bold text-emerald-400 mb-3 text-xl">Formalnie (Poprawnie)</h3>
                <div className="font-mono text-white bg-black/30 px-4 py-2 rounded-lg">
                  <p>If I <strong>were</strong> you, I would apologize.</p>
                  <p className="mt-2">If she <strong>were</strong> the boss...</p>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-slate-400 mb-3 text-xl">Potocznie (Mowa)</h3>
                <div className="font-mono text-slate-400 bg-black/30 px-4 py-2 rounded-lg line-through decoration-slate-500">
                  <p>If I <strong>was</strong> you...</p>
                  <p className="mt-2">If she <strong>was</strong> the boss...</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default SecondConditional;