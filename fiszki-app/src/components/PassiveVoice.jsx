import React, { useState } from 'react';
import { 
  ArrowRight, BookOpen, AlertTriangle, CheckCircle, 
  ArrowRightLeft, ShieldAlert, X, Zap, Clock 
} from 'lucide-react';

function PassiveVoice() {
  const [activeTab, setActiveTab] = useState('theory');

  return (
    <div className="bg-slate-50 min-h-screen rounded-3xl p-2 md:p-6 font-sans text-slate-800 pb-20">
      
      {/* NAGŁÓWEK */}
      <header className="bg-amber-100 p-8 rounded-3xl mb-8 border border-amber-200 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <ArrowRightLeft size={120} />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-widest">B2 Level</span>
            <span className="text-amber-700 font-bold text-sm">Advanced Grammar</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-amber-900 mb-4">Strona Bierna (Passive Voice)</h1>
          <p className="text-lg text-amber-800 max-w-2xl font-medium">
            Przenosimy światło reflektorów z tego, KTO coś zrobił, na to, CO zostało zrobione. Opanowanie jej to klucz do poziomu B2/C1.
          </p>
        </div>
      </header>

      {/* ZAKŁADKI NAWIGACYJNE */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-2 rounded-2xl shadow-sm border border-slate-200">
        <button 
          onClick={() => setActiveTab('theory')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'theory' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <BookOpen size={18} /> Zrozumienie i Budowa
        </button>
        <button 
          onClick={() => setActiveTab('tenses')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'tenses' ? 'bg-amber-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <Clock size={18} /> Przegląd Czasów
        </button>
        <button 
          onClick={() => setActiveTab('advanced')}
          className={`flex-1 py-3 px-4 rounded-xl font-bold transition flex items-center justify-center gap-2 ${activeTab === 'advanced' ? 'bg-red-500 text-white shadow-md' : 'text-slate-500 hover:bg-slate-100'}`}
        >
          <ShieldAlert size={18} /> Poziom Zaawansowany (C1)
        </button>
      </div>

      {/* ZAKŁADKA 1: TEORIA I BUDOWA */}
      {activeTab === 'theory' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          
          {/* WYTŁUMACZENIE LOGIKI */}
          <section className="bg-amber-50 p-8 rounded-3xl border border-amber-200 shadow-sm relative overflow-hidden">
             <div className="relative z-10">
              <h2 className="text-3xl font-black text-amber-900 mb-4">🧠 Zrozumieć "Bierność"</h2>
              <p className="mb-6 text-amber-800">W standardowym zdaniu (stronie czynnej) najważniejszy jest <strong>wykonawca</strong> akcji. Ktoś coś robi. W stronie biernej odwracamy kota ogonem – <strong>obiekt</strong>, na którym wykonano akcję, ląduje na początku i staje się głównym bohaterem zdania.</p>
              
              <div className="flex flex-col md:flex-row gap-4 items-stretch mb-6">
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-slate-400">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Strona Czynna (Active)</span>
                  <p className="font-bold text-xl mb-2"><span className="text-rose-500">Somebody</span> stole <span className="text-amber-500">my bike</span>.</p>
                  <p className="text-sm text-slate-500 mt-2">Ktoś (złodziej) ukradł (akcja) mój rower (obiekt). Podmiotem jest sprawca.</p>
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl text-amber-300 transform md:rotate-0 rotate-90">➡️</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-2xl shadow-sm border-t-4 border-amber-500">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4 inline-block">Strona Bierna (Passive)</span>
                  <p className="font-bold text-xl mb-2"><span className="text-amber-500">My bike</span> was stolen.</p>
                  <p className="text-sm text-slate-500 mt-2">Mój rower wędruje na początek! Nie wiemy (albo nie obchodzi nas), kto to zrobił.</p>
                </div>
              </div>
            </div>
          </section>

          {/* KIEDY UŻYWAMY */}
          <section>
            <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Zap className="text-amber-500" size={32} /> Kiedy jej używamy?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-amber-700 text-xl mb-2">1. Nie wiemy, kto to zrobił</h3>
                <p className="text-slate-600 text-sm mb-3">Sprawca jest anonimowy, nieznany lub po prostu uciekł.</p>
                <p className="font-mono bg-white inline-block px-3 py-1 rounded border border-slate-200">My window <strong>has been broken</strong>.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-amber-700 text-xl mb-2">2. Sprawca jest oczywisty</h3>
                <p className="text-slate-600 text-sm mb-3">Nie musimy mówić "policja aresztowała", bo to jasne z kontekstu.</p>
                <p className="font-mono bg-white inline-block px-3 py-1 rounded border border-slate-200">The thief <strong>was arrested</strong> yesterday.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-amber-700 text-xl mb-2">3. Akcja jest najważniejsza</h3>
                <p className="text-slate-600 text-sm mb-3">Chcemy pochwalić się wynikiem, a nie osobą pracownika.</p>
                <p className="font-mono bg-white inline-block px-3 py-1 rounded border border-slate-200">This bridge <strong>was built</strong> in 1990.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-amber-700 text-xl mb-2">4. Język formalny / Nauka</h3>
                <p className="text-slate-600 text-sm mb-3">Eseje, wiadomości w TV, raporty policyjne, instrukcje.</p>
                <p className="font-mono bg-white inline-block px-3 py-1 rounded border border-slate-200">The liquid <strong>is heated</strong> to 100°C.</p>
              </div>
            </div>
          </section>

          {/* ZŁOTA ZASADA */}
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl border border-slate-800">
            <h2 className="text-3xl font-black mb-6 text-amber-400 flex items-center gap-3">
              <CheckCircle size={32} /> Złota Zasada (Zawsze 2 elementy)
            </h2>
            <p className="text-lg text-slate-300 mb-6">Niezależnie od tego, jakiego czasu używasz (przeszłego, teraźniejszego czy przyszłego), strona bierna <strong>ZAWSZE</strong> składa się z dwóch nierozerwalnych elementów:</p>
            
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-1 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-black text-blue-400 mb-2">1. "TO BE"</h3>
                <p className="text-slate-400 text-sm">To on przyjmuje na siebie cały ciężar bycia w danym czasie. Zmienia się w <em className="text-white">is, are, was, were, has been, will be</em> itd.</p>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-4xl text-slate-600">+</span>
              </div>
              <div className="flex-1 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-2xl font-black text-emerald-400 mb-2">2. III FORMA (V3)</h3>
                <p className="text-slate-400 text-sm">Główny czasownik opisujący akcję. <strong>Nigdy się nie zmienia!</strong> Zawsze dostaje końcówkę <em>-ed</em> albo jest 3. formą z tabelki.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ZAKŁADKA 2: PRZEGLĄD CZASÓW */}
      {activeTab === 'tenses' && (
        <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4">
          <p className="text-slate-600 text-xl">Poniżej zobaczysz, jak strona bierna zachowuje się w różnych czasach. Zwróć uwagę, że główny czasownik (u nas: <strong>clean ➔ cleaned</strong>) dosłownie "stoi w miejscu", a całą magię wykonuje operator "to be".</p>

          {/* 1. PRESENT SIMPLE */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-200 rounded-full"></div>
            <h3 className="text-3xl font-black text-amber-700 mb-2 pl-4">1. Present Simple</h3>
            <p className="text-slate-500 mb-6 pl-4 font-medium">Używamy do rutyny, faktów i procesów powtarzalnych.</p>
            
            <div className="space-y-4 pl-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-emerald-900 mb-3 font-bold">Obiekt + am / is / are + V3</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 The room <strong>is cleaned</strong> every day. <span className="text-sm opacity-70">(Pokój jest sprzątany...)</span></li>
                  <li>👉 These cars <strong>are made</strong> in Japan. <span className="text-sm opacity-70">(Te auta są produkowane...)</span></li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-red-900 mb-3 font-bold">Obiekt + am not / isn't / aren't + V3</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 The room <strong>isn't cleaned</strong> every day.</li>
                  <li>👉 These computers <strong>aren't used</strong> anymore.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-blue-900 mb-3 font-bold">Am / Is / Are + Obiekt + V3?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Is</strong> the room <strong>cleaned</strong> every day?</li>
                  <li>👉 <strong>Are</strong> these cars <strong>made</strong> in Japan?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. PAST SIMPLE */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-300 rounded-full"></div>
            <h3 className="text-3xl font-black text-amber-700 mb-2 pl-4">2. Past Simple</h3>
            <p className="text-slate-500 mb-6 pl-4 font-medium">Używamy do zakończonych akcji w przeszłości (znamy czas wykonania).</p>
            
            <div className="space-y-4 pl-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-emerald-900 mb-3 font-bold">Obiekt + was / were + V3</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 The room <strong>was cleaned</strong> yesterday. <span className="text-sm opacity-70">(Pokój został posprzątany...)</span></li>
                  <li>👉 The keys <strong>were found</strong> under the table.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-red-900 mb-3 font-bold">Obiekt + wasn't / weren't + V3</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 The room <strong>wasn't cleaned</strong> yesterday.</li>
                  <li>👉 The thieves <strong>weren't caught</strong>.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-blue-900 mb-3 font-bold">Was / Were + Obiekt + V3?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Was</strong> the room <strong>cleaned</strong> yesterday?</li>
                  <li>👉 When <strong>were</strong> the keys <strong>found</strong>?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3. PRESENT CONTINUOUS */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-400 rounded-full"></div>
            <h3 className="text-3xl font-black text-amber-700 mb-2 pl-4">3. Present Continuous</h3>
            <p className="text-slate-500 mb-6 pl-4 font-medium">Używamy, gdy akcja dzieje się WŁAŚNIE TERAZ. Musimy dodać słówko "being", by zachować "ciągłość".</p>
            
            <div className="space-y-4 pl-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-emerald-900 mb-3 font-bold">Obiekt + am/is/are + <span className="text-rose-500">being</span> + V3</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 The room <strong>is being cleaned</strong> right now. <span className="text-sm opacity-70">(jest właśnie sprzątany)</span></li>
                  <li>👉 The computers <strong>are being fixed</strong>.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-red-900 mb-3 font-bold">Obiekt + isn't / aren't + <span className="text-rose-500">being</span> + V3</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 The room <strong>isn't being cleaned</strong> right now.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-blue-900 mb-3 font-bold">Is / Are + Obiekt + <span className="text-rose-500">being</span> + V3?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Is</strong> the room <strong>being cleaned</strong> at the moment?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 4. PRESENT PERFECT */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-500 rounded-full"></div>
            <h3 className="text-3xl font-black text-amber-700 mb-2 pl-4">4. Present Perfect</h3>
            <p className="text-slate-500 mb-6 pl-4 font-medium">Używamy do akcji, która została zakończona (przed chwilą lub niedawno), a my widzimy jej skutek teraz.</p>
            
            <div className="space-y-4 pl-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-emerald-900 mb-3 font-bold">Obiekt + has / have + <span className="text-rose-500">been</span> + V3</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 The room <strong>has been cleaned</strong>. <span className="text-sm opacity-70">(Został posprzątany i jest czysto)</span></li>
                  <li>👉 All the tickets <strong>have been sold</strong>.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-red-900 mb-3 font-bold">Obiekt + hasn't / haven't + <span className="text-rose-500">been</span> + V3</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 The room <strong>hasn't been cleaned</strong> yet.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-blue-900 mb-3 font-bold">Has / Have + Obiekt + <span className="text-rose-500">been</span> + V3?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Has</strong> the room <strong>been cleaned</strong>?</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. FUTURE SIMPLE & MODALS */}
          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-amber-600 rounded-full"></div>
            <h3 className="text-3xl font-black text-amber-700 mb-2 pl-4">5. Future (Will) & Modals (Can, Must, Should)</h3>
            <p className="text-slate-500 mb-6 pl-4 font-medium">Najprostsza konstrukcja! Słowa takie jak will, can, must wymagają po sobie bezokolicznika, więc używamy po prostu "be".</p>
            
            <div className="space-y-4 pl-4">
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-emerald-800 mb-3 text-xl">Twierdzenia (+)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-emerald-900 mb-3 font-bold">Obiekt + will / can / must + <span className="text-rose-500">be</span> + V3</p>
                <ul className="space-y-2 text-emerald-900">
                  <li>👉 The room <strong>will be cleaned</strong> tomorrow.</li>
                  <li>👉 The problem <strong>must be solved</strong> immediately.</li>
                  <li>👉 This game <strong>can be played</strong> online.</li>
                </ul>
              </div>
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-red-800 mb-3 text-xl">Przeczenia (-)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-red-900 mb-3 font-bold">Obiekt + won't / shouldn't + <span className="text-rose-500">be</span> + V3</p>
                <ul className="space-y-2 text-red-900">
                  <li>👉 The room <strong>won't be cleaned</strong> until Friday.</li>
                  <li>👉 Children <strong>shouldn't be left</strong> alone.</li>
                </ul>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-2xl">
                <h4 className="font-bold text-blue-800 mb-3 text-xl">Pytania (?)</h4>
                <p className="font-mono bg-white inline-block px-4 py-2 rounded shadow-sm text-blue-900 mb-3 font-bold">Will / Can / Should + Obiekt + <span className="text-rose-500">be</span> + V3?</p>
                <ul className="space-y-2 text-blue-900">
                  <li>👉 <strong>Will</strong> the room <strong>be cleaned</strong> tomorrow?</li>
                  <li>👉 <strong>Can</strong> this <strong>be fixed</strong>?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ZAKŁADKA 3: ZAAWANSOWANE */}
      {activeTab === 'advanced' && (
        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4">
          
          {/* PUŁAPKI: BY VS WITH */}
          <section className="bg-rose-50 border border-rose-200 p-8 rounded-3xl">
            <h2 className="text-3xl font-black text-rose-800 mb-6 flex items-center gap-3">
              <AlertTriangle size={32} /> Pułapki: "By" czy "With"?
            </h2>
            <p className="text-rose-900 mb-6">Gdy chcemy dodać dodatkową informację na końcu zdania w stronie biernej, musimy wybrać odpowiedni przyimek.</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-black text-emerald-600 text-xl mb-2 flex items-center gap-2"><CheckCircle size={20} /> Używamy "BY" (Osoby)</h3>
                <p className="text-sm text-slate-600 mb-3">Gdy mówimy o OSOBIE lub instytucji, która wykonała akcję. (Tylko jeśli to ważne!).</p>
                <p className="font-medium">👉 Romeo and Juliet was written <strong>by Shakespeare</strong>.</p>
                <p className="font-medium mt-2">👉 The suspect was seen <strong>by two witnesses</strong>.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-rose-100">
                <h3 className="font-black text-blue-600 text-xl mb-2 flex items-center gap-2"><BookOpen size={20} /> Używamy "WITH" (Narzędzia)</h3>
                <p className="text-sm text-slate-600 mb-3">Gdy mówimy o NARZĘDZIU, obiekcie lub materiale użytym do wykonania akcji.</p>
                <p className="font-medium">👉 The window was broken <strong>with a hammer</strong>.</p>
                <p className="font-medium mt-2">👉 The soup was eaten <strong>with a wooden spoon</strong>.</p>
              </div>
            </div>
          </section>

          {/* DWA DOPEŁNIENIA */}
          <section className="bg-slate-100 p-8 rounded-3xl border border-slate-200">
            <h2 className="text-3xl font-black text-slate-800 mb-6 flex items-center gap-3">
              <ArrowRightLeft size={32} className="text-amber-500" /> Dwa dopełnienia (Poziom C1)
            </h2>
            <p className="text-slate-700 mb-6">Niektóre czasowniki (jak <em>give, send, offer, show</em>) mają dwa obiekty. Np. "Ktoś dał <strong>[mi]</strong> <strong>[książkę]</strong>". W takich sytuacjach możemy stworzyć <strong>dwa różne zdania</strong> w stronie biernej!</p>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-amber-500 mb-4">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Strona czynna</p>
              <p className="font-mono text-xl text-slate-800">They gave <span className="text-blue-500">me</span> <span className="text-emerald-500">a book</span>.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <p className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Opcja 1 (Osoba na początku)</p>
                <p className="font-mono text-xl font-bold text-blue-900 mb-2"><span className="text-blue-600">I</span> was given a book.</p>
                <p className="text-sm text-slate-600">Anglicy ZDECYDOWANIE wolą tę wersję. Brzmi naturalniej w mowie potocznej.</p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200">
                <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">Opcja 2 (Rzecz na początku)</p>
                <p className="font-mono text-xl font-bold text-emerald-900 mb-2"><span className="text-emerald-600">A book</span> was given to me.</p>
                <p className="text-sm text-slate-600">Wymaga dodania "to" przed osobą. Jest bardziej formalne i "sztywne".</p>
              </div>
            </div>
          </section>

          {/* IMPERSONAL PASSIVE */}
          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-black text-emerald-400 mb-6 flex items-center gap-3">
              <ShieldAlert size={32} /> Konstrukcje "Mówi się, że..." (Impersonal)
            </h2>
            <p className="text-slate-300 mb-6">
              Czytając wiadomości (BBC, CNN), rzadko zobaczysz "People say that the president is sick" (Ludzie mówią, że...). Dziennikarze uwielbiają używać bezosobowych form strony biernej, by brzmieć obiektywnie.
            </p>

            <div className="space-y-4">
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-amber-400 mb-2">Wersja 1: Z "IT" na początku</h3>
                <p className="text-sm text-slate-400 mb-3">Najprostsza konstrukcja. Używamy z czasownikami: <em>say, believe, think, report</em>.</p>
                <p className="font-mono text-white text-lg">👉 <strong>It is said that</strong> he is very rich.</p>
                <p className="text-slate-400 text-sm mt-1">(Mówi się, że on jest bardzo bogaty).</p>
                <p className="font-mono text-white text-lg mt-3">👉 <strong>It was reported that</strong> the boss resigned.</p>
                <p className="text-slate-400 text-sm mt-1">(Zgłoszono/Poinformowano, że szef zrezygnował).</p>
              </div>
              
              <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <h3 className="text-xl font-bold text-rose-400 mb-2">Wersja 2: Osoba na początku + TO (Bardzo zaawansowane!)</h3>
                <p className="text-sm text-slate-400 mb-3">Zamiast "it", bierzemy bohatera plotki na sam początek. Po stronie biernej musimy dać bezokolicznik z "to".</p>
                <p className="font-mono text-white text-lg">👉 <strong>He is said to be</strong> very rich.</p>
                <p className="text-slate-400 text-sm mt-1">(On jest mówiony być bardzo bogatym - tak myślą Anglicy!).</p>
                <p className="font-mono text-white text-lg mt-3">👉 <strong>The boss is reported to have resigned</strong>.</p>
                <p className="text-slate-400 text-sm mt-1">(Szef jest zgłoszony mieć zrezygnowanym - to dotyczy przeszłości).</p>
              </div>
            </div>
          </section>
        </div>
      )}

    </div>
  );
}

export default PassiveVoice;