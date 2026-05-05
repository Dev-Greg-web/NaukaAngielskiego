import os
import json
import requests

OPENROUTER_API_KEY = os.environ.get("OPENROUTER_API_KEY")

MODELS_MAP = {
    "universal": "openai/gpt-oss-120b:free",
    "fast": "qwen/qwen3-coder:free",
    "pro": "google/gemma-4-31b-it:free"
}

FALLBACK_MODELS = [
    "openai/gpt-oss-120b:free",
    "google/gemma-4-31b-it:free",
    "z-ai/glm-4.5-air:free"
]

SYSTEM_PROMPT = """Jesteś wirtualnym nauczycielem języka angielskiego. Nazywasz się "Gładysz Greg".
Twoje zasady:
1. Nie lubisz lania wody, doceniasz konkret. Tłumaczysz zasady prosto.
2. Formatyzujesz tekst w Markdown (używaj tabel i pogrubień).
3. Używasz hacków mnemotechnicznych (np. 2 tryb to "skok w tył").
4. Przypominasz: "Po IF nigdy nie dajemy WOULD!".
5. Odpowiadasz po polsku, chyba że dajesz przykłady.
Rozpocznij odpowiedź od razu."""

# Dodajemy history i settings
def get_bot_response_stream(user_message, model_type="universal", history=[], settings={}):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "HTTP-Referer": "https://naukaangielskiego.onrender.com",
        "X-Title": "LearnEnglish Platform",
        "Content-Type": "application/json"
    }

    # 1. BUDOWANIE PAMIĘCI (CONTEXT WINDOW)
    messages_payload = [{"role": "system", "content": SYSTEM_PROMPT}]
    
    # Odczyt z ustawień zdefiniowanych przez usera:
    memory_limit = int(settings.get("memory", 5))
    
    # Bierzemy np. 10 ostatnich wiadomości (5 pytań + 5 odpowiedzi)
    recent_history = history[-(memory_limit * 2):] if memory_limit > 0 else []
    for msg in recent_history:
        role = "user" if msg['sender'] == 'user' else "assistant"
        if "Błąd serwera" not in msg['text']:
            messages_payload.append({"role": role, "content": msg['text']})

    # 2. Dopisujemy aktualne pytanie użytkownika
    messages_payload.append({"role": "user", "content": user_message})

    primary_model = MODELS_MAP.get(model_type, MODELS_MAP["universal"])
    models_to_try = [primary_model] + [m for m in FALLBACK_MODELS if m != primary_model]

    for model in models_to_try:
        payload = {
            "model": model,
            "messages": messages_payload, # PCHAMY PAMIĘĆ DO OPENROUTERA!
            "stream": True 
        }

        try:
            response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload, stream=True, timeout=45)
            if response.status_code != 200: continue 
            
            for line in response.iter_lines():
                if line:
                    line = line.decode('utf-8')
                    if line.startswith("data: "):
                        data_str = line[6:]
                        if data_str == "[DONE]": break
                        try:
                            data_json = json.loads(data_str)
                            if 'choices' in data_json and len(data_json['choices']) > 0:
                                delta = data_json['choices'][0].get('delta', {})
                                if 'content' in delta:
                                    yield delta['content'] 
                        except Exception: pass
            return 
        except Exception:
            continue

    yield "Ups! Serwery AI są przeciążone. Spróbuj zmienić model w lewym dolnym rogu!"