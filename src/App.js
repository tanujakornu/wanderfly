import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './Home';
import CountryExplore from './CountryExplore';
import StateExplore from './StateExplore';
import CityPage from './CityPage';
import PlaceDetail from './PlaceDetail';
import Login from './Login';
import Register from './Register';
import Favorites from './Favorites';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  if (loading) return null;

  if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
    return <Navigate to="/login" />;
  }

  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* CLASSY TOP NAVIGATION */}
      <nav style={{
        position: 'fixed', top: 0, width: '100%', height: '64px',
        background: darkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', zIndex: 1000, boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <h1 style={{ 
            color: '#b08d57', fontSize: '22px', margin: 0, fontWeight: '700', 
            letterSpacing: '1px', textTransform: 'uppercase'
          }}>Wanderly</h1>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
          {['Home', 'Explore', 'Favorites'].map(item => (
            <Link key={item} to={item === 'Home' ? '/' : item === 'Explore' ? '/country' : '/favorites'} style={{
              textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '14px', 
              fontWeight: '500', letterSpacing: '0.5px', textTransform: 'uppercase',
              borderBottom: location.pathname === (item === 'Home' ? '/' : item === 'Explore' ? '/country' : '/favorites') ? '2px solid #b08d57' : '2px solid transparent',
              paddingBottom: '4px', transition: 'all 0.3s'
            }}>
              {item}
            </Link>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '13px', letterSpacing: '0.5px' }}>
            WELCOME, <span style={{ color: 'var(--text-primary)', fontWeight: '600', textTransform: 'uppercase' }}>{user.name}</span>
          </span>
          <div style={{ width: '1px', height: '24px', background: 'var(--border)' }}></div>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: 'var(--text-secondary)' }}>{darkMode ? '☀️' : '🌙'}</button>
          <button onClick={handleLogout} style={{
            background: 'transparent', color: '#b08d57', border: '1px solid #b08d57', padding: '7px 18px', 
            borderRadius: '4px', cursor: 'pointer', fontWeight: '600', fontSize: '12px', 
            letterSpacing: '1px', textTransform: 'uppercase', transition: 'all 0.3s'
          }}>Logout</button>
        </div>
      </nav>

      <main style={{ paddingTop: '64px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<CountryExplore />} />
          <Route path="/state/:stateName" element={<StateExplore />} />
          <Route path="/state/:stateName/city/:cityName" element={<CityPage />} />
          <Route path="/place/:id" element={<PlaceDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;