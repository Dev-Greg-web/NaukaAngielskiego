import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock, ArrowRightLeft } from 'lucide-react';

function PastPerfectContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-blue-100 p-8 rounded-3xl mb-8 border border-blue-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-blue-800 mb-4">Past Perfect Continuous</h1>
          <p className="text-lg text-blue-700 max-w-2xl font-medium">
            Zaprzeszły ciągły. Skupiamy się na PROCESIE z przeszłości, który trwał (i miał znaczenie), ZANIM wydarzyło się coś innego.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> VS Past Cont. & Słówka
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (HAD BEEN + Czasownik z -ING)
            </h2>
            <div className="bg-orange-50 p-4 rounded-xl text-orange-900 mb-6 font-bold text-center border border-orange-200">
              Ułatwienie: Zawsze używamy dwuczłonowego operatora <strong>"had been"</strong>, niezależnie od tego, czy mówimy o "I", "You", czy "She / He / It"!
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + had been + Czasownik-ing</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I <strong>had been working</strong> all day, so I was exhausted.</li>
                  <li>👉 They <strong>had been talking</strong> for over an hour before the boss arrived.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + hadn't been + Czasownik-ing</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 She <strong>hadn't been sleeping</strong> well before the exam.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Had + Osoba + been + Czasownik-ing?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 How long <strong>had</strong> they <strong>been dating</strong> before they got engaged?</li>
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
            <Zap className="text-blue-500" size={32} /> Kiedy go używamy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm border-t-4 border-t-blue-500">
              <h3 className="font-black text-blue-800 text-xl mb-3 border-b pb-2">1. Czas trwania przed innym wydarzeniem</h3>
              <p className="text-slate-600 mb-4 text-sm">Chcemy podkreślić, jak długo jakaś czynność trwała, zanim nastąpiła kolejna czynność (zwykle wyrażona w Past Simple).</p>
              <div className="bg-white p-4 rounded-xl">
                <p className="font-medium text-slate-800 mb-2">👉 I <strong>had been waiting</strong> for 2 hours when the train finally arrived.</p>
                <p className="font-medium text-slate-800">👉 Before she moved to London, she <strong>had been living</strong> in Paris for a year.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm border-t-4 border-t-blue-500">
              <h3 className="font-black text-blue-800 text-xl mb-3 border-b pb-2">2. Widoczne skutki "zmęczenia materiału"</h3>
              <p className="text-slate-600 mb-4 text-sm">Czynność trwała przez jakiś czas i właśnie się zakończyła, a jej widoczny efekt (np. bycie zmęczonym, mokrym) był w przeszłości oczywisty.</p>
              <div className="bg-white p-4 rounded-xl">
                <p className="font-medium text-slate-800 mb-2">👉 He was out of breath because he <strong>had been running</strong>.</p>
                <p className="font-medium text-slate-800">👉 The ground was wet. It <strong>had been raining</strong> all night.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8 border-b border-blue-700 pb-4 text-center">Past Continuous vs Past Perfect Continuous?</h2>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white/10 p-6 rounded-2xl flex-1">
                <h3 className="text-xl font-bold text-blue-300 mb-2 uppercase tracking-wider">Past Continuous</h3>
                <p className="font-bold text-xl mb-4 text-emerald-400">"I was watching TV when he called."</p>
                <p className="text-blue-100 text-sm">Opisuje to, co działo się w <strong>dokładnym momencie</strong>, gdy zadzwonił. Akcja została nagle przerwana przez telefon.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl flex-1 border border-blue-400/50 shadow-inner">
                <h3 className="text-xl font-bold text-blue-300 mb-2 uppercase tracking-wider">Past Perfect Continuous</h3>
                <p className="font-bold text-xl mb-4 text-emerald-400">"I had been watching TV for 3 hours when he called."</p>
                <p className="text-blue-100 text-sm">Skupia się na <strong>czasie trwania</strong>. Oglądaliśmy TV już od 3 godzin ZANIM w ogóle zadzwonił.</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-slate-800">
              <Clock className="text-blue-500" size={28} /> Typowe określenia czasu
            </h2>
            <p className="mb-6 text-slate-600 text-lg">Skoro skupiamy się na procesie, w 90% przypadków odpowiadamy na pytanie "Jak długo?".</p>
            <div className="flex flex-wrap gap-4">
              <span className="bg-white border border-slate-300 px-5 py-3 rounded-xl font-bold shadow-sm text-blue-800">for (przez) np. for 2 hours</span>
              <span className="bg-white border border-slate-300 px-5 py-3 rounded-xl font-bold shadow-sm text-blue-800">since (od) np. since morning</span>
              <span className="bg-white border border-slate-300 px-5 py-3 rounded-xl font-bold shadow-sm text-blue-800">all day / all night</span>
              <span className="bg-white border border-slate-300 px-5 py-3 rounded-xl font-bold shadow-sm text-blue-800">before (zanim)</span>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PastPerfectContinuous;