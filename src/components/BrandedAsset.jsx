import React from 'react';
import { motion } from 'framer-motion';

export default function BrandedAsset() {
  const cards = [
    {
      id: 'editorial',
      title: 'Editorial Campaign',
      prompt:
        'warm studio photography, female founder at standing desk, golden hour light through floor-to-ceiling windows, brand palette chalk and forest green, editorial vogue style --ar 16:9 --v 6',
      tags: ['Claude: copy', 'Gemini: visual QA', 'Ollama: iteration'],
    },
    {
      id: 'social',
      title: 'Social Series',
      prompt:
        'flat lay product arrangement on warm linen, geometric shadows, citrus accent lighting, minimal editorial composition, overhead shot --ar 1:1 --v 6',
      tags: ['Claude: visual direction', 'Gemini: composition QA', 'Ollama: style'],
    },
    {
      id: 'identity',
      title: 'Brand Identity',
      prompt:
        'abstract organic mark, flowing creature form, forest green and electric lime on warm chalk, minimalist logo design, vector clean lines --ar 1:1 --style raw',
      tags: ['Claude: concept', 'Gemini: refinement', 'Ollama: polish'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -4,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      style={{
        padding: '6rem 2rem',
        maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      {/* Kicker */}
      <p
        style={{
          fontSize: '0.875rem',
          fontFamily: 'var(--sans)',
          fontWeight: 600,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink)',
          marginBottom: '0.5rem',
          opacity: 0.6,
        }}
      >
        Branded Assets
      </p>

      {/* Title */}
      <h2
        style={{
          fontSize: '2.5rem',
          fontFamily: 'var(--serif)',
          fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: '3rem',
          lineHeight: 1.1,
        }}
      >
        What the engine produces.
      </h2>

      {/* Cards Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
        }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            whileHover="hover"
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e5e5e5',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Card Title */}
            <div
              style={{
                padding: '1.5rem 1.5rem 1rem',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {card.title}
              </h3>
            </div>

            {/* Placeholder Image Zone */}
            <div
              style={{
                width: '100%',
                height: '200px',
                backgroundColor: 'var(--chalk)',
                borderBottom: '1px dashed #d0d0d0',
                border: '1px dashed #d0d0d0',
                borderTop: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexGrow: 1,
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--ink)',
                  opacity: 0.3,
                  margin: 0,
                }}
              >
                Mockup Zone
              </p>
            </div>

            {/* Prompt Block */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--chalk)',
                borderBottom: '1px solid #f0f0f0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '0.8125rem',
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.75,
                }}
              >
                {card.prompt}
              </p>
            </div>

            {/* AI Brain Tags */}
            <div
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              {card.tags.map((tag, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--green)',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      letterSpacing: '0.03em',
                      color: 'var(--ink)',
                      opacity: 0.65,
                    }}
                  >
                    {tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
