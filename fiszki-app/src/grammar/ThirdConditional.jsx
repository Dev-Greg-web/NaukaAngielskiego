import React from 'react';
import { ArrowRight, CheckCircle, TimerOff } from 'lucide-react';

const ThirdConditional = () => {
  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 animate-in fade-in zoom-in duration-300">
      
      <div className="bg-rose-100 p-8 rounded-3xl mb-8 border border-rose-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-rose-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B2 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-rose-900 mb-4">Trzeci Tryb Warunkowy</h1>
          <p className="text-lg text-rose-800 max-w-2xl font-medium">
            (Third Conditional). Używamy go, by wyrazić żal, krytykę lub spekulować o przeszłości. <b>Za późno na zmianę</b> – wydarzenie już miało miejsce, więc tylko analizujemy "co by było, gdyby".
          </p>
        </div>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200 mb-6">
        <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
          <CheckCircle className="text-rose-500" /> Złoty Wzór (Zaakceptuj przeszłość)
        </h2>
        
        <div className="flex flex-col md:flex-row items-center gap-4 bg-slate-900 text-white p-6 rounded-2xl mb-8 font-mono text-[15px] md:text-lg shadow-inner">
          <div className="text-blue-400">If + Past Perfect (had + V3)</div>
          <ArrowRight className="text-slate-500 hidden md:block" />
          <span className="text-slate-500 md:hidden">↓</span>
          <div className="text-rose-400">would have + V3</div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="font-black text-blue-700 uppercase tracking-wider text-sm mb-3">Warunek z Przeszłości</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">If you <span className="text-blue-600">had studied</span> harder,</p>
            <p className="text-sm text-slate-500">Gdybyś wcześniej w przeszłości się uczył (ale się nie uczyłeś)...</p>
          </div>
          <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
            <h3 className="font-black text-rose-700 uppercase tracking-wider text-sm mb-3">Wynik, który nie nadszedł</h3>
            <p className="text-xl font-bold text-slate-700 mb-2">you <span className="text-rose-600">would have passed</span>.</p>
            <p className="text-sm text-slate-500">...to byś zdał (ale już oblałeś).</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-50 text-amber-900 p-6 md:p-8 rounded-3xl shadow-sm border border-amber-200">
        <h3 className="font-bold mb-4 flex items-center gap-2"><TimerOff /> Zamiast Would, spróbuj Could lub Might</h3>
        <p className="text-amber-800 mb-4">
          Często zamiast pewności ("bym coś zrobił" = would), w trzecim trybie chcemy powiedzieć "być może bym coś zrobił". Używamy wtedy <b>might have</b> lub <b>could have</b>.
        </p>
        <div className="font-mono text-lg font-bold bg-white p-4 rounded-xl border border-amber-100">
          If I had left earlier, I <span className="text-rose-500">could have caught</span> the flight.
        </div>
        <p className="text-sm text-amber-700 mt-2">(Mógłbym zdążyć na lot - miałem taką możliwość, ale wyszedłem za późno).</p>
      </div>

    </div>
  );
};

export default ThirdConditional;