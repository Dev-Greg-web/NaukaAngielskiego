import React from 'react';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';

const FirstConditional = () => {
  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 animate-in fade-in zoom-in duration-300">
      
      <div className="bg-blue-100 p-8 rounded-3xl mb-8 border border-blue-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B1 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Pierwszy Tryb Warunkowy</h1>
          <p className="text-lg text-blue-800 max-w-2xl font-medium">
            (First Conditional). Służy do opisywania sytuacji, które są <b>bardzo prawdopodobne</b> w przyszłości, pod warunkiem spełnienia określonego warunku. Ostrzeżenia, plany, obietnice.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
        <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
          <CheckCircle className="text-blue-500" /> Złoty Wzór (Realna Przyszłość)
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl mb-8 font-mono text-lg md:text-xl shadow-inner">
          <div className="text-emerald-400">If + Present Simple</div>
          <ArrowRight className="text-slate-500 hidden md:block" />
          <span className="text-slate-500 md:hidden">↓</span>
          <div className="text-blue-400">Will + Czasownik (V1)</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <h3 className="font-black text-emerald-700 uppercase tracking-wider text-sm mb-3">Warunek (Co musi się stać)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">If it <span className="text-emerald-600">rains</span> tomorrow,</p>
            <p className="text-sm text-slate-500">Używamy czasu TERAŹNIEJSZEGO, mimo że myślimy o jutrze!</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-black text-blue-700 uppercase tracking-wider text-sm mb-3">Rezultat (Co zrobimy)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">we <span className="text-blue-600">will stay</span> at home.</p>
            <p className="text-sm text-slate-500">Używamy WILL, żeby określić przyszły wynik.</p>
          </div>
        </div>
      </div>

      <div className="bg-rose-50 p-6 md:p-8 rounded-3xl shadow-sm border border-rose-200">
        <h3 className="text-rose-600 font-black mb-4 flex items-center gap-2"><AlertTriangle /> Uwaga na UNLESS</h3>
        <p className="text-slate-700 mb-4">
          Zamiast <i>if not</i> (jeśli nie), Anglicy uwielbiają używać słowa <b>Unless</b> (chyba że). Ponieważ <i>Unless</i> jest już przeczeniem, reszta zdania musi być twierdząca!
        </p>
        <div className="font-mono text-lg font-bold text-slate-800 bg-white p-4 rounded-xl border border-rose-100">
          <span className="text-rose-500">Unless</span> you hurry up, you <span className="text-blue-500">will miss</span> the train.
        </div>
        <p className="text-sm text-slate-500 mt-2">(Chyba że się pospieszysz, przegapisz pociąg = Jeśli się NIE pospieszysz...)</p>
      </div>

    </div>
  );
};

export default FirstConditional;