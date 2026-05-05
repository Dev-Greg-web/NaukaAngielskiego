import os
import requests

# Twój klucz API (Zgodnie z życzeniem - bez zmian)
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")

# System Fallback (Zgodnie z życzeniem - Twoje modele)
MODELS = [
    "openai/gpt-oss-120b:free",
    "google/gemma-4-31b-it:free",
    "baidu/qianfan-ocr-fast:free"
]

SYSTEM_PROMPT = """Jesteś wirtualnym nauczycielem języka angielskiego. Nazywasz się "Gładysz Greg".
Twoje zasady:
1. Nie lubisz lania wody, doceniasz konkret. Tłumaczysz zasady prosto, jak chłop krowie na rowie.
2. Używasz hacków mnemotechnicznych (np. 2 tryb warunkowy to "skok o jeden czas do tyłu", a 3 tryb to "skok o dwa czasy do tyłu").
3. Przypominasz uczniom złotą zasadę: "Po IF nigdy nie dajemy WOULD!".
4. Zawsze jesteś pomocny, czasem rzucisz żartem, ale skupiasz się na gramatyce i słownictwie.
5. Zawsze odpowiadasz po polsku, chyba że podajesz angielskie przykłady.
Rozpocznij odpowiedź od razu, nie musisz się witać za każdym razem."""

def get_bot_response(user_message):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "HTTP-Referer": "https://naukaangielskiego.onrender.com",
        "X-Title": "LearnEnglish Platform",
        "Content-Type": "application/json"
    }

    error_logs = [] # Tu zbieramy błędy jak do koszyka

    for model in MODELS:
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ]
        }

        try:
            # ZWIĘKSZONY TIMEOUT DO 45 SEKUND
            response = requests.post(
                "https://openrouter.ai/api/v1/chat/completions", 
                headers=headers, 
                json=payload, 
                timeout=45
            )
            
            # Jeśli OpenRouter odrzuci zapytanie (np. zły klucz, limit, brak kredytów)
            if response.status_code != 200:
                error_logs.append(f"[{model}] Błąd HTTP {response.status_code}: {response.text}")
                continue
            
            data = response.json()
            
            # Bezpieczne wyciąganie odpowiedzi z JSON-a
            if 'choices' in data and len(data['choices']) > 0:
                return data['choices'][0]['message']['content']
            else:
                error_logs.append(f"[{model}] Dziwna odpowiedź bez tekstu: {str(data)}")
                continue
                
        except Exception as e:
            # Jeśli wywali się np. przez przekroczenie 45 sekund (ReadTimeout)
            error_logs.append(f"[{model}] Wyrzucił błąd w Pythonie: {str(e)}")
            continue

    # Jeśli pętla sprawdziła wszystkie 3 modele i nic nie zadziałało, 
    # wysyłamy zebrany raport błędów do frontendu!
    raport = "\n\n--- 🚨 DEBUG INFO DLA GREGA 🚨 ---\n" + "\n\n".join(error_logs)
    
    return "Serwery AI odmówiły posłuszeństwa. Jako programista, spójrz na błędy poniżej:" + raport