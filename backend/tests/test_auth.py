import pytest
from app import app, db  # Ensure these are correctly imported
from app.models import User

@pytest.fixture
def client():
    # Update app configuration for testing
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql+psycopg2://rabiya:rabiya8791@localhost:5432/deliveroo_db'
    app.config['TESTING'] = True

    # Use Flask's test client and application context
    with app.test_client() as client:
        with app.app_context():
            db.create_all()  # Create database tables for the test
        yield client
        with app.app_context():
            db.drop_all()  # Drop tables after test execution

def test_signup(client):
    response = client.post('/auth/signup', json={
        'username': 'testuser',
        'password': 'password123'
    })
    assert response.status_code == 201
    assert b'User created successfully' in response.data

def test_login(client):
    # Create user first
    client.post('/auth/signup', json={
        'username': 'testuser',
        'password': 'password123'
    })

    # Login with created user
    response = client.post('/auth/login', json={
        'username': 'testuser',
        'password': 'password123'
    })
    assert response.status_code == 200
    assert b'access_token' in response.data

def test_invalid_login(client):
    # Try logging in with invalid credentials
    response = client.post('/auth/login', json={
        'username': 'invaliduser',
        'password': 'wrongpassword'
    })
 
