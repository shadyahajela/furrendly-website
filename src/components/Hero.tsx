import { motion } from 'motion/react';

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  return (
    <section style={{
      backgroundColor: 'var(--bg-cream)',
      position: 'relative',
      paddingBottom: '120px'
    }}>
      {/* Hero Wave Top - Organic lime green wave */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '60%',
        backgroundColor: 'var(--bg-lime)',
        borderBottomLeftRadius: '50% 20%',
        borderBottomRightRadius: '50% 20%',
        zIndex: 0
      }} />

      {/* 2-column grid layout */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        padding: '80px clamp(24px, 6vw, 96px)',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* COL 1 - Left Aspect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Google Reviews Widget Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="card"
            style={{
              padding: '20px',
              borderRadius: '16px',
              maxWidth: '320px',
              boxShadow: '0 4px 20px rgba(13, 38, 33, 0.08)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ color: '#FFD700', fontSize: '18px' }}>★★★★★</div>
              <span style={{ fontSize: '12px', color: 'var(--text-dark)', fontWeight: 600 }}>5.0</span>
            </div>
            <p style={{
              fontSize: '13px',
              lineHeight: 1.6,
              color: 'var(--text-dark)',
              margin: 0,
              fontStyle: 'italic'
            }}>
              "FURRendly Clips is hands down the best grooming team in Whitby!"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px'
              }}>
                🐕
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Local Client</span>
            </div>
          </motion.div>

          {/* Core Typography */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            style={{ textAlign: 'left' }}
          >
            <h1 style={{
              fontSize: 'clamp(64px, 10vw, 96px)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              margin: 0,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.1,
              marginBottom: '16px'
            }}>
              FURRendly Clips
            </h1>
            <h2 style={{
              fontSize: 'clamp(36px, 6vw, 56px)',
              fontWeight: 700,
              color: 'var(--text-dark)',
              margin: 0,
              fontFamily: 'var(--font-display)',
              lineHeight: 1.1,
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              <span>GET YOUR</span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                letterSpacing: 'normal'
              }}>
                <span>GR</span>
                <span style={{
                  display: 'inline-block',
                  width: 'clamp(36px, 6vw, 56px)',
                  height: 'clamp(36px, 6vw, 56px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  verticalAlign: 'middle',
                  margin: '0 4px',
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src={(import.meta as any).env.BASE_URL + "images/Pomeranian_headshot_studio_portrait_202606021924.jpeg"} 
                    className="w-full h-full object-cover object-center"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </span>
                <span style={{
                  display: 'inline-block',
                  width: 'clamp(36px, 6vw, 56px)',
                  height: 'clamp(36px, 6vw, 56px)',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  verticalAlign: 'middle',
                  margin: '0 4px',
                  border: '2px solid white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                }}>
                  <img 
                    src={(import.meta as any).env.BASE_URL + "images/Dog_headshot_on_pastel_background_202606021923.jpeg"} 
                    className="w-full h-full object-cover object-center"
                    style={{ transform: 'scale(1.1)' }}
                  />
                </span>
                <span>M</span>
              </span>
              <span>ON</span>
            </h2>
            <p style={{
              fontSize: '16px',
              color: 'var(--text-dark)',
              maxWidth: '500px',
              margin: '24px 0',
              lineHeight: 1.7
            }}>
              Unleash the full potential of pet pampering with FURRendly Clips — where Whitby's finest furry friends get the VIP treatment they deserve.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              BOOK AN APPOINTMENT
            </motion.button>
          </motion.div>
        </div>

        {/* COL 2 - Right Aspect */}
        <motion.div
          variants={fadeInScale}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }} 
        >
          {/* Featured Hero Portrait - Circular frame */}
          <div style={{
            position: 'relative',
            width: 'clamp(280px, 35vw, 400px)',
            height: 'clamp(280px, 35vw, 400px)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: 'var(--accent-pink)',
              zIndex: 0
            }} />
            <div style={{
              position: 'absolute',
              inset: '8px',
              borderRadius: '50%',
              backgroundColor: 'white',
              zIndex: 1,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img
                src={(import.meta as any).env.BASE_URL + "images/Happy_dog_in_studio_202606021922.jpeg"}
                alt="Happy Dog Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: '78% center'
                }}
              />
            </div>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-teal)',
              zIndex: -1
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              left: '-30px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: 'var(--bg-lime)',
              zIndex: -1
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
