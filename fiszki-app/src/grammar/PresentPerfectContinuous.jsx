import React from 'react';

function PresentPerfectContinuous() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Present Perfect Continuous</h1>
        <p className="text-xl text-slate-500 font-medium">Mistrz trwania. Odpowiada na jedno kluczowe pytanie: "Jak długo już to robisz?".</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Trwa od przeszłości aż do TERAZ</h3>
            <p className="text-slate-600 mb-4 text-sm">Czynność rozpoczęła się kiedyś, wciąż trwa i kładziemy ogromny nacisk na jej <strong>długość (proces)</strong>.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-medium text-slate-800">👉 I <strong>have been waiting</strong> for you for 2 hours!</p>
              <p className="font-medium text-slate-800 mt-2">👉 She <strong>has been learning</strong> English since 2015.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Widoczne ślady i skutki</h3>
            <p className="text-slate-600 mb-4 text-sm">Czynność właśnie przed sekundą się skończyła, ale doskonale widać jej "fizyczne" skutki na ciele lub w otoczeniu.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-medium text-slate-800">👉 Why are you sweating? <br/>- I <strong>have been running</strong>.</p>
              <p className="font-medium text-slate-800 mt-2">👉 Your clothes are dirty! <br/>- I <strong>have been repairing</strong> my car.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (HAVE/HAS BEEN + końcówka -ing)
        </h2>
        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + have/has been + Czasownik z -ing</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 I <strong>have been reading</strong> this book all day.</li>
              <li>👉 She <strong>has been working</strong> here for 5 years.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + haven't/hasn't been + Czasownik z -ing</p>
            <ul className="space-y-2 text-red-900">
              <li>👉 I <strong>haven't been sleeping</strong> well lately.</li>
              <li>👉 He <strong>hasn't been feeling</strong> well today.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Have/Has + Osoba + been + Czasownik z -ing?</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 <strong>Have</strong> you <strong>been crying</strong>?</li>
              <li>👉 How long <strong>has</strong> she <strong>been living</strong> here?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATE VERBS - OSTRZEŻENIE */}
      <section className="bg-red-50 border border-red-200 p-8 rounded-3xl shadow-sm">
        <h2 className="text-2xl font-black text-red-800 mb-4 flex items-center gap-2">🛑 Ostrzeżenie: Czasowniki Stanu (State Verbs)</h2>
        <p className="mb-4 text-red-900">Pamiętaj, że czasy <em>Continuous</em> (z -ing) <strong>nie znoszą czasowników opisujących stany, uczucia czy procesy myślowe</strong> (know, like, love, hate, want, understand).</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl border border-red-300">
            <h4 className="font-bold text-red-600 mb-2">❌ ŹLE (Zabronione użycie)</h4>
            <p className="line-through text-slate-500">I have been knowing him for 5 years.</p>
            <p className="line-through text-slate-500">She has been wanting a car since May.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-emerald-300">
            <h4 className="font-bold text-emerald-600 mb-2">✅ DOBRZE (Zmień na zwykły Perfect)</h4>
            <p className="text-slate-800 font-bold">I have known him for 5 years.</p>
            <p className="text-slate-800 font-bold">She has wanted a car since May.</p>
          </div>
        </div>
      </section>

      {/* PERFECT VS PERFECT CONTINUOUS */}
      <section className="bg-orange-50 border border-orange-200 p-8 rounded-3xl shadow-sm">
        <h3 className="font-black text-orange-900 text-2xl mb-6 text-center">🥊 Starcie: Wynik vs Proces</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-800 text-lg mb-2 border-b pb-2">Present Perfect Simple</h4>
            <p className="text-orange-600 font-bold mb-3">Skupia się na WYNIKU i ILOŚCI.</p>
            <p className="italic text-slate-600">"I have painted the living room."</p>
            <p className="text-sm mt-2 font-medium">➡️ Salon jest gotowy. Czysto i pięknie.</p>
            <hr className="my-3"/>
            <p className="italic text-slate-600">"I have read 50 pages."</p>
            <p className="text-sm mt-2 font-medium">➡️ Ważne ILE przeczytałem.</p>
          </div>
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold text-slate-800 text-lg mb-2 border-b pb-2">Present Perfect Continuous</h4>
            <p className="text-orange-600 font-bold mb-3">Skupia się na PROCESIE i CZASIE.</p>
            <p className="italic text-slate-600">"I have been painting the living room."</p>
            <p className="text-sm mt-2 font-medium">➡️ Jestem cały w farbie. Robota wciąż trwa.</p>
            <hr className="my-3"/>
            <p className="italic text-slate-600">"I have been reading for 3 hours."</p>
            <p className="text-sm mt-2 font-medium">➡️ Ważne JAK DŁUGO czytam.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default PresentPerfectContinuous;