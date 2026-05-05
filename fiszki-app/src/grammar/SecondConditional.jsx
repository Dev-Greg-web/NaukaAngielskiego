import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, ArrowRightLeft, Zap, Quote } from 'lucide-react';

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
            (Second Conditional). Królestwo <b>gdybania</b>. Używamy go, by mówić o sytuacjach hipotetycznych, marzeniach lub rzeczach wysoce nieprawdopodobnych w teraźniejszości.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa i Zasady
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-indigo-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Quote size={18} /> "Were" i Modalne
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-violet-900 mb-4">🧠 Wyobraźmy sobie, że...</h2>
            <p className="mb-6 text-violet-800">Zwróć uwagę: ten tryb <strong>nie opisuje przeszłości!</strong> Opisuje hipotetyczną teraźniejszość lub przyszłość. Używamy czasu przeszłego tylko po to, by pokazać ten "dystans" od rzeczywistości (że coś jest nierealne).</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Nierealny Warunek</span>
                <p className="font-bold text-xl mb-2">Gdybym miał milion dolarów,</p>
                <p className="text-sm text-slate-500 mt-2">(Ale nie mam! Tylko marzę). Używamy Past Simple.</p>
                <p className="mt-4 font-mono font-bold text-amber-700">If I had a million dollars,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-violet-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-violet-500">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Wyobrażony Rezultat</span>
                <p className="font-bold text-xl mb-2">to kupiłbym wyspę.</p>
                <p className="text-sm text-slate-500 mt-2">Używamy "would" (bym) + zwykły czasownik.</p>
                <p className="mt-4 font-mono font-bold text-violet-700">I would buy an island.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (If + Past Simple, Would)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Simple, Osoba + WOULD + V1</p>
                <ul className="space-y-3 text-emerald-900">
                  <li>👉 If I <strong>had</strong> more time, I <strong>would learn</strong> Spanish.</li>
                  <li>👉 She <strong>would buy</strong> a Ferrari if she <strong>was</strong> rich.</li>
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

      {/* ZAKŁADKA 2: UŻYCIE */}
      {activeTab === 'usage' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center gap-3">
            <Zap className="text-amber-500" size={32} /> Kiedy go używamy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. Marzenia</h3>
              <p className="text-slate-600 text-sm mb-3">Sytuacje bardzo mało prawdopodobne, mocno oderwane od życia.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If I <strong>won</strong> the lottery, I <strong>would travel</strong> the world.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Odwracanie rzeczywistości</h3>
              <p className="text-slate-600 text-sm mb-3">Gdybanie "co by było, gdyby było inaczej niż jest teraz".</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If she <strong>knew</strong> his number, she <strong>would call</strong> him. <span className="text-slate-400 text-xs">(Ale nie zna)</span></p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2 text-center shadow-sm">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. Udzielanie dobrych rad (If I were you)</h3>
              <p className="text-slate-600 text-sm mb-3">Klasyczny zwrot, gdy stawiamy się w czyjejś sytuacji.</p>
              <p className="font-mono bg-white inline-block px-5 py-3 rounded-xl border-2 border-violet-200 text-lg">If I <strong>were</strong> you, I <strong>would apologize</strong>.</p>
            </div>
          </div>
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
              W normalnym czasie przeszłym mówimy "I was", "he was", "she was". Jednak w drugim trybie warunkowym, aby podkreślić tę <strong>nierealność</strong>, gramatyka wyższa nakazuje używać słowa <strong>"were" dla wszystkich osób</strong>.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-emerald-400 mb-3 text-xl">Formalnie / Pisemnie</h3>
                <p className="text-sm text-slate-300 mb-4">To jest w 100% poprawne gramatycznie na każdym egzaminie.</p>
                <div className="font-mono text-white bg-black/30 px-4 py-2 rounded-lg">
                  <p>If I <strong>were</strong> richer...</p>
                  <p className="mt-2">If she <strong>were</strong> the boss...</p>
                </div>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                <h3 className="font-bold text-slate-400 mb-3 text-xl">Potocznie / Ulicznie</h3>
                <p className="text-sm text-slate-300 mb-4">Akceptowane w mowie potocznej, ale unikaj tego na testach.</p>
                <div className="font-mono text-slate-400 bg-black/30 px-4 py-2 rounded-lg line-through decoration-slate-500">
                  <p>If I <strong>was</strong> richer...</p>
                  <p className="mt-2">If she <strong>was</strong> the boss...</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h3 className="font-bold text-blue-400 mb-3 text-xl">Could i Might (Zamiast Would)</h3>
               <p className="text-slate-300 mb-4">Żeby pokazać szansę lub możliwość, zmieniamy absolutne "would" na "could" (mógłbym) lub "might" (być może bym).</p>
               <ul className="space-y-3 text-slate-200">
                 <li>👉 If we had a map, we <strong className="text-blue-400">could find</strong> the way. <span className="opacity-70 text-sm">(mielibyśmy fizyczną możliwość znalezienia)</span></li>
                 <li>👉 If you asked him nicely, he <strong className="text-blue-400">might agree</strong>. <span className="opacity-70 text-sm">(jest mała szansa, że się zgodzi)</span></li>
               </ul>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default SecondConditional;