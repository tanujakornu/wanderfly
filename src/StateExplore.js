import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { travelData } from './data';

function StateExplore() {
  const { stateName } = useParams();
  const [search, setSearch] = useState('');
  const country = travelData[0];
  const state = country.states.find(s => s.name === stateName);

  if (!state) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px' }}>
        <p style={{ fontSize: '50px', marginBottom: '20px' }}>🗺️</p>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>State not found</h2>
        <Link to="/country" className="btn btn-outline">Back to Explore</Link>
      </div>
    );
  }

  const cities = state.cities || [];
  const filteredCities = search
    ? cities.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        (c.places && c.places.some(p => p.name.toLowerCase().includes(search.toLowerCase())))
      )
    : cities;

  return (
    <div>
      <div style={{ position: 'relative', height: '45vh', minHeight: '300px', overflow: 'hidden', background: '#000' }}>
        <img src={state.image} alt={state.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.8) 100%)' }} />
        <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', zIndex: 5, padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to="/country" className="back-link" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '16px', display: 'inline-block' }}>← All States</Link>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: '300', color: '#fff', margin: '0 0 8px 0' }}>{state.name}</h1>
          <p style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '3px', fontWeight: '400' }}>{cities.length} CITIES TO EXPLORE</p>
        </div>
      </div>

      <div style={{ padding: '60px 40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p className="section-label">Cities</p>
          <h2 className="section-title">Explore by City</h2>
          <div className="section-line" />
        </div>

        {cities.length > 3 && (
          <div className="search-bar">
            <span className="search-bar-icon">🔍</span>
            <input
              type="text"
              placeholder="Search cities or places..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}

        {filteredCities.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</p>
            <p>No cities match your search.</p>
          </div>
        ) : (
          <div className="card-grid">
            {filteredCities.map((city, i) => {
              const placeCount = city.places ? city.places.length : 0;
              return (
                <div key={i} className="card fade-in" style={{ animationDelay: (i * 0.08) + 's' }}>
                  <Link to={'/state/' + stateName + '/city/' + city.name} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="card-img-wrap">
                      <img src={city.image} alt={city.name} loading="lazy" />
                      <div className="card-img-overlay">
                        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#fff', margin: '0 0 6px 0' }}>{city.name}</h3>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{placeCount} places to visit</span>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span className="card-footer-text">Explore city</span>
                      <span className="card-footer-arrow">→</span>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default StateExplore;
