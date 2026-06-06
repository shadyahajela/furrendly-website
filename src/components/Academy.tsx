import { motion } from 'motion/react';

export default function Academy() {
  const modules = [
    { number: '01', title: 'OCEAN NAVIGATION', progress: 75 },
    { number: '02', title: 'METEOROLOGY', progress: 60 },
    { number: '03', title: 'SEAMANSHIP', progress: 85 },
    { number: '04', title: 'RACE TACTICS', progress: 50 },
    { number: '05', title: 'ENGINEERING SYSTEMS', progress: 40 },
    { number: '06', title: 'LEADERSHIP AT SEA', progress: 70 },
  ];

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      {/* IMAGE - NO OVERLAY */}
      <img
        src="/images/academy-bg.jpg"
        alt="Academy Background"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1
        }}
      />

      {/* CONTENT */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)'
      }}>
        {/* Header section */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{
            fontSize: '10px',
            letterSpacing: '0.3em',
            color: 'rgba(147,197,253,0.85)',
            marginBottom: '16px'
          }}>
            YORCH ACADEMY
          </div>
          <h2 style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.9,
            color: 'white',
            maxWidth: '600px',
            margin: 0
          }}>
            MASTER THE<br />SEA.<br /><em>MASTER<br/>YOURSELF.</em>
          </h2>
        </div>

        {/* Module grid */}
        <div className="grid-3col" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '16px',
          marginTop: '48px'
        }}>
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="glass-mid"
              style={{ padding: '28px 28px 24px', borderRadius: '4px' }}
            >
              <div style={{
                fontSize: '64px',
                color: 'rgba(255,255,255,0.08)',
                lineHeight: 1,
                marginBottom: '-8px'
              }}>
                {module.number}
              </div>
              <div style={{
                fontSize: '8px',
                letterSpacing: '0.35em',
                color: 'rgba(147,197,253,0.6)',
                marginBottom: '10px'
              }}>
                MODULE
              </div>
              <div style={{
                fontSize: '13px',
                letterSpacing: '0.12em',
                color: 'white',
                marginBottom: '8px'
              }}>
                {module.title}
              </div>
              <div style={{
                fontSize: '9px',
                lineHeight: 1.8,
                color: 'rgba(255,255,255,0.5)'
              }}>
                Comprehensive training program for maritime excellence.
              </div>
              {/* Progress bar */}
              <div style={{ marginTop: '16px' }}>
                <div style={{
                  height: '2px',
                  background: 'rgba(255,255,255,0.08)',
                  borderRadius: '1px',
                  position: 'relative'
                }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${module.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: index * 0.1 }}
                    style={{
                      height: '100%',
                      background: 'var(--accent)',
                      borderRadius: '1px'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
