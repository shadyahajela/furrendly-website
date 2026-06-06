export default function TickerStrip() {
  const items = [
    '🐾 Bath',
    '🐾 Brush',
    '🐾 Blow Dry',
    '🐾 Paw Pad Trim',
    '🐾 Nail Clipping',
    '🐾 Ear Cleaning'
  ];

  return (
    <div style={{
      backgroundColor: 'var(--bg-lime)',
      padding: '16px 0',
      borderTop: '1px solid rgba(13, 38, 33, 0.1)',
      borderBottom: '1px solid rgba(13, 38, 33, 0.1)',
      overflow: 'hidden'
    }}>
      <div className="ticker-track" style={{
        display: 'flex',
        gap: '48px',
        whiteSpace: 'nowrap'
      }}>
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            style={{
              fontSize: '16px',
              color: 'var(--text-dark)',
              textTransform: 'uppercase',
              fontWeight: 600,
              letterSpacing: '0.05em',
              fontFamily: 'var(--font-display)'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
