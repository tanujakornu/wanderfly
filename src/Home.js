import React from 'react';
import { Link } from 'react-router-dom';
import { travelData } from './data';

function Home() {
  const images = [
    "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=1920&q=90",
    "https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=1920&q=90",
    "https://images.unsplash.com/photo-1506256043279-3a3a91e8e674?w=1920&q=90",
    "https://images.unsplash.com/photo-1595658658481-d53d3f999875?w=1920&q=90",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1920&q=90",
    "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?w=1920&q=90",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7fa?w=1920&q=90",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&q=90",
    "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=1920&q=90",
    "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=90",
    "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1920&q=90",
    "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=90"
  ];

  const n = images.length;
  const each = 7;

  const featuredPlaces = travelData[0].states.slice(0, 4).flatMap(state =>
    state.cities.slice(0, 1).map(city =>
      city.places.slice(0, 1).map(place => ({
        ...place, cityName: city.name, stateName: state.name
      }))
    )
  ).flat();

  return (
    <div>

      {/* HERO - goes behind navbar */}
      <div style={{position:'relative',width:'100%',height:'100vh',margin:'-60px 0 0 0',overflow:'hidden',background:'#000'}}>
        {images.map((img, i) => (
          <img key={i} src={img} alt="" style={{
            position:'absolute',top:0,left:0,width:'100%',height:'100%',
            objectFit:'cover',objectPosition:'center',opacity:0,
            animation:'hero ' + (n * each) + 's linear infinite ' + (i * each) + 's',
            willChange:'opacity,transform'
          }} />
        ))}

        <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0.8) 100%)',zIndex:5,pointerEvents:'none'}} />

        <div style={{position:'absolute',top:0,left:0,right:0,bottom:0,zIndex:6,display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center',paddingBottom:'70px',pointerEvents:'none'}}>
          <div style={{width:'1px',height:'40px',background:'linear-gradient(transparent, rgba(200,164,94,0.6))',marginBottom:'25px'}} />
          <p style={{color:'rgba(200,164,94,0.8)',fontSize:'11px',letterSpacing:'8px',textTransform:'uppercase',margin:'0 0 14px 0',fontWeight:'400'}}>Welcome to</p>
          <h1 style={{fontFamily:'Georgia,serif',fontSize:'80px',fontWeight:'200',letterSpacing:'22px',color:'#ffffff',textShadow:'0 4px 40px rgba(0,0,0,0.6)',margin:'0 0 10px 0',lineHeight:'1'}}>INDIA</h1>
          <div style={{width:'60px',height:'1px',background:'linear-gradient(90deg, transparent, rgba(200,164,94,0.6), transparent)',margin:'0 0 14px 0'}} />
          <p style={{color:'rgba(255,255,255,0.55)',fontSize:'12px',letterSpacing:'5px',margin:'0 0 40px 0',fontWeight:'300'}}>INCREDIBLE  ·  DIVERSE  ·  TIMELESS</p>
          <Link to="/country" style={{textDecoration:'none',pointerEvents:'auto'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'12px',background:'rgba(200,164,94,0.15)',border:'1px solid rgba(200,164,94,0.35)',color:'#c8a45e',padding:'14px 42px',borderRadius:'50px',fontSize:'12px',fontWeight:'500',letterSpacing:'3px',textTransform:'uppercase'}}>
              EXPLORE NOW <span style={{fontSize:'16px'}}>→</span>
            </div>
          </Link>
        </div>
      </div>

      {/* ABOUT */}
      <div style={{background:'#111111',padding:'90px 40px',textAlign:'center'}}>
        <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'20px',fontWeight:'500'}}>About India</p>
        <h2 style={{fontFamily:'Georgia,serif',fontSize:'30px',fontWeight:'400',color:'#e8e8e8',lineHeight:'1.4',marginBottom:'25px',maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>A Civilization That Shaped the World</h2>
        <div style={{width:'40px',height:'1px',background:'linear-gradient(90deg, transparent, #c8a45e, transparent)',margin:'0 auto 25px auto'}} />
        <p style={{color:'#999999',fontSize:'15px',lineHeight:'1.9',maxWidth:'650px',marginLeft:'auto',marginRight:'auto'}}>From the snow-capped peaks of the Himalayas to the tropical backwaters of Kerala, India is a land of extraordinary contrasts. With over 5,000 years of history, 1,600 languages, and a culture that embraces diversity like no other.</p>
      </div>

      {/* STATS */}
      <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',background:'#0c0c0c',borderTop:'1px solid #1a1a1a',borderBottom:'1px solid #1a1a1a'}}>
        {[
          {num:'7,641',label:'Islands',sub:'To explore'},
          {num:'40',label:'UNESCO Sites',sub:'World heritage'},
          {num:'185+',label:'Languages',sub:'Spoken across India'},
          {num:'1.4B',label:'People',sub:'Vibrant stories'}
        ].map((item, i) => (
          <div key={i} style={{padding:'40px 15px',textAlign:'center',borderRight: i < 3 ? '1px solid #1a1a1a' : 'none'}}>
            <div style={{fontSize:'34px',fontWeight:'300',color:'#c8a45e',letterSpacing:'1px',marginBottom:'8px',fontFamily:'Georgia,serif'}}>{item.num}</div>
            <div style={{fontSize:'13px',color:'#e8e8e8',fontWeight:'500',letterSpacing:'1px',marginBottom:'4px'}}>{item.label}</div>
            <div style={{fontSize:'11px',color:'#666666'}}>{item.sub}</div>
          </div>
        ))}
      </div>

      {/* FEATURED */}
      <div style={{background:'#0c0c0c',padding:'80px 40px'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:'40px',flexWrap:'wrap',gap:'15px'}}>
            <div>
              <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'12px',fontWeight:'500'}}>Curated For You</p>
              <h2 style={{fontFamily:'Georgia,serif',fontSize:'26px',fontWeight:'400',color:'#e8e8e8',margin:'0'}}>Featured Destinations</h2>
            </div>
            <Link to="/country" style={{color:'#c8a45e',fontSize:'13px',letterSpacing:'1px',textDecoration:'none',borderBottom:'1px solid rgba(200,164,94,0.3)',paddingBottom:'3px'}}>VIEW ALL →</Link>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(250px, 1fr))',gap:'20px'}}>
            {featuredPlaces.map(place => (
              <Link to={'/place/' + place.id} key={place.id} style={{textDecoration:'none',color:'#e8e8e8',display:'block'}}>
                <div style={{position:'relative',borderRadius:'12px',overflow:'hidden',aspectRatio:'4/3',marginBottom:'14px'}}>
                  <img src={place.image} alt={place.name} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                  <div style={{position:'absolute',bottom:0,left:0,right:0,padding:'14px',background:'linear-gradient(transparent, rgba(0,0,0,0.7))'}}>
                    <span style={{fontSize:'11px',color:'#c8a45e',letterSpacing:'1px'}}>{place.cityName}, {place.stateName}</span>
                  </div>
                </div>
                <h3 style={{fontSize:'15px',fontWeight:'500',margin:'0 0 6px 0',color:'#e8e8e8'}}>{place.name}</h3>
                <p style={{fontSize:'13px',color:'#888888',margin:'0',lineHeight:'1.5',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>{place.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{background:'linear-gradient(135deg, #1a1510 0%, #0c0c0c 50%, #10141a 100%)',padding:'80px 40px',textAlign:'center',borderTop:'1px solid #1a1a1a'}}>
        <div style={{maxWidth:'600px',margin:'0 auto'}}>
          <p style={{color:'#c8a45e',fontSize:'11px',letterSpacing:'6px',textTransform:'uppercase',marginBottom:'20px',fontWeight:'500'}}>Begin Your Journey</p>
          <h2 style={{fontFamily:'Georgia,serif',fontSize:'28px',fontWeight:'400',color:'#e8e8e8',lineHeight:'1.4',marginBottom:'15px'}}>The Best Time to Start Was Yesterday.</h2>
          <p style={{color:'#888888',fontSize:'14px',lineHeight:'1.7',marginBottom:'35px'}}>Explore centuries of heritage, taste incredible cuisine, and discover places that will change the way you see the world.</p>
          <Link to="/country" style={{textDecoration:'none'}}>
            <div style={{display:'inline-flex',alignItems:'center',gap:'12px',background:'#c8a45e',color:'#0c0c0c',padding:'16px 50px',borderRadius:'50px',fontSize:'13px',fontWeight:'600',letterSpacing:'2px',textTransform:'uppercase',boxShadow:'0 0 40px rgba(200,164,94,0.2)'}}>
              START EXPLORING <span style={{fontSize:'16px'}}>→</span>
            </div>
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{background:'#0a0a0a',padding:'30px 40px',borderTop:'1px solid #1a1a1a',textAlign:'center'}}>
        <p style={{color:'#444444',fontSize:'12px',letterSpacing:'1px',margin:'0'}}>WANDERLY — Crafted with passion for India © 2025</p>
      </div>

      <style>{`
        @keyframes hero {
          0% { opacity: 0; transform: scale(1); }
          4% { opacity: 1; transform: scale(1); }
          6% { transform: scale(1.03); }
          13% { opacity: 1; transform: scale(1.03); }
          15% { opacity: 0; transform: scale(1.03); }
          100% { opacity: 0; transform: scale(1); }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}

export default Home;