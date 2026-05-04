import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import { 
  Upload, RotateCcw, Check, X, Play, Flame, Calendar, 
  Zap, Map, ArrowLeft, Trophy, CheckCircle, Lock, BookOpen, 
  Library, ChevronRight, Volume2, Ear, ArrowRightLeft, 
  Shield, User, LogOut, Key, Trash2, UserPlus, Users
} from 'lucide-react';

import PresentSimple from './grammar/PresentSimple';
import PastSimple from './grammar/PastSimple';
import PresentPerfect from './grammar/PresentPerfect';
import PresentContinuous from './grammar/PresentContinuous';
import PastContinuous from './grammar/PastContinuous';
import FutureForms from './grammar/FutureForms';
import PastPerfect from './grammar/PastPerfect';
import PresentPerfectContinuous from './grammar/PresentPerfectContinuous';
import FutureContinuous from './grammar/FutureContinuous';
import FuturePerfect from './grammar/FuturePerfect';
import PastPerfectContinuous from './grammar/PastPerfectContinuous';
import FuturePerfectContinuous from './grammar/FuturePerfectContinuous';

import PronunciationGuide from './PronunciationGuide';

const INTERVALS = [0, 1, 3, 7, 14, 30, 90];
const getTodayStr = () => new Date().toISOString().split('T')[0];
const addDaysStr = (days) => {
  const d = new Date(); d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
};

const GRAMMAR_CATEGORIES = [
  {
    id: 'present',
    title: 'Czasy Teraźniejsze (Present Tenses)',
    colorClass: 'text-emerald-600',
    borderHover: 'hover:border-emerald-400',
    iconHover: 'group-hover:bg-emerald-100 group-hover:text-emerald-600',
    lessons: [
      { id: 'present_simple', title: 'Present Simple', desc: 'Rutyny, fakty i nawyki.', component: <PresentSimple /> },
      { id: 'present_continuous', title: 'Present Continuous', desc: 'Dzieje się tu i teraz!', component: <PresentContinuous /> },
      { id: 'present_perfect', title: 'Present Perfect', desc: 'Przeszłość mająca skutek teraz.', component: <PresentPerfect /> },
      { id: 'present_perfect_cont', title: 'Present Perfect Continuous', desc: 'Jak długo to już robisz?', component: <PresentPerfectContinuous /> },
    ]
  },
  {
    id: 'past',
    title: 'Czasy Przeszłe (Past Tenses)',
    colorClass: 'text-blue-600',
    borderHover: 'hover:border-blue-400',
    iconHover: 'group-hover:bg-blue-100 group-hover:text-blue-600',
    lessons: [
      { id: 'past_simple', title: 'Past Simple', desc: 'Zakończone akcje w przeszłości.', component: <PastSimple /> },
      { id: 'past_continuous', title: 'Past Continuous', desc: 'Tło wydarzeń i przerwane akcje.', component: <PastContinuous /> },
      { id: 'past_perfect', title: 'Past Perfect', desc: 'Czas zaprzeszły. Co było najpierw?', component: <PastPerfect /> },
      { id: 'past_perfect_cont', title: 'Past Perfect Continuous', desc: 'Zaprzeszły ciągły. Proces z przeszłości.', component: <PastPerfectContinuous /> },
    ]
  },
  {
    id: 'future',
    title: 'Czasy Przyszłe (Future Tenses)',
    colorClass: 'text-violet-600',
    borderHover: 'hover:border-violet-400',
    iconHover: 'group-hover:bg-violet-100 group-hover:text-violet-600',
    lessons: [
      { id: 'future_forms', title: 'Przyszłość (4 Sposoby)', desc: 'Will, going to, plany i harmonogramy.', component: <FutureForms /> },
      { id: 'future_continuous', title: 'Future Continuous', desc: 'Będę w trakcie robienia czegoś.', component: <FutureContinuous /> },
      { id: 'future_perfect', title: 'Future Perfect', desc: 'Do tego czasu już to skończę.', component: <FuturePerfect /> },
      { id: 'future_perfect_cont', title: 'Future Perfect Continuous', desc: 'Do tamtego momentu będę to robić już od...', component: <FuturePerfectContinuous /> },
    ]
  }
];

const PRONUNCIATION_EXERCISES = [
  { word: "though", ipa: "/ðoʊ/", polish: "chociaż", category: "Ough traps" },
  { word: "through", ipa: "/θruː/", polish: "przez", category: "Ough traps" },
  { word: "cough", ipa: "/kɒf/", polish: "kaszel", category: "Ough traps" },
  { word: "rough", ipa: "/rʌf/", polish: "szorstki", category: "Ough traps" },
  { word: "sit", ipa: "/sɪt/", polish: "siedzieć", category: "Short Vowels" },
  { word: "heat", ipa: "/hiːt/", polish: "ciepło", category: "Long Vowels" },
  { word: "think", ipa: "/θɪŋk/", polish: "myśleć", category: "TH Sounds" },
  { word: "mother", ipa: "/ˈmʌð.ər/", polish: "matka", category: "TH Sounds" },
  { word: "knight", ipa: "/naɪt/", polish: "rycerz", category: "Silent Letters" },
  { word: "climb", ipa: "/klaɪm/", polish: "wspinać się", category: "Silent Letters" }
];

function PronunciationPractice({ onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const currentExercise = PRONUNCIATION_EXERCISES[currentIndex];

  const playSound = (text) => {
    if (!('speechSynthesis' in window)) {
      alert("Twoja przeglądarka nie obsługuje syntezatora mowy.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85;
    window.speechSynthesis.speak(utterance);
  };

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentIndex((prev) => (prev + 1) % PRONUNCIATION_EXERCISES.length);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full">
      <button onClick={onBack} className="self-start mb-8 text-slate-500 hover:text-slate-800 font-semibold flex items-center gap-2">
        <ArrowLeft size={20} /> Wróć do opcji wymowy
      </button>
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-lg border border-slate-100 text-center">
        <div className="text-xs font-bold uppercase tracking-wider text-pink-500 mb-6">Kategoria: {currentExercise.category}</div>
        <div className="mb-8">
          <button onClick={() => playSound(currentExercise.word)} className="mx-auto h-24 w-24 bg-pink-100 hover:bg-pink-200 text-pink-600 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-sm">
            <Volume2 size={48} />
          </button>
          <p className="text-slate-500 mt-4 font-medium">Kliknij, aby odsłuchać</p>
        </div>
        <div className="h-32 flex flex-col justify-center">
          {showAnswer ? (
            <div className="animate-in fade-in slide-in-from-bottom-2">
              <h2 className="text-4xl font-black text-slate-800 mb-2">{currentExercise.word}</h2>
              <div className="text-xl font-mono text-pink-600 mb-2">{currentExercise.ipa}</div>
              <div className="text-slate-500">{currentExercise.polish}</div>
            </div>
          ) : (
            <div className="text-slate-400 text-lg border-2 border-dashed border-slate-200 rounded-xl py-6">Co to za słowo?</div>
          )}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100">
          {!showAnswer ? (
             <button onClick={() => setShowAnswer(true)} className="w-full bg-slate-800 hover:bg-slate-900 text-white px-6 py-4 rounded-xl font-bold transition">Pokaż odpowiedź</button>
          ) : (
             <button onClick={handleNext} className="w-full bg-pink-600 hover:bg-pink-700 text-white px-6 py-4 rounded-xl font-bold transition flex justify-center items-center gap-2">Następne słowo <ChevronRight size={20} /></button>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const ADMIN_USERNAME = import.meta.env.VITE_ADMIN_USERNAME;
  const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

  // --- STANY: LOGOWANIE (Tylko sesja zostaje w localStorage) ---
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('fiszki_session')) || null);
  const [loginInput, setLoginInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [loginError, setLoginError] = useState('');

  // --- STANY: APLIKACJA (Puste na start, pobierane z bazy) ---
  const [view, setView] = useState('home'); 
  const [quickDeck, setQuickDeck] = useState([]);
  const [quickKnown, setQuickKnown] = useState([]);
  const [quickLearning, setQuickLearning] = useState([]);
  
  const [planDeck, setPlanDeck] = useState([]);
  const [planSettings, setPlanSettings] = useState(null);
  const [stats, setStats] = useState({ streak: 0, lastStudyDate: null });

  const [activeGrammar, setActiveGrammar] = useState(null);
  const [studyDirection, setStudyDirection] = useState('frontToBack');

  const [importedCards, setImportedCards] = useState([]);
  const [targetDays, setTargetDays] = useState(30);
  const [sessionQueue, setSessionQueue] = useState([]);
  const [wrongInSession, setWrongIds] = useState(new Set());
  const [isFlipped, setIsFlipped] = useState(false);
  const fileInputRef = useRef(null);
  const planFileInputRef = useRef(null);

  // Admin states
  const [newUsername, setNewUsername] = useState('');
  const [newUserPassword, setNewUserPassword] = useState('');

  // Zapis sesji w przeglądarce, żeby nie logować się co chwile
  useEffect(() => {
    const fetchUserData = async () => {
      if (user && user.role === 'user') {
        try {
          const response = await fetch('/api/login', { // Możesz użyć tego samego endpointu lub stworzyć /api/profile
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login: user.username, autoLogin: true }) 
          });
          const data = await response.json();
          if (data.success) {
            setPlanDeck(data.planDeck || []);
            setPlanSettings(data.planSettings || null);
            setStats(data.stats || { streak: 0, lastStudyDate: null });
          }
        } catch (err) {
          console.error("Nie udało się odświeżyć danych z serwera");
        }
      }
    };
  fetchUserData();
}, []);

  // ==========================================
  // KOMUNIKACJA Z BACKENDEM (FLASK)
  // ==========================================
  const syncToServer = async (newDeck, newSettings, newStats) => {
    if (user && user.role === 'user') {
      try {
        await fetch('/api/sync', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json' // To naprawia błąd JSON input!
          },
          body: JSON.stringify({
            username: user.username,
            planDeck: newDeck,
            planSettings: newSettings,
            stats: newStats
          })
        });
      } catch (err) {
        console.error("Błąd synchronizacji z serwerem:", err);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: loginInput, password: passwordInput })
      });

      const data = await response.json();

      if (data.success) {
        setUser({ username: data.username, role: data.role });
        
        // Jeśli to uczeń, wczytaj jego dane z SQLite (z Flaska)
        if (data.role === 'user') {
          setPlanDeck(data.planDeck || []);
          setPlanSettings(data.planSettings || null);
          setStats(data.stats || { streak: 0, lastStudyDate: null });
        }
      } else {
        setLoginError(data.error || 'Błędny login lub hasło.');
      }
    } catch (error) {
      setLoginError('Błąd połączenia z serwerem. Upewnij się, że Flask działa.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginInput('');
    setPasswordInput('');
    setPlanDeck([]);
    setPlanSettings(null);
    setView('home');
  };

  // Uwaga: Te funkcje w panelu admina na razie tylko symulują działanie frontendu. 
  // Aby w pełni działały, będziemy musieli dopisać endpoint '/api/users' we Flasku.
  const handleAddUser = (e) => {
    e.preventDefault();
    alert("Funkcja dodawania użytkowników będzie podpięta pod SQLite w następnym kroku!");
  };

  const handleDeleteUser = (id) => {
    alert("Funkcja usuwania użytkowników będzie podpięta pod SQLite w następnym kroku!");
  };

  // ==========================================
  // LOGIKA FISZEK (Z dodaną synchronizacją)
  // ==========================================
  const handleQuickUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (res) => {
          const parsed = res.data.filter(r => r.length >= 2 && r[0].trim() !== '').map(r => ({ front: r[0], back: r[1] }));
          startQuickSession(parsed);
        },
        skipEmptyLines: true,
      });
    }
  };

  const startQuickSession = (cards) => {
    setQuickDeck(cards);
    setSessionQueue(cards);
    setQuickKnown([]);
    setQuickLearning([]);
    setIsFlipped(false);
    setView('quick-session');
  };

  const handleQuickMark = (status) => {
    const card = sessionQueue[0];
    if (status === 'known') setQuickKnown(prev => [...prev, card]);
    else setQuickLearning(prev => [...prev, card]);
    
    setIsFlipped(false);
    setTimeout(() => {
      setSessionQueue(prev => {
        const newQ = prev.slice(1);
        if (newQ.length === 0) setView('quick-summary');
        return newQ;
      });
    }, 150);
  };

  const handlePlanUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (res) => {
          const parsed = res.data.filter(r => r.length >= 2 && r[0].trim() !== '').map((r, i) => ({ 
            id: Date.now() + i, front: r[0], back: r[1], step: 0, nextReview: getTodayStr(), dayAssigned: 1 
          }));
          setImportedCards(parsed);
          setView('setup-plan');
        },
        skipEmptyLines: true,
      });
    }
  };

  const handleCreatePlan = () => {
    const wordsPerDay = Math.ceil(importedCards.length / targetDays);
    const arrangedDeck = importedCards.map((card, index) => ({
      ...card,
      dayAssigned: Math.floor(index / wordsPerDay) + 1
    }));
    
    const newSettings = { targetDays, currentDay: 1, wordsPerDay };
    setPlanDeck(arrangedDeck);
    setPlanSettings(newSettings);
    
    syncToServer(arrangedDeck, newSettings, stats); // Zapis do bazy!
    
    setImportedCards([]);
    setView('roadmap');
  };

  const startPlanSession = () => {
    const todayStr = getTodayStr();
    const newToday = planDeck.filter(c => c.dayAssigned === planSettings.currentDay && c.step === 0);
    const reviewsToday = planDeck.filter(c => c.step > 0 && c.nextReview <= todayStr);
    setSessionQueue([...newToday, ...reviewsToday]);
    setWrongIds(new Set());
    setIsFlipped(false);
    setView('plan-session');
  };

  const handlePlanMark = (status) => {
    const currentCard = sessionQueue[0];
    setIsFlipped(false);

    setTimeout(() => {
      if (status === 'learning') {
        setWrongIds(prev => new Set(prev).add(currentCard.id));
        setSessionQueue(prev => { const newQ = [...prev]; newQ.push(newQ.shift()); return newQ; });
      } else {
        let newStep = wrongInSession.has(currentCard.id) ? 1 : currentCard.step + 1;
        if (newStep >= INTERVALS.length) newStep = INTERVALS.length - 1;
        
        const updatedDeck = planDeck.map(c => c.id === currentCard.id ? { ...c, step: newStep, nextReview: addDaysStr(INTERVALS[newStep]) } : c);
        setPlanDeck(updatedDeck);
        
        const newQueue = sessionQueue.slice(1);
        setSessionQueue(newQueue);
        
        if (newQueue.length === 0) {
          finishPlanSession(updatedDeck);
        } else {
          syncToServer(updatedDeck, planSettings, stats); // Bieżący zapis dla bezpieczeństwa
        }
      }
    }, 150);
  };

  const finishPlanSession = (currentDeck) => {
    const todayStr = getTodayStr();
    let newStats = { ...stats };
    
    if (stats.lastStudyDate !== todayStr) {
      if (stats.lastStudyDate === addDaysStr(-1)) newStats.streak += 1;
      else newStats.streak = 1;
      newStats.lastStudyDate = todayStr;
      setStats(newStats);
    }

    let newSettings = { ...planSettings };
    const unlearnedCurrentDay = currentDeck.filter(c => c.dayAssigned === planSettings.currentDay && c.step === 0);
    if (unlearnedCurrentDay.length === 0 && planSettings.currentDay < planSettings.targetDays) {
      newSettings.currentDay += 1;
      setPlanSettings(newSettings);
    }
    
    syncToServer(currentDeck, newSettings, newStats); // Zapis końcowy
    setView('plan-summary');
  };

  const handleResetPlan = () => {
    if (window.confirm("Czy na pewno chcesz zresetować i usunąć cały plan nauki?")) {
      setView('home'); 
      setPlanSettings(null); 
      setPlanDeck([]);
      setStats({ streak: 0, lastStudyDate: null });
      syncToServer([], null, { streak: 0, lastStudyDate: null }); // Czyszczenie bazy
    }
  };

  // ==========================================
  // RENDEROWANIE WIDOKÓW
  // ==========================================

  // 0. EKRAN LOGOWANIA
  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full relative z-10">
          <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-indigo-600" size={40} />
          </div>
          <h1 className="text-3xl font-black text-center text-slate-800 mb-2">Platforma Nauki</h1>
          <p className="text-center text-slate-500 mb-8">Dostęp po weryfikacji w chmurze (Flask).</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Login</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="text" 
                  value={loginInput}
                  onChange={(e) => setLoginInput(e.target.value)}
                  className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  placeholder="Wprowadź login"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-1">Hasło</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="password" 
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  className="pl-10 w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium"
                  placeholder="Wprowadź hasło"
                  required
                />
              </div>
            </div>

            {loginError && <p className="text-red-500 text-sm font-bold text-center mt-2">{loginError}</p>}

            <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl mt-6 transition shadow-lg shadow-indigo-200">
              Zaloguj się
            </button>
          </form>
        </div>
      </div>
    );
  }

  // WSPÓLNY HEADER
  const TopBar = () => (
    <div className="w-full bg-white border-b border-slate-200 p-4 flex justify-between items-center shadow-sm fixed top-0 z-50">
      <div className="flex items-center gap-2 font-bold text-slate-700">
        <User className={user.role === 'admin' ? "text-red-500" : "text-indigo-500"} size={20} />
        Zalogowano jako: {user.username} {user.role === 'admin' && <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-md ml-2 uppercase tracking-wider">Admin</span>}
      </div>
      <button onClick={handleLogout} className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-red-500 transition">
        Wyloguj <LogOut size={16} />
      </button>
    </div>
  );

  // 0.5 PANEL ADMINA
  if (view === 'admin-panel' && user.role === 'admin') {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 p-6 md:p-12 pb-24">
        <TopBar />
        <div className="max-w-5xl mx-auto">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition font-semibold">
            <ArrowLeft size={20} /> Wróć do Dashboardu
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-red-100 text-red-600 rounded-2xl"><Shield size={40} /></div>
            <div>
              <h1 className="text-4xl font-black text-slate-800">Panel Administratora</h1>
              <p className="text-slate-500 text-lg">Zarządzaj kontami uczniów i systemem (SQL).</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col">
              <h2 className="text-xl font-black text-slate-800 mb-4 flex items-center gap-2">
                <Users className="text-indigo-500"/> Konta Uczniów
              </h2>
              
              <form onSubmit={handleAddUser} className="mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <h3 className="text-sm font-bold text-slate-600 mb-3 uppercase tracking-wider">Stwórz nowe konto</h3>
                <div className="flex flex-col gap-3">
                  <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} placeholder="Login ucznia" className="w-full border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <input type="text" value={newUserPassword} onChange={(e) => setNewUserPassword(e.target.value)} placeholder="Hasło ucznia" className="w-full border border-slate-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-indigo-500 outline-none" />
                  <button type="submit" className="bg-indigo-600 text-white font-bold py-2 rounded-xl hover:bg-indigo-700 transition flex items-center justify-center gap-2">
                    <UserPlus size={18} /> Dodaj do SQLite
                  </button>
                </div>
              </form>
              <p className="text-slate-400 text-sm italic">Wizualizacja bazy z Flaska w przygotowaniu...</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="bg-red-50 border border-red-200 rounded-3xl p-6 h-full">
                <h2 className="text-xl font-black text-red-800 mb-2">Zarządzanie Cachingiem</h2>
                <p className="text-red-600 text-sm mb-6">Wykorzystywane tylko do testowania aplikacji przez admina.</p>
                <button 
                  onClick={handleResetPlan}
                  className="w-full flex justify-center items-center gap-2 bg-white text-red-600 border border-red-200 hover:bg-red-600 hover:text-white px-6 py-3 rounded-xl font-bold transition shadow-sm"
                >
                  <Trash2 size={20} /> Wyczyść mój algorytm i fiszki
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 1. EKRAN GŁÓWNY (HOME)
  if (view === 'home') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-20">
        <TopBar />
        <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-10 text-center tracking-tight">Czego uczymy się dziś?</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          {user.role === 'admin' && (
            <div className="md:col-span-2 bg-gradient-to-r from-red-600 to-red-500 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex items-center justify-between" onClick={() => setView('admin-panel')}>
              <div className="flex items-center gap-6">
                <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center"><Shield size={32} /></div>
                <div>
                  <h2 className="text-2xl font-bold mb-1">Panel Admina</h2>
                  <p className="text-red-100">Kliknij tutaj, aby zarządzać kontami i systemem (SQL).</p>
                </div>
              </div>
              <ChevronRight size={32} className="opacity-50" />
            </div>
          )}

          <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all border border-slate-100 cursor-pointer flex flex-col h-full" onClick={() => setView('quick-upload')}>
            <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6"><Zap size={32} /></div>
            <h2 className="text-2xl font-bold mb-3 text-slate-800">Szybka Sesja</h2>
            <p className="text-slate-500 mb-6 flex-grow">Wgraj plik i od razu powtarzaj. Brak zapisu – idealne na 5 minut przed sprawdzianem.</p>
          </div>

          <div className="bg-indigo-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer relative overflow-hidden flex flex-col h-full" onClick={() => planSettings ? setView('roadmap') : setView('plan-upload')}>
            <div className="h-16 w-16 bg-indigo-500/50 rounded-2xl flex items-center justify-center mb-6"><Map size={32} /></div>
            <h2 className="text-2xl font-bold mb-3">Plan Nauki (SRS)</h2>
            <p className="text-indigo-100 mb-6 flex-grow">Wrzuć plik 1000 słów i określ czas. Aplikacja stworzy plan powtórek i zsynchronizuje z Pythonem.</p>
            {planSettings && <div className="bg-indigo-800/40 px-4 py-2 rounded-xl text-sm font-semibold inline-flex items-center gap-2 mt-auto w-fit">Kontynuuj plan ({planSettings.currentDay}/{planSettings.targetDays})</div>}
          </div>

          <div className="bg-violet-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full" onClick={() => setView('grammar-list')}>
            <div className="h-16 w-16 bg-violet-500/50 rounded-2xl flex items-center justify-center mb-6"><Library size={32} /></div>
            <h2 className="text-2xl font-bold mb-3">Baza Gramatyki</h2>
            <p className="text-violet-100 flex-grow">Czasy, konstrukcje, zasady i przykłady użycia w praktyce.</p>
          </div>

          <div className="bg-pink-600 text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer flex flex-col h-full" onClick={() => setView('pronunciation-hub')}>
            <div className="h-16 w-16 bg-pink-500/50 rounded-2xl flex items-center justify-center mb-6"><Ear size={32} /></div>
            <h2 className="text-2xl font-bold mb-3">Wymowa (Pronunciation)</h2>
            <p className="text-pink-100 flex-grow">Przewodnik fonetyczny IPA, łamacze językowe i trening ze słuchu z native speakerem.</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. PRONUNCIATION HUB
  if (view === 'pronunciation-hub') {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 p-6 md:p-12">
        <TopBar />
        <div className="max-w-4xl mx-auto">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition font-semibold">
            <ArrowLeft size={20} /> Wróć do menu
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">Centrum Wymowy</h1>
          <p className="text-slate-500 mb-10 text-lg">Zrozum zasady czytania lub przejdź od razu do ćwiczeń ze słuchu.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div onClick={() => setView('pronunciation-theory')} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 border border-slate-100 transition-all cursor-pointer flex flex-col group">
              <div className="h-16 w-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <BookOpen size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Przewodnik Wymowy (Teoria)</h2>
              <p className="text-slate-500">Twój obszerny materiał o symbolach IPA, samogłoskach, dyftongach i intonacji.</p>
            </div>
            <div onClick={() => setView('pronunciation-practice')} className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 border border-slate-100 transition-all cursor-pointer flex flex-col group">
              <div className="h-16 w-16 bg-pink-50 text-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-colors">
                <Volume2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">Trening ze słuchu (Praktyka)</h2>
              <p className="text-slate-500">Uruchom syntezator mowy. Posłuchaj słówka, zobacz zapis IPA i zgadnij, co to znaczy.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. TRYBY WYMOWY - TEORIA
  if (view === 'pronunciation-theory') {
    return (
      <div className="min-h-screen bg-white pt-16">
        <TopBar />
        <div className="sticky top-16 bg-white/80 backdrop-blur-md border-b border-slate-100 z-10 p-4">
          <div className="max-w-5xl mx-auto flex items-center gap-4">
            <button onClick={() => setView('pronunciation-hub')} className="p-2 hover:bg-slate-100 rounded-xl transition text-slate-600">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-bold text-slate-800">Wróć do wyboru trybu</h2>
          </div>
        </div>
        <div className="pb-24 pt-6">
          <PronunciationGuide />
        </div>
      </div>
    );
  }

  // 4. TRYBY WYMOWY - PRAKTYKA
  if (view === 'pronunciation-practice') {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 p-6 md:p-12">
        <TopBar />
        <div className="max-w-4xl mx-auto">
           <PronunciationPractice onBack={() => setView('pronunciation-hub')} />
        </div>
      </div>
    );
  }

  // 5. LISTA GRAMATYKI
  if (view === 'grammar-list') {
    return (
      <div className="min-h-screen bg-slate-50 pt-20 p-6 md:p-12">
        <TopBar />
        <div className="max-w-4xl mx-auto">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-500 hover:text-slate-800 mb-8 transition font-semibold">
            <ArrowLeft size={20} /> Wróć do menu
          </button>
          <h1 className="text-4xl font-black text-slate-800 mb-2">Baza Gramatyki</h1>
          <p className="text-slate-500 mb-10 text-lg">Wybierz temat, aby poznać zasady i konstrukcje zdań.</p>
          <div className="flex flex-col gap-12">
            {GRAMMAR_CATEGORIES.map((category) => (
              <div key={category.id}>
                <h2 className={`text-2xl font-black mb-4 border-b-2 pb-2 ${category.colorClass} border-slate-200`}>{category.title}</h2>
                <div className="flex flex-col gap-4">
                  {category.lessons.map((lesson) => (
                    <div key={lesson.id} onClick={() => { setActiveGrammar(lesson); setView('grammar-lesson'); }} className={`bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all cursor-pointer flex items-center justify-between group ${category.borderHover}`}>
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 transition-colors">{lesson.title}</h3>
                        <p className="text-slate-500 mt-1">{lesson.desc}</p>
                      </div>
                      <div className={`h-12 w-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center transition-colors ${category.iconHover}`}>
                        <ChevronRight />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 6. LEKCJA GRAMATYKI
  if (view === 'grammar-lesson' && activeGrammar) {
    return (
      <div className="min-h-screen bg-white pt-16">
        <TopBar />
        <div className="sticky top-16 bg-white/80 backdrop-blur-md border-b border-slate-100 z-10 p-4">
          <div className="max-w-4xl mx-auto flex items-center gap-4">
            <button onClick={() => setView('grammar-list')} className="p-2 hover:bg-slate-100 rounded-xl transition text-slate-600">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-xl font-bold text-slate-800">{activeGrammar.title}</h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto p-6 md:p-12 pb-24">
          {activeGrammar.component}
        </div>
      </div>
    );
  }

  // 7. UPLOAD DLA SZYBKIEJ SESJI I PLANU NAUKI
  if (view === 'quick-upload' || view === 'plan-upload') {
    const isPlan = view === 'plan-upload';
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-20">
        <TopBar />
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full border border-slate-100 relative">
          <button onClick={() => setView('home')} className="absolute top-6 left-6 text-slate-400 hover:text-slate-700">
            <ArrowLeft />
          </button>
          <Upload className={`mx-auto h-16 w-16 mb-6 ${isPlan ? 'text-indigo-500' : 'text-blue-500'}`} />
          <h2 className="text-3xl font-bold mb-3">{isPlan ? 'Twój nowy plan' : 'Wgraj listę'}</h2>
          <p className="text-slate-500 mb-8">Wgraj plik CSV. (Format: słowo polskie,słowo angielskie)</p>
          <button onClick={() => isPlan ? planFileInputRef.current?.click() : fileInputRef.current?.click()}
            className={`w-full text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md transition ${isPlan ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'}`}>
            Wybierz plik .csv
          </button>
          <input type="file" accept=".csv" className="hidden" ref={fileInputRef} onChange={handleQuickUpload} />
          <input type="file" accept=".csv" className="hidden" ref={planFileInputRef} onChange={handlePlanUpload} />
        </div>
      </div>
    );
  }

  // 8. SETUP PLANU
  if (view === 'setup-plan') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-20">
        <TopBar />
        <div className="bg-white p-10 rounded-3xl shadow-xl max-w-md w-full">
          <Calendar className="mx-auto h-16 w-16 text-indigo-500 mb-6" />
          <h2 className="text-2xl font-bold mb-2 text-center text-slate-800">Ustaw cel</h2>
          <p className="text-slate-500 text-center mb-8">Rozpoznano {importedCards.length} słówek. W ile dni chcesz przejść przez cały materiał?</p>
          <input type="range" min="1" max={importedCards.length > 365 ? 365 : importedCards.length} value={targetDays} onChange={(e) => setTargetDays(Number(e.target.value))} className="w-full accent-indigo-600 mb-4"/>
          <div className="flex justify-between font-semibold text-slate-700 mb-8">
            <span>{targetDays} dni</span>
            <span className="text-indigo-600">{Math.ceil(importedCards.length / targetDays)} nowych/dzień</span>
          </div>
          <button onClick={handleCreatePlan} className="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-indigo-700">
            Wygeneruj Mapę Nauki
          </button>
        </div>
      </div>
    );
  }

  // 9. WIZUALNA MAPA PLANU (ROADMAP)
  if (view === 'roadmap') {
    const todayStr = getTodayStr();
    const newToday = planDeck.filter(c => c.dayAssigned === planSettings.currentDay && c.step === 0);
    const reviewsToday = planDeck.filter(c => c.step > 0 && c.nextReview <= todayStr);
    const completedWords = planDeck.filter(c => c.step > 0).length;

    return (
      <div className="min-h-screen bg-slate-50 flex flex-col pt-16">
        <TopBar />
        <div className="flex flex-col md:flex-row flex-grow">
          <div className="md:w-1/3 bg-white border-r border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <button onClick={() => setView('home')} className="flex items-center gap-2 text-slate-400 hover:text-slate-700 mb-8">
                <ArrowLeft size={20} /> Do menu
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl ${stats.streak > 0 ? 'bg-orange-100 text-orange-500' : 'bg-slate-100 text-slate-400'}`}>
                  <Flame size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Passa</div>
                  <div className="text-2xl font-black">{stats.streak} Dni</div>
                </div>
              </div>
              <h1 className="text-3xl font-black text-slate-800 mb-2">Twój Plan</h1>
              <p className="text-slate-500 mb-8">Zbudowałeś plan na {planSettings.targetDays} dni. Opanowano {completedWords} z {planDeck.length} słów.</p>
              
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                <h3 className="font-bold text-slate-800 mb-4">Zadanie na dziś (Dzień {planSettings.currentDay}):</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="flex items-center gap-2 text-indigo-600 font-semibold"><BookOpen size={18}/> Nowe słowa</span>
                  <span className="font-bold">{newToday.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2 text-emerald-600 font-semibold"><RotateCcw size={18}/> Do powtórki</span>
                  <span className="font-bold">{reviewsToday.length}</span>
                </div>
              </div>
            </div>

            {(newToday.length > 0 || reviewsToday.length > 0) ? (
              <button onClick={startPlanSession} className="w-full bg-indigo-600 text-white px-6 py-5 rounded-2xl font-black text-xl shadow-xl shadow-indigo-200 hover:-translate-y-1 transition-transform flex justify-center items-center gap-3">
                <Play fill="currentColor" /> ZACZNIJ SESJĘ
              </button>
            ) : (
               <div className="bg-emerald-100 text-emerald-800 p-6 rounded-2xl text-center font-bold flex flex-col items-center">
                 <Trophy className="mb-2" size={32} />
                 Zadania na ten moment wykonane! Wróć jutro.
               </div>
            )}
          </div>

          <div className="md:w-2/3 p-8 bg-slate-50 overflow-y-auto max-h-screen">
            <h2 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-8">Mapa Postępu</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4 pb-10">
              {Array.from({length: planSettings.targetDays}).map((_, i) => {
                const dayNum = i + 1;
                const isPast = dayNum < planSettings.currentDay;
                const isCurrent = dayNum === planSettings.currentDay;
                
                let bgClass = "bg-white border-slate-200 text-slate-400 shadow-sm"; 
                if (isPast) bgClass = "bg-emerald-500 border-emerald-600 text-white shadow-md"; 
                if (isCurrent) bgClass = "bg-indigo-600 border-indigo-700 text-white shadow-lg ring-4 ring-indigo-200 animate-pulse-slow";

                return (
                  <div key={dayNum} className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center relative transition-all ${bgClass}`}>
                    <span className="text-xs font-semibold opacity-70 mb-1">Dzień</span>
                    <span className="text-2xl font-black">{dayNum}</span>
                    {isPast && <CheckCircle className="absolute bottom-2 right-2 opacity-50 w-4 h-4" />}
                    {dayNum > planSettings.currentDay && <Lock className="absolute bottom-2 right-2 opacity-20 w-4 h-4" />}
                  </div>
                );
              })}
            </div>
            
            <button onClick={handleResetPlan} className="mt-8 text-sm text-red-400 hover:text-red-600 underline font-semibold transition-colors cursor-pointer">
              Zresetuj i usuń plan
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 10. WSPÓLNA SESJA NAUKI (FISZKI)
  if ((view === 'quick-session' || view === 'plan-session') && sessionQueue.length > 0) {
    const isPlan = view === 'plan-session';
    const currentCard = sessionQueue[0];
    const isReview = isPlan && currentCard.step > 0;
    
    const total = isPlan ? (planDeck.filter(c => c.dayAssigned === planSettings.currentDay && c.step === 0).length + planDeck.filter(c => c.step > 0 && c.nextReview <= getTodayStr()).length) : quickDeck.length;
    const remaining = sessionQueue.length;
    const progress = total > 0 ? ((total - remaining) / total) * 100 : 0;

    const currentFrontText = studyDirection === 'frontToBack' ? currentCard.front : currentCard.back;
    const currentBackText = studyDirection === 'frontToBack' ? currentCard.back : currentCard.front;

    return (
      <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <div className="mb-6">
            <div className="flex justify-between items-center text-slate-400 text-sm font-bold mb-2">
              <div className="flex gap-3 items-center">
                <span className={`px-2 py-0.5 rounded text-xs ${isReview ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                  {isReview ? 'Powtórka' : 'Nowe Słowo'}
                </span>
                
                <button 
                  onClick={() => setStudyDirection(prev => prev === 'frontToBack' ? 'backToFront' : 'frontToBack')}
                  className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded-lg text-xs transition"
                  title="Zmień kierunek tłumaczenia"
                >
                  <ArrowRightLeft size={12} />
                  {studyDirection === 'frontToBack' ? 'PL ➔ EN' : 'EN ➔ PL'}
                </button>
              </div>

              <span>Zostało: {remaining}</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2">
              <div className={`h-2 rounded-full transition-all ${isPlan ? 'bg-indigo-500' : 'bg-blue-500'}`} style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="w-full aspect-[3/2] perspective-1000 cursor-pointer mb-8" onClick={() => setIsFlipped(true)}>
            <div className={`w-full h-full relative transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
              <div className="absolute w-full h-full bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 backface-hidden">
                <h2 className="text-4xl md:text-5xl font-black text-slate-800 text-center">{currentFrontText}</h2>
              </div>
              <div className={`absolute w-full h-full ${isPlan ? 'bg-indigo-600' : 'bg-blue-600'} rounded-3xl shadow-2xl flex flex-col items-center justify-center p-8 backface-hidden rotate-y-180`}>
                <h2 className="text-4xl md:text-5xl font-black text-white text-center">{currentBackText}</h2>
              </div>
            </div>
          </div>

          <div className="h-20">
            {isFlipped && (
              <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-2">
                <button onClick={() => isPlan ? handlePlanMark('learning') : handleQuickMark('learning')} className="flex-1 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 px-4 py-4 rounded-2xl font-black text-lg transition flex justify-center items-center gap-2">
                  <X size={24} /> UCZĘ SIĘ
                </button>
                <button onClick={() => isPlan ? handlePlanMark('known') : handleQuickMark('known')} className="flex-1 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 px-4 py-4 rounded-2xl font-black text-lg transition flex justify-center items-center gap-2">
                  <Check size={24} /> UMIEM
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 11. SZYBKA SESJA - PODSUMOWANIE
  if (view === 'quick-summary') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 pt-20">
        <TopBar />
        <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-md w-full">
          <h2 className="text-3xl font-black mb-6">Koniec Sesji</h2>
          <div className="flex gap-4 justify-center mb-8">
            <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl text-center flex-1 font-bold">Umiem<br/><span className="text-2xl">{quickKnown.length}</span></div>
            <div className="bg-red-50 text-red-700 p-4 rounded-xl text-center flex-1 font-bold">Uczę się<br/><span className="text-2xl">{quickLearning.length}</span></div>
          </div>
          {quickLearning.length > 0 && (
            <button onClick={() => startQuickSession(quickLearning)} className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl font-bold mb-3 hover:bg-blue-700 transition">
              Powtórz te, których nie umiesz ({quickLearning.length})
            </button>
          )}
          <button onClick={() => startQuickSession(quickDeck)} className="w-full bg-slate-200 text-slate-800 px-6 py-4 rounded-xl font-bold mb-3 hover:bg-slate-300">Cała talia od nowa</button>
          <button onClick={() => setView('home')} className="w-full text-slate-500 py-3 font-semibold">Wróć do menu</button>
        </div>
      </div>
    );
  }

  // 12. PLAN NAUKI - PODSUMOWANIE
  if (view === 'plan-summary') {
    return (
      <div className="min-h-screen bg-indigo-600 flex flex-col items-center justify-center p-4 pt-20">
        <TopBar />
        <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">
          <Trophy className="mx-auto h-20 w-20 text-yellow-400 mb-6" />
          <h2 className="text-3xl font-black text-slate-800 mb-2">Znakomicie!</h2>
          <p className="text-slate-500 mb-8">Utrzymujesz algorytm w idealnym stanie. Passa rośnie!</p>
          <button onClick={() => setView('roadmap')} className="w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-black transition shadow-lg">
            Wróć do Mapy Planu
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default App;
