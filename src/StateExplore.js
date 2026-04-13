import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { travelData } from './data';

function StateExplore() {
  var stateName = useParams().stateName;
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

  var cities = state.cities || [];

  return (
    <div>
      <div style={{position:'relative',width:'100%',height:'55vh',minHeight:'350px',maxHeight:'450px',overflow:'hidden',background:'#000'}}>
        <img src={state.image} alt={state.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%',display:'block'}} />
        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, transparent 50%, rgba(0,0,0,0.7) 100%)'}} />
        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:5,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',paddingBottom:'50px'}}>
          <Link to="/country" style={{textDecoration:'none',color:'rgba(255,255,255,0.6)',fontSize:'13px',marginBottom:'12px',display:'inline-block'}}>Back to Explore</Link>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'56px',fontWeight:'300',color:'#ffffff',textShadow:'0 4px 30px rgba(0,0,0,0.5)',margin:'0 0 8px 0',letterSpacing:'3px'}}>{state.name}</h1>
          <div style={{width:'50px',height:'1px',background:'linear-gradient(90deg, transparent, rgba(200,164,94,0.6), transparent)',margin:'0 auto'}} />
          <p style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',letterSpacing:'3px',margin:'10px 0 0 0',fontWeight:'300'}}>{cities.length} CITIES TO EXPLORE</p>
        </div>
      </div>

      <div style={{padding:'50px 40px 80px 40px',maxWidth:1200,margin:'0 auto'}}>
        <div style={{textAlign:'center',marginBottom:'50px'}}>
          <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'16px',fontWeight:'500'}}>Explore Cities</p>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'28px',fontWeight:'400',color:'#e8e8e8',margin:'0'}}>Choose a City in {state.name}</h2>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'24px'}}>
          {cities.map(function(city, i) {
            var placeCount = city.places ? city.places.length : 0;
            return (
              <div key={i} style={{borderRadius:'16px',overflow:'hidden',background:'#161616',border:'1px solid #222222',transition:'all 0.3s ease',cursor:'pointer'}} className="c-card">
                <Link to={'/state/' + state.name + '/city/' + city.name} style={{textDecoration:'none',color:'#e8e8e8',display:'block'}}>
                  <div style={{position:'relative',height:'200px',overflow:'hidden'}}>
                    <img src={city.image} alt={city.name} style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center 35%',display:'block',transition:'transform 0.6s ease'}} />
                    <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'18px',background:'linear-gradient(transparent, rgba(0,0,0,0.85))'}}>
                      <h3 style={{margin:'0 0 6px 0',fontSize:'19px',fontWeight:'600',color:'#ffffff'}}>{city.name}</h3>
                      <span style={{fontSize:'12px',color:'rgba(255,255,255,0.6)'}}>{placeCount} places to visit</span>
                    </div>
                  </div>
                  <div style={{padding:'14px 18px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <span style={{fontSize:'12px',color:'#888888'}}>View places</span>
                    <span style={{fontSize:'16px',color:'#c8a45e'}}>→</span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <style>{`
          .c-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 20px 50px rgba(0,0,0,0.4);
            border-color: rgba(200,164,94,0.3) !important;
          }
          .c-card:hover img {
            transform: scale(1.08);
          }
        `}</style>
      </div>
    </div>
  );
}

export default StateExplore;