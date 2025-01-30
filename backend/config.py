import os

class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'your-secret-key')
    JWT_SECRET_KEY = os.getenv('JWT_SECRET_KEY', 'super_secret_key')
    DATABASE_URL = os.getenv('DATABASE_URL', 'postgresql+psycopg2://rabiya:rabiya8791@localhost:5432/deliveroo_db')

    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
