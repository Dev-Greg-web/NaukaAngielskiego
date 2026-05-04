import React from 'react';
import { ArrowRight, CheckCircle, Quote } from 'lucide-react';

const SecondConditional = () => {
  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 animate-in fade-in zoom-in duration-300">
      
      <div className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-violet-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B1+ Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Drugi Tryb Warunkowy</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            (Second Conditional). Królostwo <b>gdybania</b>. Używamy go, by mówić o sytuacjach hipotetycznych, marzeniach lub rzeczach mało prawdopodobnych <b>w teraźniejszości lub przyszłości</b>.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
        <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
          <CheckCircle className="text-violet-500" /> Złoty Wzór (Gdybanie)
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl mb-8 font-mono text-lg md:text-xl shadow-inner">
          <div className="text-amber-400">If + Past Simple</div>
          <ArrowRight className="text-slate-500 hidden md:block" />
          <span className="text-slate-500 md:hidden">↓</span>
          <div className="text-violet-400">Would + Czasownik (V1)</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <h3 className="font-black text-amber-700 uppercase tracking-wider text-sm mb-3">Warunek (Gdyby to była prawda)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">If I <span className="text-amber-600">won</span> the lottery,</p>
            <p className="text-sm text-slate-500">Mimo że gdybamy o przyszłości/teraz, gramatyka cofa nas w przeszłość (won).</p>
          </div>
          <div className="bg-violet-50 p-6 rounded-2xl border border-violet-100">
            <h3 className="font-black text-violet-700 uppercase tracking-wider text-sm mb-3">Rezultat (Co bym zrobił)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">I <span className="text-violet-600">would buy</span> an island.</p>
            <p className="text-sm text-slate-500">Would (bym) + zwykły czasownik w pierwszej formie.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-800">
        <h3 className="text-violet-400 font-bold mb-4 flex items-center gap-2"><Quote /> Słynne: "Gdybym był tobą..."</h3>
        <p className="text-slate-300 mb-4">
          W drugim trybie warunkowym dla czasownika <i>to be</i> we wszystkich osobach (nawet dla I, he, she, it) używa się formy <b>were</b>, a nie <i>was</i>. Brzmi to bardziej elegancko i formalnie.
        </p>
        <div className="font-mono text-lg font-bold text-white bg-slate-800 p-4 rounded-xl border border-slate-700">
          If I <span className="text-violet-400">were</span> you, I <span className="text-amber-400">would apologize</span>.
        </div>
      </div>

    </div>
  );
};

export default SecondConditional;