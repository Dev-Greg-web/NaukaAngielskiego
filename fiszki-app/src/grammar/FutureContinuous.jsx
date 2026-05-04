import React from 'react';

function FutureContinuous() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Future Continuous</h1>
        <p className="text-xl text-slate-500 font-medium">Wyobraź sobie przyszłość... "Jutro o tej porze będę leżeć na plaży". Przenosimy się w czasie do konkretnego punktu.</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3">1. Akcja w trakcie trwania o konkretnej porze w przyszłości</h3>
            <p className="text-slate-600 mb-4">Nie mówimy o początku akcji, ani o jej końcu. Zamykamy oczy, przenosimy się np. na godzinę 20:00 w piątek i mówimy, w trakcie jakiej czynności będziemy.</p>
            <div className="bg-white p-4 rounded-xl border-l-4 border-violet-500">
              <p className="font-bold text-slate-800">👉 This time tomorrow, I <strong>will be flying</strong> to London.</p>
              <p className="font-bold text-slate-800 mt-2">👉 Don't call me at 8 PM. I <strong>will be watching</strong> the match.</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3">2. Rutyna i przewidywalne sytuacje</h3>
            <p className="text-slate-600 mb-4">Czynności, które wydarzą się w przyszłości, ponieważ są częścią naszego normalnego grafiku (nie musimy ich specjalnie planować).</p>
            <div className="bg-white p-4 rounded-xl border-l-4 border-violet-500">
              <p className="font-bold text-slate-800">👉 I <strong>will be seeing</strong> John tomorrow at work anyway, so I can give him your message.</p>
              <p className="text-sm text-slate-500 italic mt-1">(Nie umawiałem się z nim specjalnie, po prostu i tak będę go widział w biurze).</p>
            </div>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3">3. Uprzejme zapytania o plany</h3>
            <p className="text-slate-600 mb-4">Gdy chcemy o coś poprosić, ale najpierw "sondujemy", czy nie zrobimy komuś problemu, pytając o jego naturalne plany.</p>
            <div className="bg-white p-4 rounded-xl border-l-4 border-violet-500">
              <p className="font-bold text-slate-800">👉 <strong>Will</strong> you <strong>be going</strong> to the supermarket later? Could you buy me some milk?</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (WILL BE + czasownik z końcówką -ing)
        </h2>
        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + will be + Czasownik z -ing</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 We <strong>will be working</strong> on this project all next week.</li>
              <li>👉 At 9 AM, she <strong>will be taking</strong> her exam.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + won't be + Czasownik z -ing</p>
            <ul className="space-y-2 text-red-900">
              <li>👉 I <strong>won't be coming</strong> to the party tonight.</li>
              <li>👉 They <strong>won't be sleeping</strong> when you arrive.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Will + Osoba + be + Czasownik z -ing?</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 <strong>Will</strong> you <strong>be using</strong> the car tomorrow?</li>
              <li>👉 What <strong>will</strong> you <strong>be doing</strong> at 5 PM?</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* SŁÓWKA KLUCZOWE */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Wskaźniki czasu (Time expressions)
        </h2>
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-wrap gap-3">
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">this time tomorrow (jutro o tej porze)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">at 8 PM tomorrow (jutro o 20:00)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">all day on Sunday (przez całą niedzielę)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">in a week (za tydzień od teraz)</span>
        </div>
      </section>

    </div>
  );
}

export default FutureContinuous;