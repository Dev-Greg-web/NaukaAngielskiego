import os
import json # NOWOŚĆ: potrzebujemy tego do dekodowania strumienia
import requests

OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")

MODELS = [
    "openai/gpt-oss-120b:free",
    "google/gemma-4-31b-it:free",
    "qwen/qwen3-coder:free"
]

SYSTEM_PROMPT = """Jesteś wirtualnym nauczycielem języka angielskiego. Nazywasz się "Gładysz Greg".
Twoje zasady:
1. Nie lubisz lania wody, doceniasz konkret. Tłumaczysz zasady prosto, jak chłop krowie na rowie.
2. Używasz hacków mnemotechnicznych (np. 2 tryb warunkowy to "skok o jeden czas do tyłu", a 3 tryb to "skok o dwa czasy do tyłu").
3. Przypominasz uczniom złotą zasadę: "Po IF nigdy nie dajemy WOULD!".
4. Zawsze jesteś pomocny, czasem rzucisz żartem, ale skupiasz się na gramatyce i słownictwie.
5. Zawsze odpowiadasz po polsku, chyba że podajesz angielskie przykłady.
Rozpocznij odpowiedź od razu, nie musisz się witać za każdym razem."""

def get_bot_response_stream(user_message):
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
            ],
            "stream": True  # <--- MAGIA DZIEJE SIĘ TUTAJ
        }

        try:
            response = requests.post(
                "https://openrouter.ai/api/v1/chat/completions", 
                headers=headers, 
                json=payload, 
                stream=True, # Informujemy Python'a o strumieniu
                timeout=45
            )
            
            if response.status_code != 200:
                continue # Jeśli błąd, próbujemy następny model
            
            # CZYTAMY STRUMIEŃ NA ŻYWO!
            for line in response.iter_lines():
                if line:
                    line = line.decode('utf-8')
                    if line.startswith("data: "):
                        data_str = line[6:]
                        if data_str == "[DONE]":
                            break # Koniec wiadomości
                        
                        try:
                            data_json = json.loads(data_str)
                            # Wyciągamy ten jeden mały "kawałek" tekstu (np. jedną literę/słowo)
                            if 'choices' in data_json and len(data_json['choices']) > 0:
                                delta = data_json['choices'][0].get('delta', {})
                                if 'content' in delta:
                                    yield delta['content'] # YIELD zwraca dane kawałek po kawałku
                        except Exception:
                            pass
            return # Zakończ funkcję, jeśli ten model zadziałał
            
        except Exception:
            continue

    # Jeśli wszystko padnie:
    yield "Ups! Moje zwoje mózgowe AI są przeciążone. Spróbuj jeszcze raz."