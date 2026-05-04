import React, { useState } from 'react';
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle, ArrowRightLeft, Zap, Info } from 'lucide-react';

function FutureForms() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-violet-100 p-8 rounded-3xl mb-8 border border-violet-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-violet-900 mb-4">Przyszłość (4 Sposoby)</h1>
          <p className="text-lg text-violet-800 max-w-2xl font-medium">
            W języku angielskim nie ma jednego "czasu przyszłego". Wybór zależy od tego, jak bardzo jesteś pewny swoich planów. Poznaj Wielką Czwórkę.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-violet-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Will & Going To
        </button>
        <button 
          onClick={() => setActiveTab('usage')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'usage' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Zap size={18} /> Present w Przyszłości
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <AlertTriangle size={18} /> Wielkie Porównanie
        </button>
      </div>

      {/* ZAKŁADKA 1: WILL VS GOING TO */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          
          {/* 1. WILL */}
          <section className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl">1</div>
              <h2 className="text-3xl font-black text-blue-900">WILL (Spontaniczność i Wróżenie)</h2>
            </div>
            <p className="mb-6 text-slate-700">Słówka <strong>WILL</strong> używamy, gdy nasza przyszłość jest w sferze domysłów, obietnic lub gdy decyzja zapada <em>dokładnie w tej sekundzie</em>. Nie ma tu miejsca na wcześniejsze plany.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 text-lg mb-2">⚡ Spontaniczne decyzje</h4>
                <p className="text-sm text-slate-600 mb-2">Telefon dzwoni? Ktoś puka? Podejmujesz decyzję tu i teraz.</p>
                <p className="font-medium">👉 "I'll answer the phone!"</p>
                <p className="font-medium">👉 "It's cold. I will close the window."</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 text-lg mb-2">🔮 Wróżenie i Przewidywania</h4>
                <p className="text-sm text-slate-600 mb-2">Brak dowodów, po prostu tak nam się wydaje. (Z: I think, I hope, probably).</p>
                <p className="font-medium">👉 "I think robots will rule the world."</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 text-lg mb-2">🤝 Obietnice i Groźby</h4>
                <p className="text-sm text-slate-600 mb-2">Gdy dajemy słowo, że coś zrobimy.</p>
                <p className="font-medium">👉 "I will love you forever."</p>
                <p className="font-medium">👉 "I won't tell anyone, I promise."</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-800 text-lg mb-2">🙋‍♂️ Oferowanie pomocy / Prośby</h4>
                <p className="text-sm text-slate-600 mb-2">Bycie uprzejmym dla innych.</p>
                <p className="font-medium">👉 "I'll carry these bags for you."</p>
                <p className="font-medium">👉 "Will you marry me?"</p>
              </div>
            </div>

            <div className="bg-blue-100 p-5 rounded-2xl">
              <h4 className="font-bold text-blue-900 mb-3 uppercase tracking-wider text-sm">Budowa WILL:</h4>
              <ul className="space-y-2 text-blue-900 font-mono text-sm">
                <li><span className="font-bold text-emerald-600">(+)</span> Osoba + WILL + Czasownik (I'll go)</li>
                <li><span className="font-bold text-red-600">(-)</span> Osoba + WILL NOT (WON'T) + Czasownik (I won't go)</li>
                <li><span className="font-bold text-blue-600">(?)</span> WILL + Osoba + Czasownik? (Will you go?)</li>
              </ul>
            </div>
          </section>

          {/* 2. BE GOING TO */}
          <section className="bg-indigo-50 border border-indigo-200 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-indigo-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl">2</div>
              <h2 className="text-3xl font-black text-indigo-900">BE GOING TO (Intencje i Dowody)</h2>
            </div>
            <p className="mb-6 text-slate-700">Przechodzimy poziom wyżej. <strong>Be going to</strong> to zamierzona przyszłość. Ktoś już wpadł na pomysł, pomyślał o tym i "zamierza" to zrobić.</p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 text-lg mb-2">🎯 Zamiary i plany</h4>
                <p className="text-sm text-slate-600 mb-2">Masz intencję, ale jeszcze nie kupiłeś biletów / nie poczyniłeś fizycznych kroków.</p>
                <p className="font-medium text-indigo-900">👉 "I am going to buy a new car soon."</p>
                <p className="font-medium text-indigo-900">👉 "We are going to visit grandma on Sunday."</p>
              </div>
              <div className="bg-white p-5 rounded-2xl shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-indigo-800 text-lg mb-2">🌧️ Przewidywania oparte na DOWODACH</h4>
                <p className="text-sm text-slate-600 mb-2">Widzisz coś TERAZ, co gwarantuje to, co stanie się za chwilę. Nie zgadujesz, Ty to wiesz.</p>
                <p className="font-medium text-indigo-900">👉 "Look at those clouds! It is going to rain."</p>
                <p className="font-medium text-indigo-900">👉 "Watch out! You are going to fall!"</p>
              </div>
            </div>

            <div className="bg-indigo-100 p-5 rounded-2xl">
              <h4 className="font-bold text-indigo-900 mb-3 uppercase tracking-wider text-sm">Budowa GOING TO:</h4>
              <ul className="space-y-2 text-indigo-900 font-mono text-sm">
                <li><span className="font-bold text-emerald-600">(+)</span> I am / You are / He is + going to + Czasownik</li>
                <li><span className="font-bold text-red-600">(-)</span> I am not / You aren't / He isn't + going to + Czasownik</li>
                <li><span className="font-bold text-indigo-600">(?)</span> Am I / Are you / Is he + going to + Czasownik?</li>
              </ul>
            </div>
          </section>

        </div>
      )}

      {/* ZAKŁADKA 2: PRESENT W PRZYSZŁOŚCI */}
      {activeTab === 'usage' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          
          {/* 3. PRESENT CONTINUOUS */}
          <section className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl">3</div>
              <h2 className="text-3xl font-black text-emerald-900">PRESENT CONTINUOUS (Pewność 100%)</h2>
            </div>
            <p className="mb-6 text-slate-700">Czas teraźniejszy ciągły użyty do przyszłości to <strong>"Aranżacje" (Arrangements)</strong>. Masz bilety w kieszeni, zapłacone wakacje, ustaloną wizytę u lekarza w kalendarzu. Klamka zapadła.</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-emerald-500 mb-8">
              <h4 className="font-bold text-emerald-800 text-lg mb-4">Potwierdzone plany osobiste</h4>
              <ul className="space-y-4 text-emerald-900">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✈️</span>
                  <div>
                    <p className="font-bold">I am flying to Paris on Friday.</p>
                    <p className="text-sm text-emerald-700">Nie "I will fly" (bo to nie spontan). Nie "I am going to fly" (bo już mam kupiony bilet, to nie tylko zamiar).</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🦷</span>
                  <div>
                    <p className="font-bold">She is seeing her dentist tomorrow at 5 PM.</p>
                    <p className="text-sm text-emerald-700">Jest wpisana w system u dentysty. To pewniak.</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* 4. PRESENT SIMPLE */}
          <section className="bg-orange-50 border border-orange-200 p-8 rounded-3xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-600 text-white w-12 h-12 flex items-center justify-center rounded-2xl font-black text-2xl">4</div>
              <h2 className="text-3xl font-black text-orange-900">PRESENT SIMPLE (Harmonogramy)</h2>
            </div>
            <p className="mb-6 text-slate-700">Czas teraźniejszy prosty dla przyszłości dotyczy <strong>tylko rzeczy, na które nie masz wpływu</strong>. Rozkłady jazdy pociągów, godziny otwarcia kin, plany lekcji.</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-orange-500">
              <h4 className="font-bold text-orange-800 text-lg mb-4">Timetables & Schedules</h4>
              <ul className="space-y-3 text-orange-900">
                <li className="font-bold">👉 The train leaves at 8:00 AM tomorrow.</li>
                <li className="font-bold">👉 The movie starts in 10 minutes.</li>
                <li className="font-bold">👉 My flight lands at midnight.</li>
              </ul>
              <p className="mt-4 text-sm text-orange-800 italic">Uwaga: Nawet jeśli w zdaniu jest "tomorrow" (jutro), używamy czasu teraźniejszego, bo pociąg odjeżdża z taką samą rutyną każdego dnia.</p>
            </div>
          </section>

        </div>
      )}

      {/* ZAKŁADKA 3: PORÓWNANIE */}
      {activeTab === 'advanced' && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4">
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black mb-8 border-b border-slate-700 pb-4 text-center">Wielkie Starcie: Jak zmienia się sens zdania?</h2>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-yellow-300 mb-6">SCENARIUSZ: Mówisz znajomemu o imprezie.</h3>
                <ul className="space-y-6">
                  <li className="border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono bg-blue-600 px-3 py-1 rounded text-sm font-bold">WILL</span>
                      <span className="text-xl font-bold text-white">"I will have a party."</span>
                    </div>
                    <p className="text-slate-400 pl-16">Właśnie na to wpadłeś. Rozmawiacie i mówisz: "W sumie... to zrobię imprezę!". Spontan.</p>
                  </li>
                  <li className="border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono bg-indigo-600 px-3 py-1 rounded text-sm font-bold">GOING TO</span>
                      <span className="text-xl font-bold text-white">"I am going to have a party."</span>
                    </div>
                    <p className="text-slate-400 pl-16">Masz taki zamiar od wczoraj. Kupiłeś przekąski, ale nie masz jeszcze daty, nikogo nie zaprosiłeś.</p>
                  </li>
                  <li>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono bg-emerald-600 px-3 py-1 rounded text-sm font-bold">PRES. CONT.</span>
                      <span className="text-xl font-bold text-white">"I am having a party on Saturday."</span>
                    </div>
                    <p className="text-slate-400 pl-16">Pełna organizacja. Goście zaproszeni, tort zamówiony, data w kalendarzu. To się wydarzy.</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default FutureForms;