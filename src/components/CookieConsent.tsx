import { useState } from 'react';

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      maxWidth: 'calc(100vw - 48px)',
      width: 'auto'
    }}>
      <div className="glass-mid" style={{
        padding: '20px 28px',
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        flexWrap: 'wrap'
      }}>
        <div style={{
          fontSize: '9px',
          lineHeight: 1.6,
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.85)',
          maxWidth: '400px'
        }}>
          WE USE COOKIES TO ENHANCE YOUR EXPERIENCE AND ANALYZE SITE TRAFFIC.
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button
            onClick={() => setAccepted(true)}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.25)',
              color: 'white',
              padding: '10px 20px',
              fontSize: '8px',
              letterSpacing: '0.25em',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            DECLINE
          </button>
          <button
            onClick={() => setAccepted(true)}
            style={{
              background: 'white',
              border: '1px solid white',
              color: '#0c0c0e',
              padding: '10px 20px',
              fontSize: '8px',
              letterSpacing: '0.25em',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
