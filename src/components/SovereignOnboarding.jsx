import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const SovereignOnboarding = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [animationStarted, setAnimationStarted] = useState(false);

  React.useEffect(() => {
    if (isInView && !animationStarted) {
      setAnimationStarted(true);
    }
  }, [isInView, animationStarted]);

  const lines = [
    { text: '→ Initiating handshake...', status: 'pending' },
    { text: '→ Provisioning docker silo...', status: 'pending' },
    { text: '→ Loading SOUL.md + RULES.md...', status: 'pending' },
    { text: '→ Calibrating brand voice...', status: 'pending' },
    { text: '→ Deploying agent triad (Claude → Gemini → Ollama)...', status: 'pending' },
    { text: '→ sovereign engine — ONLINE', status: 'complete', isOnline: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const pulseAnimation = `
    @keyframes pulse-dot {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.5;
        transform: scale(1.2);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    @keyframes online-glow {
      0% {
        opacity: 0;
        transform: scale(1.5);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  return (
    <section
      ref={ref}
      style={{
        padding: 'var(--space-6) var(--space-4)',
        backgroundColor: 'var(--chalk)',
        color: 'var(--ink)',
      }}
    >
      <style>{pulseAnimation}</style>

      {/* Kicker and Title */}
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
        <p
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--citrus)',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--sans)',
          }}
        >
          Ignition Sequence
        </p>
        <h2
          style={{
            fontSize: 'clamp(1.875rem, 5vw, 2.5rem)',
            fontWeight: 700,
            fontFamily: 'var(--serif)',
            margin: 0,
            lineHeight: 1.2,
          }}
        >
          How your engine comes online.
        </h2>
      </div>

      {/* Terminal Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          backgroundColor: 'var(--ink)',
          color: 'var(--chalk)',
          borderRadius: '0.5rem',
          border: '1px solid var(--ink-1)',
          overflow: 'hidden',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Terminal Top Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            padding: 'var(--space-3) var(--space-4)',
            backgroundColor: 'var(--ink-2)',
            borderBottom: '1px solid var(--ink-1)',
            fontFamily: 'var(--sans)',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--chalk)',
          }}
        >
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FF5F56',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FFBD2E',
            }}
          />
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#27C93F',
            }}
          />
          <span style={{ marginLeft: 'var(--space-2)', color: 'var(--chalk)' }}>
            sovereign-engine.init
          </span>
        </div>

        {/* Terminal Content */}
        <div
          style={{
            padding: 'var(--space-5) var(--space-4)',
            fontFamily: 'var(--mono)',
            fontSize: '0.9375rem',
            lineHeight: 1.8,
            color: 'var(--chalk)',
            minHeight: '300px',
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={animationStarted ? 'visible' : 'hidden'}
          >
            {lines.map((line, idx) => (
              <motion.div
                key={idx}
                variants={lineVariants}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom:
                    idx === lines.length - 1 ? 0 : 'var(--space-2)',
                }}
              >
                <span>{line.text}</span>
                {!line.isOnline && (
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--citrus)',
                      animation: 'pulse-dot 1.5s ease-in-out infinite',
                      flexShrink: 0,
                    }}
                  />
                )}
                {line.isOnline && (
                  <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      type: 'spring',
                      stiffness: 100,
                      damping: 10,
                    }}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--green)',
                      flexShrink: 0,
                      boxShadow: '0 0 8px var(--green)',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={animationStarted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
        style={{
          marginTop: 'var(--space-6)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            fontFamily: 'var(--sans)',
            marginBottom: 'var(--space-4)',
            color: 'var(--ink)',
            fontWeight: 500,
          }}
        >
          Ready to go sovereign?
        </p>
        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: '0 8px 16px rgba(40, 167, 69, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
          style={{
            backgroundColor: 'var(--green)',
            color: 'var(--chalk)',
            padding: '0.875rem 2rem',
            fontSize: '0.9375rem',
            fontWeight: 600,
            fontFamily: 'var(--sans)',
            border: 'none',
            borderRadius: '0.375rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
          }}
        >
          Launch Your Engine
        </motion.button>
      </motion.div>
    </section>
  );
};

export default SovereignOnboarding;
