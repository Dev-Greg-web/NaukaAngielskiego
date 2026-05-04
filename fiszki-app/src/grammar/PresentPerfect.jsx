import React from 'react';

function PresentPerfect() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-8">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Present Perfect</h1>
        <p className="text-xl text-slate-500 font-medium">Czas-pomost. Łączy to, co było, z tym, co jest teraz.</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">1. Skutki widoczne "Teraz"</h3>
            <p className="text-slate-600 text-sm">Coś stało się w przeszłości (nie wiemy kiedy), ale widzimy tego efekt w tej sekundzie.</p>
            <p className="mt-2 font-medium">👉 I have broken my leg. <span className="text-sm font-normal text-slate-500">(Nadal mam ją w gipsie)</span></p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">2. Doświadczenia życiowe</h3>
            <p className="text-slate-600 text-sm">Chwalimy się czymś (lub zaprzeczamy), co przeżyliśmy do momentu mówienia.</p>
            <p className="mt-2 font-medium">👉 I have been to Japan twice.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">3. Akcje przed chwilą zakończone</h3>
            <p className="text-slate-600 text-sm">Używamy ze słówkiem "just" (właśnie).</p>
            <p className="mt-2 font-medium">👉 I have just finished my dinner.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">4. Czas, który się nie skończył</h3>
            <p className="text-slate-600 text-sm">Dziś, w tym tygodniu, w tym miesiącu (today, this week).</p>
            <p className="mt-2 font-medium">👉 I have drunk 3 coffees today.</p>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          🏗️ Budowa zdania
        </h2>
        
        <div className="bg-slate-100 p-4 rounded-xl mb-6 text-center shadow-inner">
          <p className="text-slate-700">Do zbudowania tego czasu potrzebujemy operatora <strong>HAVE / HAS</strong> oraz czasownika w <strong>TRZECIEJ FORMIE (Past Participle)</strong> np. gone, seen, done.</p>
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-2">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-emerald-900 mb-2">Osoba + have / has + Czasownik (III forma / -ed)</p>
            <ul className="list-disc list-inside space-y-1 text-emerald-900">
              <li>I/You/We/They <strong>have finished</strong>.</li>
              <li>He/She/It <strong>has finished</strong>.</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-2">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-red-900 mb-2">Osoba + haven't / hasn't + Czasownik (III forma / -ed)</p>
            <ul className="list-disc list-inside space-y-1 text-red-900">
              <li>I <strong>haven't seen</strong> this movie.</li>
              <li>She <strong>hasn't seen</strong> this movie.</li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-2">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-3 py-1 rounded shadow-sm text-blue-900 mb-2">Have / Has + Osoba + Czasownik (III forma / -ed)</p>
            <ul className="list-disc list-inside space-y-1 text-blue-900">
              <li><strong>Have</strong> you <strong>seen</strong> this movie?</li>
              <li><strong>Has</strong> he <strong>seen</strong> this movie?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MAGIACZNE SŁÓWKA */}
      <section className="bg-violet-600 text-white p-8 rounded-3xl shadow-lg mt-8">
        <h2 className="text-2xl font-black mb-6 border-b border-violet-400 pb-2">✨ Magiczne Słówka (Time Expressions)</h2>
        <div className="grid md:grid-cols-2 gap-6">
          
          <div>
            <h4 className="font-bold text-violet-200 uppercase tracking-wider text-sm mb-2">Występują W ŚRODKU zdania</h4>
            <ul className="space-y-4">
              <li>
                <span className="bg-violet-800 px-2 py-1 rounded font-mono text-sm mr-2">just</span> (właśnie) <br/>
                <span className="text-violet-300 italic">I have just arrived.</span>
              </li>
              <li>
                <span className="bg-violet-800 px-2 py-1 rounded font-mono text-sm mr-2">already</span> (już - w twierdzeniach) <br/>
                <span className="text-violet-300 italic">We have already eaten.</span>
              </li>
              <li>
                <span className="bg-violet-800 px-2 py-1 rounded font-mono text-sm mr-2">never / ever</span> (nigdy / kiedykolwiek) <br/>
                <span className="text-violet-300 italic">Have you ever been to NYC?</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-violet-200 uppercase tracking-wider text-sm mb-2">Występują NA KOŃCU zdania</h4>
            <ul className="space-y-4">
              <li>
                <span className="bg-violet-800 px-2 py-1 rounded font-mono text-sm mr-2">yet</span> (jeszcze nie / czy już) <br/>
                <span className="text-violet-300 italic text-sm">Tylko w pytaniach i przeczeniach!</span><br/>
                <span className="text-violet-300 italic">I haven't finished yet.</span>
              </li>
              <li>
                <span className="bg-violet-800 px-2 py-1 rounded font-mono text-sm mr-2">lately / recently</span> (ostatnio) <br/>
                <span className="text-violet-300 italic">I haven't slept well lately.</span>
              </li>
            </ul>
          </div>
          
        </div>
      </section>

      {/* RÓŻNICA PAST SIMPLE VS PRESENT PERFECT */}
      <section className="bg-orange-50 border-2 border-orange-200 p-6 rounded-2xl">
        <h3 className="font-bold text-orange-800 text-xl mb-3 flex items-center gap-2">🥊 Past Simple vs Present Perfect</h3>
        <p className="text-orange-900 mb-2">Najczęstszy problem! Jak je odróżnić?</p>
        <ul className="list-disc list-inside space-y-2 text-slate-700">
          <li><strong>Past Simple:</strong> Wiemy dokładnie <strong>KIEDY</strong> coś się stało. Zdarzenie to zamknięty rozdział (np. <em>I lost my keys yesterday</em> - wczoraj zgubiłem, ale może już znalazłem).</li>
          <li><strong>Present Perfect:</strong> Nie wiemy kiedy, albo to nieważne. Ważny jest <strong>SKUTEK TERAZ</strong> (np. <em>I have lost my keys</em> - zgubiłem i dlatego TERAZ nie mogę wejść do domu).</li>
        </ul>
      </section>

    </div>
  );
}

export default PresentPerfect;