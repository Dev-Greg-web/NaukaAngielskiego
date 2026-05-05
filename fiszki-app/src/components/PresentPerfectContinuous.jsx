import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock } from 'lucide-react';

function PresentPerfectContinuous() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Present Perfect Continuous</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Mistrz trwania. Odpowiada na jedno kluczowe pytanie: "Jak długo już to robisz?".
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
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-orange-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> VS Simple & Wyjątki
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (HAVE/HAS BEEN + końcówka -ing)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + have/has been + Czasownik-ing</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I <strong>have been reading</strong> this book all day.</li>
                  <li>👉 She <strong>has been working</strong> here for 5 years.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + haven't/hasn't been + Czasownik-ing</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>haven't been sleeping</strong> well lately.</li>
                  <li>👉 He <strong>hasn't been feeling</strong> well today.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Have/Has + Osoba + been + Czasownik-ing?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Have</strong> you <strong>been crying</strong>?</li>
                  <li>👉 How long <strong>has</strong> she <strong>been living</strong> here?</li>
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
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Trwa od przeszłości aż do TERAZ</h3>
              <p className="text-slate-600 mb-4 text-sm">Czynność rozpoczęła się kiedyś, wciąż trwa i kładziemy ogromny nacisk na jej <strong>długość (proces)</strong>.</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium text-slate-800 mb-2">👉 I <strong>have been waiting</strong> for you for 2 hours!</p>
                <p className="font-medium text-slate-800">👉 She <strong>has been learning</strong> English since 2015.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm border-l-4 border-l-violet-500">
              <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Widoczne ślady i skutki</h3>
              <p className="text-slate-600 mb-4 text-sm">Czynność właśnie przed sekundą się skończyła, ale doskonale widać jej "fizyczne" skutki na ciele lub w otoczeniu.</p>
              <div className="bg-slate-50 p-4 rounded-xl">
                <p className="font-medium text-slate-800 mb-2">👉 Why are you sweating? <br/><span className="text-sm opacity-70">- I <strong>have been running</strong>.</span></p>
                <p className="font-medium text-slate-800">👉 Your clothes are dirty! <br/><span className="text-sm opacity-70">- I <strong>have been repairing</strong> my car.</span></p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          {/* PERFECT VS PERFECT CONTINUOUS */}
          <section className="bg-orange-50 border border-orange-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-black text-orange-900 text-3xl mb-6 text-center flex items-center justify-center gap-3">
              <AlertTriangle className="text-orange-600" /> Starcie: Wynik vs Proces
            </h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-bold text-slate-800 text-xl mb-2 border-b pb-2">Present Perfect Simple</h4>
                <p className="text-orange-600 font-bold mb-4">Skupia się na WYNIKU i ILOŚCI.</p>
                <p className="font-mono bg-slate-50 p-2 rounded text-slate-800 mb-2">"I have painted the living room."</p>
                <p className="text-sm text-slate-600 mb-4">➡️ Salon jest gotowy. Czysto i pięknie.</p>
                <hr className="my-3 border-slate-100"/>
                <p className="font-mono bg-slate-50 p-2 rounded text-slate-800 mb-2">"I have read 50 pages."</p>
                <p className="text-sm text-slate-600">➡️ Ważne ILE przeczytałem.</p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-t-violet-500">
                <h4 className="font-bold text-violet-800 text-xl mb-2 border-b pb-2">Present Perfect Continuous</h4>
                <p className="text-violet-600 font-bold mb-4">Skupia się na PROCESIE i CZASIE.</p>
                <p className="font-mono bg-violet-50 p-2 rounded text-violet-900 mb-2">"I have been painting the living room."</p>
                <p className="text-sm text-slate-600 mb-4">➡️ Jestem cały w farbie. Robota wciąż trwa.</p>
                <hr className="my-3 border-slate-100"/>
                <p className="font-mono bg-violet-50 p-2 rounded text-violet-900 mb-2">"I have been reading for 3 hours."</p>
                <p className="text-sm text-slate-600">➡️ Ważne JAK DŁUGO czytam.</p>
              </div>
            </div>
          </section>

          {/* STATE VERBS */}
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black text-red-400 mb-4 flex items-center gap-3">
              🛑 Ostrzeżenie: Czasowniki Stanu (State Verbs)
            </h2>
            <p className="mb-6 text-slate-300">Pamiętaj, że czasy <em>Continuous</em> (z -ing) <strong>nie znoszą czasowników opisujących stany, uczucia czy procesy myślowe</strong> (know, like, love, hate, want, understand).</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-800 p-5 rounded-xl border border-red-500/30">
                <h4 className="font-bold text-red-400 mb-3">❌ ŹLE (Zabronione)</h4>
                <p className="line-through text-slate-400 font-mono mb-2">I have been knowing him for 5 years.</p>
                <p className="line-through text-slate-400 font-mono">She has been wanting a car since May.</p>
              </div>
              <div className="bg-slate-800 p-5 rounded-xl border border-emerald-500/30">
                <h4 className="font-bold text-emerald-400 mb-3">✅ DOBRZE (Zmień na Simple)</h4>
                <p className="text-emerald-50 font-bold font-mono mb-2">I have known him for 5 years.</p>
                <p className="text-emerald-50 font-bold font-mono">She has wanted a car since May.</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PresentPerfectContinuous;