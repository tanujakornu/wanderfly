// src/Explore.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { travelData } from './data';

function Explore() {
  // This state keeps track of which state dropdowns are open (e.g., ['Rajasthan', 'Kerala'])
  const [openDropdowns, setOpenDropdowns] = useState([]);

  // Function to open/close dropdowns
  const toggleDropdown = (stateName) => {
    if (openDropdowns.includes(stateName)) {
      // If it's already open, close it
      setOpenDropdowns(openDropdowns.filter(name => name !== stateName));
    } else {
      // If it's closed, open it
      setOpenDropdowns([...openDropdowns, stateName]);
    }
  };

  // Get the states from our India data
  const states = travelData[0].states;

  return (
    <div>
      <h1 className="section-title">Explore States of India</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '30px' }}>
        Click on a state to discover its hidden gems, food, and adventures.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {states.map((state) => (
          <div key={state.name} className="state-container">
            
            {/* STATE HEADER (Clickable) */}
            <div className="state-header" onClick={() => toggleDropdown(state.name)}>
              <span>📍 {state.name}</span>
              {/* Change arrow based on if it's open or closed */}
              <span className="arrow">
                {openDropdowns.includes(state.name) ? '▲' : '▼'}
              </span>
            </div>

            {/* DROPDOWN CONTENT (Only shows if open) */}
            {openDropdowns.includes(state.name) && (
              <div className="dropdown-content">
                
                {/* Re-using the exact same card grid from the Home Page! */}
                <div className="card-grid">
                  {state.places.map(place => (
                    <Link to={`/place/${place.id}`} className="card" key={place.id}>
                      <img src={place.image} alt={place.name} className="card-image" />
                      <div className="card-content">
                        <h3 className="card-title">{place.name}</h3>
                        <div className="card-meta">
                          <span style={{textTransform: 'uppercase', fontSize: '12px', background: 'var(--accent-light', color: 'var(--accent)', padding: '2px 8px', borderRadius: '4px'}}>{place.category}</span>
                          <span>⭐ {place.rating}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;