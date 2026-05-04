import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

function PresentSimple() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Present Simple</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas teraźniejszy prosty. Podstawa angielskiej gramatyki. Odpowiada za opisywanie faktów, praw natury i naszych codziennych, żelaznych rutyn.
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
          <AlertTriangle size={18} /> Zasady "S" i Czas
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa zdania
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + Czasownik (+ <span className="text-red-500">s/es</span> w He/She/It)</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I / You / We / They <strong>play</strong> tennis.</li>
                  <li>👉 He / She / It <strong>plays</strong> tennis. <span className="text-sm opacity-70">(Zwróć uwagę na "s"!)</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + don't / doesn't + Czasownik (V1)</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I / You / We / They <strong>don't play</strong> tennis.</li>
                  <li>👉 He / She / It <strong>doesn't play</strong> tennis. <span className="text-sm opacity-70">(Słówko doesn't zabrało "s"!)</span></li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Do / Does + Osoba + Czasownik (V1)?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Do</strong> you <strong>play</strong> tennis?</li>
                  <li>👉 <strong>Does</strong> she <strong>play</strong> tennis?</li>
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
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. Nawyki i rutyny</h3>
              <p className="text-slate-600 text-sm mb-3">Rzeczy, które robimy regularnie (codziennie, co tydzień).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>drink</strong> coffee every morning.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Prawdy i fakty</h3>
              <p className="text-slate-600 text-sm mb-3">Zjawiska naturalne, fakty naukowe, rzeczy niezmienne.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">Water <strong>boils</strong> at 100 degrees.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. Harmonogramy</h3>
              <p className="text-slate-600 text-sm mb-3">Rozkłady jazdy pociągów, autobusów, plany lekcji.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">The train <strong>leaves</strong> at 8:00 PM.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">4. Stany stałe</h3>
              <p className="text-slate-600 text-sm mb-3">Gdzie mieszkamy, pracujemy, co lubimy.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">She <strong>lives</strong> in London.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-orange-50 p-8 rounded-3xl border border-orange-200 shadow-sm">
            <h2 className="text-2xl font-black text-orange-900 mb-6 flex items-center gap-2">
              ⚠️ Zasady pisowni dla He / She / It
            </h2>
            <p className="mb-6 text-orange-800">Dodawanie końcówki -s w trzeciej osobie liczby pojedynczej ma kilka wyjątków, jeśli chodzi o pisownię.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100">
                <h4 className="font-bold text-slate-800 border-b pb-2 mb-3">Zwykłe czasowniki</h4>
                <p className="text-sm text-slate-500 mb-3">Dodajemy samo <strong className="text-orange-600">-s</strong></p>
                <ul className="text-slate-700 font-mono text-sm space-y-1">
                  <li>work ➔ work<strong>s</strong></li>
                  <li>eat ➔ eat<strong>s</strong></li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100">
                <h4 className="font-bold text-slate-800 border-b pb-2 mb-3">Końcówki: -s, -sh, -ch, -x, -o</h4>
                <p className="text-sm text-slate-500 mb-3">Dodajemy <strong className="text-orange-600">-es</strong></p>
                <ul className="text-slate-700 font-mono text-sm space-y-1">
                  <li>watch ➔ watch<strong>es</strong></li>
                  <li>go ➔ go<strong>es</strong></li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border border-orange-100">
                <h4 className="font-bold text-slate-800 border-b pb-2 mb-3">Spółgłoska + Y</h4>
                <p className="text-sm text-slate-500 mb-3">Zmieniamy Y na <strong className="text-orange-600">-ies</strong></p>
                <ul className="text-slate-700 font-mono text-sm space-y-1">
                  <li>study ➔ stud<strong>ies</strong></li>
                  <li>cry ➔ cr<strong>ies</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Słówka Kluczowe i ich miejsce
            </h2>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">always</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">usually</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">often</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-violet-300">sometimes</span>
              <span className="bg-slate-800 border border-slate-600 px-4 py-2 rounded-xl font-bold shadow-sm text-rose-400">never</span>
              <span className="bg-slate-200 text-slate-900 px-4 py-2 rounded-xl font-bold shadow-sm">every day</span>
            </div>
            <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
              <h3 className="font-bold text-emerald-400 mb-2">Gdzie je wstawić?</h3>
              <p className="text-sm text-slate-300 mb-2">Krótkie przysłówki częstotliwości stawiamy <strong>PRZED</strong> głównym czasownikiem (np. <span className="font-mono text-emerald-300">I always wake up early</span>). Ale dłuższe wyrażenia (np. every day, on Mondays) wędrują na <strong>KONIEC zdania</strong>.</p>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PresentSimple;