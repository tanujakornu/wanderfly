import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://wanderfly-backend.onrender.com/users?email=' + email.trim());
      const users = await res.json();
      if (users.length === 0) { setError('No account found with this email.'); return; }
      if (users[0].password === password) {
        localStorage.setItem('currentUser', JSON.stringify(users[0]));
        setUser(users[0]);
        navigate('/');
      } else { setError('Incorrect password.'); }
    } catch { setError('Network error.'); }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* LEFT SIDE - DEEP ELEGANT IMAGE AREA */}
      <div style={{
        flex: 1, 
        background: 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200") center/cover',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px',
        color: '#e2e8f0'
      }}>
        <div style={{ width: '80px', height: '3px', background: '#b08d57', marginBottom: '24px' }}></div>
        <h1 style={{ fontSize: '42px', margin: '0 0 16px 0', fontWeight: '300', lineHeight: '1.2', color: '#ffffff' }}>
          Discover Your<br />Next Journey
        </h1>
        <p style={{ fontSize: '16px', opacity: 0.8, maxWidth: '350px', lineHeight: '1.6', fontWeight: '300' }}>
          Log in to access your saved destinations and personalized travel recommendations.
        </p>
      </div>

      {/* RIGHT SIDE - CLEAN FORM */}
      <div style={{
        flex: 1, background: '#fafaf9', display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <h2 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '22px', fontWeight: '600', letterSpacing: '0.5px' }}>Sign In</h2>
          <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>Welcome back to Wanderly</p>
          
          {error && <p style={{ color: '#dc2626', marginBottom: '20px', fontSize: '13px', background: '#fef2f2', padding: '12px', borderLeft: '3px solid #dc2626' }}>{error}</p>}
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" style={{
                width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '2px',
                background: '#ffffff', color: '#1e293b', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
                transition: 'border 0.3s'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" style={{
                width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '2px',
                background: '#ffffff', color: '#1e293b', fontSize: '14px', outline: 'none', boxSizing: 'border-box',
                transition: 'border 0.3s'
              }} />
            </div>
            <button type="submit" style={{
              width: '100%', padding: '16px', border: 'none', borderRadius: '2px',
              background: '#0f172a', color: '#ffffff',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '10px',
              letterSpacing: '1px', textTransform: 'uppercase',
              transition: 'background 0.3s'
            }}>Sign In</button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '35px', color: '#64748b', fontSize: '14px' }}>
            New to Wanderly? <Link to="/register" style={{ color: '#b08d57', textDecoration: 'none', fontWeight: '600' }}>Create an account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
