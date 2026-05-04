import React from 'react';

function FuturePerfectContinuous() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Future Perfect Continuous</h1>
        <p className="text-xl text-slate-500 font-medium">Przyszły uprzedni ciągły. Służy do "mierzenia" czasu z przyszłej perspektywy. "Do tamtego momentu będę to robić już X lat!".</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Podsumowanie trwania akcji w przyszłości</h3>
            <p className="text-slate-600 mb-4 text-sm">Wyobrażamy sobie punkt w przyszłości i stamtąd "odliczamy" wstecz, jak długo dana akcja będzie w tamtej chwili już trwała.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 By next year, I <strong>will have been learning</strong> English for 5 years.</p>
              <p className="font-bold text-slate-800 mt-2">👉 In December, we <strong>will have been living</strong> here for 10 years.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Przyczyna przyszłego rezultatu</h3>
            <p className="text-slate-600 mb-4 text-sm">Wykorzystujemy go by wyjaśnić powód, dla którego w przyszłości nastąpi jakiś skutek (np. zmęczenie ciągłą pracą).</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 He will be tired when he arrives because he <strong>will have been driving</strong> all night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* UWAGA O CZASOWNIKACH STATYCZNYCH */}
      <section className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
        <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
          ⚠️ Haczyk: Czasowniki, których NIE UŻYJESZ z -ing
        </h2>
        <p className="text-orange-900 text-sm mb-4">
          Pamiętaj, że tzw. <strong>czasowniki statyczne</strong> (opisujące stany, uczucia, posiadanie) np. <em>know, love, be, have (posiadać)</em> nie występują w czasach Continuous. Gdy chcesz podsumować ile czasu coś trwa dla takiego czasownika, musisz cofnąć się do zwykłego czasu <strong>Future Perfect</strong>.
        </p>
        <div className="bg-white p-4 rounded-xl shadow-sm text-sm">
          <p className="text-red-600 line-through mb-1">By next year, I will have been knowing him for 10 years.</p>
          <p className="text-emerald-700 font-bold">By next year, I will have known him for 10 years.</p>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (WILL HAVE BEEN + Czasownik z -ING)
        </h2>

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

      {/* SŁÓWKA KLUCZOWE */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Kluczowe połączenie: BY + FOR
        </h2>
        <p className="mb-4 text-slate-600">Ponieważ jest to czas Future Perfect (używamy BY - do jakiegoś momentu) oraz Continuous (używamy FOR - przez jakiś czas), najczęściej w jednym zdaniu lądują oba te słówka!</p>
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-wrap gap-3 items-center">
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by next month</span>
          <span className="text-slate-400 font-black">+</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">for 5 years</span>
          <span className="text-slate-400 font-black">=</span>
          <span className="bg-violet-600 text-white px-4 py-2 rounded-xl font-bold shadow-sm">By next month, I will have been working here for 5 years.</span>
        </div>
      </section>

    </div>
  );
}

export default FuturePerfectContinuous;