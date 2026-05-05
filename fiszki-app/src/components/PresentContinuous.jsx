import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock } from 'lucide-react';

function PresentContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Present Continuous</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas teraźniejszy ciągły. Uwaga: Dzieje się TU i TERAZ! Opisuje to, co znajduje się w trakcie trwania w tym konkretnym momencie.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-red-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> State Verbs (Wyjątki)
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa ("TO BE" + końcówka -ing)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + am/is/are + Czasownik-<span className="text-red-500">ing</span></p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I <strong>am working</strong> right now.</li>
                  <li>👉 She <strong>is watching</strong> TV.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + am not / isn't / aren't + Czasownik-<span className="text-red-500">ing</span></p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>am not working</strong>.</li>
                  <li>👉 They <strong>aren't playing</strong>.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Am/Is/Are + Osoba + Czasownik-<span className="text-red-500">ing</span>?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Are</strong> you <strong>working</strong>?</li>
                  <li>👉 <strong>Is</strong> she <strong>listening</strong>?</li>
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
            <Zap className="text-violet-500" size={32} /> Kiedy używamy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. W tej właśnie sekundzie</h3>
              <p className="text-slate-600 text-sm mb-3">Czynności, które dzieją się dokładnie w momencie mówienia.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>am reading</strong> an article right now.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Sytuacje tymczasowe</h3>
              <p className="text-slate-600 text-sm mb-3">Coś, co jest prawdziwe teraz, ale zaraz się skończy.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">She <strong>is living</strong> with her parents this month.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. Pewne plany na przyszłość!</h3>
              <p className="text-slate-600 text-sm mb-3">Zaskoczenie! Używamy go do przyszłości, gdy mamy ustalenia na 100%.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">We <strong>are flying</strong> to Paris tomorrow.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">4. Irytujące nawyki</h3>
              <p className="text-slate-600 text-sm mb-3">Zawsze ze słówkiem "always". Używamy do narzekania.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">He <strong>is always losing</strong> his keys!</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-red-50 border-2 border-red-200 p-8 rounded-3xl">
            <h2 className="text-3xl font-black text-red-800 mb-6 flex items-center gap-3">
              <AlertTriangle size={32} /> State Verbs (Zakaz -ING!)
            </h2>
            <p className="mb-6 text-red-900 text-lg">Niektóre czasowniki opisują <strong>stany, myśli i uczucia</strong>, a nie fizyczne akcje. Nie możemy ich używać w czasie Continuous, nawet jeśli te stany dzieją się dokładnie teraz!</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-red-300 shadow-sm">
                <h4 className="font-bold text-red-600 mb-3 text-xl">❌ ŹLE</h4>
                <p className="text-slate-500 line-through mb-2 font-mono">I am knowing him.</p>
                <p className="text-slate-500 line-through mb-2 font-mono">She is wanting a car.</p>
                <p className="text-slate-500 line-through font-mono">I am understanding you.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-emerald-300 shadow-sm">
                <h4 className="font-bold text-emerald-600 mb-3 text-xl">✅ DOBRZE (Użyj Simple)</h4>
                <p className="text-slate-800 font-bold mb-2 font-mono">I know him.</p>
                <p className="text-slate-800 font-bold mb-2 font-mono">She wants a car.</p>
                <p className="text-slate-800 font-bold font-mono">I understand you.</p>
              </div>
            </div>
            <p className="mt-6 text-sm text-red-800 bg-red-100 p-4 rounded-xl">Inne "zakazane" przykłady: <em>believe, love, hate, need, prefer, seem</em>.</p>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Typowe określenia czasu
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">now (teraz)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">right now (w tym momencie)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">at the moment (obecnie)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">currently (aktualnie)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">today (dzisiaj)</span>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PresentContinuous;