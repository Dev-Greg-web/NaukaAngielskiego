import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock } from 'lucide-react';

function PastSimple() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Past Simple</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas przeszły prosty. Podróż w czasie do zamkniętych rozdziałów. Wydarzyło się, skończyło się. Kropka.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa & Czasowniki
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
          <AlertTriangle size={18} /> "DID" i Słówka Czasu
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (Dla wszystkich osób jednakowa!)
            </h2>
            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + Czasownik (II forma)</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 We <strong>visited</strong> Paris last year.</li>
                  <li>👉 I <strong>ate</strong> pizza yesterday.</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-) z "DIDN'T"</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + didn't + Czasownik (I forma - podstawowa!)</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 We <strong>didn't visit</strong> Paris.</li>
                  <li>👉 I <strong>didn't eat</strong> pizza.</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?) z "DID"</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Did + Osoba + Czasownik (I forma - podstawowa!)</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Did</strong> we <strong>visit</strong> Paris?</li>
                  <li>👉 <strong>Did</strong> you <strong>eat</strong> pizza?</li>
                </ul>
              </div>
            </div>
          </section>

          {/* REGULARNE VS NIEREGULARNE */}
          <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200">
            <h2 className="text-2xl font-black text-violet-900 mb-4">Czasowniki: Regularne i Nieregularne</h2>
            <p className="mb-6 text-violet-800">W czasie Past Simple musimy zmienić czasownik na jego formę przeszłą (tzw. drugą formę).</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-black text-emerald-600 mb-3 uppercase tracking-wider">Regularne (+ ed)</h4>
                <ul className="space-y-2 text-slate-700 font-mono mb-4">
                  <li>play ➔ <strong>played</strong></li>
                  <li>work ➔ <strong>worked</strong></li>
                </ul>
                <p className="text-sm text-slate-500 pt-3 border-t">Jeśli kończy się na -e, dodajemy tylko -d (like ➔ liked). Jeśli na spółgłoskę+y, zamieniamy na -ied (study ➔ studied).</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="font-black text-red-600 mb-3 uppercase tracking-wider">Nieregularne (Tabela)</h4>
                <ul className="space-y-2 text-slate-700 font-mono mb-4">
                  <li>go ➔ <strong>went</strong></li>
                  <li>see ➔ <strong>saw</strong></li>
                  <li>buy ➔ <strong>bought</strong></li>
                </ul>
                <p className="text-sm text-slate-500 pt-3 border-t">Niestety, tych trzeba nauczyć się na pamięć z II kolumny słynnej tabeli czasowników!</p>
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
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. Zakończone akcje</h3>
              <p className="text-slate-600 text-sm mb-3">Wydarzyło się i skończyło. Zamknięty rozdział. Często wiemy kiedy dokładnie.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>bought</strong> a new car yesterday.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Sekwencje wydarzeń</h3>
              <p className="text-slate-600 text-sm mb-3">Opowiadanie historii krok po kroku (zrobił to, potem to, a na końcu tamto).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">He <strong>woke</strong> up, <strong>took</strong> a shower and <strong>left</strong>.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500 md:col-span-2 text-center">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. Nawyki z przeszłości</h3>
              <p className="text-slate-600 text-sm mb-3">Rzeczy, które robiliśmy regularnie dawno temu, gdy byliśmy młodsi itp.</p>
              <p className="font-mono bg-slate-50 px-5 py-3 rounded-xl border border-slate-100 text-slate-800 inline-block">When I was a kid, I <strong>played</strong> football every day.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-orange-50 border-2 border-orange-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-black text-orange-900 text-2xl mb-4 flex items-center gap-3">
              <AlertTriangle className="text-orange-600"/> Złota zasada złodzieja "DID"
            </h3>
            <p className="text-orange-900 text-lg mb-4">Kiedy w zdaniu pojawia się operator <strong>DID</strong> lub <strong>DIDN'T</strong> (w pytaniach i przeczeniach), kradnie on całą "przeszłość" dla siebie.</p>
            <p className="bg-white p-4 rounded-xl text-slate-700 font-bold border border-orange-100 shadow-sm text-center">
              Główny czasownik wraca wtedy NATYCHMIAST do swojej podstawowej, słownikowej formy!
            </p>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Typowe określenia czasu (Time Expressions)
            </h2>
            <div className="flex flex-wrap gap-4">
              <span className="bg-slate-800 border border-slate-600 px-5 py-3 rounded-xl font-bold shadow-sm text-violet-200">yesterday (wczoraj)</span>
              <span className="bg-slate-800 border border-slate-600 px-5 py-3 rounded-xl font-bold shadow-sm text-violet-200">last night/week/year</span>
              <span className="bg-slate-800 border border-slate-600 px-5 py-3 rounded-xl font-bold shadow-sm text-violet-200">two days ago (2 dni temu)</span>
              <span className="bg-slate-800 border border-slate-600 px-5 py-3 rounded-xl font-bold shadow-sm text-violet-200">in 2010 (w 2010 r.)</span>
              <span className="bg-slate-800 border border-slate-600 px-5 py-3 rounded-xl font-bold shadow-sm text-violet-200">when I was young</span>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PastSimple;