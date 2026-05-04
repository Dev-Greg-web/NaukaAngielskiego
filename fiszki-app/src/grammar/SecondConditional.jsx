import React from 'react';

function SecondConditional() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-600 mb-4">Second Conditional</h1>
        <p className="text-xl text-slate-500 font-medium">Drugi tryb warunkowy. Królestwo gdybania, marzeń, porad i sytuacji wysoce nieprawdopodobnych w teraźniejszości.</p>
      </header>

      {/* WYTŁUMACZENIE LOGIKI */}
      <section className="bg-violet-50 p-8 rounded-3xl border border-violet-200 shadow-sm">
        <h2 className="text-2xl font-black text-violet-900 mb-4">🧠 Wyobraźmy sobie, że...</h2>
        <p className="mb-6 text-violet-800">Drugi tryb nie opisuje przeszłości! Opisuje <strong>hipotetyczną teraźniejszość lub przyszłość</strong>. Używamy czasu przeszłego tylko po to, by pokazać ten "dystans" od rzeczywistości (że coś jest nierealne).</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-amber-500">
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Nierealny Warunek</span>
            <p className="font-bold text-lg mb-2">Gdybym miał milion dolarów,</p>
            <p className="text-sm text-slate-500">(Ale nie mam! Tylko marzę). Używamy Past Simple.</p>
            <p className="mt-4 font-mono font-bold text-amber-700">If I had a million dollars,</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl text-violet-300">➡️</span>
          </div>
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-violet-500">
            <span className="bg-violet-100 text-violet-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Wyobrażony Rezultat</span>
            <p className="font-bold text-lg mb-2">to kupiłbym wyspę.</p>
            <p className="text-sm text-slate-500">Używamy "would" (bym) + zwykły czasownik.</p>
            <p className="mt-4 font-mono font-bold text-violet-700">I would buy an island.</p>
          </div>
        </div>
      </section>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy drugiego trybu?
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">1. Marzenia</h3>
            <p className="text-slate-600 text-sm">Sytuacje bardzo mało prawdopodobne, oderwane od życia.</p>
            <p className="mt-2 font-medium">👉 If I <strong>won</strong> the lottery, I <strong>would travel</strong> the world.</p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-violet-600 mb-2">2. Odwracanie rzeczywistości</h3>
            <p className="text-slate-600 text-sm">Gdybanie "co by było, gdyby było inaczej niż jest teraz".</p>
            <p className="mt-2 font-medium">👉 If she <strong>knew</strong> his number, she <strong>would call</strong> him. <span className="text-slate-400 text-sm">(Ale nie zna)</span></p>
          </div>
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 md:col-span-2 text-center">
            <h3 className="font-bold text-violet-600 mb-2">3. Udzielanie dobrych rad (If I were you)</h3>
            <p className="text-slate-600 text-sm">Stawianie się w czyjejś sytuacji.</p>
            <p className="mt-2 font-medium">👉 If I <strong>were</strong> you, I <strong>would apologize</strong>. <span className="text-slate-400 text-sm">(Gdybym był tobą, przeprosiłbym)</span></p>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (If + Past Simple, Would)
        </h2>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Past Simple, Osoba + WOULD + V1</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 If I <strong>had</strong> more time, I <strong>would learn</strong> Spanish.</li>
              <li>👉 She <strong>would buy</strong> a Ferrari if she <strong>was</strong> rich.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Could i Might (Zamiast Would)</h3>
            <p className="text-blue-900 mb-2">Żeby pokazać szansę lub możliwość, zmieniamy "would" na "could" (mógłbym) lub "might" (być może bym).</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 If we had a map, we <strong>could find</strong> the way. <span className="text-sm">(mielibyśmy fizyczną możliwość znalezienia)</span></li>
              <li>👉 If you asked him nicely, he <strong>might agree</strong>. <span className="text-sm">(jest mała szansa, że się zgodzi)</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* WERE ZAMIAST WAS */}
      <section className="bg-violet-900 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-6 border-b border-violet-700 pb-4 flex items-center gap-3">
          🎩 "Were" dla wszystkich osób
        </h2>
        <p className="mb-4 text-violet-200">
          W normalnym czasie przeszłym mówimy "I was", "he was", "she was". Jednak w drugim trybie warunkowym, aby podkreślić tę <strong>nierealność</strong>, gramatyka nakazuje (lub bardzo mocno zaleca) używać słowa <strong>"were" dla wszystkich osób</strong>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h3 className="font-bold text-emerald-400 mb-2">Bardziej profesjonalnie (Formalnie)</h3>
            <p className="font-mono text-white bg-black/30 px-3 py-2 rounded">If I <strong>were</strong> richer...</p>
            <p className="font-mono text-white bg-black/30 px-3 py-2 rounded mt-2">If she <strong>were</strong> the boss...</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h3 className="font-bold text-slate-400 mb-2">Potocznie (Dopuszczalne na ulicy)</h3>
            <p className="font-mono text-slate-400 bg-black/30 px-3 py-2 rounded">If I <strong>was</strong> richer...</p>
            <p className="font-mono text-slate-400 bg-black/30 px-3 py-2 rounded mt-2">If she <strong>was</strong> the boss...</p>
          </div>
        </div>
        <p className="text-sm text-violet-300 mt-4 italic">* W zwrocie "If I were you" (Gdybym był tobą) zawsze używamy were!</p>
      </section>

    </div>
  );
}

export default SecondConditional;
