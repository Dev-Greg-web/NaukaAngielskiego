import React from 'react';

function PastPerfectContinuous() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-blue-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-blue-700 mb-4">Past Perfect Continuous</h1>
        <p className="text-xl text-slate-500 font-medium">Zaprzeszły ciągły. Skupiamy się na procesie z przeszłości, który trwał (i miał znaczenie), zanim wydarzyło się coś innego.</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-blue-700 text-xl mb-3 border-b pb-2">1. Czas trwania przed innym wydarzeniem</h3>
            <p className="text-slate-600 mb-4 text-sm">Chcemy podkreślić, jak długo jakaś czynność trwała, zanim nastąpiła kolejna czynność (zwykle wyrażona w Past Simple).</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 I <strong>had been waiting</strong> for 2 hours when the train finally arrived.</p>
              <p className="font-bold text-slate-800 mt-2">👉 Before she moved to London, she <strong>had been living</strong> in Paris for a year.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-blue-700 text-xl mb-3 border-b pb-2">2. Widoczne skutki "zmęczenia materiału"</h3>
            <p className="text-slate-600 mb-4 text-sm">Czynność trwała przez jakiś czas i właśnie się zakończyła, a jej widoczny efekt (np. bycie zmęczonym, mokrym) był w przeszłości oczywisty.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 He was out of breath because he <strong>had been running</strong>.</p>
              <p className="font-bold text-slate-800 mt-2">👉 The ground was wet. It <strong>had been raining</strong> all night.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (HAD BEEN + Czasownik z -ING)
        </h2>
        <div className="bg-orange-50 p-4 rounded-xl text-orange-900 mb-6 font-bold text-center border border-orange-200">
          Ułatwienie: Zawsze używamy operatora <strong>"had been"</strong>, niezależnie od tego, czy mówimy o "I", "You", czy "She / He / It"!
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
              <li>👉 We <strong>hadn't been waiting</strong> long when the doors opened.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Had + Osoba + been + Czasownik-ing?</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 <strong>Had</strong> you <strong>been waiting</strong> for a long time?</li>
              <li>👉 How long <strong>had</strong> they <strong>been dating</strong> before they got engaged?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PORÓWNANIE CZASÓW */}
      <section className="bg-blue-800 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-8 border-b border-blue-600 pb-4 text-center">Past Continuous czy Past Perfect Continuous?</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white/10 p-6 rounded-2xl flex-1">
            <h3 className="text-xl font-bold text-blue-200 mb-2 uppercase tracking-wider">Past Continuous</h3>
            <p className="font-bold text-xl mb-2 text-emerald-300">"I was watching TV when he called."</p>
            <p className="text-blue-100 text-sm">Opisuje to, co działo się w <strong>dokładnym momencie</strong>, gdy zadzwonił. Akcja została nagle przerwana przez telefon.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl flex-1">
            <h3 className="text-xl font-bold text-blue-200 mb-2 uppercase tracking-wider">Past Perfect Continuous</h3>
            <p className="font-bold text-xl mb-2 text-emerald-300">"I had been watching TV for 3 hours when he called."</p>
            <p className="text-blue-100 text-sm">Skupia się na <strong>czasie trwania</strong>. Oglądaliśmy TV już od 3 godzin ZANIM zadzwonił.</p>
          </div>
        </div>
      </section>

      {/* SŁÓWKA KLUCZOWE */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Typowe określenia czasu
        </h2>
        <p className="mb-4 text-slate-600">Skoro skupiamy się na procesie, często odpowiadamy na pytanie "Jak długo?".</p>
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-wrap gap-3">
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">for (przez) np. for 2 hours</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">since (od) np. since morning</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">all day / all night (cały dzień/noc)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">before (zanim)</span>
        </div>
      </section>

    </div>
  );
}

export default PastPerfectContinuous;