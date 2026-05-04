import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock, ArrowRightLeft } from 'lucide-react';

function FuturePerfectContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-violet-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">C1 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Future Perfect Continuous</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Przyszły uprzedni ciągły. Służy do "mierzenia" czasu z przyszłej perspektywy. Używasz go, żeby dumnie powiedzieć: "Do tamtego momentu będę to robić już od X lat!".
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
          <AlertTriangle size={18} /> Haczyki i Słówka
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (WILL HAVE BEEN + Czasownik z -ING)
            </h2>
            <div className="bg-slate-100 p-4 rounded-xl text-slate-700 mb-6 font-bold text-center border border-slate-200 shadow-inner">
              To jedna z najdłuższych konstrukcji w języku angielskim. Składa się aż z 4 elementów!
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + will have been + Czasownik-ing</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 By 5 PM, she <strong>will have been working</strong> for 8 hours.</li>
                  <li>👉 In 2030, they <strong>will have been building</strong> this city for a decade.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + won't have been + Czasownik-ing</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>won't have been studying</strong> for long when you arrive.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Will + Osoba + have been + Czasownik-ing?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Will</strong> you <strong>have been waiting</strong> long by the time I get there?</li>
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
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Podsumowanie trwania akcji w przyszłości</h3>
              <p className="text-slate-600 mb-4 text-sm">Wyobrażamy sobie punkt w przyszłości i stamtąd "odliczamy" wstecz, jak długo dana akcja będzie w tamtej chwili już trwała.</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium text-slate-800 mb-2">👉 By next year, I <strong>will have been learning</strong> English for 5 years.</p>
                <p className="font-medium text-slate-800">👉 In December, we <strong>will have been living</strong> here for 10 years.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Przyczyna przyszłego rezultatu</h3>
              <p className="text-slate-600 mb-4 text-sm">Wykorzystujemy go by wyjaśnić powód, dla którego w przyszłości nastąpi jakiś skutek (np. zmęczenie ciągłą pracą).</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium text-slate-800">👉 He will be tired when he arrives because he <strong>will have been driving</strong> all night.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <section className="bg-orange-50 p-8 rounded-3xl border border-orange-200 shadow-sm">
            <h2 className="text-2xl font-black text-orange-900 mb-4 flex items-center gap-3">
              <AlertTriangle className="text-orange-600" size={32} /> Haczyk: Czasowniki Stanu
            </h2>
            <p className="text-orange-800 mb-6 text-lg">
              Pamiętaj, że tzw. <strong>czasowniki statyczne</strong> (opisujące stany, uczucia, posiadanie) np. <em>know, love, be, have (posiadać)</em> nie występują w czasach Continuous z końcówką -ing. Gdy chcesz podsumować ile czasu coś trwa dla takiego czasownika, musisz cofnąć się do zwykłego czasu <strong>Future Perfect</strong>.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-red-300 shadow-sm">
                <p className="font-bold text-red-600 mb-2">❌ ŹLE (Zabronione)</p>
                <p className="text-slate-500 line-through font-mono">By next year, I will have been knowing him for 10 years.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-emerald-300 shadow-sm">
                <p className="font-bold text-emerald-600 mb-2">✅ DOBRZE (Future Perfect)</p>
                <p className="text-slate-800 font-bold font-mono">By next year, I will have known him for 10 years.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Kluczowe połączenie: BY + FOR
            </h2>
            <p className="mb-6 text-slate-300 text-lg">Ponieważ jest to czas Future Perfect (używamy BY - do jakiegoś momentu) oraz Continuous (używamy FOR - przez jakiś czas), najczęściej w jednym zdaniu lądują oba te słówka!</p>
            
            <div className="bg-slate-800 p-6 rounded-2xl flex flex-wrap gap-4 items-center justify-center border border-slate-700 shadow-inner">
              <span className="bg-white text-slate-800 px-5 py-3 rounded-xl font-black text-xl shadow-sm text-center">by next month</span>
              <span className="text-slate-500 font-black text-2xl">+</span>
              <span className="bg-white text-slate-800 px-5 py-3 rounded-xl font-black text-xl shadow-sm text-center">for 5 years</span>
              <span className="text-slate-500 font-black text-2xl">=</span>
              <span className="bg-violet-600 text-white px-6 py-4 rounded-xl font-black text-xl shadow-lg text-center w-full mt-4">
                By next month, I will have been working here for 5 years.
              </span>
            </div>
          </section>

        </div>
      )}

    </div>
  );
}

export default FuturePerfectContinuous;