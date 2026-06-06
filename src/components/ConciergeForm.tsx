import { motion } from 'motion/react';

export default function ConciergeForm() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)' }}>
      {/* Centered header */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
          <span style={{ fontSize: '10px', letterSpacing: '0.3em', color: 'var(--accent)' }}>
            PRIVATE CONCIERGE
          </span>
          <div style={{ width: '24px', height: '1px', background: 'var(--accent)' }} />
        </div>
        <h2 style={{
          fontSize: 'clamp(40px,6vw,80px)',
          color: '#0c0c0e',
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: '-0.01em',
          margin: 0
        }}>
          CHARTER A<br/>MOMENT.
        </h2>
      </div>

      {/* Form card */}
      <div style={{
        maxWidth: '720px',
        margin: '0 auto',
        background: 'white',
        border: '1px solid rgba(12,12,14,0.06)',
        boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
        borderRadius: '4px',
        padding: 'clamp(32px,5vw,56px)'
      }}>
        <form>
          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: '6px',
                display: 'block'
              }}>
                FULL NAME
              </label>
              <input
                type="text"
                style={{
                  background: 'rgba(12,12,14,0.04)',
                  border: '1px solid rgba(12,12,14,0.1)',
                  color: '#0c0c0e',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '14px 16px',
                  borderRadius: '2px',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: '6px',
                display: 'block'
              }}>
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                style={{
                  background: 'rgba(12,12,14,0.04)',
                  border: '1px solid rgba(12,12,14,0.1)',
                  color: '#0c0c0e',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '14px 16px',
                  borderRadius: '2px',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
            <div>
              <label style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: '6px',
                display: 'block'
              }}>
                PHONE NUMBER
              </label>
              <input
                type="tel"
                style={{
                  background: 'rgba(12,12,14,0.04)',
                  border: '1px solid rgba(12,12,14,0.1)',
                  color: '#0c0c0e',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '14px 16px',
                  borderRadius: '2px',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{
                fontSize: '8px',
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: '6px',
                display: 'block'
              }}>
                PREFERRED VESSEL
              </label>
              <select
                style={{
                  background: 'rgba(12,12,14,0.04)',
                  border: '1px solid rgba(12,12,14,0.1)',
                  color: '#0c0c0e',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  padding: '14px 16px',
                  borderRadius: '2px',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit'
                }}
              >
                <option>OCEAN ECLIPSE</option>
                <option>BLACK SOVEREIGN</option>
                <option>AZURE HORIZON</option>
                <option>NO PREFERENCE</option>
              </select>
            </div>
          </div>

          {/* Destination */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: '6px',
              display: 'block'
            }}>
              DESTINATION OR REGION
            </label>
            <input
              type="text"
              style={{
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                width: '100%',
                boxSizing: 'border-box',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Preferred Dates */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: '6px',
              display: 'block'
            }}>
              PREFERRED DATES
            </label>
            <input
              type="text"
              placeholder="Please specify or note flexibility"
              style={{
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                width: '100%',
                boxSizing: 'border-box',
                fontFamily: 'inherit'
              }}
            />
          </div>

          {/* Additional Requests */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              fontSize: '8px',
              letterSpacing: '0.3em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: '6px',
              display: 'block'
            }}>
              ADDITIONAL REQUESTS
            </label>
            <textarea
              rows={4}
              placeholder="Share any particular wishes or requirements..."
              style={{
                background: 'rgba(12,12,14,0.04)',
                border: '1px solid rgba(12,12,14,0.1)',
                color: '#0c0c0e',
                fontSize: '11px',
                letterSpacing: '0.12em',
                padding: '14px 16px',
                borderRadius: '2px',
                width: '100%',
                boxSizing: 'border-box',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Submit button */}
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              width: '100%',
              background: 'var(--accent)',
              color: 'white',
              padding: '16px',
              fontSize: '10px',
              letterSpacing: '0.25em',
              borderRadius: '2px',
              marginTop: '8px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit'
            }}
          >
            SUBMIT REQUEST
          </motion.button>

          {/* Confidentiality note */}
          <div style={{
            fontSize: '8px',
            letterSpacing: '0.2em',
            color: 'rgba(12,12,14,0.35)',
            textAlign: 'center',
            marginTop: '16px'
          }}>
            ALL ENQUIRIES ARE HANDLED WITH THE STRICTEST CONFIDENCE.
          </div>
        </form>
      </div>
    </section>
  );
}
