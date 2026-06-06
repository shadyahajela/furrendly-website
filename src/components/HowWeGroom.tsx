import { motion } from 'motion/react';

export default function HowWeGroom() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const services = [
    {
      title: 'GROOMING',
      description: 'Custom cuts, styling, and premium coat conditioning that leaves your furry friend feeling like the ultimate trendsetter.',
      bgClass: 'card-pink',
      circleColor: 'var(--accent-pink)',
      image: (import.meta as any).env.BASE_URL + 'images/Pomeranian_headshot_studio_portrait_202606021924.jpeg'
    },
    {
      title: 'WASH STATIONS',
      description: 'At our custom wash stations, bath time is a therapeutic, low-stress experience leaving your pup refreshed and fully revitalized!',
      bgClass: 'card-teal',
      circleColor: 'var(--accent-teal)',
      image: (import.meta as any).env.BASE_URL + 'images/Dog_emerging_from_pet_spa_202606021923.jpeg'
    },
    {
      title: 'FULL SERVICE',
      description: 'Our end-to-end premium spa and grooming menu ensures that all of your pet\'s specific breed needs are met with absolute care.',
      bgClass: 'card-yellow',
      circleColor: '#FFD93D',
      image: (import.meta as any).env.BASE_URL + 'images/Dog_headshot_on_pastel_background_202606021923.jpeg'
    }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--bg-cream)',
      padding: '60px clamp(24px, 6vw, 96px)',
      textAlign: 'center'
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
          fontFamily: 'var(--font-display)'
        }}
      >
        HOW WE GROOM!
      </motion.h2>

      {/* 3-Card Service Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '32px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={service.bgClass}
            style={{
              padding: '40px',
              borderRadius: '32px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Decorative overlapping circle accent */}
            <div style={{
              position: 'absolute',
              top: '-40px',
              right: '-40px',
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: service.circleColor,
              opacity: 0.3
            }} />

            {/* Circular pet cutout */}
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: 'white',
              margin: '0 auto 24px',
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(13, 38, 33, 0.1)'
            }}>
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: service.title === 'WASH STATIONS' ? 'center 20%' : 'center',
                  scale: service.title === 'WASH STATIONS' ? '1.8' : '1'
                }}
              />
            </div>

            {/* Content */}
            <h3 style={{
              fontSize: '24px',
              color: 'var(--text-dark)',
              fontWeight: 700,
              marginBottom: '16px',
              margin: '0 0 16px 0',
              fontFamily: 'var(--font-display)'
            }}>
              {service.title}
            </h3>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text-dark)',
              marginBottom: '24px',
              margin: '0 0 24px 0'
            }}>
              {service.description}
            </p>
            <button style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-pink)',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em'
            }}>
              LEARN MORE →
            </button>
          </motion.div>
        ))}
      </div>

      {/* Footer CTA */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ marginTop: '48px' }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary"
        >
          OUR SERVICES
        </motion.button>
      </motion.div>
    </section>
  );
}