import React, { useState } from 'react';
import { BookOpen, Zap, AlertTriangle, Clock } from 'lucide-react';

function PresentPerfect() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Present Perfect</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas-pomost. Łączy to, co było, z tym, co jest teraz. Król angielskiej gramatyki.
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
          <AlertTriangle size={18} /> VS Past Simple & Słówka
        </button>
      </div>

      {/* ZAKŁADKA 1: BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa zdania (HAVE/HAS + V3)
            </h2>
            <div className="bg-slate-100 p-4 rounded-xl mb-6 shadow-inner text-slate-700">
              <p>Do zbudowania tego czasu potrzebujemy operatora <strong>HAVE / HAS</strong> oraz czasownika w <strong>TRZECIEJ FORMIE (Past Participle)</strong> np. gone, seen, done.</p>
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + have / has + Czasownik (III forma / -ed)</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 I / You / We / They <strong>have finished</strong>.</li>
                  <li>👉 He / She / It <strong>has finished</strong>.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + haven't / hasn't + Czasownik (III forma / -ed)</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 I <strong>haven't seen</strong> this movie.</li>
                  <li>👉 She <strong>hasn't seen</strong> this movie.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Have / Has + Osoba + Czasownik (III forma / -ed)</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Have</strong> you <strong>seen</strong> this movie?</li>
                  <li>👉 <strong>Has</strong> he <strong>seen</strong> this movie?</li>
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
              <h3 className="font-bold text-violet-700 text-xl mb-2">1. Skutki widoczne "Teraz"</h3>
              <p className="text-slate-600 text-sm mb-3">Coś stało się w przeszłości (nie wiemy kiedy), ale widzimy tego efekt w tej sekundzie.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>have broken</strong> my leg. <span className="text-slate-400 text-xs italic">(nadal w gipsie)</span></p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">2. Doświadczenia życiowe</h3>
              <p className="text-slate-600 text-sm mb-3">Chwalimy się czymś (lub zaprzeczamy), co przeżyliśmy do momentu mówienia.</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>have been</strong> to Japan twice.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">3. Akcje przed chwilą zakończone</h3>
              <p className="text-slate-600 text-sm mb-3">Używamy ze słówkiem "just" (właśnie).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>have just finished</strong> my dinner.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-4 border-l-violet-500">
              <h3 className="font-bold text-violet-700 text-xl mb-2">4. Czas, który się nie skończył</h3>
              <p className="text-slate-600 text-sm mb-3">Dziś, w tym tygodniu, w tym miesiącu (today, this week).</p>
              <p className="font-mono bg-slate-50 px-3 py-2 rounded text-slate-800">I <strong>have drunk</strong> 3 coffees today.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-orange-50 border-2 border-orange-200 p-8 rounded-3xl shadow-sm">
            <h3 className="font-black text-orange-900 text-3xl mb-6 flex items-center gap-3">
              <AlertTriangle size={32} className="text-orange-600"/> Past Simple vs Present Perfect
            </h3>
            <p className="text-orange-900 mb-6 text-lg">Najczęstszy problem! Jak odróżnić zamkniętą przeszłość od "mostu" z teraźniejszością?</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100">
                <h4 className="font-bold text-slate-800 text-xl mb-3 border-b pb-2">Past Simple</h4>
                <p className="text-sm text-slate-600 mb-3">Wiemy dokładnie <strong>KIEDY</strong> coś się stało. Zdarzenie to zamknięty rozdział.</p>
                <p className="font-mono bg-slate-100 px-3 py-2 rounded text-slate-800 font-bold">I lost my keys yesterday.</p>
                <p className="text-xs text-slate-500 mt-2 italic">(Wczoraj zgubiłem, ale może już znalazłem. Odcięte od teraz).</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-orange-100 border-t-4 border-t-violet-500">
                <h4 className="font-bold text-violet-800 text-xl mb-3 border-b pb-2">Present Perfect</h4>
                <p className="text-sm text-slate-600 mb-3">Nie wiemy kiedy. Ważny jest <strong>SKUTEK TERAZ</strong>.</p>
                <p className="font-mono bg-violet-50 px-3 py-2 rounded text-violet-900 font-bold">I have lost my keys.</p>
                <p className="text-xs text-violet-600 mt-2 italic">(Zgubiłem i dlatego TERAZ stoję pod drzwiami i nie mogę wejść).</p>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3 text-violet-400">
              <Clock size={28} /> Magiczne Słówka
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-emerald-400 uppercase tracking-wider text-sm mb-4">Występują W ŚRODKU zdania</h4>
                <ul className="space-y-4 text-slate-300">
                  <li><span className="bg-slate-800 border border-slate-600 px-2 py-1 rounded font-mono text-sm mr-2 text-white">just</span> (właśnie) <br/><span className="italic text-sm">I have just arrived.</span></li>
                  <li><span className="bg-slate-800 border border-slate-600 px-2 py-1 rounded font-mono text-sm mr-2 text-white">already</span> (już) <br/><span className="italic text-sm">We have already eaten.</span></li>
                  <li><span className="bg-slate-800 border border-slate-600 px-2 py-1 rounded font-mono text-sm mr-2 text-white">never / ever</span> (nigdy / kiedyś) <br/><span className="italic text-sm">Have you ever been to NYC?</span></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-rose-400 uppercase tracking-wider text-sm mb-4">Występują NA KOŃCU zdania</h4>
                <ul className="space-y-4 text-slate-300">
                  <li><span className="bg-slate-800 border border-slate-600 px-2 py-1 rounded font-mono text-sm mr-2 text-white">yet</span> (jeszcze nie / czy już) <br/><span className="text-xs text-rose-300 block mb-1">Tylko w pytaniach i przeczeniach!</span><span className="italic text-sm">I haven't finished yet.</span></li>
                  <li><span className="bg-slate-800 border border-slate-600 px-2 py-1 rounded font-mono text-sm mr-2 text-white">lately / recently</span> (ostatnio) <br/><span className="italic text-sm">I haven't slept well lately.</span></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PresentPerfect;