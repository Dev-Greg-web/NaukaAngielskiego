import React, { useState } from 'react';
import { ArrowRight, BookOpen, CheckCircle, ArrowRightLeft, Zap, TimerOff } from 'lucide-react';

function ThirdConditional() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-rose-100 p-8 rounded-3xl mb-8 border border-rose-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-rose-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B2 Level</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-rose-900 mb-4">Trzeci Tryb Warunkowy</h1>
          <p className="text-lg text-rose-800 max-w-2xl font-medium">
            (Third Conditional). Żal, wyrzuty sumienia, krytyka i płacz nad rozlanym mlekiem. Opowiada o tym, jak zmienić przeszłość... czego oczywiście zrobić się nie da.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa i Zasady
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-rose-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <TimerOff size={18} /> Inwersja (C1)
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-rose-50 p-8 rounded-3xl border border-rose-200 shadow-sm relative">
            <h2 className="text-3xl font-black text-rose-900 mb-4">🧠 Za późno na zmianę!</h2>
            <p className="mb-6 text-rose-800">W trzecim trybie <strong>wszystko wydarzyło się w przeszłości i jest definitywnie zamknięte</strong>. Analizujemy tylko, "co by było, gdyby wtedy potoczyło się to inaczej". To tryb czystej fantazji o przeszłości.</p>
            
            <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-blue-500">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niespełniony Warunek</span>
                <p className="font-bold text-xl mb-2">Gdybym wtedy się uczył,</p>
                <p className="text-sm text-slate-500 mt-2">Zaprzeszłość (Past Perfect). Ale się nie uczyłem.</p>
                <p className="mt-4 font-mono font-bold text-blue-700">If I had studied,</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-rose-300 transform md:rotate-0 rotate-90">➡️</span>
              </div>
              <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-rose-500">
                <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Niezrealizowany Wynik</span>
                <p className="font-bold text-xl mb-2">to bym zdał.</p>
                <p className="text-sm text-slate-500 mt-2">(Would have + V3). Ale w rezultacie oblałem.</p>
                <p className="mt-4 font-mono font-bold text-rose-700">I would have passed.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (Najdłuższa konstrukcja)
            </h2>
            <div className="bg-amber-50 p-4 rounded-xl text-amber-900 mb-6 font-bold text-center border border-amber-200 text-sm shadow-sm">
              Trzeci tryb składa się niemal z samych form idealnych (Perfect) i imiesłowów (III forma).
            </div>

            <div className="space-y-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy (+)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Perfect (had + V3), WOULD HAVE + V3</p>
                <ul className="space-y-3 text-emerald-900">
                  <li>👉 If she <strong>had left</strong> earlier, she <strong>would have caught</strong> the train.</li>
                  <li>👉 We <strong>would have won</strong> if he <strong>had scored</strong> that penalty.</li>
                </ul>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">If + hadn't + V3, WOULDN'T HAVE + V3</p>
                <ul className="space-y-3 text-red-900">
                  <li>👉 If I <strong>hadn't drunk</strong> that coffee, I <strong>wouldn't have stayed</strong> awake all night.</li>
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
              <h3 className="font-bold text-rose-700 text-xl mb-2">1. Wyrażanie żalu (Regrets)</h3>
              <p className="text-slate-600 text-sm mb-3">Gdy żałujemy swoich decyzji z przeszłości.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If I <strong>had driven</strong> slower, I <strong>would not have crashed</strong> my car.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-rose-700 text-xl mb-2">2. Krytykowanie kogoś</h3>
              <p className="text-slate-600 text-sm mb-3">Wypominanie komuś jego błędów.</p>
              <p className="font-mono bg-white inline-block px-3 py-2 rounded border border-slate-200">If you <strong>had listened</strong> to me, we <strong>would not have gotten</strong> lost!</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 md:col-span-2 text-center shadow-sm">
              <h3 className="font-bold text-rose-700 text-xl mb-2">3. Wdzięczność / Ulga</h3>
              <p className="text-slate-600 text-sm mb-3">Szczęście z powodu uniknięcia czegoś złego dzięki innemu zdarzeniu.</p>
              <p className="font-mono bg-white inline-block px-5 py-3 rounded-xl border border-rose-200">If I <strong>had forgotten</strong> my passport, I <strong>would have missed</strong> the flight.</p>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
            {/* NAGŁÓWEK INWERSJI */}
            <header className="border-b border-slate-700 pb-6 mb-8">
              <h2 className="text-3xl font-black flex items-center gap-3 text-amber-400 mb-2">
                <TimerOff size={32} /> Inwersja Warunkowa (C1 / C2)
              </h2>
              <p className="text-slate-300 text-lg">
                Wyższa szkoła jazdy. Całkowicie usuwamy słówko "IF", a mimo to zdanie wciąż wyraża warunek. Używane w bardzo formalnym języku, w literaturze lub gdy chcemy nadać wypowiedzi dramatycznego tonu[cite: 36].
              </p>
            </header>

            {/* LOGIKA - O CO CHODZI? */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-violet-400 mb-4 flex items-center gap-2">
                🧠 Na czym polega logika?
              </h3>
              <p className="text-slate-300 mb-4 leading-relaxed">
                W języku angielskim szyk zdania (kolejność słów) jest święty. Zazwyczaj "operator przed osobą" oznacza pytanie. Jednak w inwersji warunkowej robimy to celowo w zdaniu twierdzącym. Sam fakt, że <strong>wyciągamy słowo "Had" na sam początek zdania</strong>, jest dla Anglika sygnałem: <em className="text-amber-300">"Aha! On usunął 'If', to jest zdanie warunkowe!"</em>[cite: 36].
              </p>
            </div>

            {/* JAK ZBUDOWAĆ - KROK PO KROKU */}
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 mb-10">
              <h3 className="text-xl font-bold text-emerald-400 mb-4 uppercase tracking-wider">🛠️ Konstrukcja w 3 krokach</h3>
              
              <div className="space-y-4 font-mono">
                <div className="flex items-center gap-4">
                  <span className="bg-slate-700 text-slate-400 px-3 py-1 rounded text-sm">Krok 1</span>
                  <p className="text-slate-400">Bierzemy standardowe zdanie: <br/><strong className="text-white">If I had known the truth...</strong>[cite: 36]</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-slate-700 text-slate-400 px-3 py-1 rounded text-sm">Krok 2</span>
                  <p className="text-rose-400">Bezlitośnie wyrzucamy "If": <br/><strong className="line-through">If</strong> I had known the truth...</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded text-sm">Krok 3</span>
                  <p className="text-emerald-300">Zamieniamy miejscami osobę i "Had" (robimy inwersję)[cite: 36]: <br/><strong className="text-white text-xl">Had I known the truth...</strong></p>
                </div>
              </div>
            </div>

            {/* WIELKA PUŁAPKA - PRZECZENIA */}
            <div className="bg-rose-950/50 p-8 rounded-2xl border border-rose-500/30 mb-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-rose-600 text-white text-xs font-black px-4 py-2 rounded-bl-xl uppercase tracking-widest">Ważny Haczyk</div>
              <h3 className="text-2xl font-black text-rose-400 mb-4 flex items-center gap-2">
                ⚠️ Jak zrobić przeczenie? (Level Hard)
              </h3>
              <p className="text-slate-300 mb-4">
                Jeżeli oryginalne zdanie było przeczące (np. <span className="italic">If I hadn't gone...</span>), to podczas robienia inwersji <strong>NIE WOLNO wyciągnąć słówka "NOT" na początek!</strong> Operator "Had" wędruje na przód sam, a "not" zostaje przyklejone po osobie.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className="bg-black/40 p-4 rounded-xl border border-rose-500/50">
                  <p className="text-rose-500 font-bold mb-2">❌ BŁĄD (Częsty!)</p>
                  <p className="font-mono text-slate-400 line-through">Hadn't I gone to the party...</p>
                </div>
                <div className="bg-black/40 p-4 rounded-xl border border-emerald-500/50">
                  <p className="text-emerald-400 font-bold mb-2">✅ POPRAWNIE</p>
                  <p className="font-mono text-white"><strong>Had I not gone</strong> to the party...</p>
                </div>
              </div>
            </div>

            {/* TABELA PRZYKŁADÓW */}
            <div>
              <h3 className="text-xl font-bold text-amber-400 mb-4 border-b border-slate-700 pb-2">📖 Porównanie w praktyce</h3>
              <div className="space-y-4">
                
                {/* Przykład 1 */}
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <p className="font-mono text-slate-400 text-sm">Standard (B2): If she had listened to me...</p>
                    <span className="text-slate-500 hidden md:block">➔</span>
                    <p className="font-mono text-emerald-300 font-bold">Inwersja (C1): Had she listened to me...</p>
                  </div>
                  <p className="text-slate-300">...we wouldn't be in this mess. <span className="text-slate-500 text-sm">(...nie bylibyśmy w tym bagnie.)</span></p>
                </div>

                {/* Przykład 2 */}
                <div className="bg-slate-800/50 p-4 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                    <p className="font-mono text-slate-400 text-sm">Standard (B2): If they had not missed the flight...</p>
                    <span className="text-slate-500 hidden md:block">➔</span>
                    <p className="font-mono text-rose-300 font-bold">Inwersja (C1): Had they not missed the flight...</p>
                  </div>
                  <p className="text-slate-300">...they would have arrived on time. <span className="text-slate-500 text-sm">(...dotarliby na czas.)</span></p>
                </div>

              </div>
            </div>

          </section>
        </div>
      )}

    </div>
  );
}

export default ThirdConditional;