import { AnimatePresence, motion } from 'motion/react';
import { yachts } from '../data/yachts';

interface SpecDrawerProps {
  yachtId: string | null;
  onClose: () => void;
}

export default function SpecDrawer({ yachtId, onClose }: SpecDrawerProps) {
  const yacht = yachts.find(y => y.id === yachtId);

  if (!yacht) return null;

  return (
    <AnimatePresence>
      {yachtId && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)'
            }}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="spec-drawer drawer-responsive"
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '440px',
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto'
            }}
          >
            {/* Content */}
            <div style={{ padding: '40px' }}>
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
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

              {/* Yacht name */}
              <h2 style={{
                fontSize: '32px',
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#0c0c0e',
                marginBottom: '8px',
                marginTop: 0
              }}>
                {yacht.name}
              </h2>
              <p style={{
                fontSize: '11px',
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: '32px'
              }}>
                {yacht.tagline}
              </p>

              {/* Full specs */}
              {yacht.fullSpecs.map((category, index) => (
                <div key={index} style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '12px',
                    letterSpacing: '0.25em',
                    color: 'var(--accent)',
                    marginBottom: '16px',
                    marginTop: 0
                  }}>
                    {category.name}
                  </h3>
                  <div className="form-grid-2col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    {category.specs.map((spec, i) => (
                      <div key={i}>
                        <div style={{
                          fontSize: '8px',
                          letterSpacing: '0.2em',
                          color: 'rgba(12,12,14,0.4)',
                          marginBottom: '4px'
                        }}>
                          {spec.label}
                        </div>
                        <div style={{
                          fontSize: '11px',
                          letterSpacing: '0.1em',
                          color: '#0c0c0e'
                        }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
