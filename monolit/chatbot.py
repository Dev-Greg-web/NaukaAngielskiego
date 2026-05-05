import os
import requests

# 1. Twój klucz API (Podmień ten tekst na swój prawdziwy klucz do testów lokalnych)
# Jak wrzucisz na Rendera, użyjemy zmiennych środowiskowych, żeby było bezpiecznie!
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY", "WLEJ_TUTAJ_SWOJ_KLUCZ_Z_OPENROUTER")

# 2. Lista modeli (System Fallback). Jak jeden zawiedzie, wjeżdża następny.
MODELS = [
    "google/gemini-2.0-flash-lite-preview-02-05:free", # Superszybki model od Google
    "meta-llama/llama-3-8b-instruct:free",             # Świetny model od Mety
    "mistralai/mistral-7b-instruct:free"               # Bardzo stabilny model Mistral
]

# 3. System Prompt - To jest dusza i charakter Twojego bota!
SYSTEM_PROMPT = """Jesteś wirtualnym nauczycielem języka angielskiego. Nazywasz się "Gładysz Greg".
Twoje zasady:
1. Nie lubisz lania wody, doceniasz konkret. Tłumaczysz zasady prosto, jak chłop krowie na rowie.
2. Używasz hacków mnemotechnicznych (np. 2 tryb warunkowy to "skok o jeden czas do tyłu", a 3 tryb to "skok o dwa czasy do tyłu").
3. Przypominasz uczniom złotą zasadę: "Po IF nigdy nie dajemy WOULD!".
4. Zawsze jesteś pomocny, czasem rzucisz żartem, ale skupiasz się na gramatyce i słownictwie.
5. Zawsze odpowiadasz po polsku, chyba że podajesz angielskie przykłady.
Rozpocznij odpowiedź od razu, nie musisz się witać za każdym razem."""

def get_bot_response(user_message):
    """
    Wysyła zapytanie do OpenRouter. Używa pętli, aby spróbować kolejnych modeli,
    jeśli główny zawiedzie (Fallback System).
    """
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "HTTP-Referer": "https://naukaangielskiego.onrender.com", # Opcjonalne, ale OpenRouter to lubi
        "X-Title": "LearnEnglish Platform",
        "Content-Type": "application/json"
    }

    # Lecimy przez listę modeli
    for model in MODELS:
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ]
        }

        try:
            # Wysyłamy żądanie, czekamy maksymalnie 15 sekund
            response = requests.post(
                "https://openrouter.ai/api/v1/chat/completions", 
                headers=headers, 
                json=payload, 
                timeout=15
            )
            
            # Sprawdzamy, czy serwer zwrócił błąd
            response.raise_for_status() 
            
            # Wyciągamy odpowiedź AI
            data = response.json()
            ai_reply = data['choices'][0]['message']['content']
            
            # Sukces! Zwracamy odpowiedź i przerywamy pętlę
            return ai_reply
            
        except Exception as e:
            # Jeśli ten model wywalił błąd, drukujemy to w logach i idziemy do następnego!
            print(f"Model {model} zawiódł. Błąd: {e}. Próbuję następny...")
            continue

    # Jeśli pętla przeszła przez WSZYSTKIE 3 modele i żaden nie zadziałał:
    return "Ups! Wygląda na to, że wszystkie moje zwoje mózgowe AI są teraz przeciążone. Daj mi chwilę i spróbuj zapytać ponownie!"