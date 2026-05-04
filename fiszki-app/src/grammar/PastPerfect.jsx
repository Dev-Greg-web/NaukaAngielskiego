import React from 'react';

function PastPerfect() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Past Perfect</h1>
        <p className="text-xl text-slate-500 font-medium">Czas "Zaprzeszły". Używany, by pokazać, co w przeszłości wydarzyło się najpierw. To podróż w czasie wewnątrz innej podróży w czasie.</p>
      </header>

      {/* WYTŁUMACZENIE LOGIKI */}
      <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm">
        <h2 className="text-2xl font-black text-violet-900 mb-4">🧠 Zrozumieć "Zaprzeszłość"</h2>
        <p className="mb-6 text-violet-800">Wyobraź sobie, że opowiadasz policjantowi o wczorajszym włamaniu. Mówisz o dwóch rzeczach, które wydarzyły się w przeszłości, ale <strong>jedna z nich musiała zdarzyć się wcześniej, żeby wywołać skutek w tej drugiej</strong>.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-violet-500">
            <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Krok 1 (Zaprzeszłość)</span>
            <p className="font-bold text-lg mb-2">Złodziej ukradł telewizor.</p>
            <p className="text-sm text-slate-500">To wydarzyło się najpierw. Nie było Cię w domu.</p>
            <p className="mt-4 font-mono font-bold text-violet-700">PAST PERFECT</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl text-violet-300">➡️</span>
          </div>
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-blue-500">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Krok 2 (Przeszłość)</span>
            <p className="font-bold text-lg mb-2">Wróciłeś do domu.</p>
            <p className="text-sm text-slate-500">To wydarzyło się później (np. o 18:00).</p>
            <p className="mt-4 font-mono font-bold text-blue-700">PAST SIMPLE</p>
          </div>
        </div>

        <div className="bg-violet-900 text-white p-6 rounded-2xl text-center shadow-inner">
          <p className="text-xl">
            "When I <strong>returned</strong> home <span className="text-blue-300 text-sm">(Past Simple)</span>, <br className="md:hidden" />
            the thief <strong>had stolen</strong> my TV <span className="text-violet-300 text-sm">(Past Perfect)</span>."
          </p>
        </div>
      </section>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Inne przypadki użycia
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">🤔</div>
            <div>
              <h3 className="font-bold text-violet-700 text-xl mb-1">Przyczyna i skutek w przeszłości</h3>
              <p className="text-slate-600 mb-2">Tłumaczysz, dlaczego ktoś był w określonym stanie w przeszłości.</p>
              <p className="font-medium">👉 He was very tired <em>(skutek - Past Simple)</em> because he <strong>had worked</strong> for 12 hours <em>(przyczyna zaprzeszła - Past Perfect)</em>.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">💬</div>
            <div>
              <h3 className="font-bold text-violet-700 text-xl mb-1">Mowa zależna (Reported Speech)</h3>
              <p className="text-slate-600 mb-2">Kiedy relacjonujemy czyjeś słowa wypowiedziane w przeszłości, cofamy czas.</p>
              <p className="font-medium">👉 Paul said: "I lost my keys." ➡️ Paul said that he <strong>had lost</strong> his keys.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">💔</div>
            <div>
              <h3 className="font-bold text-violet-700 text-xl mb-1">Trzeci tryb warunkowy (Gdybanie)</h3>
              <p className="text-slate-600 mb-2">Żałowanie czegoś, co stało się w przeszłości i nie da się tego odkręcić.</p>
              <p className="font-medium">👉 If I <strong>had studied</strong> harder, I would have passed the exam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (Banalnie prosta: HAD + III Forma)
        </h2>
        <div className="bg-emerald-50 p-4 rounded-xl text-emerald-900 mb-6 font-bold text-center border border-emerald-200">
          Dobra wiadomość! Dla KAŻDEJ osoby (I, You, She, We, They) operatorem jest zawsze słówko HAD. Nic się nie zmienia!
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + had + Czasownik (III forma / -ed)</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 She <strong>had finished</strong> work before she went shopping.</li>
              <li>👉 I realized that I <strong>had left</strong> my phone at home.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + hadn't + Czasownik (III forma / -ed)</p>
            <ul className="space-y-2 text-red-900">
              <li>👉 I <strong>hadn't seen</strong> him before that day.</li>
              <li>👉 The movie <strong>hadn't started</strong> when we arrived.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Had + Osoba + Czasownik (III forma / -ed)?</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 <strong>Had</strong> you <strong>eaten</strong> before you arrived?</li>
              <li>👉 <strong>Had</strong> she <strong>met</strong> him before the party?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SŁÓWKA KLUCZOWE */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Słówka, po których poznasz Past Perfect
        </h2>
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-wrap gap-3">
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by the time (do czasu, gdy)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">already (już)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">before (zanim)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">after (po tym jak)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">just (właśnie)</span>
        </div>
      </section>

    </div>
  );
}

export default PastPerfect;