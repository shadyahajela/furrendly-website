import { AnimatePresence, motion } from 'motion/react';

interface BlogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Blog({ isOpen, onClose }: BlogProps) {
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
              <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent)',
                  marginBottom: '16px'
                }}>
                  YORCH JOURNAL
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
                  STORIES FROM<br />THE SEA.
                </h1>

                {/* Blog posts */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="card" style={{ padding: '32px' }}>
                      <div style={{
                        fontSize: '8px',
                        letterSpacing: '0.3em',
                        color: 'rgba(12,12,14,0.4)',
                        marginBottom: '12px'
                      }}>
                        JANUARY 2025
                      </div>
                      <h3 style={{
                        fontSize: '18px',
                        letterSpacing: '0.08em',
                        color: '#0c0c0e',
                        marginBottom: '12px',
                        marginTop: 0
                      }}>
                        THE ART OF MEDITERRANEAN CRUISING
                      </h3>
                      <p style={{
                        fontSize: '10px',
                        lineHeight: 1.8,
                        letterSpacing: '0.12em',
                        color: 'rgba(12,12,14,0.52)',
                        marginBottom: '20px',
                        margin: '0 0 20px 0'
                      }}>
                        Discover the hidden gems of the Mediterranean coastline through the lens of our experienced captains and crew.
                      </p>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent)',
                        fontSize: '9px',
                        letterSpacing: '0.25em',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}>
                        READ MORE →
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
