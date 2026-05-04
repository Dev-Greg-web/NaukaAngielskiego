import React from 'react';

function PresentSimple() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-8">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Present Simple</h1>
        <p className="text-xl text-slate-500 font-medium">Czas teraźniejszy prosty. Podstawa angielskiej gramatyki.</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">1. Nawyki i rutyny</h3>
            <p className="text-slate-600 text-sm">Rzeczy, które robimy regularnie (codziennie, co tydzień).</p>
            <p className="mt-2 font-medium">👉 I drink coffee every morning.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">2. Prawdy i fakty</h3>
            <p className="text-slate-600 text-sm">Zjawiska naturalne, fakty naukowe, rzeczy niezmienne.</p>
            <p className="mt-2 font-medium">👉 Water boils at 100 degrees.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">3. Harmonogramy</h3>
            <p className="text-slate-600 text-sm">Rozkłady jazdy pociągów, autobusów, plany lekcji (nawet dla przyszłości!).</p>
            <p className="mt-2 font-medium">👉 The train leaves at 8:00 PM.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">4. Stany stałe</h3>
            <p className="text-slate-600 text-sm">Gdzie mieszkamy, pracujemy, co lubimy.</p>
            <p className="mt-2 font-medium">👉 She lives in London.</p>
          </div>
        </div>
      </section>

      {/* BUDOWA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🏗️ Budowa zdania
        </h2>
        
        <div className="space-y-4">
          {/* TWIERDZENIA */}
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-2">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-emerald-900 mb-3">
              Osoba + Czasownik (+ <span className="text-red-500 font-bold">s/es</span> w 3 os. l.poj)
            </p>
            <ul className="list-disc list-inside space-y-1 text-emerald-900">
              <li>I/You/We/They <strong>play</strong> tennis.</li>
              <li>He/She/It <strong>plays</strong> tennis. <span className="text-red-500 text-sm italic">(Zwróć uwagę na końcówkę -s!)</span></li>
            </ul>
          </div>

          {/* PRZECZENIA */}
          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-2">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-red-900 mb-3">
              Osoba + don't / doesn't + Czasownik (forma podstawowa)
            </p>
            <ul className="list-disc list-inside space-y-1 text-red-900">
              <li>I/You/We/They <strong>don't play</strong> tennis.</li>
              <li>He/She/It <strong>doesn't play</strong> tennis. <span className="text-slate-500 text-sm italic">(Słówko doesn't zabiera "s" z czasownika!)</span></li>
            </ul>
          </div>

          {/* PYTANIA */}
          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-2">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-blue-900 mb-3">
              Do / Does + Osoba + Czasownik (forma podstawowa)
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-900">
              <li><strong>Do</strong> you <strong>play</strong> tennis?</li>
              <li><strong>Does</strong> she <strong>play</strong> tennis?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ZASADY PISOWNI (He/She/It) */}
      <section className="bg-orange-50 p-6 rounded-3xl border border-orange-100">
        <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
          ⚠️ Zasady pisowni dla He / She / It
        </h2>
        <p className="mb-4 text-orange-900 text-sm">Dodawanie końcówki -s w trzeciej osobie liczby pojedynczej ma kilka wyjątków:</p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-slate-800 border-b pb-2 mb-2">Zwykłe czasowniki</h4>
            <p>Dodajemy samo <strong className="text-orange-600">-s</strong></p>
            <ul className="mt-2 text-slate-600">
              <li>work &gt; work<strong>s</strong></li>
              <li>eat &gt; eat<strong>s</strong></li>
              <li>play &gt; play<strong>s</strong></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-slate-800 border-b pb-2 mb-2">Końcówki: -s, -sh, -ch, -x, -o</h4>
            <p>Dodajemy <strong className="text-orange-600">-es</strong></p>
            <ul className="mt-2 text-slate-600">
              <li>watch &gt; watch<strong>es</strong></li>
              <li>wash &gt; wash<strong>es</strong></li>
              <li>go &gt; go<strong>es</strong></li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="font-bold text-slate-800 border-b pb-2 mb-2">Spółgłoska + Y</h4>
            <p>Zmieniamy Y na <strong className="text-orange-600">-ies</strong></p>
            <ul className="mt-2 text-slate-600">
              <li>study &gt; stud<strong>ies</strong></li>
              <li>cry &gt; cr<strong>ies</strong></li>
              <li>fly &gt; fl<strong>ies</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SŁÓWKA KLUCZOWE */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Typowe określenia czasu
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full font-semibold">always (zawsze)</span>
          <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full font-semibold">usually (zazwyczaj)</span>
          <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full font-semibold">often (często)</span>
          <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full font-semibold">sometimes (czasami)</span>
          <span className="bg-violet-100 text-violet-800 px-4 py-2 rounded-full font-semibold">never (nigdy)</span>
          <span className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-semibold">every day (codziennie)</span>
        </div>
        <p className="bg-slate-100 p-4 rounded-xl text-slate-600 text-sm">
          <strong>Wskazówka:</strong> Krótkie przysłówki (np. always, often) stawiamy <strong>przed</strong> głównym czasownikiem (np. I <em>always</em> wake up early). Ale dłuższe wyrażenia (np. every day, on Mondays) wędrują na <strong>koniec zdania</strong>.
        </p>
      </section>

    </div>
  );
}

export default PresentSimple;