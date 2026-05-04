import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, Zap, Clock } from 'lucide-react';

function FuturePerfect() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Future Perfect</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            Czas ostatecznych terminów (Deadline). Używany by dumnie oznajmić: "Spokojnie, do tego czasu na pewno już to skończę!".
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Kiedy Używamy
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Budowa
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Clock size={18} /> Versus: Continuous
        </button>
      </div>

      {/* ZAKŁADKA 1: KIEDY UŻYWAMY */}
      {activeTab === 'theory' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-black text-violet-900 mb-6 flex items-center gap-3">
              <Zap className="text-amber-500" size={32} /> Główne Zastosowania
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-500">
                <h3 className="font-bold text-violet-800 text-xl mb-3">1. Zakończona akcja przed terminem</h3>
                <p className="text-slate-600 mb-4 text-sm">Tworzysz w przyszłości sztuczną "barierę" czasową i gwarantujesz, że zanim ta bariera nadejdzie, Twoja czynność dobiegnie końca.</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-bold text-slate-800">👉 By next Friday, I <strong>will have finished</strong> the report.</p>
                  <p className="font-bold text-slate-800 mt-2">👉 When you arrive, I <strong>will have cooked</strong> dinner.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-violet-500">
                <h3 className="font-bold text-violet-800 text-xl mb-3">2. Czas trwania do przyszłego momentu</h3>
                <p className="text-slate-600 mb-4 text-sm">Używane ze statycznymi czasownikami. Mówimy, ile czasu będzie trwał jakiś stan do konkretnego punktu w przyszłości.</p>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <p className="font-bold text-slate-800">👉 By next year, we <strong>will have been</strong> married for 10 years.</p>
                  <p className="font-bold text-slate-800 mt-2">👉 By 5 PM, I <strong>will have been</strong> here for 8 hours.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-amber-50 border border-amber-200 p-6 rounded-2xl">
              <h3 className="font-bold text-amber-800 text-lg mb-2">⏳ Magiczne słówko: "BY"</h3>
              <p className="text-sm text-amber-900 mb-3">Słówko "BY" oznacza "do (jakiegoś czasu)". Jest absolutnym znakiem firmowym czasu Future Perfect.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded text-sm font-bold shadow-sm text-amber-700">by tomorrow</span>
                <span className="bg-white px-3 py-1 rounded text-sm font-bold shadow-sm text-amber-700">by next week</span>
                <span className="bg-white px-3 py-1 rounded text-sm font-bold shadow-sm text-amber-700">by the end of the year</span>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 2: BUDOWA */}
      {activeTab === 'usage' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              🏗️ Budowa (WILL HAVE + III Forma)
            </h2>
            <div className="bg-red-50 p-4 rounded-xl text-red-900 mb-6 font-bold text-center border border-red-200">
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
        </div>
      )}

      {/* ZAKŁADKA 3: PORÓWNANIE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8 border-b border-slate-700 pb-4 text-center">Ostatni test: Proces czy Koniec?</h2>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white/10 p-6 rounded-2xl flex-1">
                <h3 className="text-xl font-bold text-blue-400 mb-2 uppercase tracking-wider">Future Continuous</h3>
                <p className="font-bold text-xl mb-4 text-white">"At 8 PM, I will be cleaning."</p>
                <p className="text-slate-400 text-sm">O godzinie 20:00 zastaniesz mnie z mopem w dłoni. Będę w połowie pracy. Proces wciąż trwa i będzie trwał dalej.</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl flex-1">
                <h3 className="text-xl font-bold text-emerald-400 mb-2 uppercase tracking-wider">Future Perfect</h3>
                <p className="font-bold text-xl mb-4 text-white">"By 8 PM, I will have cleaned."</p>
                <p className="text-slate-400 text-sm">O godzinie 20:00 mieszkanie będzie lśnić, a ja będę odpoczywać na kanapie. Praca zostanie zakończona <strong>przed</strong> tą godziną.</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default FuturePerfect;