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
    "baidu/qianfan-ocr-fast:free"
]

def get_bot_response_stream(user_message, model_type="universal", history=[], settings={}):
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "HTTP-Referer": "https://naukaangielskiego.onrender.com",
        "X-Title": "LearnEnglish Platform",
        "Content-Type": "application/json"
    }

    # 1. POBIERANIE USTAWIEŃ Z REACTA (z wartościami domyślnymi)
    memory_limit = int(settings.get("memory", 5))
    tone = settings.get("tone", "normal")
    lang = settings.get("language", "pl")
    length = settings.get("length", "normal")

    # 2. BUDOWANIE DYNAMICZNEGO CHARAKTERU BOTA
    sys_prompt = 'Jesteś wirtualnym nauczycielem języka angielskiego. Nazywasz się "Gładysz Greg".\n'

    # --- Ustawienie 1: TON ---
    if tone == "chill":
        sys_prompt += "Osobowość: Bądź ekstremalnie wyluzowany. Używaj dużo slangu, młodzieżowych zwrotów, żartów i emotikonów. Nie bądź sztywny.\n"
    elif tone == "strict":
        sys_prompt += "Osobowość: Bądź bardzo surowym, chłodnym i profesjonalnym akademikiem. Żadnych żartów. Wymagaj pełnej precyzji.\n"
    else:
        sys_prompt += "Osobowość: Nie lubisz lania wody, doceniasz konkret. Tłumaczysz zasady prosto, jak chłop krowie na rowie.\n"

    # --- Ustawienie 2: JĘZYK ---
    if lang == "en":
        sys_prompt += "Język: WSZYSTKIE TWOJE ODPOWIEDZI MUSZĄ BYĆ W JĘZYKU ANGIELSKIM (Full Immersion). Nigdy nie używaj polskiego.\n"
    else:
        sys_prompt += "Język: Zawsze odpowiadasz po polsku, podając angielskie przykłady z polskim tłumaczeniem.\n"

    # --- Ustawienie 3: DŁUGOŚĆ ---
    if length == "short":
        sys_prompt += "Format: Twoje odpowiedzi mają być EKSTREMALNIE ZWIĘZŁE. Podaj regułkę w jednym zdaniu i od razu 2 przykłady. Maksymalnie 3-4 zdania łącznie.\n"
    elif length == "long":
        sys_prompt += "Format: Twoje odpowiedzi mają być WYCZERPUJĄCYMI ESEJAMI. Zawsze wymieniaj wszystkie wyjątki od reguły i dogłębnie analizuj temat. Używaj rozbudowanych tabel.\n"
    else:
        sys_prompt += "Format: Odpowiadaj optymalnie. Używaj formatowania Markdown (tabele i pogrubienia dla ułatwienia czytania).\n"

    # Złote zasady Grega
    sys_prompt += 'Złota zasada: Używasz hacków mnemotechnicznych i przypominasz: "Po IF nigdy nie dajemy WOULD!". Rozpocznij odpowiedź od razu, nie witaj się.\n'

    # 3. BUDOWANIE PAMIĘCI
    messages_payload = [{"role": "system", "content": sys_prompt}]
    
    recent_history = history[-(memory_limit * 2):] if memory_limit > 0 else []
    for msg in recent_history:
        role = "user" if msg['sender'] == 'user' else "assistant"
        if "Błąd serwera" not in msg['text']:
            messages_payload.append({"role": role, "content": msg['text']})

    messages_payload.append({"role": "user", "content": user_message})

    # WYSYŁKA DO OPENROUTERA
    primary_model = MODELS_MAP.get(model_type, MODELS_MAP["universal"])
    models_to_try = [primary_model] + [m for m in FALLBACK_MODELS if m != primary_model]

    for model in models_to_try:
        payload = {
            "model": model,
            "messages": messages_payload, 
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

    yield "Ups! Serwery AI są przeciążone. Spróbuj zmienić model w dolnym rogu!"    