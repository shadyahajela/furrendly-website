import { AnimatePresence, motion } from 'motion/react';

interface FleetVideoProps {
  isOpen: boolean;
  onClose: () => void;
  yachtId: string | null;
}

export default function FleetVideo({ isOpen, onClose, yachtId }: FleetVideoProps) {
  const yachtNames: Record<string, string> = {
    'ocean-eclipse': 'OCEAN ECLIPSE',
    'black-sovereign': 'BLACK SOVEREIGN',
    'azure-horizon': 'AZURE HORIZON'
  };

  const yachtName = yachtId ? yachtNames[yachtId] : 'FLEET';

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
              background: 'rgba(0,0,0,0.8)'
            }}
          />

          {/* Video modal */}
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
              maxWidth: '1200px',
              width: '100%',
              aspectRatio: '16/9',
              position: 'relative',
              background: '#000',
              borderRadius: '4px',
              overflow: 'hidden'
            }}>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  fontSize: '20px',
                  color: 'white',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  fontFamily: 'inherit'
                }}
              >
                ×
              </button>

              {/* Image */}
              <img
                src={`/images/fleet-${yachtId || 'hero'}.jpg`}
                alt={yachtName}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />

              {/* Overlay text */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                zIndex: 10
              }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'rgba(147,197,253,0.85)',
                  marginBottom: '8px'
                }}>
                  FLEET IMAGE
                </div>
                <div style={{
                  fontSize: '14px',
                  letterSpacing: '0.12em',
                  color: 'white'
                }}>
                  {yachtName}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
