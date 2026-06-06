import { motion } from 'motion/react';

export default function AboutUs() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section style={{
      backgroundColor: 'var(--bg-cream)',
      padding: '80px clamp(24px, 6vw, 96px)'
    }}>
      {/* 2-Column Side-by-Side Flex/Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '80px',
        maxWidth: '1400px',
        margin: '0 auto',
        alignItems: 'center'
      }}>
        {/* Left Column - Asymmetrical Organic Image Grid */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          style={{
            position: 'relative',
            height: '500px'
          }}
        >
          {/* Pill-shaped solid pastel pink block */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '0',
            width: '180px',
            height: '60px',
            backgroundColor: '#FFE4EC',
            borderRadius: '100px',
            zIndex: 1
          }} />

          {/* Circular teardrop mask - French Bulldog */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '80px',
            width: '200px',
            height: '200px',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            overflow: 'hidden',
            backgroundColor: 'var(--accent-teal)',
            zIndex: 2
          }}>
            <img
              src={(import.meta as any).env.BASE_URL + "images/Dog_sitting_in_studio_202606021923.jpeg"}
              alt="Dog in Studio"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Lime green teardrop mask - dog with sunglasses */}
          <div style={{
            position: 'absolute',
            top: '180px',
            left: '200px',
            width: '180px',
            height: '180px',
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-lime)',
            zIndex: 3
          }}>
            <img
              src={(import.meta as any).env.BASE_URL + "images/Mini_poodle_portrait_studio_202606021924.jpeg"}
              alt="Mini Poodle Portrait"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Solid light teal arch block */}
          <div style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            width: '120px',
            height: '200px',
            backgroundColor: 'var(--accent-teal)',
            borderRadius: '100px 100px 0 0',
            zIndex: 1
          }} />
        </motion.div>

        {/* Right Column - The Story Content */}
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
        >
          <h2 style={{
            fontSize: '44px',
            color: 'var(--text-dark)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            marginBottom: '32px',
            margin: '0 0 32px 0',
            fontFamily: 'var(--font-display)'
          }}>
            ABOUT US
          </h2>
          <p style={{
            fontSize: '16px',
            lineHeight: 1.8,
            color: 'var(--text-dark)',
            marginBottom: '32px',
            margin: '0 0 32px 0'
          }}>
            FURRendly Clips is not just a pet grooming spot; it's a vision brought to life right here in Whitby. Born out of the desire to offer more choice, premium care, and complete comfort to pet parents. Our innovative space empowers expert groomers while creating a highly supportive, stress-free environment for your dogs.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{ marginTop: '24px' }}
          >
            LEARN MORE
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
