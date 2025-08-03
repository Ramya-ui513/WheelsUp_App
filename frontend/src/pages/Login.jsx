import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import loginBackground from '../assets/LoginPage.jpg';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    encrypted_Password = await bcrypt.hash(this.password, 10);
    try {
      const res = await axios.post('https://wheelsup-app.onrender.com/api/auth/login', {
        username,
        encrypted_Password,
      });

      alert(res.data.message); 
      console.log("User:", res.data.user);

      localStorage.setItem("username", res.data.user.username);

      navigate("/products");
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login to WheelsUp</h2>

        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

        <a href="/signup">Don't have an account? Sign up</a>
      </form>
    </div>
  );
};

export default Login;
