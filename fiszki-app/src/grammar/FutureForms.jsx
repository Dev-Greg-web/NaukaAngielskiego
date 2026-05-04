import React from 'react';

function FutureForms() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-10">
      
      {/* NAGŁÓWEK */}
      <header className="border-b-2 border-violet-100 pb-6">
        <h1 className="text-4xl md:text-5xl font-black text-violet-700 mb-4">Przyszłość (4 Sposoby)</h1>
        <p className="text-xl text-slate-500 font-medium">W języku angielskim nie ma jednego "czasu przyszłego". Wybór zależy od tego, jak bardzo jesteś pewny swoich planów. Poznaj Wielką Czwórkę.</p>
      </header>

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

        {/* Konstrukcja Will */}
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

        {/* Konstrukcja Going to */}
        <div className="bg-indigo-100 p-5 rounded-2xl">
          <h4 className="font-bold text-indigo-900 mb-3 uppercase tracking-wider text-sm">Budowa GOING TO (Odmiana "to be" + going to):</h4>
          <ul className="space-y-2 text-indigo-900 font-mono text-sm">
            <li><span className="font-bold text-emerald-600">(+)</span> I am / You are / He is + going to + Czasownik</li>
            <li><span className="font-bold text-red-600">(-)</span> I am not / You aren't / He isn't + going to + Czasownik</li>
            <li><span className="font-bold text-indigo-600">(?)</span> Am I / Are you / Is he + going to + Czasownik?</li>
          </ul>
        </div>
      </section>

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

      {/* WIELKIE PORÓWNANIE (VS) */}
      <section className="bg-violet-600 text-white p-8 rounded-3xl shadow-xl mt-12">
        <h2 className="text-3xl font-black mb-8 border-b border-violet-400 pb-4 text-center">Wielkie Starcie: Jak zmienia się sens zdania?</h2>
        
        <div className="space-y-6">
          <div className="bg-white/10 p-6 rounded-2xl">
            <h3 className="text-xl font-bold text-yellow-300 mb-2">SCENARIUSZ: Mówisz znajomemu o imprezie.</h3>
            <ul className="space-y-4">
              <li>
                <span className="font-mono bg-violet-800 px-2 py-1 rounded text-sm font-bold mr-2">WILL</span>
                <span className="text-lg font-bold">"I will have a party."</span><br/>
                <span className="text-violet-200 text-sm">Właśnie na to wpadłeś. Rozmawiacie i mówisz: "W sumie... to zrobię imprezę!".</span>
              </li>
              <li>
                <span className="font-mono bg-violet-800 px-2 py-1 rounded text-sm font-bold mr-2">GOING TO</span>
                <span className="text-lg font-bold">"I am going to have a party."</span><br/>
                <span className="text-violet-200 text-sm">Masz taki zamiar od wczoraj. Kupiłeś przekąski, ale nie masz jeszcze daty, nikogo nie zaprosiłeś.</span>
              </li>
              <li>
                <span className="font-mono bg-violet-800 px-2 py-1 rounded text-sm font-bold mr-2">PRES. CONT.</span>
                <span className="text-lg font-bold">"I am having a party on Saturday."</span><br/>
                <span className="text-violet-200 text-sm">Pełna organizacja. Goście zaproszeni, tort zamówiony, data w kalendarzu. To się wydarzy.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

export default FutureForms;