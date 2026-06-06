import { useState } from 'react';
import { motion } from 'motion/react';
import { yachts } from '../data/yachts';
import SpecDrawer from './SpecDrawer';

export default function YachtSpecs() {
  const [selectedYacht, setSelectedYacht] = useState<string | null>(null);

  return (
    <section style={{
      backgroundColor: 'var(--bg-base)',
      padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>
            THE FLEET
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
          THREE VESSELS.<br />ONE STANDARD.
        </h2>
      </div>

      {/* 3-column grid */}
      <div className="grid-3col" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px'
      }}>
        {yachts.map((yacht, index) => (
          <motion.div
            key={yacht.id}
            className="yacht-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '4px',
              border: '1px solid rgba(12,12,14,0.06)',
              background: 'white',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 48px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* IMAGE PORTION */}
            <div style={{
              aspectRatio: '9/16',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img
                className="yacht-card-image"
                src={`/images/fleet-${yacht.id}.jpg`}
                alt={yacht.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.8s var(--ease-luxury)'
                }}
              />
              {/* Bottom gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,15,26,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)'
              }} />
              {/* Tag badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: '100px',
                padding: '6px 14px',
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.15)'
              }}>
                YACHT
              </div>
              {/* Yacht info */}
              <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px'
              }}>
                <div style={{
                  fontSize: '8px',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.5)',
                  marginBottom: '4px'
                }}>
                  {yacht.tagline}
                </div>
                <div style={{
                  fontSize: '17px',
                  letterSpacing: '0.08em',
                  color: 'white'
                }}>
                  {yacht.name}
                </div>
              </div>
            </div>

            {/* INFO PANEL */}
            <div style={{
              background: 'white',
              padding: '24px 24px 28px'
            }}>
              {/* 4-column stat grid */}
              <div className="grid-4col" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px 4px',
                marginBottom: '20px'
              }}>
                {yacht.quickSpecs.slice(0, 4).map((spec, i) => (
                  <div key={i}>
                    <div style={{
                      fontSize: '8px',
                      letterSpacing: '0.25em',
                      color: 'rgba(12,12,14,0.38)',
                      marginBottom: '2px'
                    }}>
                      {spec.label}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      letterSpacing: '0.1em',
                      color: 'var(--accent)',
                      fontWeight: 400
                    }}>
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Two buttons */}
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => setSelectedYacht(yacht.id)}
                  style={{
                    background: 'var(--accent)',
                    color: 'white',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  QUICK SPECS
                </button>
                <button
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(12,12,14,0.5)',
                    color: 'rgba(12,12,14,0.5)',
                    padding: '10px 0',
                    flex: 1,
                    fontSize: '9px',
                    letterSpacing: '0.2em',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    fontFamily: 'inherit'
                  }}
                >
                  FULL SHEET
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* COMPARE ALL THREE button */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px' }}>
        <button style={{
          background: 'var(--accent)',
          color: 'white',
          padding: '14px 40px',
          fontSize: '10px',
          letterSpacing: '0.22em',
          borderRadius: '2px',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit'
        }}>
          COMPARE ALL THREE
        </button>
      </div>

      <SpecDrawer yachtId={selectedYacht} onClose={() => setSelectedYacht(null)} />
    </section>
  );
}
