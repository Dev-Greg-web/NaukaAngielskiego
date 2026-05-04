import React from 'react';

function ZeroConditional() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-teal-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-teal-600 mb-4">Zero Conditional</h1>
        <p className="text-xl text-slate-500 font-medium">Zerowy tryb warunkowy. Fakty, prawa fizyki i niezmienne prawdy. Gwarancja 100%.</p>
      </header>

      {/* WYTŁUMACZENIE LOGIKI */}
      <section className="bg-teal-50 p-8 rounded-3xl border border-teal-200 shadow-sm">
        <h2 className="text-2xl font-black text-teal-900 mb-4">🧠 100% Pewności</h2>
        <p className="mb-6 text-teal-800">Zerowy tryb warunkowy to nie jest "gdybanie". To stwierdzanie nagich faktów. Mówi o sytuacjach, w których warunek <strong>zawsze</strong> prowadzi do tego samego rezultatu.</p>
        
        <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-teal-500">
            <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Warunek (Jeśli...)</span>
            <p className="font-bold text-lg mb-2">Jeśli podgrzewasz wodę do 100 stopni,</p>
            <p className="text-sm text-slate-500">Rzecz, którą musisz zrobić (zawsze w Present Simple).</p>
            <p className="mt-4 font-mono font-bold text-teal-700">If you heat water to 100°C,</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-3xl text-teal-300">➡️</span>
          </div>
          <div className="flex-1 bg-white p-5 rounded-2xl shadow-sm border-t-4 border-emerald-500">
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-3 inline-block">Rezultat (Zawsze)</span>
            <p className="font-bold text-lg mb-2">to ona wrze.</p>
            <p className="text-sm text-slate-500">Naturalny skutek (też zawsze w Present Simple!).</p>
            <p className="mt-4 font-mono font-bold text-emerald-700">it boils.</p>
          </div>
        </div>
      </section>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy zerowego trybu?
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">🌍</div>
            <div>
              <h3 className="font-bold text-teal-700 text-xl mb-1">Prawa natury i nauka</h3>
              <p className="text-slate-600 mb-2">Zjawiska, których nie da się oszukać.</p>
              <p className="font-medium">👉 If you <strong>mix</strong> red and blue, you <strong>get</strong> purple.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">⚙️</div>
            <div>
              <h3 className="font-bold text-teal-700 text-xl mb-1">Działanie maszyn (Instrukcje)</h3>
              <p className="text-slate-600 mb-2">Opis jak coś działa.</p>
              <p className="font-medium">👉 If you <strong>press</strong> this button, the machine <strong>stops</strong>.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex gap-4">
            <div className="text-4xl">🧘‍♂️</div>
            <div>
              <h3 className="font-bold text-teal-700 text-xl mb-1">Osobiste nawyki</h3>
              <p className="text-slate-600 mb-2">Nasze własne, niezmienne zasady w określonych sytuacjach.</p>
              <p className="font-medium">👉 If I <strong>drink</strong> coffee late, I <strong>don't sleep</strong> well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (Present Simple w obu częściach)
        </h2>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Wzór podstawowy</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">If + Present Simple, Present Simple</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 If it <strong>rains</strong>, the grass <strong>gets</strong> wet.</li>
              <li>👉 If people <strong>eat</strong> too much, they <strong>get</strong> fat.</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Odwrócona kolejność</h3>
            <p className="text-blue-900 mb-2">Możesz zamienić części zdania miejscami. Wtedy po prostu <strong>usuwasz przecinek</strong>!</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 The grass <strong>gets</strong> wet if it <strong>rains</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WYJĄTKI / PORADY */}
      <section className="bg-teal-900 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-6 border-b border-teal-700 pb-4 flex items-center gap-3">
          💡 Ważne Porady (Tips & Tricks)
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h3 className="font-bold text-amber-400 mb-2">1. IF = WHEN</h3>
            <p className="text-sm text-slate-300 mb-3">Tylko w zerowym trybie możesz śmiało podmienić "if" na "when" bez zmiany znaczenia.</p>
            <p className="font-mono text-white bg-black/30 px-3 py-2 rounded"><strong>When</strong> you mix red and blue, you get purple.</p>
          </div>
          <div className="bg-white/10 p-5 rounded-2xl border border-white/20">
            <h3 className="font-bold text-rose-400 mb-2">2. Tryb Rozkazujący w rezultacie</h3>
            <p className="text-sm text-slate-300 mb-3">Rezultatem nie musi być zwykłe zdanie. Może to być polecenie (rozkaz).</p>
            <p className="font-mono text-white bg-black/30 px-3 py-2 rounded">If you see John, <strong>tell</strong> him to call me.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ZeroConditional;
