import { AnimatePresence, motion } from 'motion/react';

interface JourneysPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function JourneysPage({ isOpen, onClose }: JourneysPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 200,
              background: 'rgba(0,0,0,0.5)'
            }}
          />

          {/* Page overlay */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 201,
              background: 'var(--bg-base)',
              overflowY: 'auto'
            }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              style={{
                position: 'fixed',
                top: '18px',
                right: '20px',
                background: 'rgba(248,246,242,0.82)',
                backdropFilter: 'blur(48px) saturate(210%)',
                border: '1px solid rgba(255,255,255,0.95)',
                fontSize: '24px',
                color: '#0c0c0e',
                cursor: 'pointer',
                padding: '8px 12px',
                borderRadius: '2px',
                fontFamily: 'inherit',
                zIndex: 202
              }}
            >
              ×
            </button>

            {/* Content */}
            <div style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
              <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent)',
                  marginBottom: '16px'
                }}>
                  CURATED VOYAGES
                </div>
                <h1 style={{
                  fontSize: 'clamp(48px,8vw,96px)',
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: '-0.01em',
                  color: '#0c0c0e',
                  marginBottom: '48px',
                  marginTop: 0
                }}>
                  BESPOKE<br />JOURNEYS.
                </h1>

                {/* Journey cards */}
                <div className="grid-2col" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                  {[
                    { title: 'MEDITERRANEAN EXPLORER', duration: '7 DAYS', region: 'MEDITERRANEAN' },
                    { title: 'CARIBBEAN ESCAPE', duration: '10 DAYS', region: 'CARIBBEAN' },
                    { title: 'NORDIC FJORDS', duration: '8 DAYS', region: 'NORWAY' },
                    { title: 'PACIFIC SUNSET', duration: '12 DAYS', region: 'PACIFIC' }
                  ].map((journey, i) => (
                    <div key={i} className="card" style={{ padding: '32px' }}>
                      <div style={{
                        fontSize: '8px',
                        letterSpacing: '0.3em',
                        color: 'rgba(12,12,14,0.4)',
                        marginBottom: '12px'
                      }}>
                        {journey.region}
                      </div>
                      <h3 style={{
                        fontSize: '16px',
                        letterSpacing: '0.08em',
                        color: '#0c0c0e',
                        marginBottom: '8px',
                        marginTop: 0
                      }}>
                        {journey.title}
                      </h3>
                      <div style={{
                        fontSize: '9px',
                        letterSpacing: '0.2em',
                        color: 'var(--accent)',
                        marginBottom: '20px'
                      }}>
                        {journey.duration}
                      </div>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent)',
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}>
                        EXPLORE →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
