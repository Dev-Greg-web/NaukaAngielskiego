import os
import requests

# Twój klucz API
OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")

# System Fallback
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

    for model in MODELS:
        payload = {
            "model": model,
            "messages": [
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ]
        }

        try:
            # ZWIĘKSZONY TIMEOUT DO 45 SEKUND - modele AI potrzebują czasu na długie odpowiedzi!
            response = requests.post(
                "https://openrouter.ai/api/v1/chat/completions", 
                headers=headers, 
                json=payload, 
                timeout=45
            )
            
            response.raise_for_status() 
            
            data = response.json()
            ai_reply = data['choices'][0]['message']['content']
            
            return ai_reply
            
        except requests.exceptions.RequestException as e:
            # Drukujemy bezpieczny błąd sieciowy
            print(f"--- BŁĄD MODELU {model} ---")
            if hasattr(e, 'response') and e.response is not None:
                print(e.response.text) # Zobaczymy dokładnie, co mówi OpenRouter!
            continue
        except Exception:
            continue

    return "Ups! Wygląda na to, że wszystkie moje zwoje mózgowe AI są teraz przeciążone. Daj mi chwilę i spróbuj zapytać ponownie!"