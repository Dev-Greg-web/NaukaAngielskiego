import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock } from 'lucide-react';

function PastContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Past Continuous</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas przeszły ciągły. Specjalista od "tła wydarzeń" i bycia przerywanym. Pokazuje procesy, które działy się w przeszłości.
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
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-orange-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> WHEN vs WHILE
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (WAS/WERE + końcówka -ing)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + was/were + Czasownik-ing</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I/He/She/It <strong>was working</strong>.</li>
                  <li>👉 You/We/They <strong>were playing</strong>.</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + wasn't / weren't + Czasownik-ing</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 She <strong>wasn't sleeping</strong>.</li>
                  <li>👉 They <strong>weren't listening</strong>.</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Was/Were + Osoba + Czasownik-ing?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Was</strong> he <strong>watching</strong> TV?</li>
                  <li>👉 <strong>Were</strong> you <strong>driving</strong>?</li>
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
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. Przerwane akcje</h3>
              <p className="text-slate-600 text-sm mb-3">Długa czynność w trakcie (Past Cont.) zostaje nagle przerwana przez krótką akcję (Past Simple).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>was taking</strong> a shower when the phone rang.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Akcje równoległe</h3>
              <p className="text-slate-600 text-sm mb-3">Dwie długie akcje dziejące się w tym samym czasie. (Żadna nie przerywa drugiej).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>was reading</strong> while he <strong>was cooking</strong>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. W konkretnym momencie</h3>
              <p className="text-slate-600 text-sm mb-3">Skupiamy się na godzinie. "Co robiłeś wczoraj o 20:00?".</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">At 8 PM yesterday, I <strong>was watching</strong> a movie.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">4. Budowanie tła w opowiadaniach</h3>
              <p className="text-slate-600 text-sm mb-3">Dziennikarze piszący książki zaczynają od tego czasu, by opisać aurę.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">The sun <strong>was shining</strong> and the birds <strong>were singing</strong>.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-orange-50 border-2 border-orange-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-black text-orange-900 text-3xl mb-6 flex items-center gap-3">
              <AlertTriangle size={32} className="text-orange-600"/> Starcie: WHEN vs WHILE
            </h3>
            <p className="text-orange-900 mb-6 text-lg">W zdaniach, gdzie jedna czynność przerywa drugą, używamy specjalnych spójników. Kluczem jest to, co stoi tuż za nimi!</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <h4 className="font-bold text-slate-800 text-xl mb-3 border-b pb-2">WHEN (Kiedy)</h4>
                <p className="text-sm text-slate-600 mb-3">Za słowem WHEN wstawiamy <strong>krótką akcję w Past Simple</strong>.</p>
                <p className="font-mono bg-slate-100 px-3 py-2 rounded text-slate-800 font-bold mb-2">... when the phone rang.</p>
                <p className="text-sm text-slate-500 italic">I was sleeping WHEN the phone rang.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 border-t-4 border-t-violet-500">
                <h4 className="font-bold text-violet-800 text-xl mb-3 border-b pb-2">WHILE (Podczas gdy)</h4>
                <p className="text-sm text-slate-600 mb-3">Za słowem WHILE wstawiamy <strong>długą akcję w Past Continuous</strong>.</p>
                <p className="font-mono bg-violet-50 px-3 py-2 rounded text-violet-900 font-bold mb-2">While I was sleeping...</p>
                <p className="text-sm text-violet-600 italic">WHILE I was sleeping, the phone rang.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Słówka Kluczowe
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-white">while (podczas gdy)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-white">when (kiedy)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-white">as (jak tylko / podczas)</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-white">at 8 o'clock yesterday</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-white">all morning / evening</span>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PastContinuous;