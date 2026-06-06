import { motion } from 'motion/react';

export default function Membership() {
  return (
    <section style={{
      background: 'var(--bg-base)',
      padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
    }}>
      {/* Section header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>
            MEMBERSHIP
          </span>
        </div>
        <h2 style={{
          fontSize: 'clamp(40px,6vw,80px)',
          color: '#0c0c0e',
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: '-0.01em',
          margin: 0
        }}>
          SELECT YOUR TIER.
        </h2>
      </div>

      {/* 2-column grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        alignItems: 'start'
      }}>
        {/* LEFT - 3 tier cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* SIGNATURE */}
          <div className="card" style={{ padding: '32px' }}>
            <div style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '8px'
            }}>
              SIGNATURE
            </div>
            <div style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}>
              ENTRY LEVEL
            </div>
            <div style={{
              fontSize: '40px',
              color: '#0c0c0e',
              fontWeight: 400,
              marginBottom: '4px'
            }}>
              $24,000
            </div>
            <div style={{
              fontSize: '9px',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '24px'
            }}>
              / YEAR
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                DEDICATED BERTH ACCESS
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                RACE ENTRY DISCOUNTS
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                CONCIERGE HOTLINE
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                2 GUEST PASSES / YEAR
              </div>
            </div>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '12px',
              width: '100%',
              fontSize: '10px',
              letterSpacing: '0.2em',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}>
              APPLY NOW
            </button>
          </div>

          {/* COMMODORE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card-accent"
            style={{ padding: '32px' }}
          >
            <div style={{
              background: 'var(--accent)',
              color: 'white',
              fontSize: '8px',
              letterSpacing: '0.3em',
              padding: '4px 12px',
              borderRadius: '2px',
              marginBottom: '16px',
              display: 'inline-block'
            }}>
              MOST POPULAR
            </div>
            <div style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '8px'
            }}>
              COMMODORE
            </div>
            <div style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}>
              MOST POPULAR
            </div>
            <div style={{
              fontSize: '40px',
              color: 'var(--accent)',
              fontWeight: 400,
              marginBottom: '4px'
            }}>
              $48,000
            </div>
            <div style={{
              fontSize: '9px',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '24px'
            }}>
              / YEAR
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                PRIORITY BERTH ACCESS
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                FULL RACE PROGRAM
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
              24/7 CONCIERGE
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                6 GUEST PASSES / YEAR
              </div>
            </div>
            <button style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '12px',
              width: '100%',
              fontSize: '10px',
              letterSpacing: '0.2em',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}>
              APPLY NOW
            </button>
          </motion.div>

          {/* FOUNDERS' CIRCLE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="card"
            style={{ padding: '32px' }}
          >
            <div style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '8px'
            }}>
              FOUNDERS' CIRCLE
            </div>
            <div style={{
              fontSize: '9px',
              letterSpacing: '0.25em',
              color: 'var(--accent)',
              marginBottom: '16px'
            }}>
              INVITATION ONLY
            </div>
            <div style={{
              fontSize: '40px',
              color: '#0c0c0e',
              fontWeight: 400,
              marginBottom: '4px'
            }}>
              BY INVITATION
            </div>
            <div style={{
              fontSize: '9px',
              color: 'rgba(12,12,14,0.4)',
              marginBottom: '24px'
            }}>
              ONLY
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                EXCLUSIVE BERTH ACCESS
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                PRIVATE EVENTS
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                DEDICATED CONCIERGE
              </div>
              <div style={{ fontSize: '10px', lineHeight: 1.8, letterSpacing: '0.1em', color: 'rgba(12,12,14,0.7)' }}>
                UNLIMITED GUEST PASSES
              </div>
            </div>
            <button style={{
              background: 'transparent',
              border: '1px solid var(--accent)',
              color: 'var(--accent)',
              padding: '12px',
              width: '100%',
              fontSize: '10px',
              letterSpacing: '0.2em',
              borderRadius: '2px',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}>
              ENQUIRE
            </button>
          </motion.div>
        </div>

        {/* RIGHT - sticky image panel */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <div style={{ position: 'relative' }}>
            <img
              src="/images/interior-tour.jpg"
              alt="Interior Tour"
              style={{
                width: '100%',
                height: '560px',
                objectFit: 'cover',
                display: 'block',
                borderRadius: '4px'
              }}
            />
            {/* Dark gradient overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              background: 'linear-gradient(to top, rgba(5,10,20,0.9) 0%, rgba(5,10,20,0.6) 40%, transparent 80%)',
              padding: '32px',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px'
            }}>
              <div style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(147,197,253,0.85)',
                marginBottom: '12px'
              }}>
                OCEAN ECLIPSE — MAIN SALON
              </div>
              <p style={{
                fontSize: '11px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.7)',
                maxWidth: '280px',
                marginBottom: '20px',
                margin: '0 0 20px 0'
              }}>
                Experience the finest in maritime luxury with our flagship vessel.
              </p>
              <button className="glass-mid" style={{
                padding: '12px 28px',
                color: 'white',
                fontSize: '9px',
                letterSpacing: '0.2em',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '100px',
                fontFamily: 'inherit'
              }}>
                APPLY FOR MEMBERSHIP
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
