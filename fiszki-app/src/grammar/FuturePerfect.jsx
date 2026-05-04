import React from 'react';

function FuturePerfect() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Future Perfect</h1>
        <p className="text-xl text-slate-500 font-medium">Czas ostatecznych terminów (Deadline). Używany by dumnie oznajmić: "Spokojnie, do tego czasu na pewno już to skończę!".</p>
      </header>

      {/* KIEDY UŻYWAMY */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🎯 Kiedy używamy tego czasu?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">1. Zakończona akcja przed terminem</h3>
            <p className="text-slate-600 mb-4 text-sm">Tworzysz w przyszłości sztuczną "barierę" czasową i gwarantujesz, że zanim ta bariera nadejdzie, Twoja czynność dobiegnie końca.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 By next Friday, I <strong>will have finished</strong> the report.</p>
              <p className="font-bold text-slate-800 mt-2">👉 When you arrive, I <strong>will have cooked</strong> dinner.</p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h3 className="font-black text-violet-700 text-xl mb-3 border-b pb-2">2. Czas trwania do przyszłego momentu</h3>
            <p className="text-slate-600 mb-4 text-sm">Używane ze statycznymi czasownikami. Mówimy, ile czasu będzie trwał jakiś stan do konkretnego punktu w przyszłości.</p>
            <div className="bg-white p-3 rounded-xl border border-slate-100">
              <p className="font-bold text-slate-800">👉 By next year, we <strong>will have been</strong> married for 10 years.</p>
              <p className="font-bold text-slate-800 mt-2">👉 By 5 PM, I <strong>will have been</strong> here for 8 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BUDOWA ZDANIA */}
      <section>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          🏗️ Budowa (WILL HAVE + III Forma czasownika)
        </h2>
        <div className="bg-orange-50 p-4 rounded-xl text-orange-900 mb-6 font-bold text-center border border-orange-200">
          Uwaga: Zawsze używamy <strong>"HAVE"</strong> (Nigdy "has", nawet dla she/he/it, ponieważ przed nim stoi słówko "will" wymuszające formę podstawową).
        </div>

        <div className="space-y-4">
          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-emerald-900 mb-3 font-bold">Osoba + will have + Czasownik (III forma / -ed)</p>
            <ul className="space-y-2 text-emerald-900">
              <li>👉 By 2050, scientists <strong>will have found</strong> a cure for this disease.</li>
              <li>👉 I <strong>will have painted</strong> the room by Tuesday.</li>
            </ul>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-red-900 mb-3 font-bold">Osoba + won't have + Czasownik (III forma / -ed)</p>
            <ul className="space-y-2 text-red-900">
              <li>👉 I <strong>won't have read</strong> this book by tomorrow.</li>
              <li>👉 They <strong>won't have completed</strong> the bridge by July.</li>
            </ul>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
            <h3 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h3>
            <p className="font-mono bg-white inline-block px-4 py-2 rounded-lg shadow-sm text-blue-900 mb-3 font-bold">Will + Osoba + have + Czasownik (III forma / -ed)?</p>
            <ul className="space-y-2 text-blue-900">
              <li>👉 <strong>Will</strong> you <strong>have finished</strong> by 5 PM?</li>
              <li>👉 <strong>Will</strong> she <strong>have graduated</strong> by next summer?</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FUTURE CONTINUOUS VS FUTURE PERFECT */}
      <section className="bg-violet-600 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-8 border-b border-violet-400 pb-4 text-center">Ostatni test: Proces czy Koniec?</h2>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white/10 p-6 rounded-2xl flex-1">
            <h3 className="text-xl font-bold text-violet-200 mb-2 uppercase tracking-wider">Future Continuous</h3>
            <p className="font-bold text-xl mb-2 text-emerald-300">"At 8 PM, I will be cleaning."</p>
            <p className="text-violet-100 text-sm">O godzinie 20:00 zastaniesz mnie z mopem w dłoni. Będę w połowie pracy. Proces wciąż trwa.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl flex-1">
            <h3 className="text-xl font-bold text-violet-200 mb-2 uppercase tracking-wider">Future Perfect</h3>
            <p className="font-bold text-xl mb-2 text-emerald-300">"By 8 PM, I will have cleaned."</p>
            <p className="text-violet-100 text-sm">O godzinie 20:00 mieszkanie będzie lśnić, a ja będę odpoczywać. Praca zostanie zakończona <strong>przed</strong> tą godziną.</p>
          </div>
        </div>
      </section>

      {/* SŁÓWKA KLUCZOWE */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          ⏳ Magiczne słówko: "BY"
        </h2>
        <p className="mb-4 text-slate-600">Słówko <strong>BY</strong> oznacza "do (jakiegoś czasu)". Jest absolutnym znakiem firmowym czasu Future Perfect.</p>
        <div className="bg-slate-100 p-6 rounded-2xl flex flex-wrap gap-3">
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by tomorrow (do jutra)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by next week (do przyszłego tygodnia)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by the end of the year (do końca roku)</span>
          <span className="bg-white border border-slate-200 text-slate-800 px-4 py-2 rounded-xl font-bold shadow-sm">by the time you arrive (do czasu aż przyjedziesz)</span>
        </div>
      </section>

    </div>
  );
}

export default FuturePerfect;