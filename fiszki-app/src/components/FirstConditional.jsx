import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, Zap, Info } from 'lucide-react';

function FirstConditional() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-blue-100 p-8 rounded-3xl mb-8 border border-blue-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-blue-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B1 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-900 mb-4">Pierwszy Tryb Warunkowy</h1>
          <p className="text-lg text-blue-800 max-w-2xl font-medium">
            (First Conditional). Służy do opisywania sytuacji, które są <b>bardzo prawdopodobne</b> w przyszłości. Realne plany, obietnice i negocjacje.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa i Zasady
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-rose-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> Pułapki i "Unless"
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-blue-50 p-8 rounded-3xl border border-blue-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-blue-900 mb-4">🧠 Przewidywanie realnej przyszłości</h2>
            <p className="mb-6 text-blue-800">Mówi o sytuacjach w przyszłości, które są <strong>bardzo prawdopodobne</strong> do spełnienia. Warunek jest realny, a nie zmyślony.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-emerald-500">
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Warunek (Jeśli...)</span>
                <p className="font-bold text-xl mb-2">Jeśli będzie jutro padać,</p>
                <p className="text-sm text-slate-500 mt-2">Mimo że to przyszłość, po "IF" używamy Present Simple!</p>
                <p className="mt-4 font-mono font-bold text-emerald-700">If it rains tomorrow,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-blue-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Rezultat (Wtedy...)</span>
                <p className="font-bold text-xl mb-2">to zostanę w domu.</p>
                <p className="text-sm text-slate-500 mt-2">Druga część to już normalna przyszłość z WILL.</p>
                <p className="mt-4 font-mono font-bold text-blue-700">I will stay at home.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (If + Present Simple, Will)
            </h2>
            <div className="bg-red-50 p-4 rounded-xl text-red-900 mb-6 font-bold text-center border border-red-200 uppercase tracking-widest text-sm shadow-sm">
              Złota Zasada: Nigdy nie dajemy "WILL" bezpośrednio po słówku "IF"!
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Present Simple, Osoba + WILL + V1</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 If she <strong>studies</strong> hard, she <strong>will pass</strong> the exam.</li>
                  <li>👉 We <strong>will go</strong> to the park if it <strong>is</strong> sunny.</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Inne czasowniki modalne</h3>
                <p className="text-blue-900 mb-2">Zamiast "will" (na pewno), możemy użyć <strong>can, may, might, should</strong>, by zmienić siłę rezultatu.</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 If you finish early, you <strong>can go</strong> home. <span className="text-sm opacity-70">(możesz)</span></li>
                  <li>👉 If it rains, we <strong>might stay</strong> inside. <span className="text-sm opacity-70">(być może zostaniemy)</span></li>
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
            <Zap className="text-amber-500" size={32} /> Kiedy go używamy?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-blue-700 text-xl mb-2">1. Realne plany</h3>
              <p className="text-slate-600 text-sm mb-3">Przewidujemy logiczny ciąg zdarzeń w niedalekiej przyszłości.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If I <strong>have</strong> money, I <strong>will buy</strong> a new phone.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-blue-700 text-xl mb-2">2. Ostrzeżenia i Groźby</h3>
              <p className="text-slate-600 text-sm mb-3">Gdy chcemy powiedzieć, co złego się stanie, jeśli warunek nie zostanie spełniony.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>touch</strong> that wire, you <strong>will get</strong> a shock.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-blue-700 text-xl mb-2">3. Obietnice</h3>
              <p className="text-slate-600 text-sm mb-3">Deklaracje warunkowe (zrobię to dla ciebie, jeśli...).</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>help</strong> me, I <strong>will buy</strong> you dinner.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-blue-700 text-xl mb-2">4. Negocjacje</h3>
              <p className="text-slate-600 text-sm mb-3">Typowe dla negocjacji biznesowych lub kłótni z rodzeństwem.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>give</strong> me a discount, I <strong>will buy</strong> two.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-6 border-b border-slate-600 pb-4 flex items-center gap-3">
              <AlertTriangle className="text-rose-500" size={32} /> "Unless" i inni przyjaciele
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-slate-700 p-6 rounded-2xl border border-slate-600">
                <h3 className="font-bold text-rose-400 mb-3 text-xl">Unless (Chyba że / Jeśli nie)</h3>
                <p className="text-sm text-slate-300 mb-4">To słowo zawiera już w sobie przeczenie. Zastępuje "if ... not". Pamiętaj, żeby nie robić z nim podwójnego przeczenia (bo w angielskim to błąd)!</p>
                <div className="font-mono text-white bg-slate-900 px-4 py-3 rounded-lg">
                  <p><strong>Unless</strong> you hurry up, you will miss the bus.</p>
                </div>
                <p className="text-xs text-slate-400 mt-3 font-bold uppercase">= If you DON'T hurry up...</p>
              </div>
              <div className="bg-slate-700 p-6 rounded-2xl border border-slate-600">
                <h3 className="font-bold text-amber-400 mb-3 text-xl">As soon as / Before / After</h3>
                <p className="text-sm text-slate-300 mb-4">Te spójniki czasu działają dokładnie na tej samej zasadzie co "If". Zawsze opisują przyszłość za pomocą czasu teraźniejszego. Też nie lubią "will" zaraz po sobie.</p>
                <div className="font-mono text-white bg-slate-900 px-4 py-3 rounded-lg">
                  <p>I will call you <strong>as soon as</strong> I arrive.</p>
                </div>
                <p className="text-xs text-slate-400 mt-3">(Zadzwonię do ciebie, jak tylko dotrę).</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default FirstConditional;