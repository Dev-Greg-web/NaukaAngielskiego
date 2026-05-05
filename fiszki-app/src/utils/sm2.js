// src/utils/sm2.js

/**
 * Oblicza kiedy ponownie pokazać fiszkę na podstawie oceny ucznia.
 * @param {number} quality - Ocena ucznia od 0 (nie pamiętam) do 5 (idealnie).
 * @param {number} repetitions - Ile razy fiszka była już powtórzona.
 * @param {number} previousInterval - Poprzedni odstęp czasu (w dniach).
 * @param {number} previousEaseFactor - Poprzedni mnożnik trudności.
 * @returns {Object} - Nowe wartości do zapisania w bazie.
 */
export const calculateSM2 = (quality, repetitions = 0, previousInterval = 0, previousEaseFactor = 2.5) => {
  let interval = 0;
  let easeFactor = previousEaseFactor;
  let nextRepetitions = repetitions;

  // Jeśli odpowiedź była poprawna (ocena 3, 4 lub 5)
  if (quality >= 3) {
    if (repetitions === 0) {
      interval = 1; // Pierwsza powtórka: za 1 dzień
    } else if (repetitions === 1) {
      interval = 6; // Druga powtórka: za 6 dni
    } else {
      // Kolejne powtórki: mnożymy dni razy "łatwość" fiszki
      interval = Math.round(previousInterval * previousEaseFactor);
    }
    nextRepetitions += 1;
    
    // Aktualizacja mnożnika łatwości na podstawie oceny
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  } 
  // Jeśli uczeń zapomniał (ocena 0, 1 lub 2)
  else {
    nextRepetitions = 0; // Resetujemy serię
    interval = 1; // Wracamy do powtórki jutro
    // easeFactor zostaje bez zmian, fiszka jest po prostu trudna
  }

  // Zabezpieczenie: mnożnik nie może spaść poniżej 1.3
  if (easeFactor < 1.3) easeFactor = 1.3;

  // Obliczanie dokładnej daty następnej powtórki (Dzisiaj + obliczone dni)
  const nextReviewDate = new Date();
  nextReviewDate.setDate(nextReviewDate.getDate() + interval);

  return {
    interval,
    repetitions: nextRepetitions,
    easeFactor,
    nextReviewDate: nextReviewDate.toISOString()
  };
};