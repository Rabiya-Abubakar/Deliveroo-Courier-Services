import React, { useState } from 'react';
import '../assets/styles/signup.css';

const Login = () => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (role === 'admin') {
      window.location.href = '/admin-page1'; // Adjust this to use React Router if needed
    } else if (role === 'user') {
      window.location.href = '/userpage'; // Adjust this to use React Router if needed
    } else {
      alert('Please select a valid role.');
    }
  };

  return (
    <div className="signup-container">
      <h1>Login</h1>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="role">Select Your Role:</label>
        <select
          id="role"
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">--Select--</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <label htmlFor="email">Enter Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Enter Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
