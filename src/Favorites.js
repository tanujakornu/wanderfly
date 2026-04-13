import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Favorites() {
  const [favs, setFavs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('currentUser');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (user) {
      fetch('https://wanderfly-backend.onrender.com/favorites?userId=' + user.id)
        .then(res => res.json())
        .then(data => setFavs(data));
    }
  }, [user]);

  const removeFav = async (id) => {
    await fetch('https://wanderfly-backend.onrender.com/favorites/' + id, { method: 'DELETE' });
    setFavs(favs.filter(f => f.id !== id));
  };

  if (!user) {
    return (
      <div style={{textAlign: 'center', padding: '100px 20px'}}>
        <h2 style={{marginBottom: '15px'}}>Login to see your favorites ❤️</h2>
        <Link to="/login" style={{color: 'var(--accent)', fontSize: '18px'}}>Go to Login →</Link>
      </div>
    );
  }

  return (
    <div style={{maxWidth: '1000px', margin: '0 auto', padding: '40px 20px'}}>
      <h1 style={{marginBottom: '30px'}}>My Favorites ❤️ ({favs.length})</h1>
      
      {favs.length === 0 ? (
        <div className="card" style={{padding: '40px', textAlign: 'center'}}>
          <p style={{fontSize: '50px', marginBottom: '15px'}}>🗺️</p>
          <h3>No favorites yet!</h3>
          <p style={{color: 'var(--text-secondary)', marginTop: '10px'}}>Start exploring and save places you love.</p>
          <Link to="/country" style={{color: 'var(--accent)', display: 'inline-block', marginTop: '15px'}}>Explore Places →</Link>
        </div>
      ) : (
        <div className="card-grid">
          {favs.map(fav => (
            <div className="card" key={fav.id} style={{overflow: 'hidden', position: 'relative'}}>
              <button 
                onClick={() => removeFav(fav.id)} 
                style={{
                  position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)',
                  border: 'none', color: 'white', borderRadius: '50%', width: '32px', height: '32px',
                  cursor: 'pointer', fontSize: '16px', zIndex: 10
                }}
              >✕</button>
              <Link to={'/place/' + fav.placeId} style={{textDecoration: 'none', color: 'inherit'}}>
                <img src={fav.placeImage} alt={fav.placeName} style={{width: '100%', height: '220px', objectFit: 'contain', display: 'block', borderRadius: '12px', background: 'var(--bg-secondary)'}} />                <div className="card-content">
                  <h3 className="card-title">{fav.placeName}</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '13px', margin: '5px 0 0 0'}}>
                    📍 {fav.cityName}, {fav.stateName}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;