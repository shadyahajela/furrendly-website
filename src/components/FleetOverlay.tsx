import { AnimatePresence, motion } from 'motion/react';

interface FleetOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FleetOverlay({ isOpen, onClose }: FleetOverlayProps) {
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
              zIndex: 110,
              background: 'rgba(0,0,0,0.5)'
            }}
          />

          {/* Overlay content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 111,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(24px,6vw,96px)'
            }}
          >
            <div style={{
              background: 'white',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '80vh',
              overflowY: 'auto',
              borderRadius: '4px',
              padding: 'clamp(40px,5vw,64px)',
              position: 'relative'
            }}>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  background: 'none',
                  border: '1px solid rgba(12,12,14,0.15)',
                  fontSize: '24px',
                  color: '#0c0c0e',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  fontFamily: 'inherit'
                }}
              >
                ×
              </button>

              {/* Content */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent)',
                  marginBottom: '16px'
                }}>
                  THE FLEET
                </div>
                <h2 style={{
                  fontSize: 'clamp(32px,4vw,56px)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: '-0.01em',
                  color: '#0c0c0e',
                  marginBottom: '32px',
                  marginTop: 0
                }}>
                  THREE VESSELS.<br />ONE STANDARD.
                </h2>
                <p style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                  maxWidth: '520px',
                  margin: '0 auto 40px'
                }}>
                  Our fleet represents the pinnacle of maritime engineering and luxury. Each vessel is maintained to the highest standards and offers a unique experience on the water.
                </p>
                <button
                  onClick={onClose}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '14px 40px',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  EXPLORE THE FLEET
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
