import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { travelData } from './data';

function PlaceDetail() {
  var id = useParams().id;
  var [user, setUser] = useState(null);
  var [isFav, setIsFav] = useState(false);
  var [myRating, setMyRating] = useState(0);
  var [comments, setComments] = useState([]);
  var [newComment, setNewComment] = useState('');
  var [hoverStar, setHoverStar] = useState(0);

  useEffect(function() {
    var saved = localStorage.getItem('currentUser');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  var allPlaces = travelData.flatMap(function(country) {
    return country.states.flatMap(function(state) {
      return state.cities.flatMap(function(city) {
        return city.places.map(function(place) {
          return Object.assign({}, place, {cityName: city.name, stateName: state.name});
        });
      });
    });
  });

  var place = allPlaces.find(function(p) { return p.id === parseInt(id); });

  useEffect(function() {
    if (user && place) {
      fetch('https://wanderfly-backend.onrender.com/favorites?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) { setIsFav(data.length > 0); });
    }
  }, [user, place]);

  useEffect(function() {
    if (user && place) {
      fetch('https://wanderfly-backend.onrender.com/ratings?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) { if (data.length > 0) setMyRating(data[0].stars); });
    }
  }, [user, place]);

  useEffect(function() {
    if (place) {
      fetch('https://wanderfly-backend.onrender.com/comments?placeId=' + place.id + '&_sort=id&_order=desc')
        .then(function(res) { return res.json(); })
        .then(function(data) { setComments(data); });
    }
  }, [place]);

  if (!place) {
    return (
      <div style={{padding:50,textAlign:'center'}}>
        <p style={{fontSize:50,marginBottom:20}}>🗺️</p>
        <h2 style={{color:'#e8e8e8',marginBottom:10}}>Place not found</h2>
        <Link to="/country" style={{color:'#c8a45e',fontSize:16}}>Back to Explore</Link>
      </div>
    );
  }

  function toggleFav() {
    if (!user) return;
    if (isFav) {
      fetch('https://wanderfly-backend.onrender.com/favorites?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.length > 0) {
            fetch('https://wanderfly-backend.onrender.com/favorites/' + data[0].id, {method:'DELETE'})
              .then(function() { setIsFav(false); });
          }
        });
    } else {
      fetch('https://wanderfly-backend.onrender.com/favorites', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({userId:user.id, placeId:place.id, placeName:place.name, placeImage:place.image, cityName:place.cityName, stateName:place.stateName})
      }).then(function() { setIsFav(true); });
    }
  }

  function saveRating(stars) {
    if (!user) return;
    setMyRating(stars);
    fetch('https://wanderfly-backend.onrender.com/ratings?userId=' + user.id + '&placeId=' + place.id)
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.length > 0) {
          fetch('http://localhost://3001/ratings/' + data[0].id, {
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId:user.id, placeId:place.id, stars:stars})
          });
        } else {
          fetch('http://localhost://3001/ratings', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({userId:user.id, placeId:place.id, stars:stars})
          });
        }
      });
  }

  function postComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    fetch('http://localhost://3001/comments', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({placeId:place.id, userId:user.id, userName:user.name, text:newComment.trim(), date:new Date().toISOString().split('T')[0]})
    }).then(function(res) { return res.json(); })
      .then(function(saved) {
        setComments([saved].concat(comments));
        setNewComment('');
      });
  }

  return (
    <div style={{maxWidth:900,margin:'0 auto',padding:'30px 20px 60px'}}>

      <Link to={'/state/' + place.stateName + '/city/' + place.cityName} style={{textDecoration:'none',color:'#c8a45e',fontWeight:'500',fontSize:'14px',display:'inline-block',marginBottom:'24px'}}>
        ← Back to {place.cityName}
      </Link>

            <div style={{position:'relative',borderRadius:'16px',overflow:'hidden',marginBottom:'30px'}}>
        <img src={place.image} alt={place.name} style={{width:'100%',height:'420px',objectFit:'cover',objectPosition:'center',display:'block'}} />
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'30px',flexWrap:'wrap',gap:'15px'}}>
        <div style={{flex:1}}>
          <p style={{color:'#c8a45e',fontSize:'12px',letterSpacing:'3px',textTransform:'uppercase',marginBottom:'8px',fontWeight:'500'}}>📍 {place.cityName}, {place.stateName}</p>
          <h1 style={{fontSize:'32px',fontWeight:'600',color:'#e8e8e8',margin:'0 0 6px 0',lineHeight:'1.2'}}>{place.name}</h1>
          <div style={{display:'flex',alignItems:'center',gap:'6px',margin:'6px 0 0 0'}}>
            <span style={{fontSize:'14px',color:'#c8a45e'}}>★ {place.rating}</span>
            <span style={{color:'#333333'}}>·</span>
            <span style={{fontSize:'13px',color:'#888888'}}>{place.category}</span>
          </div>
        </div>
        <button onClick={toggleFav} style={{
          background:isFav ? 'rgba(239,68,68,0.15)' : 'rgba(200,164,94,0.1)',
          border: '1px solid ' + (isFav ? 'rgba(239,68,68,0.4)' : 'rgba(200,164,94,0.3)'),
          borderRadius:'12px',padding:'12px 24px',cursor:'pointer',fontSize:'15px',
          color: isFav ? '#ef4444' : '#c8a45e',fontWeight:'600',transition:'all 0.2s',display:'flex',alignItems:'center',gap:'8px'
        }}>
          {isFav ? '❤️ Saved' : '🤍 Save'}
        </button>
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:'14px',marginBottom:'30px'}}>
        {[
          {icon:'💰',label:'Entry Fee',value:place.entryFee || 'N/A'},
          {icon:'⏰',label:'Timing',value:place.timing || 'N/A'},
          {icon:'📅',label:'Open Days',value:place.days || 'N/A'}
        ].map(function(item, i) {
          return (
            <div key={i} style={{background:'#161616',border:'1px solid #222222',borderRadius:'12px',padding:'20px',textAlign:'center'}}>
              <div style={{fontSize:'28px',marginBottom:'8px'}}>{item.icon}</div>
              <div style={{fontSize:'10px',color:'#c8a45e',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'6px',fontWeight:'500'}}>{item.label}</div>
              <div style={{fontSize:'15px',fontWeight:'600',color:'#e8e8e8'}}>{item.value}</div>
            </div>
          );
        })}
      </div>

      <div style={{background:'#161616',border:'1px solid #222222',borderRadius:'12px',padding:'30px',marginBottom:'30px'}}>
        <h3 style={{fontSize:'18px',fontWeight:'500',color:'#e8e8e8',margin:'0 0 16px 0',display:'flex',alignItems:'center',gap:'10px'}}>
          <span style={{color:'#c8a45e'}}>◆</span> About this Place
        </h3>
        <p style={{color:'#999999',lineHeight:'1.8',fontSize:'15px',margin:'0'}}>{place.description}</p>
      </div>

      <div style={{background:'#161616',border:'1px solid #222222',borderRadius:'12px',padding:'30px',marginBottom:'30px'}}>
        <h3 style={{fontSize:'18px',fontWeight:'500',color:'#e8e8e8',margin:'0 0 20px 0',display:'flex',alignItems:'center',gap:'10px'}}>
          <span style={{color:'#c8a45e'}}>◆</span> Rate This Place
        </h3>
        <div style={{display:'flex',gap:'6px'}}>
          {[1,2,3,4,5].map(function(star) {
            return (
              <button key={star} onClick={function(){saveRating(star);}} onMouseEnter={function(){setHoverStar(star);}} onMouseLeave={function(){setHoverStar(0);}} style={{
                fontSize:'36px',background:'none',border:'none',cursor:'pointer',
                opacity: star <= (hoverStar || myRating) ? '1' : '0.2',
                transition:'opacity 0.15s',padding:'0',lineHeight:'1',
                filter: star <= (hoverStar || myRating) ? 'drop-shadow(0 0 8px rgba(200,164,94,0.4))' : 'none'
              }}>★</button>
            );
          })}
          <span style={{marginLeft:'16px',color:myRating > 0 ? '#c8a45e' : '#666',fontSize:'14px',alignSelf:'center',fontWeight:myRating > 0 ? '500' : '400'}}>
            {myRating > 0 ? 'You rated ' + myRating + ' / 5' : 'Not rated yet'}
          </span>
        </div>
      </div>

      <div style={{background:'#161616',border:'1px solid #222222',borderRadius:'12px',padding:'30px'}}>
        <h3 style={{fontSize:'18px',fontWeight:'500',color:'#e8e8e8',margin:'0 0 20px 0',display:'flex',alignItems:'center',gap:'10px'}}>
          <span style={{color:'#c8a45e'}}>◆</span> Comments
          <span style={{fontSize:'13px',color:'#666666',fontWeight:'400',marginLeft:'8px'}}>({comments.length})</span>
        </h3>

        <form onSubmit={postComment} style={{display:'flex',gap:'10px',marginBottom:'24px'}}>
          <input type="text" value={newComment} onChange={function(e){setNewComment(e.target.value);}} placeholder="Write a comment..." style={{flex:1,padding:'14px 18px',border:'1px solid #333333',borderRadius:'10px',background:'#0c0c0c',color:'#e8e8e8',fontSize:'14px',outline:'none',boxSizing:'border-box'}} />
          <button type="submit" style={{padding:'14px 24px',border:'none',borderRadius:'10px',background:'#c8a45e',color:'#0c0c0c',fontWeight:'600',cursor:'pointer',fontSize:'14px',whiteSpace:'nowrap'}}>Post</button>
        </form>

        {comments.length === 0 ? (
          <p style={{color:'#666',textAlign:'center',fontSize:'14px',padding:'20px 0'}}>No comments yet. Be the first! 🎉</p>
        ) : (
          comments.map(function(c) {
            return (
              <div key={c.id} style={{padding:'16px 0',borderBottom:'1px solid #1a1a1a'}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'8px'}}>
                  <span style={{fontWeight:'600',fontSize:'14px',color:'#e8e8e8'}}>👤 {c.userName}</span>
                  <span style={{color:'#555',fontSize:'12px'}}>{c.date}</span>
                </div>
                <p style={{margin:'0',color:'#999999',fontSize:'14px',lineHeight:'1.6'}}>{c.text}</p>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}

export default PlaceDetail;