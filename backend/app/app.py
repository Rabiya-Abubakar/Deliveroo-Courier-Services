from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from app import db, User
import os
from dotenv import load_dotenv

# Initialize Flask app
app = Flask(__name__)

# Load environment variables from .env file
load_dotenv()

# Set up JWT and secret key
app.config['JWT_SECRET_KEY'] = 'super_secret_key'  # Set your secret key

# Set up PostgreSQL database URI using environment variable
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')  # Fetch from .env
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize db and JWT
db.init_app(app)
jwt = JWTManager(app)

# User Signup Route
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify({"message": "Missing required fields!"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists!"}), 409

    new_user = User(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User created successfully!"}), 201

# User Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({"message": "Missing required fields!"}), 400

    user = User.query.filter_by(email=email).first()

    if user and user.check_password(password):
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token}), 200

    return jsonify({"message": "Invalid credentials!"}), 401

# Protected route
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route!"}), 200

if __name__ == '__main__':
    app.run(debug=False)
