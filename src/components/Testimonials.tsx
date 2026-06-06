import { motion } from 'motion/react';

export default function Testimonials() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section style={{
      backgroundColor: 'var(--bg-cream)',
      padding: '80px clamp(24px, 6vw, 96px)'
    }}>
      {/* Section Header */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        style={{
          fontSize: 'clamp(36px, 6vw, 56px)',
          color: 'var(--text-dark)',
          fontWeight: 700,
          marginBottom: '48px',
          margin: '0 0 48px 0',
          textAlign: 'center',
          fontFamily: 'var(--font-display)'
        }}
      >
        PAW-SOME REVIEWS
      </motion.h2>

      {/* 3-Column Asymmetric Masonry Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto',
        alignItems: 'start'
      }}>
        {/* Card 1 - Angled Left Frame - Stylized graphic only */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="card-lime"
          style={{
            padding: '32px',
            borderRadius: '32px',
            transform: 'rotate(-3deg)'
          }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'white',
            margin: '0 auto 20px',
            boxShadow: '0 4px 16px rgba(13, 38, 33, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
            🐾
          </div>
          <h3 style={{
            fontSize: '18px',
            color: 'var(--text-dark)',
            fontWeight: 700,
            marginBottom: '8px',
            margin: '0 0 8px 0',
            fontFamily: 'var(--font-display)'
          }}>
            EMILY'S REVIEW
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-dark)',
            marginBottom: '12px',
            margin: '0 0 12px 0',
            fontStyle: 'italic'
          }}>
            Absolutely Essential!
          </p>
          <div style={{ fontSize: '18px', color: '#FFD700' }}>★★★★★</div>
        </motion.div>

        {/* Card 2 - Clean Center Typography Block */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card"
          style={{
            padding: '40px',
            borderRadius: '32px',
            boxShadow: '0 8px 32px rgba(13, 38, 33, 0.12)'
          }}
        >
          <h3 style={{
            fontSize: '28px',
            color: 'var(--text-dark)',
            fontWeight: 700,
            marginBottom: '16px',
            margin: '0 0 16px 0',
            fontFamily: 'var(--font-display)'
          }}>
            LIFE SAVER
          </h3>
          <div style={{ fontSize: '24px', color: 'var(--accent-pink)', marginBottom: '20px' }}>
            ★★★★★
          </div>
          <p style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: 'var(--text-dark)',
            marginBottom: '24px',
            margin: '0 0 24px 0'
          }}>
            FURRendly Clips has saved me a lot of trouble! My fur baby, Max, always comes out looking like a model after their grooming sessions. The Whitby staff is super friendly, attentive, and incredibly patient.
          </p>
          <div style={{
            fontSize: '14px',
            fontWeight: 600,
            color: 'var(--text-dark)'
          }}>
            Sarah M.
          </div>
        </motion.div>

        {/* Card 3 - Angled Right Frame */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="card-pink"
          style={{
            padding: '32px',
            borderRadius: '32px',
            transform: 'rotate(3deg)'
          }}
        >
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: 'white',
            margin: '0 auto 20px',
            boxShadow: '0 4px 16px rgba(13, 38, 33, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px'
          }}>
            🐾
          </div>
          <h3 style={{
            fontSize: '18px',
            color: 'var(--text-dark)',
            fontWeight: 700,
            marginBottom: '8px',
            margin: '0 0 8px 0',
            fontFamily: 'var(--font-display)'
          }}>
            SARAH'S THOUGHTS
          </h3>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-dark)',
            marginBottom: '12px',
            margin: '0 0 12px 0',
            fontStyle: 'italic'
          }}>
            Fabulous service!
          </p>
          <div style={{ fontSize: '18px', color: '#FFD700' }}>★★★★★</div>
        </motion.div>
      </div>
    </section>
  );
}
