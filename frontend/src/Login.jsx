import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (role === 'user') {
      navigate('/home');
    } else if (role === 'ngo') {
      navigate('/ngo-dashboard');
    } else if (role === 'authority') {
      navigate('/authority-dashboard');
    } else {
      alert('Please select a valid role');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <label>
          Username:
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </label>
        <label>
          Select Role:
          <select value={role} onChange={(e) => setRole(e.target.value)} required>
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="ngo">NGO</option>
            <option value="authority">Higher Authority</option>
          </select>
        </label>
        <button type="submit">Login</button>
      </form>

    </div>
  );
};

export default Login;