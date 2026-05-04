import React from 'react';
import { Volume2, Mic, Ear, MessageSquare, Play, Info } from 'lucide-react';

// Reużywalny komponent przycisku odtwarzania dźwięku
const PlayButton = ({ soundName, className = "" }) => {
  const handlePlay = () => {
    // 1. Sprawdzamy, czy przeglądarka wspiera syntezator mowy
    if (!('speechSynthesis' in window)) {
      alert("Twoja przeglądarka nie obsługuje syntezatora mowy.");
      return;
    }

    // 2. Czyścimy tekst ze znaków IPA (np. usuwamy ukośniki /ɪ/ -> ɪ)
    // Syntezator przeglądarki lepiej radzi sobie ze zwykłymi słowami niż samymi znakami IPA,
    // ale dla naszych przykładów (np. "though", "an apple") zadziała idealnie.
    const textToRead = soundName.replace(/[\/()]/g, '');

    // 3. Konfigurujemy głos
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = 'en-US'; // Ustawiamy angielski (amerykański)
    utterance.rate = 0.85;     // Lekko zwalniamy tempo (1.0 to standard), żeby było wyraźniej dla początkujących

    // 4. Odtwarzamy!
    window.speechSynthesis.speak(utterance);
  };

  return (
    <button 
      onClick={handlePlay}
      className={`flex items-center gap-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 px-3 py-1.5 rounded-lg text-sm font-bold transition-colors shadow-sm ${className}`}
      title={`Posłuchaj: ${soundName}`}
    >
      <Volume2 size={16} />
      <span className="hidden sm:inline">Posłuchaj</span>
    </button>
  );
};

function PronunciationGuide() {
  return (
    <div className="text-slate-800 text-lg leading-relaxed space-y-12 max-w-5xl mx-auto p-4 md:p-8">
      
      {/* HEADER */}
      <header className="border-b-2 border-indigo-100 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="p-4 bg-indigo-100 rounded-2xl text-indigo-600">
            <Mic size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-indigo-700 text-center md:text-left">Przewodnik Wymowy</h1>
        </div>
        <p className="text-xl text-slate-500 font-medium text-center md:text-left">Opanuj dźwięki języka angielskiego. Zrozum IPA (Międzynarodowy Alfabet Fonetyczny), naucz się akcentowania i mów płynnie jak native speaker.</p>
      </header>

      {/* INSTRUKCJA DLA POCZĄTKUJĄCYCH */}
      <section className="bg-indigo-50 border-2 border-indigo-200 rounded-3xl p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-black text-indigo-800 mb-4 flex items-center gap-2">
          <Info className="text-indigo-600" /> Jak korzystać z tego poradnika? (Dla początkujących)
        </h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm text-indigo-900">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-3 text-lg">1</span>
            <h3 className="font-bold mb-2">Nie kuj symboli na pamięć</h3>
            <p>Traktuj znaczki IPA jak podpowiedzi. Z czasem zaczniesz je rozpoznawać intuicyjnie podczas sprawdzania słówek w słowniku.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-3 text-lg">2</span>
            <h3 className="font-bold mb-2">Używaj głośnika</h3>
            <p>Wymowy uczymy się uchem, nie okiem. Klikaj <strong>Posłuchaj</strong> przy każdej głosce i natychmiast powtarzaj na głos.</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-black mb-3 text-lg">3</span>
            <h3 className="font-bold mb-2">Zacznij od różnic</h3>
            <p>Skup się na dźwiękach, których nie ma w polskim (np. TH, krótkie/długie samogłoski) oraz na zjadaniu liter (Silent Letters).</p>
          </div>
        </div>
      </section>

      {/* SECTION 1: WSTĘP DO IPA */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <Ear className="text-indigo-500" /> Dlaczego pisownia nie równa się wymowie?
        </h2>
        <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
          <p className="mb-6">W języku polskim zazwyczaj czytamy tak, jak piszemy. W angielskim? Absolutnie nie. To samo zestawienie liter może brzmieć zupełnie inaczej w zależności od słowa.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-red-500 mb-3 uppercase tracking-wider text-sm">Zmyłka: "OUGH"</h3>
              <ul className="space-y-3 font-mono text-base">
                <li className="flex justify-between items-center border-b pb-2">
                  <span>th<strong>ough</strong></span> 
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold">/ðoʊ/ (oł)</span>
                    <PlayButton soundName="though" />
                  </div>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span>thr<strong>ough</strong></span> 
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold">/θruː/ (u)</span>
                    <PlayButton soundName="through" />
                  </div>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span>c<strong>ough</strong></span> 
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold">/kɒf/ (of)</span>
                    <PlayButton soundName="cough" />
                  </div>
                </li>
                <li className="flex justify-between items-center pb-2">
                  <span>r<strong>ough</strong></span> 
                  <div className="flex items-center gap-3">
                    <span className="text-indigo-600 font-bold">/rʌf/ (af)</span>
                    <PlayButton soundName="rough" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-slate-600 bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <strong>Rozwiązanie: IPA (International Phonetic Alphabet).</strong> <br/>To system zapisu, w którym jeden symbol ZAWSZE odpowiada jednemu dźwiękowi. Ucząc się tych symboli, zawsze wiesz jak przeczytać słowo w słowniku.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VOWELS (SAMOGŁOSKI) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6">Vowels (Samogłoski)</h2>
        <p className="mb-6 text-slate-600">Angielski ma aż 20 dźwięków samogłoskowych (podczas gdy polski tylko 6!). Dzielą się one na krótkie, długie i podwójne (dyftongi).</p>
        
        {/* KRÓTKIE */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 mt-8">1. Krótkie samogłoski (Short Vowels)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ɪ/</div>
              <PlayButton soundName="/ɪ/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">krótkie, luźne 'i' (między 'i' a 'y')</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">sit, hit, bit</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/sɪt/, /hɪt/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/e/</div>
              <PlayButton soundName="/e/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">krótkie 'e'</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">bed, red, head</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/bed/, /red/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/æ/</div>
              <PlayButton soundName="/æ/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">szerokie 'e' / 'a' (opadająca żuchwa)</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">cat, bat, apple</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/kæt/, /ˈæp.əl/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ʌ/</div>
              <PlayButton soundName="/ʌ/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">krótkie, ostre 'a' (jak w polskim 'akt')</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">cup, luck, bus</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/kʌp/, /bʌs/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ɒ/</div>
              <PlayButton soundName="/ɒ/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">krótkie 'o' (w Brytyjskim, zaokrąglone)</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">hot, pot, box</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/hɒt/, /bɒks/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ʊ/</div>
              <PlayButton soundName="/ʊ/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">krótkie, luźne 'u'</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">put, book, look</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/pʊt/, /bʊk/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ə/</div>
              <PlayButton soundName="/ə/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">Schwa - najczęstszy dźwięk! Słabe 'y/e'</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">about, teacher</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/əˈbaʊt/, /ˈtiː.tʃər/</span>
            </div>
          </div>
        </div>

        {/* DŁUGIE */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 mt-12">2. Długie samogłoski (Long Vowels)</h3>
        <p className="text-slate-600 mb-4">Dwukropek /:/ oznacza, że dźwięk wymawiamy wyraźnie dłużej.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/iː/</div>
              <PlayButton soundName="/iː/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">długie, napięte 'i' (uśmiech)</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">see, heat, tree</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/siː/, /hiːt/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ɑː/</div>
              <PlayButton soundName="/ɑː/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">długie, głębokie 'a' (jak u lekarza)</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">car, far, part</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/kɑːr/, /fɑːr/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ɔː/</div>
              <PlayButton soundName="/ɔː/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">długie 'o'</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">door, more, board</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/dɔːr/, /mɔːr/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/uː/</div>
              <PlayButton soundName="/uː/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">długie, napięte 'u'</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">blue, two, food</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/bluː/, /fuːd/</span>
            </div>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:border-indigo-400 transition-colors">
             <div className="flex justify-between items-start mb-2">
              <div className="text-4xl font-black text-indigo-600">/ɜː/</div>
              <PlayButton soundName="/ɜː/" />
            </div>
            <p className="text-sm text-slate-500 mb-3 h-10">długie, gardłowe 'y/e' (często r przed)</p>
            <div className="bg-slate-50 p-3 rounded-lg">
              <span className="font-bold text-slate-800">bird, word, her</span>
              <span className="block text-xs text-indigo-500 mt-1 font-mono">/bɜːd/, /wɜːd/</span>
            </div>
          </div>
        </div>

        {/* DYFTONGI */}
        <h3 className="text-2xl font-bold text-indigo-700 mb-4 mt-12">3. Dyftongi (Dźwięki podwójne)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
            <PlayButton soundName="/eɪ/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/eɪ/</div>
            <div className="font-bold">say, make</div>
            <div className="text-indigo-500 font-mono text-sm">/seɪ/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
            <PlayButton soundName="/aɪ/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/aɪ/</div>
            <div className="font-bold">my, time</div>
            <div className="text-indigo-500 font-mono text-sm">/maɪ/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
            <PlayButton soundName="/ɔɪ/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/ɔɪ/</div>
            <div className="font-bold">boy, coin</div>
            <div className="text-indigo-500 font-mono text-sm">/bɔɪ/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
             <PlayButton soundName="/oʊ/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/oʊ/</div>
            <div className="font-bold">go, home</div>
            <div className="text-indigo-500 font-mono text-sm">/ɡoʊ/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
             <PlayButton soundName="/aʊ/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/aʊ/</div>
            <div className="font-bold">how, out</div>
            <div className="text-indigo-500 font-mono text-sm">/haʊ/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
             <PlayButton soundName="/ɪə/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/ɪə/</div>
            <div className="font-bold">near, ear</div>
            <div className="text-indigo-500 font-mono text-sm">/nɪə/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
             <PlayButton soundName="/eə/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/eə/</div>
            <div className="font-bold">hair, care</div>
            <div className="text-indigo-500 font-mono text-sm">/heə/</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center relative">
             <PlayButton soundName="/ʊə/" className="absolute top-2 right-2 scale-75" />
            <div className="text-3xl font-black text-slate-700 mb-2 mt-2">/ʊə/</div>
            <div className="font-bold">tour, pure</div>
            <div className="text-indigo-500 font-mono text-sm">/tʊə/</div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CONSONANTS (SPÓŁGŁOSKI) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6">Consonants (Spółgłoski pułapki)</h2>
        <p className="mb-6 text-slate-600">Większość spółgłosek (b, p, d, t, m, n) brzmi niemal jak w polskim. Skupmy się na tych, które sprawiają problemy.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/θ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Bezdźwięczne TH</h3>
                </div>
                <PlayButton soundName="/θ/ (think, bath)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Czubek języka MIĘDZY zębami, wypuszczamy powietrze (bez drgania strun głosowych). Podobne do sepleniącego 's'.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">think /θɪŋk/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">bath /bɑːθ/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/ð/</div>
                  <h3 className="text-xl font-bold text-slate-800">Dźwięczne TH</h3>
                </div>
                <PlayButton soundName="/ð/ (this, mother)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Język między zębami, używamy strun głosowych. Podobne do sepleniącego 'z' lub 'd'.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">this /ðɪs/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">mother /ˈmʌð.ər/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/ʃ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Angielskie SZ</h3>
                </div>
                <PlayButton soundName="/ʃ/ (she, shoe)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Miększe niż polskie 'sz', usta lekko zaokrąglone.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">she /ʃiː/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">action /ˈæk.ʃən/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/ʒ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Angielskie Ż/RZ</h3>
                </div>
                <PlayButton soundName="/ʒ/ (vision)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Miękkie 'ż'. Występuje rzadko, często w słowach z końcówką -sion.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">vision /ˈvɪʒ.ən/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">measure /ˈmeʒ.ər/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/tʃ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Angielskie CZ</h3>
                </div>
                <PlayButton soundName="/tʃ/ (cheese)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Krótkie, ostre cz.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">cheese /tʃiːz/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">catch /kætʃ/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
               <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/dʒ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Angielskie DŻ</h3>
                </div>
                <PlayButton soundName="/dʒ/ (jump)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Zbitka dźwięków d i ż.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">jump /dʒʌmp/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">magic /ˈmædʒ.ɪk/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
               <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/ŋ/</div>
                  <h3 className="text-xl font-bold text-slate-800">Nosowe N (Ng)</h3>
                </div>
                <PlayButton soundName="/ŋ/ (sing)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Dźwięk nosowy, tył języka dotyka podniebienia. 'G' jest zazwyczaj nieme!</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">sing /sɪŋ/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">running /ˈrʌn.ɪŋ/</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-l-4 border-indigo-500 overflow-hidden">
            <div className="p-5">
               <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-indigo-600 w-16 text-center">/j/</div>
                  <h3 className="text-xl font-bold text-slate-800">Dźwięk 'J'</h3>
                </div>
                <PlayButton soundName="/j/ (yes)" />
              </div>
              <p className="text-sm text-slate-600 mb-4">Zapisywane jako j, ale czytane po prostu jak polskie 'j' (w pisowni to często litera Y).</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">yes /jes/</span>
                <span className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded font-mono text-sm font-bold">yellow /ˈjel.oʊ/</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WORD STRESS (AKCENT) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <Mic className="text-indigo-500" /> Akcent w słowie (Word Stress)
        </h2>
        <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl">
          <p className="text-lg mb-6">W polskim akcent pada (prawie) zawsze na przedostatnią sylabę. W angielskim? Akcent jest <strong>ruchomy</strong> i kluczowy dla zrozumienia! Zły akcent może zmienić znaczenie słowa.</p>
          
          <div className="bg-indigo-800/50 p-6 rounded-2xl mb-6">
            <h3 className="text-xl font-bold mb-4 text-indigo-200">Rzeczownik vs Czasownik</h3>
            <p className="mb-4 text-sm text-indigo-100">Często to samo słowo zmienia akcent w zależności od części mowy.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <div className="text-xs uppercase tracking-wider text-indigo-300 mb-1">Rzeczownik (Noun)</div>
                  <div className="font-bold text-xl">RE-cord</div>
                  <div className="text-sm opacity-80 mt-1">płyta, rekord</div>
                </div>
                <PlayButton soundName="RE-cord (noun)" className="!bg-white/20 !text-white hover:!bg-white/30" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                <div>
                  <div className="text-xs uppercase tracking-wider text-indigo-300 mb-1">Czasownik (Verb)</div>
                  <div className="font-bold text-xl">re-CORD</div>
                  <div className="text-sm opacity-80 mt-1">nagrywać</div>
                </div>
                <PlayButton soundName="re-CORD (verb)" className="!bg-white/20 !text-white hover:!bg-white/30" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                 <div>
                  <div className="font-bold text-xl">PRE-sent</div>
                  <div className="text-sm opacity-80 mt-1">prezent</div>
                 </div>
                 <PlayButton soundName="PRE-sent (noun)" className="!bg-white/20 !text-white hover:!bg-white/30" />
              </div>
              <div className="bg-white/10 p-4 rounded-xl flex justify-between items-center">
                 <div>
                  <div className="font-bold text-xl">pre-SENT</div>
                  <div className="text-sm opacity-80 mt-1">prezentować</div>
                 </div>
                 <PlayButton soundName="pre-SENT (verb)" className="!bg-white/20 !text-white hover:!bg-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SILENT LETTERS (CICHE LITERY) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6">Silent Letters (Nieme litery)</h2>
        <p className="mb-6 text-slate-600">Ponad 60% angielskich słów zawiera litery, których NIE czytamy. Dlaczego? Głównie przez zaszłości historyczne.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="know, knife, knight" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent K</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Przed N na początku</p>
            <div className="text-lg space-x-2"><span className="line-through text-slate-400">k</span><span className="font-bold">now</span> <span className="line-through text-slate-400">k</span><span className="font-bold">nife</span></div>
            <div className="text-sm text-slate-700 mt-1">know, knife, knight</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="write, wrong, wrap" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent W</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Przed R na początku</p>
            <div className="text-lg space-x-2"><span className="line-through text-slate-400">w</span><span className="font-bold">rite</span> <span className="line-through text-slate-400">w</span><span className="font-bold">rong</span></div>
            <div className="text-sm text-slate-700 mt-1">write, wrong, wrap</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="climb, bomb, thumb" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent B</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Po M na końcu</p>
            <div className="text-lg space-x-2"><span className="font-bold">climb</span> <span className="line-through text-slate-400">b</span></div>
            <div className="text-sm text-slate-700 mt-1">climb, bomb, thumb</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="walk, talk, half" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent L</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">W grupach -alk, -alm</p>
            <div className="text-lg space-x-2"><span className="font-bold">walk</span> <span className="font-bold">talk</span></div>
            <div className="text-sm text-slate-700 mt-1">walk, talk, half</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="listen, castle" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent T</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">W -stle, -sten</p>
            <div className="text-lg space-x-2"><span className="font-bold">listen</span> <span className="font-bold">castle</span></div>
            <div className="text-sm text-slate-700 mt-1">listen, castle</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="hour, honest, honor" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent H</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Słowa z francuskiego</p>
            <div className="text-lg space-x-2"><span className="line-through text-slate-400">h</span><span className="font-bold">our</span> <span className="line-through text-slate-400">h</span><span className="font-bold">onest</span></div>
            <div className="text-sm text-slate-700 mt-1">hour, honest, honor</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
            <PlayButton soundName="sign, foreign, design" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent G</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Przed N</p>
            <div className="text-lg space-x-2"><span className="font-bold">sign</span> <span className="font-bold">foreign</span></div>
            <div className="text-sm text-slate-700 mt-1">sign, foreign, design</div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 relative">
             <PlayButton soundName="muscle, science" className="absolute top-2 right-2 scale-75" />
            <h4 className="font-black text-red-500 mb-1">Silent C</h4>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Po S w -sc-</p>
            <div className="text-lg space-x-2"><span className="font-bold">muscle</span> <span className="font-bold">science</span></div>
            <div className="text-sm text-slate-700 mt-1">muscle, science</div>
          </div>
        </div>
      </section>

      {/* SECTION 6: INTONATION (INTONACJA) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
          <MessageSquare className="text-indigo-500" /> Melodia Zdania (Intonacja)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl relative overflow-hidden">
             <PlayButton soundName="Intonacja opadająca" className="absolute top-4 right-4 z-10" />
            <h3 className="text-xl font-black text-emerald-800 mb-2 mt-8 md:mt-0">Intonacja opadająca ↘</h3>
            <p className="text-emerald-700 text-sm mb-4">Głos opada na końcu zdania. Pokazuje pewność siebie i zakończenie myśli.</p>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-lg shadow-sm border border-emerald-100">
                <span className="text-xs font-bold text-slate-400 block">1. Zdania oznajmujące</span>
                <span className="font-bold text-slate-800">I live in Lon<span className="text-emerald-600">don ↘</span></span>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm border border-emerald-100">
                <span className="text-xs font-bold text-slate-400 block">2. Pytania o szczegóły (W/H questions)</span>
                <span className="font-bold text-slate-800">What is your <span className="text-emerald-600">name ↘</span></span>
              </li>
            </ul>
          </div>
          <div className="bg-orange-50 border border-orange-200 p-6 rounded-2xl relative overflow-hidden">
             <PlayButton soundName="Intonacja wznosząca" className="absolute top-4 right-4 z-10" />
            <h3 className="text-xl font-black text-orange-800 mb-2 mt-8 md:mt-0">Intonacja wznosząca ↗</h3>
            <p className="text-orange-700 text-sm mb-4">Głos idzie w górę na końcu. Pokazuje niepewność, zaskoczenie lub że oczekujemy na odpowiedź Tak/Nie.</p>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded-lg shadow-sm border border-orange-100">
                <span className="text-xs font-bold text-slate-400 block">1. Pytania Tak/Nie (Yes/No questions)</span>
                <span className="font-bold text-slate-800">Do you like <span className="text-orange-600">coffee ↗</span></span>
              </li>
              <li className="bg-white p-3 rounded-lg shadow-sm border border-orange-100">
                <span className="text-xs font-bold text-slate-400 block">2. Wyliczanie (wznosi się, na ostatnim opada)</span>
                <span className="font-bold text-slate-800">I bought <span className="text-orange-600">milk ↗</span>, <span className="text-orange-600">eggs ↗</span>, and <span className="text-emerald-600">bread ↘</span></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: CONNECTED SPEECH (ŁĄCZENIE WYRAZÓW) */}
      <section>
        <h2 className="text-3xl font-black text-slate-800 mb-6">Mów jak Native: Connected Speech</h2>
        <p className="mb-6 text-slate-600">Native speakerzy rzadko robią przerwy między słowami. Słowa zlewają się w jedną całość.</p>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-indigo-700">Catenation (Spółgłoska + Samogłoska)</h3>
              <PlayButton soundName="an apple, stop it" />
            </div>
            <p className="text-slate-600 text-sm mb-4">Kiedy słowo kończy się na spółgłoskę, a następne zaczyna na samogłoskę, łączymy je.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">an apple</span>
                <span className="font-black text-slate-800">👉 a napple</span>
              </div>
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">stop it</span>
                <span className="font-black text-slate-800">👉 sto pit</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-indigo-700">Elision (Znikające dźwięki)</h3>
              <PlayButton soundName="next door, I don't know" />
            </div>
            <p className="text-slate-600 text-sm mb-4">W szybkiej mowie niektóre dźwięki (zwłaszcza /t/ i /d/ w środku grup spółgłoskowych) całkowicie znikają.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">next door</span>
                <span className="font-black text-slate-800">👉 nex door</span>
              </div>
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">I don't know</span>
                <span className="font-black text-slate-800">👉 I dunno</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
             <div className="flex justify-between items-center mb-2">
              <h3 className="text-xl font-bold text-indigo-700">Assimilation (Zmieniające się dźwięki)</h3>
              <PlayButton soundName="did you, want you" />
            </div>
            <p className="text-slate-600 text-sm mb-4">Dźwięki na styku wyrazów wpływają na siebie i tworzą nowy dźwięk (często d+j = dż, t+j = cz).</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">did you</span>
                <span className="font-black text-slate-800">👉 didża</span>
              </div>
              <div className="bg-slate-50 px-4 py-3 rounded-xl flex-1 flex justify-between items-center border border-slate-100">
                <span className="text-slate-400 line-through">want you</span>
                <span className="font-black text-slate-800">👉 woncza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 p-6 bg-slate-900 text-slate-300 rounded-3xl text-center">
        <p className="font-bold text-white text-xl mb-2">Pamiętaj!</p>
        <p>Wymowy nie da się nauczyć z samej kartki. Najlepszy sposób to <strong>Shadowing</strong> (słuchanie native speakera i natychmiastowe powtarzanie na głos, starając się imitować melodię i rytm). Używaj słowników online, aby odsłuchiwać symboli IPA!</p>
      </div>

    </div>
  );
}

export default PronunciationGuide;