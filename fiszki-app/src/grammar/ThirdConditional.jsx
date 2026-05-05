import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, ArrowRightLeft, Zap, TimerOff } from 'lucide-react';

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
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-rose-900 mb-4">Trzeci Tryb Warunkowy</h1>
          <p className="text-lg text-rose-800 max-w-2xl font-medium">
            (Third Conditional). Żal, wyrzuty sumienia, krytyka i płacz nad rozlanym mlekiem. Opowiada o tym, jak zmienić przeszłość... czego oczywiście zrobić się nie da.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa i Zasady
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <TimerOff size={18} /> Inwersja (C1)
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-rose-50 p-8 rounded-3xl border border-rose-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-rose-900 mb-4">🧠 Za późno na zmianę!</h2>
            <p className="mb-6 text-rose-800">W trzecim trybie <strong>wszystko wydarzyło się w przeszłości i jest definitywnie zamknięte</strong>. Analizujemy tylko, "co by było, gdyby wtedy potoczyło się to inaczej". To tryb czystej fantazji o przeszłości.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niespełniony Warunek</span>
                <p className="font-bold text-xl mb-2">Gdybym wtedy się uczył,</p>
                <p className="text-sm text-slate-500 mt-2">Zaprzeszłość (Past Perfect). Ale się nie uczyłem.</p>
                <p className="mt-4 font-mono font-bold text-blue-700">If I had studied,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-rose-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-rose-500">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niezrealizowany Wynik</span>
                <p className="font-bold text-xl mb-2">to bym zdał.</p>
                <p className="text-sm text-slate-500 mt-2">(Would have + V3). Ale w rezultacie oblałem.</p>
                <p className="mt-4 font-mono font-bold text-rose-700">I would have passed.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (Najdłuższa konstrukcja)
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl text-amber-900 mb-6 font-bold text-center border border-amber-200 text-sm shadow-sm">
              Trzeci tryb składa się niemal z samych form idealnych (Perfect) i imiesłowów (III forma).
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Perfect (had + V3), WOULD HAVE + V3</p>
                <ul className="space-y-3 text-emerald-900">
                  <li>👉 If she <strong>had left</strong> earlier, she <strong>would have caught</strong> the train.</li>
                  <li>👉 We <strong>would have won</strong> if he <strong>had scored</strong> that penalty.</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">If + hadn't + V3, WOULDN'T HAVE + V3</p>
                <ul className="space-y-3 text-red-900">
                  <li>👉 If I <strong>hadn't drunk</strong> that coffee, I <strong>wouldn't have stayed</strong> awake all night.</li>
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
              <h3 className="font-bold text-rose-700 text-xl mb-2">1. Wyrażanie żalu (Regrets)</h3>
              <p className="text-slate-600 text-sm mb-3">Gdy żałujemy swoich decyzji z przeszłości.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If I <strong>had driven</strong> slower, I <strong>would not have crashed</strong> my car.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-rose-700 text-xl mb-2">2. Krytykowanie kogoś</h3>
              <p className="text-slate-600 text-sm mb-3">Wypominanie komuś jego błędów.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>had listened</strong> to me, we <strong>would not have gotten</strong> lost!</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2 text-center shadow-sm">
              <h3 className="font-bold text-rose-700 text-xl mb-2">3. Wdzięczność / Ulga</h3>
              <p className="text-slate-600 text-sm mb-3">Szczęście z powodu uniknięcia czegoś złego dzięki innemu zdarzeniu.</p>
              <p className="font-mono bg-white inline-block px-5 py-3 rounded-xl border border-rose-200">If I <strong>had forgotten</strong> my passport, I <strong>would have missed</strong> the flight.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3">
              <TimerOff className="text-amber-400" size={32} /> Inwersja (Dla poziomu C1/C2)
            </h2>
            <p className="mb-6 text-slate-300 text-lg">
              W bardzo formalnym, książkowym języku angielskim możemy całkowicie wyrzucić słówko <strong>IF</strong>. Zamiast niego wyciągamy słowo "Had" na sam początek zdania (jak w pytaniu, chociaż to nie jest pytanie). Brzmi to wybitnie literacko.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-600">
                <h3 className="font-bold text-rose-400 mb-3 text-xl">Standard (Poziom B2)</h3>
                <p className="text-sm text-slate-400 mb-4">Klasyczna forma z "If". Używana na co dzień.</p>
                <div className="font-mono text-slate-300 bg-black/30 px-4 py-3 rounded-lg">
                  <p><strong>If I had known</strong> the truth, I wouldn't have trusted him.</p>
                </div>
              </div>
              <div className="bg-slate-800 p-6 rounded-2xl border border-amber-500/30 relative overflow-hidden shadow-inner">
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-bl-xl uppercase">Pro level</div>
                <h3 className="font-bold text-amber-400 mb-3 text-xl">Inwersja (Poziom C1+)</h3>
                <p className="text-sm text-slate-400 mb-4">Wywal "If", zamień miejscami osobę i "Had".</p>
                <div className="font-mono text-white bg-black/50 px-4 py-3 rounded-lg border border-amber-500/50">
                  <p><strong>Had I known</strong> the truth, I wouldn't have trusted him.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-slate-800 p-6 rounded-2xl border border-slate-700">
               <h3 className="font-bold text-blue-400 mb-3 text-xl">Could have i Might have</h3>
               <p className="text-slate-300 mb-4">Często w trzecim trybie chcemy powiedzieć "być może bym coś zrobił". Zmieniamy wtedy <i>would have</i> na <strong>might have</strong> (być może by) lub <strong>could have</strong> (mógłbym, miałem fizyczną szansę).</p>
               <ul className="space-y-3 text-slate-200">
                 <li>👉 If I had saved money, I <strong className="text-blue-400">could have bought</strong> that house. <span className="opacity-70 text-sm">(miałbym na to środki)</span></li>
                 <li>👉 If we had invited him, he <strong className="text-blue-400">might have come</strong>. <span className="opacity-70 text-sm">(istniała szansa, że by przyszedł)</span></li>
               </ul>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default ThirdConditional;