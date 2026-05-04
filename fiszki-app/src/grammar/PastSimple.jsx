import React from 'react';

function PastSimple() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-8">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Past Simple</h1>
        <p className="text-xl text-slate-500 font-medium">Czas przeszły prosty. Podróż w czasie do zamkniętych rozdziałów.</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">1. Zakończone akcje w przeszłości</h3>
            <p className="text-slate-600 text-sm">Wydarzyło się i skończyło. Często wiemy kiedy dokładnie.</p>
            <p className="mt-2 font-medium">👉 I bought a new car yesterday.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">2. Sekwencje wydarzeń</h3>
            <p className="text-slate-600 text-sm">Opowiadanie historii krok po kroku (zrobił to, potem tamto).</p>
            <p className="mt-2 font-medium">👉 He woke up, took a shower and left.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 md:col-span-2">
            <h3 className="font-bold text-violet-600 mb-2">3. Nawyki z przeszłości</h3>
            <p className="text-slate-600 text-sm">Rzeczy, które robiliśmy regularnie dawno temu.</p>
            <p className="mt-2 font-medium">👉 When I was a kid, I played football every day.</p>
          </div>
        </div>
      </section>

      {/* REGULARNE VS NIEREGULARNE */}
      <section className="bg-violet-50 p-6 rounded-3xl border border-violet-200">
        <h2 className="text-2xl font-bold text-violet-900 mb-4">Czasowniki: Regularne i Nieregularne</h2>
        <p className="mb-4 text-violet-800">W czasie Past Simple musimy zmienić czasownik na jego formę przeszłą (tzw. drugą formę).</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-emerald-600 mb-2 uppercase tracking-wider text-sm">Regularne (+ ed)</h4>
            <ul className="space-y-2 text-slate-700">
              <li>play &gt; <strong>played</strong></li>
              <li>work &gt; <strong>worked</strong></li>
              <li className="text-sm text-slate-500 pt-2 border-t mt-2">Jeśli kończy się na -e, dodajemy tylko -d (like &gt; liked). Jeśli na spółgłoskę+y, zamieniamy na -ied (study &gt; studied).</li>
            </ul>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm">
            <h4 className="font-black text-red-600 mb-2 uppercase tracking-wider text-sm">Nieregularne (Tabela)</h4>
            <ul className="space-y-2 text-slate-700">
              <li>go &gt; <strong>went</strong></li>
              <li>see &gt; <strong>saw</strong></li>
              <li>buy &gt; <strong>bought</strong></li>
              <li className="text-sm text-slate-500 pt-2 border-t mt-2">Niestety, tych trzeba nauczyć się na pamięć z II kolumny tabeli czasowników!</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🏗️ Budowa zdania (dla wszystkich osób jest taka sama!)
        </h2>
        
        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-2">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-emerald-900 mb-2">Osoba + Czasownik (II forma)</p>
            <p className="text-emerald-900">👉 We <strong>visited</strong> Paris last year.</p>
            <p className="text-emerald-900">👉 I <strong>ate</strong> pizza yesterday.</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-2">Przeczenia (-) z "DIDN'T"</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-red-900 mb-2">Osoba + didn't + Czasownik (I forma - podstawowa!)</p>
            <p className="text-red-900">👉 We <strong>didn't visit</strong> Paris.</p>
            <p className="text-red-900">👉 I <strong>didn't eat</strong> pizza.</p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-2">Pytania (?) z "DID"</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-blue-900 mb-2">Did + Osoba + Czasownik (I forma - podstawowa!)</p>
            <p className="text-blue-900">👉 <strong>Did</strong> we <strong>visit</strong> Paris?</p>
            <p className="text-blue-900">👉 <strong>Did</strong> you <strong>eat</strong> pizza?</p>
          </div>
        </div>
        
        {/* UWAGA */}
        <div className="mt-6 bg-orange-100 p-4 rounded-xl border-l-4 border-orange-500 text-orange-900">
          <strong>🔥 Złota zasada:</strong> Kiedy w zdaniu pojawia się operator <strong>DID</strong> lub <strong>DIDN'T</strong>, kradnie on całą "przeszłość" dla siebie. Główny czasownik wraca wtedy natychmiast do swojej podstawowej, słownikowej formy!
        </div>
      </section>

      {/* OKREŚLENIA CZASU */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Typowe określenia czasu
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">yesterday (wczoraj)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">last night/week/year (ostatniej nocy/tygodnia...)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">two days ago (2 dni temu)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">in 2010 (w 2010 r.)</span>
        </div>
      </section>

    </div>
  );
}

export default PastSimple;