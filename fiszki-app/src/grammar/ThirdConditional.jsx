import React, { useState } from 'react';
import { BookOpen, TimerOff, Gem, AlertTriangle, ArrowRightLeft, Zap } from 'lucide-react';

function ThirdConditional() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-rose-100 p-8 rounded-3xl mb-8 border border-rose-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-rose-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B2 Level</span>
            <span className="bg-amber-400 text-amber-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">Gładysz Greg Poleca</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-rose-900 mb-4">Trzeci Tryb Warunkowy</h1>
          <p className="text-lg text-rose-800 max-w-2xl font-medium">
            (Third Conditional). <b>"Gdybanie" o przeszłości (Żal)</b>. To jest ten tryb, którego nie mamy w języku polskim w tak dosłownej formie. Używamy go do analizowania przeszłości, której już nie zmienisz. To czyste teoretyzowanie o tym, co mogło się stać, ale się nie stało.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Gem size={18} /> Logika i Trik
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('comparison')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'comparison' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <ArrowRightLeft size={18} /> Szybkie Porównanie
        </button>
      </div>

      {/* ZAKŁADKA 1: LOGIKA I TRIK (TWOJE NOTATKI) */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <section className="bg-gradient-to-br from-rose-900 to-red-950 text-white p-8 rounded-3xl shadow-xl border border-rose-700">
            <h2 className="text-3xl font-black text-amber-400 mb-6 flex items-center gap-3">
              <Gem size={32} /> Niestandardowy Gem: Skok w czasie
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-black text-xl text-emerald-300 mb-2">Prosty trik na zapamiętanie:</h3>
                <p className="text-lg text-rose-100">
                  3rd Conditional to <strong>skok o DWA czasy do tyłu</strong>. <br/>
                  (Mówisz o przeszłości, więc używasz najstarszego czasu: <em>Past Perfect</em>).
                </p>
                <div className="mt-4 p-4 bg-black/30 rounded-xl">
                  <p className="text-amber-300 font-bold mb-1">🇵🇱 Polska myśl:</p>
                  <p className="text-xl">„Gdybym <strong>wtedy</strong> miał...”</p>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-2xl border border-black/30">
                <h3 className="font-black text-rose-300 text-xl mb-2">Niestandardowy tryb rozumowania:</h3>
                <p className="text-rose-100 font-medium text-lg">
                  Myślę (teraz), wracam myślami do przeszłości, analizuję co by było gdyby... 
                </p>
              </div>
            </div>
          </section>

          <section className="bg-rose-50 p-8 rounded-3xl border border-rose-200 shadow-sm relative">
            <h2 className="text-2xl font-black text-rose-900 mb-6">Jak to działa w praktyce?</h2>
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Type 3 - PRZESZŁOŚĆ</span>
                <p className="font-bold text-xl mb-2">Gdybym był WTEDY zainwestował...</p>
                <p className="text-sm text-slate-500 mt-2">(Ale tego nie zrobiłem). Skok o 2 czasy do tyłu: <strong>Past Perfect</strong>.</p>
                <p className="mt-4 font-mono font-bold text-blue-700">If I had invested,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-rose-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-rose-500">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Rezultat (Niezrealizowany)</span>
                <p className="font-bold text-xl mb-2">...to bym zarobił.</p>
                <p className="text-sm text-slate-500 mt-2">Używamy <strong>would have</strong> + III forma.</p>
                <p className="mt-4 font-mono font-bold text-rose-700">I would have made money.</p>
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
              🏗️ Konstrukcja: If + Past Perfect, ... would have + III forma
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl text-amber-900 mb-6 font-bold text-center border border-amber-200 text-sm shadow-sm">
              Pamiętaj! Po "IF" wciąż obowiązuje zakaz używania "WOULD"!
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Przykłady (+)</h3>
                <ul className="space-y-4 text-emerald-900">
                  <li className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-mono font-bold text-lg">If I had studied harder, I would have passed the exam.</p>
                    <p className="text-sm text-slate-500 mt-1">(Gdybym uczył się pilniej [wtedy, w przeszłości], zdałbym ten egzamin [ale nie uczyłem się i oblałem].)</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <ul className="space-y-4 text-red-900">
                  <li className="bg-white p-4 rounded-xl shadow-sm">
                    <p className="font-mono font-bold text-lg">If I hadn't drunk that coffee, I wouldn't have stayed awake.</p>
                    <p className="text-sm text-slate-500 mt-1">(Gdybym nie wypił tej kawy, nie siedziałbym obudzony całą noc.)</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 3: SZYBKIE PORÓWNANIE (TABELA Z NOTATEK) */}
      {activeTab === 'comparison' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8 border-b border-slate-700 pb-4 flex items-center gap-3">
              <ArrowRightLeft className="text-amber-400" size={32} /> Szybkie porównanie (Dla ułatwienia)
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b-2 border-slate-700 pb-4 pt-2 px-4 text-amber-400 font-bold uppercase tracking-wider text-sm">Cecha</th>
                    <th className="border-b-2 border-slate-700 pb-4 pt-2 px-4 text-violet-300 font-bold uppercase tracking-wider text-sm bg-white/5 rounded-tl-xl">2nd Conditional</th>
                    <th className="border-b-2 border-slate-700 pb-4 pt-2 px-4 text-rose-300 font-bold uppercase tracking-wider text-sm bg-white/10 rounded-tr-xl">3rd Conditional</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  <tr>
                    <td className="py-4 px-4 font-bold text-slate-300">Czas</td>
                    <td className="py-4 px-4 bg-white/5">Teraźniejszość / Przyszłość</td>
                    <td className="py-4 px-4 bg-white/10 font-bold">Przeszłość <span className="text-xs text-slate-400 font-normal ml-1">(już się wydarzyło)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-slate-300">Realność</td>
                    <td className="py-4 px-4 bg-white/5">Mało prawdopodobne "marzenie"</td>
                    <td className="py-4 px-4 bg-white/10 text-rose-200">Całkowicie niemożliwe <span className="text-xs text-slate-400 font-normal ml-1">(czas minął)</span></td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-bold text-slate-300">Polska myśl</td>
                    <td className="py-4 px-4 bg-white/5 font-mono text-emerald-300">„Gdybym <span className="underline decoration-emerald-500">teraz</span> miał...”</td>
                    <td className="py-4 px-4 bg-white/10 font-mono text-amber-300">„Gdybym <span className="underline decoration-amber-500">wtedy</span> miał...”</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h3 className="font-bold text-slate-200 mb-3 text-lg flex items-center gap-2"><TimerOff className="text-slate-400" size={20}/> Inwersja (Dla poziomu C1+)</h3>
               <p className="text-slate-400 mb-4 text-sm">W bardzo formalnym języku możemy wyrzucić "If" i wyciągnąć "Had" na sam początek zdania.</p>
               <div className="font-mono text-white bg-black/50 px-4 py-3 rounded-lg border border-slate-600">
                 <p className="text-slate-500 line-through text-sm mb-1">If I had known the truth...</p>
                 <p><strong>Had I known</strong> the truth, I wouldn't have trusted him.</p>
               </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default ThirdConditional;