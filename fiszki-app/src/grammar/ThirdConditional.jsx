import React from 'react';

function ThirdConditional() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-rose-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-rose-600 mb-4">Third Conditional</h1>
        <p className="text-xl text-slate-500 font-medium">Trzeci tryb warunkowy. Żal, wyrzuty sumienia, krytyka i płacz nad rozlanym mlekiem. Opowiada o zmienianiu przeszłości.</p>
      </header>

      {/* WYTŁUMACZENIE LOGIKI */}
      <section className="bg-rose-50 p-8 rounded-3xl border border-rose-200 shadow-sm">
        <h2 className="text-2xl font-black text-rose-900 mb-4">🧠 Za późno na zmianę!</h2>
        <p className="mb-6 text-rose-800">W trzecim trybie <strong>wszystko wydarzyło się w przeszłości i jest zamknięte</strong>. Analizujemy tylko "co by było, gdyby wtedy potoczyło się to inaczej". To tryb czystej fantazji o przeszłości.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-blue-500">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Niespełniony Warunek</span>
            <p className="font-bold text-lg mb-2">Gdybym wtedy poszedł na studia,</p>
            <p className="text-sm text-slate-500">(Zaprzeszłość: Past Perfect). Ale nie poszedłem, wybrałem pracę.</p>
            <p className="mt-4 font-mono font-bold text-blue-700">If I had gone to university,</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl text-rose-300">➡️</span>
          </div>
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-rose-500">
            <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Niezrealizowany Wynik</span>
            <p className="font-bold text-lg mb-2">to zostałbym lekarzem.</p>
            <p className="text-sm text-slate-500">(Would have + V3). Ale jestem mechanikiem.</p>
            <p className="mt-4 font-mono font-bold text-rose-700">I would have become a doctor.</p>
          </div>
        </div>
      </section>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy trzeciego trybu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-rose-600 mb-2">1. Wyrażanie żalu (Regrets)</h3>
            <p className="text-slate-600 text-sm">Gdy żałujemy swoich decyzji z przeszłości.</p>
            <p className="mt-2 font-medium">👉 If I <strong>had driven</strong> slower, I <strong>would not have crashed</strong> my car.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-rose-600 mb-2">2. Krytykowanie kogoś</h3>
            <p className="text-slate-600 text-sm">Wypominanie komuś jego błędów.</p>
            <p className="mt-2 font-medium">👉 If you <strong>had listened</strong> to me, we <strong>would not have gotten</strong> lost!</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 md:col-span-2 text-center">
            <h3 className="font-bold text-rose-600 mb-2">3. Wdzięczność / Ulga</h3>
            <p className="text-slate-600 text-sm">Szczęście z powodu uniknięcia czegoś złego.</p>
            <p className="mt-2 font-medium">👉 If I <strong>had forgotten</strong> my passport, I <strong>would have missed</strong> the flight.</p>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (Past Perfect + Would have + V3)
        </h2>
        
        <div className="bg-red-50 p-4 rounded-xl text-red-900 mb-6 font-bold text-center border border-red-200">
          Trzeci tryb składa się niemal z samych form idealnych (Perfect) i imiesłowów (III forma). To najdłuższa konstrukcja!
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Perfect (had + V3), WOULD HAVE + V3</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 If she <strong>had studied</strong>, she <strong>would have passed</strong>.</li>
              <li>👉 We <strong>would have won</strong> if he <strong>had not missed</strong> the penalty.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Could have i Might have</h3>
            <p className="text-blue-900 mb-2">Zamiast absolutnego "would have" (na 100% by się stało), używamy <strong>could have</strong> (mógłby, istniała fizyczna szansa) lub <strong>might have</strong> (być może by).</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 If I had saved money, I <strong>could have bought</strong> that house. <span className="text-sm">(miałbym na to środki finansowe)</span></li>
              <li>👉 If we had invited him, he <strong>might have come</strong>. <span className="text-sm">(istniało 50% szans, że by przyszedł)</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* INWERSJA */}
      <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-6 border-b border-slate-700 pb-4 flex items-center gap-3">
          🎩 Inwersja (Dla C1 / C2)
        </h2>
        <p className="mb-4 text-slate-300">
          W bardzo formalnym, książkowym angielskim możemy całkowicie wyrzucić słówko <strong>IF</strong>. Zamiast niego wyciągamy słowo "Had" na sam początek zdania (jak w pytaniu, chociaż to nie jest pytanie). Brzmi to wybitnie literacko.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-600">
            <h3 className="font-bold text-rose-400 mb-2">Standard (B2)</h3>
            <p className="font-mono text-slate-300 bg-black/30 px-3 py-2 rounded"><strong>If I had known</strong> the truth, I wouldn't have trusted him.</p>
          </div>
          <div className="bg-slate-800 p-5 rounded-2xl border border-slate-600 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-900 text-[10px] font-black px-2 py-1 rounded-bl-xl uppercase">Pro level</div>
            <h3 className="font-bold text-amber-400 mb-2">Inwersja (C1+)</h3>
            <p className="font-mono text-white bg-black/30 px-3 py-2 rounded shadow-inner border border-amber-500/30"><strong>Had I known</strong> the truth, I wouldn't have trusted him.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ThirdConditional;
