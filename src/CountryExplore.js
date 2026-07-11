import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { travelData } from './data';

function CountryExplore() {
  const country = travelData[0];
  const states = country.states;
  const [search, setSearch] = useState('');

  const filtered = search
    ? states.filter(s =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        (s.cities && s.cities.some(c => c.name.toLowerCase().includes(search.toLowerCase())))
      )
    : states;

  return (
    <div style={{ padding: '60px 40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="section-header">
        <p className="section-label">Explore India</p>
        <h1 className="section-title">Choose Your Destination</h1>
        <div className="section-line" />
      </div>

      <div className="search-bar">
        <span className="search-bar-icon">🔍</span>
        <input
          type="text"
          placeholder="Search states or cities..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 20px', color: 'var(--text-muted)' }}>
          <p style={{ fontSize: '50px', marginBottom: '16px' }}>🔍</p>
          <p style={{ fontSize: '16px' }}>No states match "{search}"</p>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map((state, i) => {
            const cityCount = state.cities ? state.cities.length : 0;
            const placeCount = state.cities ? state.cities.reduce((sum, c) => sum + (c.places ? c.places.length : 0), 0) : 0;
            return (
              <div key={i} className="card fade-in" style={{ animationDelay: (i * 0.06) + 's' }}>
                <Link to={'/state/' + state.name} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                  <div className="card-img-wrap">
                    <img src={state.image} alt={state.name} loading="lazy" />
                    <div className="card-img-overlay">
                      <h3 style={{ fontSize: '19px', fontWeight: '600', color: '#fff', margin: '0 0 6px 0' }}>{state.name}</h3>
                      <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>
                        <span>{cityCount} cities</span>
                        <span>·</span>
                        <span>{placeCount} places</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="card-footer-text">View destinations</span>
                    <span className="card-footer-arrow">→</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CountryExplore;
