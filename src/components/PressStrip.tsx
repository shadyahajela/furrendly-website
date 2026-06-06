export default function PressStrip() {
  return (
    <section style={{
      borderTop: '1px solid rgba(12,12,14,0.07)',
      borderBottom: '1px solid rgba(12,12,14,0.07)',
      padding: 'clamp(28px,4vw,40px) clamp(24px,6vw,96px)'
    }}>
      <div style={{
        fontSize: '8px',
        letterSpacing: '0.35em',
        color: 'rgba(12,12,14,0.3)',
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        AS FEATURED IN
      </div>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px 32px'
      }}>
        <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
          CONDÉ NAST TRAVELLER
        </span>
        <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
        <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
          ROBB REPORT
        </span>
        <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
        <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
          MOTOR YACHT
        </span>
        <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
        <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
          OCEAN LIVING
        </span>
        <span style={{ color: 'rgba(12,12,14,0.2)' }}>·</span>
        <span style={{ fontSize: '9px', letterSpacing: '0.28em', color: 'rgba(12,12,14,0.32)' }}>
          FINANCIAL TIMES WEEKEND
        </span>
      </div>
    </section>
  );
}
