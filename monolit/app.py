import json
from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

# 1. Wyciągamy absolutną ścieżkę do folderu, w którym fizycznie leży plik app.py
BASE_DIR = os.path.abspath(os.path.dirname(__file__))

# 2. Mówimy Flaskowi: "Twoje foldery są DOKŁADNIE tutaj, nigdzie indziej!"
app = Flask(__name__, 
            static_folder=os.path.join(BASE_DIR, 'static'),
            template_folder=os.path.join(BASE_DIR, 'templates'))

# 1. KONFIGURACJA BAZY DANYCH (SQLite - plik lokalny)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fiszki.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# ==========================================
# 2. MODELE BAZY DANYCH (Architektura Tabeli)
# ==========================================
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(10), default='user')
    
    # Postępy Reacta to złożone obiekty. W SQLite najprościej trzymać je jako zwykły tekst (JSON).
    plan_deck = db.Column(db.Text, default='[]')
    plan_settings = db.Column(db.Text, default='null')
    stats = db.Column(db.Text, default='{"streak": 0, "lastStudyDate": null}')

# Tworzenie pliku bazy danych przy starcie serwera
with app.app_context():
    db.create_all()
    # Sprytny trik: automatycznie tworzymy Admina, jeśli baza jest pusta!
    if not User.query.filter_by(username='AdminGreg').first():
        admin = User(username='AdminGreg', password='Lego2012', role='admin')
        db.session.add(admin)
        db.session.commit()
        print("Stworzono konto administratora!")

# ==========================================
# 3. FRONTEND (SERWOWANIE REACTA)
# ==========================================
@app.route('/')
def index():
    return render_template('react_app.html')

# ==========================================
# 4. BACKEND API (KOMUNIKACJA Z BAZĄ)
# ==========================================
@app.route('/api/login', methods=['POST'])
def api_login():
    data = request.json
    login = data.get('login')
    password = data.get('password')

    # Jeśli password jest puste, to znaczy że to 'refreshData' z Reacta
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
            "planSettings": json.loads(user.plan_settings),
            "stats": json.loads(user.stats)
        })
    return jsonify({"success": False, "error": "Błąd autoryzacji."}), 401

@app.route('/api/sync', methods=['POST'])
def api_sync():
    """Ten endpoint React wywoła, aby zapisać swoje postępy na serwerze"""
    data = request.json
    user = User.query.filter_by(username=data.get('username')).first()
    
    if user:
        # Kodujemy obiekty Reacta na tekst, żeby zapisać w SQLite
        user.plan_deck = json.dumps(data.get('planDeck', []))
        user.plan_settings = json.dumps(data.get('planSettings', None))
        user.stats = json.dumps(data.get('stats', {"streak": 0, "lastStudyDate": None}))
        db.session.commit()
        return jsonify({"success": True})
    return jsonify({"success": False, "error": "Nie znaleziono użytkownika."}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
