# monolit/models.py
from flask_sqlalchemy import SQLAlchemy

# Inicjalizujemy pusty obiekt bazy, który potem podepniemy pod aplikację
db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)
    role = db.Column(db.String(10), default='user')
    
    # Fiszki (Twój stary system)
    plan_deck = db.Column(db.Text, default='[]')
    plan_settings = db.Column(db.Text, default='null')
    stats = db.Column(db.Text, default='{"streak": 0, "lastStudyDate": null}')
    
    # NOWOŚĆ: Pamięć Bota Gładysza Grega (z domyślnymi ustawieniami)
    chat_history = db.Column(db.Text, default='[]')
    chat_settings = db.Column(db.Text, default='{"memory": 5}')