# backend/app/__init__.py
from dotenv import load_dotenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import os
from flask_migrate import Migrate

migrate = Migrate(app, db)

# Load environment variables from .env file
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Get PostgreSQL URI from environment variable or use a default for local development
DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql+psycopg2://rabiya:rabiya8791@localhost:5432/postgres')

# Ensure DATABASE_URL is provided
if not DATABASE_URL:
    raise ValueError("DATABASE_URL is not set in the .env file")

# Configure your PostgreSQL database connection
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize extensions
db = SQLAlchemy(app)
jwt = JWTManager(app)

# Sample route to test
@app.route('/')
def index():
    return "Hello, Flask with Postgres!"

# Import models and routes if you have them
# from .models import User, Article  # Example
# from .routes import *  # Example
