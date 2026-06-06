import { AnimatePresence, motion } from 'motion/react';

interface MembershipPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
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
              <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.35em',
                  color: 'var(--accent)',
                  marginBottom: '16px'
                }}>
                  MEMBERSHIP
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
                  JOIN THE<br />CIRCLE.
                </h1>

                <p style={{
                  fontSize: '11px',
                  lineHeight: 1.9,
                  letterSpacing: '0.15em',
                  color: 'rgba(12,12,14,0.52)',
                  marginBottom: '40px'
                }}>
                  MEMBERSHIP IN YORCH IS AN INVITATION TO A WORLD WHERE THE OCEAN IS YOURS. SELECT YOUR TIER AND BEGIN YOUR JOURNEY.
                </p>

                {/* Tier cards */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { name: 'SIGNATURE', price: '$24,000/YEAR', desc: 'ENTRY LEVEL' },
                    { name: 'COMMODORE', price: '$48,000/YEAR', desc: 'MOST POPULAR' },
                    { name: 'FOUNDERS\' CIRCLE', price: 'BY INVITATION', desc: 'EXCLUSIVE' }
                  ].map((tier, i) => (
                    <div key={i} className="card" style={{ padding: '32px' }}>
                      <div style={{
                        fontSize: '8px',
                        letterSpacing: '0.3em',
                        color: 'rgba(12,12,14,0.4)',
                        marginBottom: '8px'
                      }}>
                        {tier.desc}
                      </div>
                      <h3 style={{
                        fontSize: '18px',
                        letterSpacing: '0.08em',
                        color: '#0c0c0e',
                        marginBottom: '8px',
                        marginTop: 0
                      }}>
                        {tier.name}
                      </h3>
                      <div style={{
                        fontSize: '14px',
                        letterSpacing: '0.08em',
                        color: 'var(--accent)',
                        marginBottom: '20px'
                      }}>
                        {tier.price}
                      </div>
                      <button style={{
                        background: 'var(--accent)',
                        color: 'white',
                        padding: '12px 28px',
                        fontSize: '9px',
                        letterSpacing: '0.22em',
                        borderRadius: '2px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'inherit'
                      }}>
                        APPLY NOW
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
