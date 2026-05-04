import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, Zap, Info } from 'lucide-react';

function ZeroConditional() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-teal-100 p-8 rounded-3xl mb-8 border border-teal-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-teal-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">A2 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-teal-900 mb-4">Zerowy Tryb Warunkowy</h1>
          <p className="text-lg text-teal-800 max-w-2xl font-medium">
            (Zero Conditional). Fakty, prawa fizyki i niezmienne prawdy. Gwarancja 100%. Nie ma tu "gdybania", jest czysta logika.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Zrozumienie i Budowa
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-teal-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-teal-800 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Info size={18} /> Porady i Haczyki
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA I BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-teal-50 p-8 rounded-3xl border border-teal-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-teal-900 mb-4">🧠 100% Pewności</h2>
            <p className="mb-6 text-teal-800">Zerowy tryb warunkowy mówi o sytuacjach, w których warunek <strong>zawsze</strong> prowadzi do tego samego rezultatu.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-teal-500">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Warunek (Jeśli...)</span>
                <p className="font-bold text-xl mb-2">Jeśli podgrzewasz wodę,</p>
                <p className="text-sm text-slate-500 mt-2">Czas Present Simple.</p>
                <p className="mt-4 font-mono font-bold text-teal-700">If you heat water,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-teal-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-emerald-500">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Rezultat (Zawsze)</span>
                <p className="font-bold text-xl mb-2">to ona wrze.</p>
                <p className="text-sm text-slate-500 mt-2">Naturalny skutek, też Present Simple.</p>
                <p className="mt-4 font-mono font-bold text-emerald-700">it boils.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (Obie strony w teraźniejszości)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Present Simple, Present Simple</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 If it <strong>rains</strong>, the grass <strong>gets</strong> wet.</li>
                  <li>👉 If people <strong>eat</strong> too much, they <strong>get</strong> fat.</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Odwrócona kolejność</h3>
                <p className="text-blue-900 mb-2">Możesz zamienić części zdania miejscami. Wtedy po prostu <strong>usuwasz przecinek</strong>!</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 The grass <strong>gets</strong> wet if it <strong>rains</strong>.</li>
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
            <Zap className="text-amber-500" size={32} /> Zastosowanie w Praktyce
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-teal-700 text-xl mb-2">🌍 Prawa natury i nauka</h3>
              <p className="text-slate-600 text-sm mb-3">Zjawiska, których nie da się oszukać.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>mix</strong> red and blue, you <strong>get</strong> purple.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-teal-700 text-xl mb-2">⚙️ Działanie maszyn (Instrukcje)</h3>
              <p className="text-slate-600 text-sm mb-3">Opis jak coś działa.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>press</strong> this button, the machine <strong>stops</strong>.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2">
              <h3 className="font-bold text-teal-700 text-xl mb-2">🧘‍♂️ Osobiste nawyki i procedury</h3>
              <p className="text-slate-600 text-sm mb-3">Nasze własne, niezmienne zasady w określonych sytuacjach.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If I <strong>drink</strong> coffee late, I <strong>don't sleep</strong> well.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-teal-700 pb-4 flex items-center gap-3">
              <Info size={32} /> Ważne Porady (Tips & Tricks)
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <h3 className="font-bold text-amber-400 mb-2">1. IF = WHEN</h3>
                <p className="text-sm text-slate-300 mb-4">Tylko w zerowym trybie możesz śmiało podmienić "if" na "when" bez żadnej zmiany znaczenia zdania.</p>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded"><strong>When</strong> you mix red and blue, you get purple.</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <h3 className="font-bold text-rose-400 mb-2">2. Tryb Rozkazujący w rezultacie</h3>
                <p className="text-sm text-slate-300 mb-4">Rezultatem nie musi być zwykłe zdanie. Często używamy w tej części polecenia (rozkazu).</p>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded">If you see John, <strong>tell</strong> him to call me.</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default ZeroConditional;