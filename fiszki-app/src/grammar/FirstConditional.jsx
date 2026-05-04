import React from 'react';

function FirstConditional() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-blue-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-blue-600 mb-4">First Conditional</h1>
        <p className="text-xl text-slate-500 font-medium">Pierwszy tryb warunkowy. Realna przyszłość. Planujemy, negocjujemy i ostrzegamy przed konsekwencjami.</p>
      </header>

      {/* WYTŁUMACZENIE LOGIKI */}
      <section className="bg-blue-50 p-8 rounded-3xl border border-blue-200 shadow-sm">
        <h2 className="text-2xl font-black text-blue-900 mb-4">🧠 Przewidywanie realnej przyszłości</h2>
        <p className="mb-6 text-blue-800">Pierwszy tryb warunkowy mówi o sytuacjach w przyszłości, które są <strong>bardzo prawdopodobne</strong> do spełnienia. Warunek jest realny, a nie zmyślony.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-emerald-500">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Warunek (Jeśli zrobię X...)</span>
            <p className="font-bold text-lg mb-2">Jeśli będzie jutro padać,</p>
            <p className="text-sm text-slate-500">Część z "IF". Uwaga: używamy tu czasu teraźniejszego (Present Simple)!</p>
            <p className="mt-4 font-mono font-bold text-emerald-700">If it rains tomorrow,</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl text-blue-300">➡️</span>
          </div>
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-blue-500">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Rezultat (...to wydarzy się Y)</span>
            <p className="font-bold text-lg mb-2">to zostanę w domu.</p>
            <p className="text-sm text-slate-500">Część z rezultatem używa czasu przyszłego (Future Simple - WILL).</p>
            <p className="mt-4 font-mono font-bold text-blue-700">I will stay at home.</p>
          </div>
        </div>
      </section>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy pierwszego trybu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-2">1. Realne plany</h3>
            <p className="text-slate-600 text-sm">Przewidujemy logiczny ciąg zdarzeń.</p>
            <p className="mt-2 font-medium">👉 If I <strong>have</strong> money, I <strong>will buy</strong> a new phone.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-2">2. Ostrzeżenia</h3>
            <p className="text-slate-600 text-sm">Gdy chcemy powiedzieć, co złego się stanie.</p>
            <p className="mt-2 font-medium">👉 If you <strong>touch</strong> that wire, you <strong>will get</strong> a shock.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-2">3. Obietnice</h3>
            <p className="text-slate-600 text-sm">Deklaracje warunkowe (zrobię to, jeśli...).</p>
            <p className="mt-2 font-medium">👉 If you <strong>help</strong> me, I <strong>will buy</strong> you dinner.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-blue-600 mb-2">4. Negocjacje</h3>
            <p className="text-slate-600 text-sm">W biznesie lub życiu codziennym.</p>
            <p className="mt-2 font-medium">👉 If you <strong>give</strong> me a discount, I <strong>will buy</strong> two.</p>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (If + Present Simple, Will)
        </h2>
        
        <div className="bg-red-50 p-4 rounded-xl text-red-900 mb-6 font-bold text-center border border-red-200 uppercase tracking-widest text-sm">
          Złota Zasada: Nigdy nie dajemy "WILL" po słówku "IF"!
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Present Simple, Osoba + WILL + V1</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 If she <strong>studies</strong> hard, she <strong>will pass</strong> the exam.</li>
              <li>👉 We <strong>will go</strong> to the park if it <strong>is</strong> sunny.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Inne czasowniki modalne</h3>
            <p className="text-blue-900 mb-2">Zamiast "will" (na pewno), możemy użyć <strong>can, may, might, should</strong>, by zmienić siłę rezultatu.</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 If you finish early, you <strong>can go</strong> home. <span className="text-sm">(możesz)</span></li>
              <li>👉 If it rains, we <strong>might stay</strong> inside. <span className="text-sm">(być może zostaniemy)</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* UNLESS I INNE */}
      <section className="bg-slate-800 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-6 border-b border-slate-600 pb-4 flex items-center gap-3">
          ⚠️ "Unless" i inni przyjaciele
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-700 p-5 rounded-2xl border border-slate-600">
            <h3 className="font-bold text-rose-400 mb-2">Unless (Chyba że / Jeśli nie)</h3>
            <p className="text-sm text-slate-300 mb-3">To słowo zawiera już w sobie przeczenie. Zastępuje "if ... not". Pamiętaj, żeby nie robić podwójnego przeczenia!</p>
            <p className="font-mono text-white bg-slate-900 px-3 py-2 rounded"><strong>Unless</strong> you hurry up, you will miss the bus.</p>
            <p className="text-xs text-slate-400 mt-2">= If you DON'T hurry up...</p>
          </div>
          <div className="bg-slate-700 p-5 rounded-2xl border border-slate-600">
            <h3 className="font-bold text-amber-400 mb-2">As soon as / Before / After</h3>
            <p className="text-sm text-slate-300 mb-3">Te spójniki czasu działają dokładnie na tej samej zasadzie co "If". Też nie lubią "will" po sobie.</p>
            <p className="font-mono text-white bg-slate-900 px-3 py-2 rounded">I will call you <strong>as soon as</strong> I arrive.</p>
            <p className="text-xs text-slate-400 mt-2">(Zadzwonię do ciebie, jak tylko dotrę).</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FirstConditional;
