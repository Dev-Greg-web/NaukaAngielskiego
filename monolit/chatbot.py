# monolit/chatbot.py

# =====================================================================
# 🧠 BAZA WIEDZY BOTA (GŁADYSZ GREG) - MIN 300 LINII WIEDZY!
# =====================================================================

KNOWLEDGE_BASE = {
    
    # --- POWITANIA I ZAGADNIENIA OGÓLNE ---
    "cześć": """Cześć! Jestem Twoim wirtualnym nauczycielem Gładysz Greg. 🎓
Nie lubię lania wody, doceniam konkret. Możesz mnie zapytać o dowolny czas angielski (np. 'present simple', 'past perfect'), tryby warunkowe (np. '2 tryb') albo o 'stronę bierną'. 

O czym dzisiaj się uczymy?""",

    "hej": """Hej! Gotowy na gramatyczny trening? Zapytaj mnie o dowolny czas lub tryb warunkowy!""",

    # --- CZASY TERAŹNIEJSZE ---
    "present simple": """🎯 PRESENT SIMPLE - Czas Teraźniejszy Prosty 🎯

Kiedy używamy?
1. Nawyki i rutyny (Rzeczy, które robimy regularnie).
👉 I drink coffee every morning.
2. Prawdy i fakty (Niezmienne zjawiska).
👉 Water boils at 100 degrees.
3. Harmonogramy (Pociągi, filmy, lekcje - nawet w przyszłości!).
👉 The train leaves at 8:00 PM.

🏗️ Budowa:
(+) Osoba + Czasownik. 
⚠️ ZŁOTA ZASADA: Dla He/She/It dodajemy '-s' lub '-es'! (np. He plays).
(-) Osoba + don't / doesn't + Czasownik. (np. She doesn't play).
(?) Do / Does + Osoba + Czasownik? (np. Does she play?).

💡 Słówka kluczowe:
always (zawsze), usually (zazwyczaj), often (często), sometimes (czasami), never (nigdy).
Krążą wokół głównego czasownika!""",

    "present continuous": """🎯 PRESENT CONTINUOUS - Czas Teraźniejszy Ciągły 🎯

Kiedy używamy?
1. W tej właśnie sekundzie (Tu i teraz!).
👉 I am reading right now.
2. Sytuacje tymczasowe (Coś trwa tylko w tym miesiącu/tygodniu).
👉 She is living with her parents this month.
3. Pewne plany na 100% zorganizowane w przyszłości.
👉 We are flying to Paris tomorrow.

🏗️ Budowa:
(+) Osoba + am/is/are + Czasownik z końcówką -ing. (I am working).
(-) Osoba + am not/isn't/aren't + Czasownik-ing. (He isn't sleeping).
(?) Am/Is/Are + Osoba + Czasownik-ing? (Are you listening?).

🛑 Uwaga na State Verbs (Czasowniki Stanu)!
Nie używamy -ing z czasownikami uczuć i zmysłów (know, want, like, understand).
❌ Źle: I am knowing him. 
✅ Dobrze: I know him.""",

    "present perfect": """🎯 PRESENT PERFECT - Czas Pomost (Przeszłość łączy się z TERAZ) 🎯

Kiedy używamy?
1. Skutki widoczne TERAZ (Coś stało się kiedyś, ale widzisz efekt).
👉 I have broken my leg. (Nadal mam w gipsie).
2. Doświadczenia życiowe (Chwalisz się tym, co przeżyłeś).
👉 I have been to Japan twice.
3. Akcje przed chwilą zakończone (Ze słówkiem 'just').
👉 I have just finished dinner.

🏗️ Budowa:
(+) Osoba + have / has + Czasownik w III formie (-ed / tabela). (I have seen it).
(-) Osoba + haven't / hasn't + III forma. (She hasn't finished).
(?) Have / Has + Osoba + III forma? (Have you done this?).

💡 Magiczne słówka:
W środku zdania: just (właśnie), already (już), never (nigdy), ever (kiedykolwiek).
Na końcu zdania: yet (jeszcze nie / już - tylko w pytaniach i przeczeniach!), lately (ostatnio).""",

    "present perfect continuous": """🎯 PRESENT PERFECT CONTINUOUS - Mistrz Trwania 🎯

Odpowiada na kluczowe pytanie: "Jak długo już to robisz?".

Kiedy używamy?
1. Akcja trwa od przeszłości aż do TERAZ (Nacisk na proces).
👉 I have been waiting for 2 hours!
2. Widoczne ślady i skutki (Jesteś spocony, bo właśnie skończyłeś biegać).
👉 Why are you sweating? - I have been running.

🏗️ Budowa (4 elementy!):
(+) Osoba + have/has + been + Czasownik-ing. (I have been working).
(-) Osoba + haven't/hasn't + been + Czasownik-ing.
(?) Have/Has + Osoba + been + Czasownik-ing?

🥊 Różnica z Present Perfect Simple:
Simple = WYNIK i ILOŚĆ (Przeczytałem 50 stron).
Continuous = PROCES i CZAS (Czytam już od 3 godzin).""",

    # --- CZASY PRZESZŁE ---
    "past simple": """🎯 PAST SIMPLE - Czas Przeszły Prosty 🎯

Podróż do zamkniętych rozdziałów. Wydarzyło się, skończyło się. Kropka.

Kiedy używamy?
1. Zakończone akcje (Wiemy kiedy). 👉 I bought a car yesterday.
2. Sekwencje wydarzeń. 👉 He woke up, took a shower and left.
3. Nawyki z dawnych lat. 👉 When I was a kid, I played football.

🏗️ Budowa:
(+) Osoba + Czasownik w II formie (regularne -ed / nieregularne z tabeli).
👉 We visited Paris. / I ate pizza.
(-) Osoba + didn't + Czasownik w I formie (Podstawowa!).
👉 I didn't eat pizza.
(?) Did + Osoba + Czasownik w I formie?
👉 Did you eat pizza?

⚠️ ZŁOTA ZASADA ZŁODZIEJA 'DID':
Kiedy w zdaniu jest 'did' lub 'didn't', kradnie całą przeszłość dla siebie. Główny czasownik musi wrócić do formy podstawowej!

⏳ Określenia czasu: yesterday, last week, 2 days ago, in 2010.""",

    "past continuous": """🎯 PAST CONTINUOUS - Czas Przeszły Ciągły 🎯

Specjalista od "tła wydarzeń" i bycia przerywanym.

Kiedy używamy?
1. Przerwane akcje. 👉 I was sleeping when the phone rang.
2. Akcje równoległe (Dwie rzeczy na raz). 👉 I was reading while he was cooking.
3. W konkretnym momencie wczoraj. 👉 At 8 PM, I was watching TV.

🏗️ Budowa:
(+) Osoba + was/were + Czasownik-ing. (I was working).
(-) Osoba + wasn't / weren't + Czasownik-ing. (They weren't listening).
(?) Was/Were + Osoba + Czasownik-ing? (Was she driving?).

🥊 Złota zasada (WHEN vs WHILE):
Po słówku WHEN (kiedy) idzie krótka akcja w Past Simple.
Po słówku WHILE (podczas gdy) idzie długa akcja w Past Continuous.""",

    "past perfect": """🎯 PAST PERFECT - Zaprzeszłość 🎯

Używany, by pokazać, co w przeszłości wydarzyło się NAJPIERW. Podróż w czasie wewnątrz innej podróży w czasie.

Kiedy używamy?
Wyobraź sobie dwa wydarzenia z przeszłości:
Krok 1 (Najpierw): Złodziej ukradł TV (Zaprzeszłość -> Past Perfect)
Krok 2 (Później): Wróciłeś do domu o 18:00 (Przeszłość -> Past Simple)
👉 When I returned home, the thief had stolen my TV.

🏗️ Budowa:
(+) Osoba + had + Czasownik w III formie. (She had finished).
(-) Osoba + hadn't + III forma. (I hadn't seen him).
(?) Had + Osoba + III forma?

💡 Używany też w III Trybie Warunkowym:
If I had studied harder... (Gdybym wtedy się uczył...)""",

    "past perfect continuous": """🎯 PAST PERFECT CONTINUOUS - Zaprzeszły Ciągły 🎯

Skupiamy się na PROCESIE, który trwał (i miał znaczenie), ZANIM wydarzyło się coś innego.

Kiedy używamy?
1. Czas trwania przed innym wydarzeniem.
👉 I had been waiting for 2 hours when the train finally arrived.
2. Widoczne skutki "zmęczenia materiału" w przeszłości.
👉 He was out of breath because he had been running.

🏗️ Budowa:
(+) Osoba + had been + Czasownik-ing. (I had been working all day).
(-) Osoba + hadn't been + Czasownik-ing.
(?) Had + Osoba + been + Czasownik-ing?

⏳ Typowe określenia: for 2 hours, since morning, all day, before.""",

    # --- CZASY PRZYSZŁE ---
    "przyszłość": """W angielskim nie ma jednego 'czasu przyszłego'. Mamy Wielką Czwórkę:
1. WILL - Spontaniczne decyzje, obietnice i wróżenie bez dowodów.
2. BE GOING TO - Zamiary i intencje (Mam zamiar kupić auto). Przewidywania oparte na tym co WIDZISZ TERAZ.
3. PRESENT CONTINUOUS - 100% Pewności. Zorganizowane i opłacone plany (Mam bilet na samolot).
4. PRESENT SIMPLE - Harmonogramy na które nie masz wpływu (Pociąg odjeżdża o 20:00).

Wpisz np. 'will' lub 'future continuous', aby dowiedzieć się więcej!""",

    "will": """🎯 WILL - Future Simple (Spontaniczność) 🎯

Kiedy używamy WILL?
1. Błyskawiczne decyzje (Telefon dzwoni? 👉 I'll answer it!).
2. Obietnice i groźby. (👉 I will love you forever).
3. Przewidywania "z sufitu" (Myślę że... 👉 I think robots will rule the world).
4. Oferowanie pomocy. (👉 I'll help you with these bags).

🏗️ Budowa:
(+) Osoba + will + V1 (bezokolicznik).
(-) Osoba + won't + V1.
(?) Will + Osoba + V1?""",

    "going to": """🎯 BE GOING TO - Zamiary i Dowody 🎯

Kiedy używamy?
1. Zamiary i plany (Masz zamiar to zrobić, ale jeszcze nic nie zorganizowałeś na 100%).
👉 I am going to buy a new car soon.
2. Przewidywania oparte na DOWODACH. (Widzisz czarne chmury? Zaraz lunie).
👉 Look at those clouds! It is going to rain.

🏗️ Budowa:
Odmieniamy czasownik 'to be' + going to + bezokolicznik.
👉 I am going to... / She is going to... / We are going to...""",

    "future continuous": """🎯 FUTURE CONTINUOUS - W trakcie w przyszłości 🎯

Wyobraź sobie przyszłość... "Jutro o tej porze BĘDĘ LEŻEĆ na plaży". Przenosimy się do konkretnego punktu w trakcie trwania akcji.

Kiedy używamy?
1. Akcja w trakcie trwania o konkretnej porze w przyszłości.
👉 This time tomorrow, I will be flying to London.
2. Rutynowe, naturalne sytuacje.
👉 I will be seeing John at work anyway.

🏗️ Budowa:
(+) Osoba + will be + Czasownik-ing. (I will be sleeping).
(-) Osoba + won't be + Czasownik-ing.
(?) Will + Osoba + be + Czasownik-ing?

⏳ Wskaźniki: at 8 PM tomorrow, this time tomorrow, all day on Sunday.""",

    "future perfect": """🎯 FUTURE PERFECT - Czas Deadline'ów 🎯

Używamy go, by dumnie oznajmić: "Spokojnie, DO TEGO CZASU na pewno już to skończę!".

Kiedy używamy?
Mówimy o akcji, która zakończy się PRZED wyznaczonym terminem w przyszłości.
👉 By next Friday, I will have finished the report.

🏗️ Budowa:
(+) Osoba + will have + Czasownik w III formie.
(-) Osoba + won't have + III forma.
(?) Will + Osoba + have + III forma?

⏳ Magiczne słówko: "BY" (do jakiegoś czasu) -> by tomorrow, by next week.""",

    "future perfect continuous": """🎯 FUTURE PERFECT CONTINUOUS (Poziom C1) 🎯

Służy do mierzenia czasu z przyszłej perspektywy. "Do tamtego momentu będę to robić już od X lat!".

👉 By next month, I will have been working here for 5 years.
(Zauważ fuzję słówek: BY + FOR).

🏗️ Budowa (najdłuższa):
Osoba + will have been + Czasownik-ing.

⚠️ Pamiętaj o Czasownikach Stanu (State Verbs)! Nie dajemy do nich -ing. Zamiast tego użyj zwykłego Future Perfect.""",

    # --- TRYBY WARUNKOWE (CONDITIONALS) ---
    "0 tryb": """🎯 0 CONDITIONAL - Zerowy Tryb Warunkowy (Gwarancja 100%) 🎯

Kiedy używamy?
Prawa fizyki, fakty naukowe, naturalne rezultaty i nasze osobiste, żelazne zasady. 
Zawsze kiedy spełnisz warunek, wynik jest taki sam.

👉 If you heat water, it boils. (Jeśli podgrzewasz wodę, to wrze).
👉 If I drink coffee late, I don't sleep.

🏗️ Budowa:
If + Present Simple, ... Present Simple.
(Obie części zdania w czasie teraźniejszym).

💡 Trik: Tylko w tym trybie możesz wymienić "If" na "When" (Kiedy) bez zmiany znaczenia!""",

    "1 tryb": """🎯 1ST CONDITIONAL - Pierwszy Tryb (Realna przyszłość) 🎯

Kiedy używamy?
Realne plany, groźby, obietnice i negocjacje. Sytuacja jest baaardzo prawdopodobna.

👉 If it rains tomorrow, I will stay at home.
👉 If you help me, I will buy you dinner.

🏗️ Budowa:
If + Present Simple, ... Osoba + WILL + bezokolicznik.

⚠️ Złota Zasada: NIGDY nie wstawiamy "WILL" zaraz po "IF"! Zawsze trzeba to rozdzielić przecinkiem.""",

    "2 tryb": """🎯 2ND CONDITIONAL - Drugi Tryb ("Gdybanie" o TERAŹNIEJSZOŚCI) 🎯

💎 Gładysz Greg Trik: To jest SKOK O 1 CZAS do tyłu!
Myślisz o TERAZ. Wiesz, że to nierealne. Żeby pokazać ten "dystans", cofasz się z czasem i używasz Past Simple.

Polska myśl: "Gdybym TERAZ miał..."

👉 If I had a lot of money, I would buy a Ferrari.
(Gdybym miał teraz, to bym kupił).

🏗️ Budowa:
If + Past Simple, ... Osoba + WOULD + bezokolicznik.

⚠️ Pamiętaj: Po IF nie ma WOULD! Oraz formalnie używamy 'were' dla wszystkich osób (If I were you...).""",

    "3 tryb": """🎯 3RD CONDITIONAL - Trzeci Tryb (Gdybanie o PRZESZŁOŚCI / Żal) 🎯

💎 Gładysz Greg Trik: To jest SKOK O 2 CZASY do tyłu!
Wszystko już się wydarzyło. Żeby pogdybać o zamkniętej przeszłości, musisz wskoczyć w najstarszy czas: Past Perfect.

Polska myśl: "Gdybym WTEDY zainwestował..."

👉 If I had studied harder, I would have passed.
(Gdybym się wtedy uczył, to bym zdał - ale nie uczyłem się i oblałem).

🏗️ Budowa:
If + Past Perfect (had+V3), ... WOULD HAVE + III forma.

Szybkie porównanie: 
2nd -> mało prawdopodobne marzenie na teraz.
3rd -> całkowicie niemożliwe, bo czas już minął.""",

    # --- INNE (BIERNA I INWERSJA) ---
    "bierna": """🎯 PASSIVE VOICE - Strona Bierna 🎯

Odwracamy kota ogonem! Ważne jest to, CO zostało zrobione, a nie kto to zrobił.
Active: Somebody stole my bike. (Ktoś ukradł...)
Passive: My bike was stolen. (Rower został skradziony).

🏗️ Złota reguła - Strona bierna zawsze ma 2 elementy:
1. "TO BE" - on odmienia się przez czasy (is, are, was, were, has been, will be).
2. III FORMA (V3) - zawsze stoi w miejscu i nigdy się nie zmienia!

Kiedy dodajemy "by" na końcu? Tylko jak osoba wykonująca jest bardzo ważna (np. The book was written BY Shakespeare). Jeżeli to policja kogoś aresztowała, pomijamy to!""",

    "inwersja": """🔥 INWERSJA WARUNKOWA (Level C1/C2) 🔥

Zabieg dla profesjonalistów. Chcesz brzmieć jak native speaker z BBC? 
Wyrzuć całkowicie słówko "IF" z 3. trybu warunkowego i przesuń "Had" na sam początek zdania!

Standard: If I had known the truth, I wouldn't have trusted him.
Inwersja: Had I known the truth, I wouldn't have trusted him.

⚠️ Uważaj na przeczenia! "Not" nie może iść na początek:
❌ Hadn't I gone...
✅ Had I not gone to the party..."""
}

def get_bot_response(user_message):
    """
    Skanuje wiadomość użytkownika. Szuka słów kluczowych i zwraca 
    odpowiedni potężny ciąg znaków z Bazy Wiedzy Gładysza Grega.
    """
    msg = user_message.lower()
    
    # Przeszukiwanie bazy. Używamy sorted, żeby najpierw szukać najdłuższych fraz.
    # Dzięki temu "present perfect continuous" nie zostanie pomylone z "present perfect".
    for key in sorted(KNOWLEDGE_BASE.keys(), key=len, reverse=True):
        if key in msg:
            return KNOWLEDGE_BASE[key]
            
    # Odpowiedź awaryjna
    return """Hmm, Gładysz Greg musi to jeszcze przemyśleć! 🤔 
Nie wyłapałem słowa kluczowego. Spróbuj zapytać konkretnie, np.:
👉 "Opowiedz mi o present perfect"
👉 "Jak zbudować 2 tryb?"
👉 "Czym jest strona bierna?"
👉 "Co to inwersja?"""