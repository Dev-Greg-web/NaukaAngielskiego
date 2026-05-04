import React from 'react';

function PresentContinuous() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-8">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Present Continuous</h1>
        <p className="text-xl text-slate-500 font-medium">Czas teraźniejszy ciągły. Uwaga: Dzieje się TU i TERAZ!</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">1. W tej właśnie sekundzie</h3>
            <p className="text-slate-600 text-sm">Czynności, które dzieją się dokładnie w momencie mówienia.</p>
            <p className="mt-2 font-medium">👉 I am reading an article right now.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">2. Sytuacje tymczasowe</h3>
            <p className="text-slate-600 text-sm">Coś, co jest prawdziwe teraz, ale zaraz się skończy.</p>
            <p className="mt-2 font-medium">👉 She is living with her parents this month.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">3. Pewne plany na przyszłość!</h3>
            <p className="text-slate-600 text-sm">Zaskoczenie! Używamy go do przyszłości, gdy mamy wszystko zorganizowane na 100%.</p>
            <p className="mt-2 font-medium">👉 We are flying to Paris tomorrow at 8 AM.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">4. Irytujące nawyki</h3>
            <p className="text-slate-600 text-sm">Zawsze ze słówkiem "always". Używamy do narzekania.</p>
            <p className="mt-2 font-medium">👉 He is always losing his keys!</p>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🏗️ Budowa zdania (Operator "to be" + końcówka -ing)
        </h2>
        
        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-2">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-emerald-900 mb-2">Osoba + am / is / are + Czasownik z <span className="text-red-500 font-bold">-ing</span></p>
            <p className="text-emerald-900">👉 I <strong>am working</strong>.</p>
            <p className="text-emerald-900">👉 She <strong>is watching</strong> TV.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-2">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-red-900 mb-2">Osoba + am not / isn't / aren't + Czasownik z <span className="text-red-500 font-bold">-ing</span></p>
            <p className="text-red-900">👉 I <strong>am not working</strong>.</p>
            <p className="text-red-900">👉 They <strong>aren't playing</strong>.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-2">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-blue-900 mb-2">Am / Is / Are + Osoba + Czasownik z <span className="text-red-500 font-bold">-ing</span></p>
            <p className="text-blue-900">👉 <strong>Are</strong> you <strong>working</strong>?</p>
            <p className="text-blue-900">👉 <strong>Is</strong> she <strong>listening</strong>?</p>
          </div>
        </div>
      </section>

      {/* UWAGA NA STATE VERBS */}
      <section className="bg-red-50 border-2 border-red-200 p-6 rounded-3xl">
        <h2 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
          🛑 State Verbs (Zakaz używania z -ing!)
        </h2>
        <p className="mb-4 text-red-900">Niektóre czasowniki opisują <strong>stany i uczucia</strong>, a nie fizyczne akcje. Nie możemy ich używać w Present Continuous, nawet jeśli dzieją się teraz!</p>
        
        <div className="grid md:grid-cols-2 gap-4 text-sm font-medium">
          <div className="bg-white p-4 rounded-xl shadow-sm text-red-600">
            ❌ ŹLE: I am knowing him.<br/>
            ❌ ŹLE: She is wanting a car.<br/>
            ❌ ŹLE: I am understanding you.
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm text-emerald-600">
            ✅ DOBRZE: I <strong>know</strong> him.<br/>
            ✅ DOBRZE: She <strong>wants</strong> a car.<br/>
            ✅ DOBRZE: I <strong>understand</strong> you.
          </div>
        </div>
        <p className="mt-4 text-sm text-red-800">Inne przykłady: <em>believe, love, hate, need, prefer, seem</em>.</p>
      </section>

      {/* OKREŚLENIA CZASU */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Typowe określenia czasu
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">now (teraz)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">right now (w tym momencie)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">at the moment (obecnie)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">currently (aktualnie)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">today (dzisiaj)</span>
        </div>
      </section>

    </div>
  );
}

export default PresentContinuous;