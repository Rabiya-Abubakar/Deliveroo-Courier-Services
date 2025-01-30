from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User  # Make sure you have the models properly set up in models.py

app = Flask(__name__)

# Set up JWT and secret key
app.config['JWT_SECRET_KEY'] = 'super_secret_key'
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://username:password@localhost/dbname'  # Update with actual DB URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable track modifications to save resources

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

    # Check if email is valid
    if "@" not in email:
        return jsonify({"message": "Invalid email format!"}), 400

    # Check if user exists
    if User.query.filter_by(email=email).first():
        return jsonify({"message": "User already exists!"}), 409

    # Hash the password before storing it
    hashed_password = generate_password_hash(password)

    # Create a new user and add to the database
    new_user = User(username=username, email=email, password=hashed_password)
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

    if user and check_password_hash(user.password, password):  # Check if password matches hash
        # Create JWT token
        access_token = create_access_token(identity=user.id)
        return jsonify({"access_token": access_token}), 200

    return jsonify({"message": "Invalid credentials!"}), 401

# Sample route to test token authentication
@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    return jsonify({"message": "This is a protected route!"}), 200

if __name__ == '__main__':
    app.run(debug=True)
