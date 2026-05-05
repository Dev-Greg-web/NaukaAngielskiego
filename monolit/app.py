import json
import os
from flask import Flask, render_template, request, jsonify, Response
# Importujemy bazę i model z Twojego nowego pliku!
from models import db, User
from chatbot import get_bot_response_stream

BASE_DIR = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__, 
            static_folder=os.path.join(BASE_DIR, 'static'),
            template_folder=os.path.join(BASE_DIR, 'templates'))

# KONFIGURACJA BAZY DANYCH
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL', 'sqlite:///fiszki.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Łączymy aplikację z bazą z pliku models.py
db.init_app(app)

with app.app_context():
    db.create_all()
    if not User.query.filter_by(username='AdminGreg').first():
        admin = User(username='AdminGreg', password='Lego2012', role='admin')
        db.session.add(admin)
        db.session.commit()
        print("Stworzono konto administratora!")

@app.route('/')
def index():
    return render_template('react_app.html')

# --- SYSTEM LOGOWANIA I FISZEK ---
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    login = data.get('login')
    password = data.get('password')

    if not password:
        user = User.query.filter_by(username=login).first()
    else:
        user = User.query.filter_by(username=login, password=password).first()
    
    if user:
        return jsonify({
            "success": True, 
            "role": user.role, 
            "username": user.username,
            "planDeck": json.loads(user.plan_deck),
            "planSettings": json.loads(user.plan_settings) if user.plan_settings != 'null' else None,
            "stats": json.loads(user.stats)
        })
    return jsonify({"success": False, "error": "Błąd autoryzacji."}), 401

@app.route('/api/sync', methods=['POST'])
def api_sync():
    data = request.json
    user = User.query.filter_by(username=data.get('username')).first()
    if user:
        user.plan_deck = json.dumps(data.get('planDeck', []))
        user.plan_settings = json.dumps(data.get('planSettings', None))
        user.stats = json.dumps(data.get('stats', {"streak": 0, "lastStudyDate": None}))
        db.session.commit()
        return jsonify({"success": True})
    return jsonify({"success": False, "error": "Nie znaleziono użytkownika."}), 404


# --- NOWOŚĆ: SYSTEM CZATU (Odczyt i Zapis SQLAlchemy) ---
@app.route('/api/chat_load', methods=['POST'])
def chat_load():
    data = request.json
    user = User.query.filter_by(username=data.get('username')).first()
    if user:
        return jsonify({
            "messages": json.loads(user.chat_history),
            "settings": json.loads(user.chat_settings)
        })
    return jsonify({"error": "Brak usera"}), 404

@app.route('/api/chat_sync', methods=['POST'])
def chat_sync():
    data = request.json
    user = User.query.filter_by(username=data.get('username')).first()
    if user:
        # Kodujemy historię i ustawienia z Reacta na string, żeby weszło do SQLite
        user.chat_history = json.dumps(data.get('messages', []))
        user.chat_settings = json.dumps(data.get('settings', {}))
        db.session.commit()
        return jsonify({"success": True})
    return jsonify({"error": "Brak usera"}), 404

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.get_json()
    user_msg = data.get('message', '')
    model_type = data.get('modelType', 'universal') 
    history = data.get('history', [])     # Odbieramy historię
    
    # TUTAJ POPRAWKA: Usunęliśmy 'settings' z nawiasu, wysyłamy tylko 3 argumenty!
    return Response(get_bot_response_stream(user_msg, model_type, history), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True)

if __name__ == '__main__':
    app.run(debug=True)
