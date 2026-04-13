import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { travelData } from './data';

function CityPage() {
  var params = useParams();
  var stateName = params.stateName;
  var cityName = params.cityName;
  var country = travelData[0];
  var state = country.states.find(function(s) { return s.name === stateName; });

  if (!state) {
    return (
      <div style={{textAlign:'center',padding:'100px 20px'}}>
        <h2 style={{color:'#e8e8e8',marginBottom:'10px'}}>State not found</h2>
        <Link to="/country" style={{color:'#c8a45e',fontSize:'16px'}}>Back to Explore</Link>
      </div>
    );
  }

  var city = state.cities ? state.cities.find(function(c) { return c.name === cityName; }) : null;

  if (!city) {
    return (
      <div style={{textAlign:'center',padding:'100px 20px'}}>
        <h2 style={{color:'#e8e8e8',marginBottom:'10px'}}>City not found</h2>
        <Link to={'/state/' + stateName} style={{color:'#c8a45e',fontSize:'16px'}}>Back to {stateName}</Link>
      </div>
    );
  }

  var places = city.places || [];

  return (
    <div>
      {/* HERO */}
      <div style={{position:'relative',width:'100%',height:'50vh',minHeight:'320px',maxHeight:'400px',overflow:'hidden',background:'#000'}}>
        <img src={city.image} alt={city.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%',display:'block'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 35%, transparent 50%, rgba(0,0,0,0.75) 100%)'}} />
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:5,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',paddingBottom:'45px'}}>
          <Link to={'/state/' + stateName} style={{textDecoration:'none',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'12px',display:'inline-block'}}>Back to {stateName}</Link>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'48px',fontWeight:'300',color:'#ffffff',textShadow:'0 4px 30px rgba(0,0,0,0.5)',margin:'0 0 6px 0',letterSpacing:'2px'}}>{city.name}</h1>
          <p style={{color:'rgba(200,164,94,0.7)',fontSize:'13px',letterSpacing:'3px',margin:'8px 0 0 0',fontWeight:'300'}}>{state.name}, India</p>
        </div>
      </div>

      {/* PLACES */}
      <div style={{padding:'50px 40px 80px 40px',maxWidth:1200,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'50px'}}>
          <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'16px',fontWeight:'500'}}>Discover</p>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'28px',fontWeight:'400',color:'#e8e8e8',margin:'0'}}>Places to Visit in {city.name}</h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'24px'}}>
          {places.map(function(place, i) {
            return (
              <div key={i} style={{borderRadius:'16px',overflow:'hidden',background:'#161616',border:'1px solid #222222',transition:'all 0.3s ease',cursor:'pointer'}} className="p-card">
                <Link to={'/place/' + place.id} style={{textDecoration:'none',color:'#e8e8e8',display:'block'}}>
                  <div style={{position:'relative',height:'200px',overflow:'hidden'}}>
                    <img src={place.image} alt={place.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',display:'block',transition:'transform 0.6s ease'}} />
                    <div style={{position:'absolute',top:'12px',right:'12px',background:'rgba(0,0,0,0.6)',backdropFilter:'blur(8px)',padding:'4px 10px',borderRadius:'20px'}}>
                      <span style={{fontSize:'12px',color:'#c8a45e',fontWeight:'500'}}>{place.rating} ★</span>
                    </div>
                  </div>
                  <div style={{padding:'18px'}}>
                    <h3 style={{fontSize:'16px',fontWeight:'600',color:'#e8e8e8',margin:'0 0 12px 0',letterSpacing:'0.3px'}}>{place.name}</h3>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px',marginBottom:'14px'}}>
                      <div style={{background:'#0c0c0c',borderRadius:'8px',padding:'10px'}}>
                        <div style={{fontSize:'10px',color:'#c8a45e',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'3px'}}>Timing</div>
                        <div style={{fontSize:'12px',color:'#e8e8e8',fontWeight:'500'}}>{place.timing || 'N/A'}</div>
                      </div>
                      <div style={{background:'#0c0c0c',borderRadius:'8px',padding:'10px'}}>
                        <div style={{fontSize:'10px',color:'#c8a45e',letterSpacing:'1px',textTransform:'uppercase',marginBottom:'3px'}}>Entry Fee</div>
                        <div style={{fontSize:'12px',color:'#e8e8e8',fontWeight:'500'}}>{place.entryFee || 'N/A'}</div>
                      </div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:'12px',borderTop:'1px solid #222222'}}>
                      <span style={{fontSize:'12px',color:'#888888'}}>View details</span>
                      <span style={{fontSize:'16px',color:'#c8a45e'}}>→</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <style>{`
          .p-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            border-color: rgba(200,164,94,0.3) !important;
          }
          .p-card:hover img {
            transform: scale(1.06);
          }
        `}</style>
      </div>
    </div>
  );
}

export default CityPage;