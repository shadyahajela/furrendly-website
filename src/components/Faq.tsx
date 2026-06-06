import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const faqs = [
    {
      question: 'WHAT ARE YOUR BASE RATES?',
      answer: 'Our pricing is structured around dog sizes and coat lengths. Small dogs start at $45, medium dogs at $55, and large dogs at $65+. Premium services and breed-specific cuts may have additional charges.'
    },
    {
      question: 'DO I NEED TO BOOK AN APPOINTMENT IN ADVANCE?',
      answer: 'We highly recommend booking in advance, especially for weekend appointments. Walk-ins are welcome but subject to availability at our Whitby location.'
    },
    {
      question: 'HOW DO YOU HANDLE ANXIOUS OR NERVOUS PETS?',
      answer: 'We use calm-inducing techniques, quiet dryers, and low-stress handling practices. Our groomers are trained to work patiently with anxious pets to ensure a comfortable experience.'
    },
    {
      question: 'WHAT PREMIUM SHAMPOOS DO YOU USE?',
      answer: 'We use hypoallergenic, organic, oatmeal, and deep-conditioning shampoos. All products are gentle on your pet\'s skin and coat while providing excellent cleaning results.'
    }
  ];

  return (
    <section style={{
      backgroundColor: 'var(--bg-cream)',
      padding: '80px clamp(24px, 6vw, 96px)'
    }}>
      {/* White rounded container block */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '32px',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '48px',
        boxShadow: '0 4px 24px rgba(13, 38, 33, 0.08)'
      }}>
        {/* Section header */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            color: 'var(--text-dark)',
            fontWeight: 700,
            marginBottom: '48px',
            margin: '0 0 48px 0',
            textAlign: 'center',
            fontFamily: 'var(--font-display)'
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>

        {/* FAQ items */}
        {faqs.map((faq, index) => (
          <div key={index}>
            <div
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                padding: '24px 0',
                borderBottom: '1px solid rgba(13, 38, 33, 0.1)'
              }}
            >
              <span style={{
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--text-dark)',
                fontFamily: 'var(--font-display)'
              }}>
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ fontSize: '24px', color: 'var(--accent-pink)' }}
              >
                +
              </motion.span>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{
                    fontSize: '15px',
                    lineHeight: 1.7,
                    color: 'var(--text-muted)',
                    padding: '0 0 24px',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
