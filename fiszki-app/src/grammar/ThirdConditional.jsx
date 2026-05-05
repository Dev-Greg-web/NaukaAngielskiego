import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, ArrowRightLeft, Zap, TimerOff, Gem } from 'lucide-react';

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
            (Third Conditional). Żal, wyrzuty sumienia i czyste teoretyzowanie o przeszłości. Opowiada o tym, jak potoczyłaby się historia, gdybyśmy podjęli inną decyzję.
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
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <TimerOff size={18} /> Inwersja (C1)
        </button>
      </div>

      {/* ZAKŁADKA 1: LOGIKA I TRIK */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          
          <section className="bg-gradient-to-br from-rose-900 to-red-950 text-white p-8 rounded-3xl shadow-xl border border-rose-700">
            <h2 className="text-3xl font-black text-amber-400 mb-6 flex items-center gap-3">
              <Gem size={32} /> Niestandardowy Gem: Skok o 2 czasy
            </h2>
            <p className="mb-6 text-rose-100 text-lg">
              Jak nie pomylić go z drugim trybem? <strong>Trzeci tryb to skok o DWA czasy do tyłu.</strong> 
            </p>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20 mb-6">
              <p className="font-bold text-xl mb-2 text-amber-300">Polska myśl: "Gdybym WTEDY..."</p>
              <p className="text-rose-200">
                Myślisz o tym co JUŻ SIĘ WYDARZYŁO w przeszłości (to jest czas -1). Aby pogdybać o tej przeszłości i pokazać, że to już całkowicie niemożliwe, musisz skoczyć jeszcze głębiej. <strong>Skaczesz o dwa czasy do tyłu</strong> i lądujesz w najstarszym czasie angielskim: <strong>Past Perfect</strong>.
              </p>
            </div>
          </section>

          <section className="bg-rose-50 p-8 rounded-3xl border border-rose-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-rose-900 mb-4">🧠 Za późno na zmianę!</h2>
            <p className="mb-6 text-rose-800">Wszystko wydarzyło się w przeszłości i jest definitywnie zamknięte. To czyste teoretyzowanie o tym, co mogło się stać, ale się nie stało.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niespełniony Warunek (WTEDY)</span>
                <p className="font-bold text-xl mb-2">Gdybym był WTEDY zainwestował,</p>
                <p className="text-sm text-slate-500 mt-2">Ale tego nie zrobiłem (szansa przepadła). Skok o 2 czasy: Past Perfect.</p>
                <p className="mt-4 font-mono font-bold text-blue-700">If I had invested,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-rose-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-rose-500">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niezrealizowany Wynik</span>
                <p className="font-bold text-xl mb-2">to bym zarobił.</p>
                <p className="text-sm text-slate-500 mt-2">Bym (wtedy): would have + III forma.</p>
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
              🏗️ Konstrukcja (Najdłuższa)
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl text-amber-900 mb-6 font-bold text-center border border-amber-200 text-sm shadow-sm">
              Trzeci tryb składa się niemal z samych form idealnych (Perfect) i imiesłowów (III forma). Zauważ: po "if" wciąż nie ma "would"!
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Perfect (had + V3), Osoba + WOULD HAVE + V3</p>
                <ul className="space-y-3 text-emerald-900">
                  <li>👉 If I <strong>had studied</strong> harder, I <strong>would have passed</strong> the exam. <br/><span className="text-sm opacity-70">(Gdybym uczył się pilniej [wtedy], zdałbym [wtedy]...)</span></li>
                  <li>👉 We <strong>would have won</strong> if he <strong>had scored</strong> that penalty.</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">If + hadn't + V3, Osoba + WOULDN'T HAVE + V3</p>
                <ul className="space-y-3 text-red-900">
                  <li>👉 If I <strong>hadn't drunk</strong> that coffee, I <strong>wouldn't have stayed</strong> awake all night.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-xl mb-4 border-b pb-2">Kiedy tego użyć na co dzień?</h3>
            <ul className="space-y-3 text-slate-600">
              <li><strong>Krytyka/Żal:</strong> If I had driven slower, I wouldn't have crashed. (Gdybym jechał wolniej...)</li>
              <li><strong>Ulga:</strong> If I had forgotten my passport, I would have missed the flight. (Gdybym zapomniał...)</li>
            </ul>
          </section>
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
          </section>
        </div>
      )}

    </div>
  );
}

export default ThirdConditional;