import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { travelData } from './data';
import { useToast } from './App';

function PlaceDetail() {
  var id = useParams().id;
  var addToast = useToast();
  var [user, setUser] = useState(null);
  var [isFav, setIsFav] = useState(false);
  var [myRating, setMyRating] = useState(0);
  var [comments, setComments] = useState([]);
  var [newComment, setNewComment] = useState('');
  var [hoverStar, setHoverStar] = useState(0);

  var API = 'https://wanderfly-backend.onrender.com';

  useEffect(function() {
    var saved = localStorage.getItem('currentUser');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  var allPlaces = travelData.flatMap(function(country) {
    return country.states.flatMap(function(state) {
      return state.cities.flatMap(function(city) {
        return city.places.map(function(place) {
          return Object.assign({}, place, { cityName: city.name, stateName: state.name });
        });
      });
    });
  });

  var place = allPlaces.find(function(p) { return p.id === parseInt(id); });

  useEffect(function() {
    if (user && place) {
      fetch(API + '/favorites?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) { setIsFav(data.length > 0); });
    }
  }, [user, place]);

  useEffect(function() {
    if (user && place) {
      fetch(API + '/ratings?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) { if (data.length > 0) setMyRating(data[0].stars); });
    }
  }, [user, place]);

  useEffect(function() {
    if (place) {
      fetch(API + '/comments?placeId=' + place.id + '&_sort=id&_order=desc')
        .then(function(res) { return res.json(); })
        .then(function(data) { setComments(data); });
    }
  }, [place]);

  if (!place) {
    return (
      <div style={{ padding: 80, textAlign: 'center' }}>
        <p style={{ fontSize: 50, marginBottom: 20 }}>🗺️</p>
        <h2 style={{ color: 'var(--text-primary)', marginBottom: 12 }}>Place not found</h2>
        <Link to="/country" className="btn btn-outline">Back to Explore</Link>
      </div>
    );
  }

  function toggleFav() {
    if (!user) return;
    if (isFav) {
      fetch(API + '/favorites?userId=' + user.id + '&placeId=' + place.id)
        .then(function(res) { return res.json(); })
        .then(function(data) {
          if (data.length > 0) {
            fetch(API + '/favorites/' + data[0].id, { method: 'DELETE' })
              .then(function() { setIsFav(false); addToast('Removed from favorites', 'info'); });
          }
        });
    } else {
      fetch(API + '/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, placeId: place.id, placeName: place.name, placeImage: place.image, cityName: place.cityName, stateName: place.stateName })
      }).then(function() { setIsFav(true); addToast('Saved to favorites! ❤️', 'success'); });
    }
  }

  function saveRating(stars) {
    if (!user) return;
    setMyRating(stars);
    fetch(API + '/ratings?userId=' + user.id + '&placeId=' + place.id)
      .then(function(res) { return res.json(); })
      .then(function(data) {
        if (data.length > 0) {
          fetch(API + '/ratings/' + data[0].id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, placeId: place.id, stars: stars })
          });
        } else {
          fetch(API + '/ratings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId: user.id, placeId: place.id, stars: stars })
          });
        }
        addToast('Rated ' + stars + ' stars! ⭐', 'success');
      });
  }

  function postComment(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    fetch(API + '/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ placeId: place.id, userId: user.id, userName: user.name, text: newComment.trim(), date: new Date().toISOString().split('T')[0] })
    }).then(function(res) { return res.json(); })
      .then(function(saved) {
        setComments([saved].concat(comments));
        setNewComment('');
        addToast('Comment posted! 💬', 'success');
      });
  }

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '30px 20px 60px' }}>
      <Link to={'/state/' + place.stateName + '/city/' + place.cityName} className="back-link">
        ← Back to {place.cityName}
      </Link>

      <div className="fade-in" style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginBottom: '30px' }}>
        <img src={place.image} alt={place.name} style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
      </div>

      <div className="fade-in fade-in-delay-1" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', flexWrap: 'wrap', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <p style={{ color: 'var(--gold)', fontSize: '12px', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '8px', fontWeight: '500' }}>
            📍 {place.cityName}, {place.stateName}
          </p>
          <h1 style={{ fontSize: '32px', fontWeight: '600', color: 'var(--text-primary)', margin: '0 0 8px 0', lineHeight: '1.2' }}>
            {place.name}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '14px', color: 'var(--gold)' }}>★ {place.rating}</span>
            <span style={{ color: 'var(--border)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{place.category}</span>
          </div>
        </div>
        <button onClick={toggleFav} className={isFav ? 'btn btn-danger' : 'btn btn-ghost'}>
          {isFav ? '❤️ Saved' : '🤍 Save'}
        </button>
      </div>

      <div className="info-grid fade-in fade-in-delay-2" style={{ marginBottom: '24px' }}>
        {[
          { icon: '💰', label: 'Entry Fee', value: place.entryFee || 'N/A' },
          { icon: '⏰', label: 'Timing', value: place.timing || 'N/A' },
          { icon: '📅', label: 'Open Days', value: place.days || 'N/A' }
        ].map(function(item, i) {
          return (
            <div key={i} className="info-pill">
              <div className="info-pill-icon">{item.icon}</div>
              <div className="info-pill-label">{item.label}</div>
              <div className="info-pill-value">{item.value}</div>
            </div>
          );
        })}
      </div>

      <div className="content-block fade-in fade-in-delay-3">
        <h3 className="content-block-title"><span className="dot">◆</span> About this Place</h3>
        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '15px' }}>{place.description}</p>
      </div>

      <div className="content-block">
        <h3 className="content-block-title"><span className="dot">◆</span> Rate This Place</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div className="stars">
            {[1,2,3,4,5].map(function(star) {
              return (
                <button
                  key={star}
                  className={'star-btn' + (star <= (hoverStar || myRating) ? ' filled' : '')}
                  onClick={function() { saveRating(star); }}
                  onMouseEnter={function() { setHoverStar(star); }}
                  onMouseLeave={function() { setHoverStar(0); }}
                >★</button>
              );
            })}
          </div>
          <span style={{ marginLeft: '16px', color: myRating > 0 ? 'var(--gold)' : 'var(--text-muted)', fontSize: '14px', fontWeight: myRating > 0 ? '500' : '400' }}>
            {myRating > 0 ? 'You rated ' + myRating + ' / 5' : 'Not rated yet'}
          </span>
        </div>
      </div>

      <div className="content-block">
        <h3 className="content-block-title">
          <span className="dot">◆</span> Comments
          <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: '400', marginLeft: '8px' }}>({comments.length})</span>
        </h3>

        <form onSubmit={postComment} style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
          <input
            type="text"
            value={newComment}
            onChange={function(e) { setNewComment(e.target.value); }}
            placeholder="Write a comment..."
            className="input-field"
            style={{ flex: 1 }}
          />
          <button type="submit" className="btn btn-primary">Post</button>
        </form>

        {comments.length === 0 ? (
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', fontSize: '14px', padding: '30px 0' }}>
            No comments yet. Be the first! 🎉
          </p>
        ) : (
          comments.map(function(c) {
            return (
              <div key={c.id} className="comment">
                <div className="comment-header">
                  <span className="comment-author">👤 {c.userName}</span>
                  <span className="comment-date">{c.date}</span>
                </div>
                <p className="comment-text">{c.text}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default PlaceDetail;
