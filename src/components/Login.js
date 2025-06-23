import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // ✅ For redirection

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      alert('Login successful');
      navigate('/dashboard'); // ✅ Redirect after login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login to Splitzy</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/register">Sign up</a>
        </p>
        <a style={{ display: 'flex', width: '35%', marginTop : '-38px'}} className='forgot' href="/forgot-password"> Forgot_Password</a>
        
      </form>
    </div>
  );
};

export default Login;
