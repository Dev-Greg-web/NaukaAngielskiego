import React from 'react';
import { ArrowRight, CheckCircle, Info } from 'lucide-react';

const ZeroConditional = () => {
  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 animate-in fade-in zoom-in duration-300">
      
      <div className="bg-teal-100 p-8 rounded-3xl mb-8 border border-teal-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-teal-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">A2 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-teal-900 mb-4">Zerowy Tryb Warunkowy</h1>
          <p className="text-lg text-teal-800 max-w-2xl font-medium">
            (Zero Conditional). Używamy go do opisywania faktów, praw natury, nawyków lub instrukcji. Mówimy o sytuacjach, które są <b>zawsze w 100% prawdziwe</b>.
          </p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
        <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
          <CheckCircle className="text-teal-500" /> Złoty Wzór (100% Prawdy)
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl mb-8 font-mono text-lg md:text-xl shadow-inner">
          <div className="text-teal-400">If + Present Simple</div>
          <ArrowRight className="text-slate-500 hidden md:block" />
          <span className="text-slate-500 md:hidden">↓</span>
          <div className="text-blue-400">Present Simple</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
            <h3 className="font-black text-teal-700 uppercase tracking-wider text-sm mb-3">Warunek (Jeśli)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">If you <span className="text-teal-600">heat</span> ice,</p>
            <p className="text-sm text-slate-500">Jeśli podgrzewasz lód (czas teraźniejszy)...</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-black text-blue-700 uppercase tracking-wider text-sm mb-3">Rezultat (Zawsze)</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">it <span className="text-blue-600">melts</span>.</p>
            <p className="text-sm text-slate-500">to on topnieje (też czas teraźniejszy!).</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-800">
        <h3 className="text-teal-400 font-bold mb-4 flex items-center gap-2"><Info /> Porada Pro</h3>
        <p className="text-slate-300">
          W zerowym trybie warunkowym słówko <b>IF</b> (jeśli) możesz śmiało zamienić na <b>WHEN</b> (kiedy) i zdanie nie straci na znaczeniu.<br/><br/>
          <i><b>When</b> you mix blue and yellow, you get green.</i>
        </p>
      </div>

    </div>
  );
};

export default ZeroConditional;