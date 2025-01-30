from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Configure the app using environment variables
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')  # PostgreSQL URI from .env
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY', 'your_default_secret_key')  # JWT Secret Key

# Initialize extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Sample route
@app.route('/')
def index():
    return "Hello, Flask with PostgreSQL!"

if __name__ == '__main__':
    app.run(debug=False)
