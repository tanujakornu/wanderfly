import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(''); setSuccess('');
    try {
      const res = await fetch('https://wanderfly-backend.onrender.com/users?email=' + email.trim());
      const users = await res.json();
      if (users.length > 0) { setError('This email is already registered.'); return; }
      
      await fetch('https://wanderfly-backend.onrender.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), password: password })
      });
      
      setSuccess('Account created successfully. Redirecting...');
      setTimeout(() => navigate('/login'), 1500);
    } catch { setError('Something went wrong.'); }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* LEFT SIDE - ELEGANT MOUNTAIN AREA */}
      <div style={{
        flex: 1, 
        background: 'linear-gradient(rgba(15, 23, 42, 0.6), rgba(30, 41, 59, 0.8)), url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200") center/cover',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '60px',
        color: '#e2e8f0'
      }}>
        <div style={{ width: '80px', height: '3px', background: '#b08d57', marginBottom: '24px' }}></div>
        <h1 style={{ fontSize: '42px', margin: '0 0 16px 0', fontWeight: '300', lineHeight: '1.2', color: '#ffffff' }}>
          Start Your<br />Adventure
        </h1>
        <p style={{ fontSize: '16px', opacity: 0.8, maxWidth: '350px', lineHeight: '1.6', fontWeight: '300' }}>
          Join Wanderly to unlock exclusive travel guides and save your favorite destinations.
        </p>
      </div>

      {/* RIGHT SIDE - CLEAN FORM */}
      <div style={{
        flex: 1, background: '#fafaf9', display: 'flex', justifyContent: 'center', alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{ width: '100%', maxWidth: '380px' }}>
          <h2 style={{ color: '#1e293b', marginBottom: '8px', fontSize: '22px', fontWeight: '600', letterSpacing: '0.5px' }}>Create Account</h2>
          <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '14px', borderBottom: '1px solid #e2e8f0', paddingBottom: '20px' }}>Join the Wanderly community</p>
          
          {error && <p style={{ color: '#dc2626', marginBottom: '20px', fontSize: '13px', background: '#fef2f2', padding: '12px', borderLeft: '3px solid #dc2626' }}>{error}</p>}
          {success && <p style={{ color: '#16a34a', marginBottom: '20px', fontSize: '13px', background: '#ecfdf5', padding: '12px', borderLeft: '3px solid #16a34a' }}>{success}</p>}
          
          <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Full Name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" style={{
                width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '2px',
                background: '#ffffff', color: '#1e293b', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Email Address</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" style={{
                width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '2px',
                background: '#ffffff', color: '#1e293b', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
              }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#475569', fontSize: '12px', fontWeight: '600', letterSpacing: '1px', textTransform: 'uppercase' }}>Password</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create a password" style={{
                width: '100%', padding: '14px 16px', border: '1px solid #cbd5e1', borderRadius: '2px',
                background: '#ffffff', color: '#1e293b', fontSize: '14px', outline: 'none', boxSizing: 'border-box'
              }} />
            </div>
            <button type="submit" style={{
              width: '100%', padding: '16px', border: 'none', borderRadius: '2px',
              background: '#0f172a', color: '#ffffff',
              fontSize: '14px', fontWeight: '600', cursor: 'pointer', marginTop: '10px',
              letterSpacing: '1px', textTransform: 'uppercase'
            }}>Create Account</button>
          </form>
          
          <p style={{ textAlign: 'center', marginTop: '35px', color: '#64748b', fontSize: '14px' }}>
            Already a member? <Link to="/login" style={{ color: '#b08d57', textDecoration: 'none', fontWeight: '600' }}>Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;