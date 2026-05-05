import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock, ArrowRightLeft } from 'lucide-react';

function PastPerfect() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Past Perfect</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas "Zaprzeszły". Używany, by pokazać, co w przeszłości wydarzyło się NAJPIERW. To podróż w czasie wewnątrz innej podróży w czasie.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa & Zrozumienie
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Clock size={18} /> Słówka Kluczowe
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm">
            <h2 className="text-2xl font-black text-violet-900 mb-4">🧠 Zrozumieć "Zaprzeszłość"</h2>
            <p className="mb-6 text-violet-800">Opowiadasz o wczorajszym włamaniu. Mówisz o dwóch rzeczach w przeszłości, ale <strong>jedna z nich zdarzyła się wcześniej, żeby wywołać skutek w tej drugiej</strong>.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-violet-500">
                <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Krok 1 (Zaprzeszłość)</span>
                <p className="font-bold text-lg mb-2">Złodziej ukradł telewizor.</p>
                <p className="text-sm text-slate-500">To wydarzyło się NAJPIERW.</p>
                <p className="mt-4 font-mono font-bold text-violet-700">PAST PERFECT</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-3xl text-violet-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Krok 2 (Przeszłość)</span>
                <p className="font-bold text-lg mb-2">Wróciłeś do domu.</p>
                <p className="text-sm text-slate-500">Wydarzyło się PÓŹNIEJ (np. o 18:00).</p>
                <p className="mt-4 font-mono font-bold text-blue-700">PAST SIMPLE</p>
              </div>
            </div>

            <div className="bg-violet-900 text-white p-6 rounded-2xl text-center shadow-inner">
              <p className="text-lg">
                "When I <strong>returned</strong> home, the thief <strong>had stolen</strong> my TV."
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (Banalnie prosta: HAD + V3)
            </h2>
            <div className="bg-emerald-50 p-4 rounded-xl text-emerald-900 mb-6 font-bold text-center border border-emerald-200">
              Dobra wiadomość! Dla KAŻDEJ osoby operatorem jest zawsze słówko <strong>HAD</strong>.
            </div>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + had + Czasownik (III forma)</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 She <strong>had finished</strong> work before she went shopping.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + hadn't + Czasownik (III forma)</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>hadn't seen</strong> him before that day.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Had + Osoba + Czasownik (III forma)?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Had</strong> you <strong>eaten</strong> before you arrived?</li>
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
            <Zap className="text-violet-500" size={32} /> Inne przypadki użycia
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Przyczyna i skutek w przeszłości</h3>
              <p className="text-slate-600 mb-4 text-sm">Tłumaczysz, dlaczego ktoś był w określonym stanie w przeszłości.</p>
              <div className="bg-white p-4 rounded-xl">
                <p className="font-medium text-slate-800">👉 He was very tired <em>(skutek)</em> because he <strong>had worked</strong> for 12 hours <em>(zaprzeszła przyczyna)</em>.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Mowa zależna (Reported Speech)</h3>
              <p className="text-slate-600 mb-4 text-sm">Kiedy relacjonujemy czyjeś słowa z przeszłości, cofamy czas o jeden do tyłu.</p>
              <div className="bg-white p-4 rounded-xl">
                <p className="font-medium text-slate-800">👉 Paul said: "I lost my keys." <br/>➡️ Paul said that he <strong>had lost</strong> his keys.</p>
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500 md:col-span-2 text-center">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2 inline-block">3. Trzeci tryb warunkowy (Gdybanie)</h3>
              <p className="text-slate-600 mb-4 text-sm max-w-lg mx-auto">Żałowanie czegoś, co stało się w przeszłości i nie da się tego odkręcić.</p>
              <div className="bg-white p-4 rounded-xl inline-block">
                <p className="font-medium text-slate-800">👉 If I <strong>had studied</strong> harder, I would have passed the exam.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3 text-violet-400">
              <Clock size={32} /> Słówka Kluczowe
            </h2>
            <p className="mb-6 text-slate-300 text-lg">
              Aby zaprzeszłość miała sens gramatyczny, w zdaniu muszą pojawić się "drogowskazy" czasu, które ustawiają wydarzenia w chronologicznej kolejności.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <span className="font-mono font-bold text-amber-400 text-lg">by the time</span>
                <p className="text-sm text-slate-400 mt-1">do czasu, gdy</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <span className="font-mono font-bold text-amber-400 text-lg">already</span>
                <p className="text-sm text-slate-400 mt-1">już (zrobiłem to ZANIM ty przyszedłeś)</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <span className="font-mono font-bold text-amber-400 text-lg">before / after</span>
                <p className="text-sm text-slate-400 mt-1">zanim / po tym jak</p>
              </div>
              <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
                <span className="font-mono font-bold text-amber-400 text-lg">just</span>
                <p className="text-sm text-slate-400 mt-1">właśnie (tuż przed jakimś momentem)</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PastPerfect;