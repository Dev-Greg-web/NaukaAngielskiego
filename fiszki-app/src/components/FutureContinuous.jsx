import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, Zap, Info } from 'lucide-react';

function FutureContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Future Continuous</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Wyobraź sobie przyszłość... "Jutro o tej porze będę leżeć na plaży". Przenosimy się w czasie do konkretnego punktu w trakcie trwania akcji.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Info size={18} /> Słówka Kluczowe
        </button>
      </div>

      {/* ZAKŁADKA 1: KIEDY UŻYWAMY */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-black text-violet-900 mb-6 flex items-center gap-3">
              <Zap className="text-amber-500" size={32} /> 3 Główne Zastosowania
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-500">
                <h3 className="font-bold text-violet-800 text-xl mb-3">1. Akcja w trakcie trwania o konkretnej porze w przyszłości</h3>
                <p className="text-slate-600 mb-4">Nie mówimy o początku akcji, ani o jej końcu. Zamykamy oczy, przenosimy się np. na godzinę 20:00 w piątek i mówimy, w trakcie jakiej czynności będziemy.</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-bold text-slate-800">👉 This time tomorrow, I <strong>will be flying</strong> to London.</p>
                  <p className="font-bold text-slate-800 mt-2">👉 Don't call me at 8 PM. I <strong>will be watching</strong> the match.</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-500">
                <h3 className="font-bold text-violet-800 text-xl mb-3">2. Rutyna i przewidywalne sytuacje</h3>
                <p className="text-slate-600 mb-4">Czynności, które wydarzą się w przyszłości, ponieważ są częścią naszego normalnego grafiku (nie musimy ich specjalnie planować).</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-bold text-slate-800">👉 I <strong>will be seeing</strong> John tomorrow at work anyway, so I can give him your message.</p>
                  <p className="text-sm text-slate-500 italic mt-1">(Nie umawiałem się z nim specjalnie, po prostu i tak będę go widział w biurze).</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-500">
                <h3 className="font-bold text-violet-800 text-xl mb-3">3. Uprzejme zapytania o plany</h3>
                <p className="text-slate-600 mb-4">Gdy chcemy o coś poprosić, ale najpierw "sondujemy", czy nie zrobimy komuś problemu, pytając o jego naturalne plany.</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-bold text-slate-800">👉 <strong>Will</strong> you <strong>be going</strong> to the supermarket later? Could you buy me some milk?</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 2: BUDOWA */}
      {activeTab === 'usage' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (WILL BE + czasownik z końcówką -ing)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + will be + Czasownik z -ing</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 We <strong>will be working</strong> on this project all next week.</li>
                  <li>👉 At 9 AM, she <strong>will be taking</strong> her exam.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + won't be + Czasownik z -ing</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>won't be coming</strong> to the party tonight.</li>
                  <li>👉 They <strong>won't be sleeping</strong> when you arrive.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Will + Osoba + be + Czasownik z -ing?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Will</strong> you <strong>be using</strong> the car tomorrow?</li>
                  <li>👉 What <strong>will</strong> you <strong>be doing</strong> at 5 PM?</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 3: SŁÓWKA KLUCZOWE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3">
              <Clock className="text-amber-400" size={32} /> Wskaźniki czasu (Time expressions)
            </h2>
            <p className="mb-6 text-slate-300 text-lg">
              Aby użyć tego czasu, musisz dokładnie zdefiniować moment w przyszłości, w którym "zajrzysz" do danej osoby.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-600">
                <h3 className="font-bold text-emerald-400 mb-2">Dokładna godzina</h3>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded"><strong>at 8 PM tomorrow</strong></p>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded mt-2"><strong>at midnight</strong></p>
              </div>
              <div className="bg-slate-800 p-5 rounded-2xl border border-slate-600">
                <h3 className="font-bold text-amber-400 mb-2">Ciągłość</h3>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded"><strong>all day on Sunday</strong></p>
                <p className="font-mono text-white bg-black/30 px-3 py-2 rounded mt-2"><strong>this time next week</strong></p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default FutureContinuous;