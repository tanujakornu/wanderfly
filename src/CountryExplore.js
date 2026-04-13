import React from 'react';
import { Link } from 'react-router-dom';
import { travelData } from './data';

function CountryExplore() {
  const country = travelData[0];
  const states = country.states;

  return (
    <div style={{padding:'50px 40px 80px 40px',maxWidth:1200,margin:'0 auto'}}>
      
      <div style={{textAlign:'center',marginBottom:'60px'}}>
        <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'16px',fontWeight:'500'}}>Explore India</p>
        <h1 style={{fontFamily:'Georgia,serif',fontSize:'36px',fontWeight:'400',color:'#e8e8e8',margin:'0 0 12px 0'}}>Choose Your Destination</h1>
        <div style={{width:'40px',height:'1px',background:'linear-gradient(90deg, transparent, #c8a45e, transparent)',margin:'0 auto'}} />
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'24px'}}>
        {states.map(function(state, i) {
          var cityCount = state.cities ? state.cities.length : 0;
          var placeCount = state.cities ? state.cities.reduce(function(sum, c) { return sum + (c.places ? c.places.length : 0); }, 0) : 0;

          return (
            <div key={i} style={{borderRadius:'16px',overflow:'hidden',background:'#161616',border:'1px solid #222222',transition:'all 0.3s ease',cursor:'pointer'}} className="s-card">
              <Link to={'/state/' + state.name} style={{textDecoration:'none',color:'#e8e8e8',display:'block'}}>
                <div style={{position:'relative',height:'200px',overflow:'hidden'}}>
                  <img src={state.image} alt={state.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block',transition:'transform 0.6s ease'}} />
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'18px',background:'linear-gradient(transparent, rgba(0,0,0,0.85))'}}>
                    <h3 style={{margin:'0 0 6px 0',fontSize:'19px',fontWeight:'600',color:'#ffffff'}}>{state.name}</h3>
                    <div style={{display:'flex',gap:'14px',fontSize:'12px',color:'rgba(255,255,255,0.6)'}}>
                      <span>{cityCount} cities</span>
                      <span>·</span>
                      <span>{placeCount} places</span>
                    </div>
                  </div>
                </div>
                <div style={{padding:'14px 18px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                  <span style={{fontSize:'12px',color:'#888888'}}>View destinations</span>
                  <span style={{fontSize:'16px',color:'#c8a45e'}}>→</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      <style>{`
        .s-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
          border-color: rgba(200,164,94,0.3) !important;
        }
        .s-card:hover img {
          transform: scale(1.08);
        }
        @media (max-width: 900px) {
          .s-card { grid-column: span 1 !important; }
        }
      `}</style>
    </div>
  );
}

export default CountryExplore;