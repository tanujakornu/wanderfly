import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Home from './Home';
import CountryExplore from './CountryExplore';
import StateExplore from './StateExplore';
import CityPage from './CityPage';
import PlaceDetail from './PlaceDetail';
import Login from './Login';
import Register from './Register';
import Favorites from './Favorites';
import './App.css';

export const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toasts, setToasts] = useState([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) setUser(JSON.parse(saved));
    setLoading(false);
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : '';
  }, [darkMode]);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    addToast('Logged out successfully', 'info');
  };

  const addToast = (message, type = 'success') => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.map(t => t.id === id ? { ...t, exit: true } : t));
      setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 300);
    }, 3000);
  };

  if (loading) return null;

  if (!user && location.pathname !== '/login' && location.pathname !== '/register') {
    return <Navigate to="/login" />;
  }

  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <ToastContext.Provider value={addToast}>
        <Routes>
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <div className="toast-container">
          {toasts.map(t => (
            <div key={t.id} className={'toast ' + t.type + (t.exit ? ' exit' : '')}>
              {t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : 'ℹ'} {t.message}
            </div>
          ))}
        </div>
      </ToastContext.Provider>
    );
  }

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Explore', path: '/country' },
    { label: 'Favorites', path: '/favorites' },
  ];

  return (
    <ToastContext.Provider value={addToast}>
      <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', transition: 'background 0.3s' }}>

        <nav className="nav">
          <Link to="/" className="nav-logo">
            <span className="nav-logo-icon">✦</span>
            Wanderly
          </Link>

          <div className="nav-links">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className={'nav-link' + (location.pathname === item.path ? ' active' : '')}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-right">
            <span className="nav-welcome">
              Welcome, <strong>{user.name}</strong>
            </span>
            <div className="nav-divider"></div>
            <button className="nav-icon-btn" onClick={() => setDarkMode(!darkMode)} title="Toggle theme">
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button className="nav-logout" onClick={handleLogout}>Logout</button>
            <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        <div className={'mobile-menu' + (mobileOpen ? ' open' : '')}>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              className={'nav-link' + (location.pathname === item.path ? ' active' : '')}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <main style={{ paddingTop: 'var(--nav-height)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country" element={<CountryExplore />} />
            <Route path="/state/:stateName" element={<StateExplore />} />
            <Route path="/state/:stateName/city/:cityName" element={<CityPage />} />
            <Route path="/place/:id" element={<PlaceDetail />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-inner">
            <div className="footer-brand">
              <h3>✦ Wanderly</h3>
              <p>Discover the incredible beauty of India — from royal palaces to serene backwaters, ancient temples to misty mountains.</p>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <Link to="/country">All States</Link>
              <Link to="/favorites">My Favorites</Link>
              <Link to="/">Home</Link>
            </div>
            <div className="footer-col">
              <h4>Top States</h4>
              <Link to="/state/Rajasthan">Rajasthan</Link>
              <Link to="/state/Kerala">Kerala</Link>
              <Link to="/state/Ladakh">Ladakh</Link>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#" onClick={e => e.preventDefault()}>Instagram</a>
              <a href="#" onClick={e => e.preventDefault()}>Twitter</a>
              <a href="#" onClick={e => e.preventDefault()}>GitHub</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Wanderly. Built with React.</span>
            <span>Explore India ✦</span>
          </div>
        </footer>

        <div className="toast-container">
          {toasts.map(t => (
            <div key={t.id} className={'toast ' + t.type + (t.exit ? ' exit' : '')}>
              {t.type === 'success' ? '✓' : t.type === 'error' ? '✕' : 'ℹ'} {t.message}
            </div>
          ))}
        </div>
      </div>
    </ToastContext.Provider>
  );
}

export default App;
