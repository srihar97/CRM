from flask import Flask
from flask_cors import CORS
from database import db
from routes import api

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///crm.db'
db.init_app(app)

with app.app_context():
    db.create_all()  # Create database tables

app.register_blueprint(api)

if __name__ == '__main__':
    app.run(debug=True)
