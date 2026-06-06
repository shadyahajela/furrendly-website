import { AnimatePresence, motion } from 'motion/react';

interface AboutPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
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
                  ABOUT US
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
                  SINCE 1975.
                </h1>

                <p style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                  marginBottom: '32px'
                }}>
                  YORCH WAS FOUNDED IN MONACO IN 1975 BY A GROUP OF VISIONARIES WHO BELIEVED THAT THE OCEAN SHOULD BE ACCESSIBLE TO THOSE WHO DEMAND THE FINEST. FOR NEARLY FIVE DECADES, WE HAVE MAINTAINED AN UNWAVERING COMMITMENT TO EXCELLENCE, DISCRETION, AND THE PURSUIT OF THE EXTRAORDINARY.
                </p>

                <p style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                  marginBottom: '48px'
                }}>
                  TODAY, YORCH STANDS AS THE WORLD'S MOST EXCLUSIVE PRIVATE YACHT CLUB, WITH MEMBERS ACROSS SIX CONTINENTS AND A FLEET OF THREE EXCEPTIONAL VESSELS THAT REPRESENT THE PINNACLE OF MARITIME ENGINEERING AND LUXURY.
                </p>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '32px',
                  borderTop: '1px solid rgba(12,12,14,0.08)',
                  paddingTop: '40px'
                }}>
                  <div>
                    <div style={{
                      fontSize: '48px',
                      color: 'var(--accent)',
                      fontWeight: 400,
                      marginBottom: '8px'
                    }}>
                      50
                    </div>
                    <div style={{
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.4)'
                    }}>
                      YEARS OF EXCELLENCE
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '48px',
                      color: 'var(--accent)',
                      fontWeight: 400,
                      marginBottom: '8px'
                    }}>
                      3
                    </div>
                    <div style={{
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.4)'
                    }}>
                      EXCEPTIONAL VESSELS
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '48px',
                      color: 'var(--accent)',
                      fontWeight: 400,
                      marginBottom: '8px'
                    }}>
                      6
                    </div>
                    <div style={{
                      fontSize: '8px',
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.4)'
                    }}>
                      CONTINENTS SERVED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
