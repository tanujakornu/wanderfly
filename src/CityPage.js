import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { travelData } from './data';

function CityPage() {
  var params = useParams();
  var stateName = params.stateName;
  var cityName = params.cityName;
  var country = travelData[0];
  var [search, setSearch] = useState('');
  var state = country.states.find(function(s) { return s.name === stateName; });

  if (!state) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px' }}>
        <p style={{ fontSize: '50px', marginBottom: '20px' }}>🗺️</p>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>State not found</h2>
        <Link to="/country" className="btn btn-outline">Back to Explore</Link>
      </div>
    );
  }

  var city = state.cities ? state.cities.find(function(c) { return c.name === cityName; }) : null;

  if (!city) {
    return (
      <div style={{ textAlign: 'center', padding: '120px 20px' }}>
        <p style={{ fontSize: '50px', marginBottom: '20px' }}>🏙️</p>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: '12px' }}>City not found</h2>
        <Link to={'/state/' + stateName} className="btn btn-outline">Back to {stateName}</Link>
      </div>
    );
  }

  var places = city.places || [];
  var filtered = search
    ? places.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    : places;

  return (
    <div>
      <div style={{ position: 'relative', width: '100%', height: '50vh', minHeight: '320px', maxHeight: '420px', overflow: 'hidden', background: '#000' }}>
        <img src={city.image} alt={city.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.8) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 5, padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          <Link to={'/state/' + stateName} className="back-link" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '14px', display: 'inline-block' }}>← Back to {stateName}</Link>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '48px', fontWeight: '300', color: '#fff', textShadow: '0 4px 30px rgba(0,0,0,0.5)', margin: '0 0 8px 0', letterSpacing: '2px' }}>{city.name}</h1>
          <p style={{ color: 'var(--gold)', fontSize: '13px', letterSpacing: '3px', fontWeight: '400' }}>{stateName}, India · {places.length} Places</p>
        </div>
      </div>

      <div style={{ padding: '60px 40px 80px', maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header" style={{ marginBottom: '30px' }}>
          <p className="section-label">Discover</p>
          <h2 className="section-title">Places to Visit in {city.name}</h2>
          <div className="section-line" />
        </div>

        {places.length > 3 && (
          <div className="search-bar">
            <span className="search-bar-icon">🔍</span>
            <input
              type="text"
              placeholder="Search places..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        )}

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '40px', marginBottom: '12px' }}>🔍</p>
            <p>No places match your search.</p>
          </div>
        ) : (
          <div className="card-grid">
            {filtered.map(function(place, i) {
              return (
                <div key={i} className="card fade-in" style={{ animationDelay: (i * 0.08) + 's' }}>
                  <Link to={'/place/' + place.id} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div className="card-img-wrap">
                      <img src={place.image} alt={place.name} loading="lazy" />
                      <div className="card-badge">{place.rating} ★</div>
                    </div>
                    <div className="card-body">
                      <h3 className="card-title">{place.name}</h3>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                        <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '10px' }}>
                          <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '3px' }}>Timing</div>
                          <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>{place.timing || 'N/A'}</div>
                        </div>
                        <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '10px' }}>
                          <div style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '3px' }}>Entry Fee</div>
                          <div style={{ fontSize: '12px', color: 'var(--text-primary)', fontWeight: '500' }}>{place.entryFee || 'N/A'}</div>
                        </div>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span className="card-footer-text">View details</span>
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

export default CityPage;
