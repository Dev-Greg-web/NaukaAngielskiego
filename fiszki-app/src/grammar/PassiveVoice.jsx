import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, ShieldAlert } from 'lucide-react';

const PassiveVoice = () => {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800">
      
      {/* NAGŁÓWEK */}
      <div className="bg-amber-100 p-8 rounded-3xl mb-8 border border-amber-200 shadow-sm relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B2 Level</span>
            <span className="text-amber-700 font-bold text-sm">Advanced Grammar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-900 mb-4">Strona Bierna</h1>
          <p className="text-lg text-amber-800 max-w-2xl font-medium">
            (Passive Voice). Używamy jej, gdy to <b>SAMA AKCJA</b> (lub jej obiekt) jest ważniejsza niż osoba, która ją wykonała. Często używana w wiadomościach, formalnych pismach i nauce.
          </p>
        </div>
        <ArrowRightLeft className="absolute -bottom-4 -right-4 text-amber-500/10 w-64 h-64" />
      </div>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Budowa i Zasady
        </button>
        <button 
          onClick={() => setActiveTab('tenses')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'tenses' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <ArrowRightLeft size={18} /> Transformacja Czasów
        </button>
        <button 
          onClick={() => setActiveTab('traps')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'traps' ? 'bg-red-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> Pułapki i "By"
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA */}
      {activeTab === 'theory' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
              <CheckCircle className="text-emerald-500" /> Złota reguła (Złoty Wzór)
            </h2>
            <div className="bg-slate-900 text-white p-6 rounded-2xl text-center mb-6 font-mono text-lg md:text-xl shadow-inner">
              <span className="text-amber-400">Podmiot (Obiekt)</span> + <span className="text-blue-400">odpowiednia forma "TO BE"</span> + <span className="text-emerald-400">Czasownik w III formie (-ed / V3)</span>
            </div>
            
            <p className="text-slate-600 mb-6 text-lg">
              Kluczem do Strony Biernej jest czasownik posiłkowy <b>TO BE</b>. To on przyjmuje na siebie "ciężar" czasu gramatycznego (jest odmieniany przez czasy), podczas gdy główny czasownik zawsze, ale to zawsze, pozostaje w 3. formie.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                <h3 className="font-black text-slate-400 uppercase tracking-wider text-sm mb-3">Strona Czynna (Active)</h3>
                <p className="text-xl font-bold text-slate-700 mb-2">
                  <span className="text-rose-500">Somebody</span> stole <span className="text-amber-600">my car</span>.
                </p>
                <p className="text-sm text-slate-500">Ktoś (wykonawca) ukradł (akcja) mój samochód (obiekt).</p>
              </div>
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 shadow-sm relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md hidden md:block">
                  <ArrowRight className="text-amber-500" />
                </div>
                <h3 className="font-black text-amber-600 uppercase tracking-wider text-sm mb-3">Strona Bierna (Passive)</h3>
                <p className="text-xl font-bold text-amber-900 mb-2">
                  <span className="text-amber-600">My car</span> <span className="text-blue-600">was</span> <span className="text-emerald-600">stolen</span>.
                </p>
                <p className="text-sm text-amber-700/70">Samochód ląduje na początku. "To be" w czasie przeszłym (was) + III forma (stolen).</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 2: CZASY */}
      {activeTab === 'tenses' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          
          <div className="bg-blue-50 p-4 rounded-2xl mb-6 flex items-start gap-3 border border-blue-100">
            <BookOpen className="text-blue-500 shrink-0 mt-1" />
            <p className="text-blue-800 text-sm">
              Zobacz, jak zmienia się <b>TO BE</b> w zależności od czasu. Zwróć uwagę, że główny czasownik (tutaj: <i>clean / cleaned</i>) w Stronie Biernej w ogóle się nie zmienia!
            </p>
          </div>

          <div className="grid gap-4">
            {/* PRZYKŁAD 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-black text-lg mb-4 text-slate-800">1. Present Simple <span className="text-slate-400 font-normal text-sm ml-2">(Fakty, rutyny)</span></h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Active:</div>
                  <div className="font-mono text-slate-700">They <span className="font-bold text-blue-600">clean</span> the office every day.</div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold text-amber-500 mb-1">Passive (am / is / are + V3):</div>
                  <div className="font-mono font-bold text-amber-900">The office <span className="text-blue-600">is</span> <span className="text-emerald-600">cleaned</span> every day.</div>
                </div>
              </div>
            </div>

            {/* PRZYKŁAD 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-black text-lg mb-4 text-slate-800">2. Past Simple <span className="text-slate-400 font-normal text-sm ml-2">(Zakończona przeszłość)</span></h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Active:</div>
                  <div className="font-mono text-slate-700">Shakespeare <span className="font-bold text-blue-600">wrote</span> Hamlet.</div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold text-amber-500 mb-1">Passive (was / were + V3):</div>
                  <div className="font-mono font-bold text-amber-900">Hamlet <span className="text-blue-600">was</span> <span className="text-emerald-600">written</span> by Shakespeare.</div>
                </div>
              </div>
            </div>

            {/* PRZYKŁAD 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-black text-lg mb-4 text-slate-800">3. Present Continuous <span className="text-slate-400 font-normal text-sm ml-2">(Dzieje się teraz)</span></h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Active:</div>
                  <div className="font-mono text-slate-700">They <span className="font-bold text-blue-600">are building</span> a new bridge.</div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold text-amber-500 mb-1">Passive (am/is/are + being + V3):</div>
                  <div className="font-mono font-bold text-amber-900">A new bridge <span className="text-blue-600">is being</span> <span className="text-emerald-600">built</span>.</div>
                </div>
              </div>
            </div>

            {/* PRZYKŁAD 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-black text-lg mb-4 text-slate-800">4. Present Perfect <span className="text-slate-400 font-normal text-sm ml-2">(Skutki w teraźniejszości)</span></h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Active:</div>
                  <div className="font-mono text-slate-700">Someone <span className="font-bold text-blue-600">has eaten</span> my cake!</div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold text-amber-500 mb-1">Passive (has/have + been + V3):</div>
                  <div className="font-mono font-bold text-amber-900">My cake <span className="text-blue-600">has been</span> <span className="text-emerald-600">eaten</span>!</div>
                </div>
              </div>
            </div>
            
             {/* PRZYKŁAD 5 */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-black text-lg mb-4 text-slate-800">5. Future Simple (Will) & Modals</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-slate-50 p-4 rounded-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">Active:</div>
                  <div className="font-mono text-slate-700">You <span className="font-bold text-blue-600">must finish</span> this project.</div>
                </div>
                <div className="flex-1 bg-amber-50 p-4 rounded-xl border border-amber-100">
                  <div className="text-xs font-bold text-amber-500 mb-1">Passive (will/must/can + be + V3):</div>
                  <div className="font-mono font-bold text-amber-900">This project <span className="text-blue-600">must be</span> <span className="text-emerald-600">finished</span>.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: PUŁAPKI */}
      {activeTab === 'traps' && (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-black mb-6 text-slate-800 flex items-center gap-3">
              <ShieldAlert className="text-red-500" /> Kiedy używać "BY", a kiedy nie?
            </h2>
            
            <p className="text-slate-600 mb-8 text-lg">
              Słówko <b>"by"</b> (przez kogoś) dodajemy na końcu zdania w stronie biernej TYLKO wtedy, gdy wykonawca jest konkretny, ważny lub zaskakujący. W 80% przypadków go pomijamy.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                <h3 className="font-black text-emerald-700 uppercase tracking-wider text-sm mb-4">Używamy "BY" (Ważna informacja)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">The painting was sold <b>by Banksy</b>.<br/><span className="text-sm text-slate-500">Kto to sprzedał to kluczowa informacja!</span></span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <CheckCircle className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700">Harry Potter was written <b>by Shakespeare?</b> No!<br/><span className="text-sm text-slate-500">Konkretna, znana osoba.</span></span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                <h3 className="font-black text-red-700 uppercase tracking-wider text-sm mb-4">POMIJAMY (Nieistotne / Oczywiste)</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <X className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 line-through decoration-red-300">My car was stolen by someone.</span>
                  </li>
                  <li className="text-sm text-slate-500 ml-8 -mt-2 mb-2">Oczywiste, że przez "kogoś", nie musimy tego mówić.</li>
                  
                  <li className="flex gap-3 items-start">
                    <X className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-slate-700 line-through decoration-red-300">The suspect was arrested by the police.</span>
                  </li>
                  <li className="text-sm text-slate-500 ml-8 -mt-2">Oczywiste, z reguły aresztuje policja. Wystarczy "The suspect was arrested".</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-900 rounded-2xl text-white">
               <h3 className="text-amber-400 font-bold mb-2">⭐ Ciekawostka (It is said that...)</h3>
               <p className="text-slate-300">
                 W artykułach często zobaczysz strukturę bezosobową: <br/>
                 <i>"People say that he is rich."</i> ➔ <b>"It is said that he is rich."</b> (Mówi się, że...) <br/>
                 To kwintesencja formalnej strony biernej.
               </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PassiveVoice;
