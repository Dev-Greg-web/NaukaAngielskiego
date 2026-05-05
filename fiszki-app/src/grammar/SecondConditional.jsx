import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, ArrowRightLeft, Zap, Quote, Gem } from 'lucide-react';

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
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Drugi Tryb Warunkowy</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            (Second Conditional). Królestwo <b>gdybania o TERAŹNIEJSZOŚCI</b>. Używamy go, by mówić o sytuacjach hipotetycznych, marzeniach lub rzeczach, których w tym momencie nie mamy.
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

      {/* ZAKŁADKA 1: LOGIKA I TRIK (Z KARTKI) */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <section className="bg-gradient-to-br from-violet-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl border border-violet-700">
            <h2 className="text-3xl font-black text-amber-400 mb-6 flex items-center gap-3">
              <Gem size={32} /> Niestandardowy Gem: Skok w czasie
            </h2>
            <p className="mb-6 text-violet-100 text-lg">
              Jak najprościej to zrozumieć? <strong>Drugi tryb to skok o JEDEN czas do tyłu.</strong> 
            </p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
              <p className="font-bold text-xl mb-2 text-emerald-300">Polska myśl: "Gdybym TERAZ..."</p>
              <p className="text-violet-200">
                Myślisz o tym co jest teraz (teraźniejszość). Wiesz, że to nierealne (np. nie masz pieniędzy). Aby pokazać ten "dystans" od rzeczywistości w angielskim, <strong>cofasz się o jeden czas</strong> i używasz <strong>Past Simple</strong>.
              </p>
            </div>
            <div className="bg-rose-500/20 p-6 rounded-2xl border border-rose-500/50 flex items-start gap-4">
              <Zap className="text-rose-400 shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-black text-rose-300 text-xl mb-1">Złota zasada Polaka!</h3>
                <p className="text-rose-100 font-medium">Po słówku <strong>IF</strong> NIGDY nie wstawiamy słowa <strong>WOULD</strong>! (To najczęstszy błąd, bo w polskim mówimy "Jeśli bym..."). Po IF idzie czysty czas przeszły.</p>
              </div>
            </div>
          </section>

          <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm relative">
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Nierealny Warunek (TERAZ)</span>
                <p className="font-bold text-xl mb-2">Gdybym TERAZ zainwestował,</p>
                <p className="text-sm text-slate-500 mt-2">(Ale nie mam hajsu. Skok o 1 czas do tyłu: Past Simple).</p>
                <p className="mt-4 font-mono font-bold text-amber-700">If I invested,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-violet-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-violet-500">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Wyobrażony Rezultat</span>
                <p className="font-bold text-xl mb-2">to bym zarobił.</p>
                <p className="text-sm text-slate-500 mt-2">Używamy "would" (bym) + zwykły czasownik.</p>
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
              🏗️ Konstrukcja (If + Past Simple, Would)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Simple, Osoba + WOULD + V1</p>
                <ul className="space-y-3 text-emerald-900">
                  <li>👉 If I <strong>had</strong> a lot of money, I <strong>would buy</strong> a Ferrari. <br/><span className="text-sm opacity-70">(Gdybym miał TERAZ dużo pieniędzy, kupiłbym...)</span></li>
                  <li>👉 She <strong>would travel</strong> the world if she <strong>won</strong> the lottery.</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">If + didn't + V1, Osoba + WOULDN'T + V1</p>
                <ul className="space-y-3 text-red-900">
                  <li>👉 If I <strong>didn't have to</strong> work, I <strong>wouldn't wake up</strong> early.</li>
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
              <Quote className="text-amber-400" size={32} /> "Were" dla wszystkich osób
            </h2>
            <p className="mb-6 text-violet-200 text-lg">
              W normalnym czasie przeszłym mówimy "I was", "he was", "she was". Jednak w drugim trybie warunkowym, aby bardzo mocno podkreślić tę <strong>nierealność</strong>, gramatycznie poprawnie jest używać słowa <strong>"were" dla wszystkich osób</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20 border-t-4 border-t-emerald-400">
                <h3 className="font-bold text-emerald-400 mb-3 text-xl">Formalnie (Zalecane)</h3>
                <div className="font-mono text-white bg-black/30 px-4 py-2 rounded-lg">
                  <p>If I <strong>were</strong> you, I would apologize.</p>
                  <p className="mt-2">If she <strong>were</strong> the boss...</p>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-slate-400 mb-3 text-xl">Ulicznie (Potocznie)</h3>
                <div className="font-mono text-slate-400 bg-black/30 px-4 py-2 rounded-lg line-through decoration-slate-500">
                  <p>If I <strong>was</strong> you...</p>
                  <p className="mt-2">If she <strong>was</strong> the boss...</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h3 className="font-bold text-blue-400 mb-3 text-xl">Could i Might (Zamiast Would)</h3>
               <p className="text-slate-300 mb-4">Żeby pokazać szansę lub możliwość, zmieniamy absolutne "would" na "could" (mógłbym) lub "might" (być może bym).</p>
               <ul className="space-y-3 text-slate-200">
                 <li>👉 If we had a map, we <strong className="text-blue-400">could find</strong> the way.</li>
               </ul>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default SecondConditional;