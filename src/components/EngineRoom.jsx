import React from 'react';
import { motion } from 'framer-motion';

export const EngineRoom = () => {
  const nodes = [
    {
      id: 1,
      title: 'SOUL.md',
      description: 'Brand DNA file. Voice, values, vocabulary, visual language. The agent reads this before every output.',
      tag: 'Identity',
      color: 'var(--rust)',
    },
    {
      id: 2,
      title: 'RULES.md',
      description: 'Operational guardrails. What the engine can and can\'t do. Tone boundaries, compliance flags, approval gates.',
      tag: 'Governance',
      color: 'var(--sand)',
    },
    {
      id: 3,
      title: 'Claude API',
      description: 'Strategy layer. Long-form reasoning, brand voice calibration, editorial direction, sales copy generation.',
      tag: 'Language',
      color: 'var(--green)',
    },
    {
      id: 4,
      title: 'Gemini API',
      description: 'Visual intelligence. Image analysis, design critique, multimodal understanding, visual QA.',
      tag: 'Vision',
      color: 'var(--mist)',
    },
    {
      id: 5,
      title: 'Ollama (Local)',
      description: 'Private inference. On-premise model hosting, zero-cost iteration, data sovereignty.',
      tag: 'Private',
      color: 'var(--lav)',
    },
    {
      id: 6,
      title: 'Docker Silo',
      description: 'Isolated deployment. Each client gets a containerized environment. No data leakage, full portability.',
      tag: 'Infrastructure',
      color: 'var(--ink-3)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  return (
    <section
      style={{
        padding: 'var(--space-6) var(--space-4)',
        backgroundColor: 'var(--chalk)',
        color: 'var(--ink)',
      }}
    >
      {/* Kicker and Title */}
      <div style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>
        <p
          style={{
            fontSize: '0.875rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--rust)',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--sans)',
          }}
        >
          Engine Room
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
          What's under the hood.
        </h2>
      </div>

      {/* 6-Node Grid */}
      <motion.div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 'var(--space-4)',
          maxWidth: '1200px',
          margin: '0 auto var(--space-6)',
        }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {nodes.map((node) => (
          <motion.div
            key={node.id}
            variants={nodeVariants}
            style={{
              position: 'relative',
              borderLeft: `3px solid ${node.color}`,
              backgroundColor: 'var(--chalk)',
              border: `1px solid var(--ink-1)`,
              borderLeftWidth: '3px',
              padding: 'var(--space-4)',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
            whileHover={{
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
              y: -4,
            }}
          >
            {/* Tag Pill */}
            <motion.div
              variants={tagVariants}
              style={{
                alignSelf: 'flex-end',
                backgroundColor: node.color,
                color: 'var(--chalk)',
                padding: '0.375rem 0.75rem',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                fontFamily: 'var(--sans)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                marginBottom: 'var(--space-3)',
              }}
            >
              {node.tag}
            </motion.div>

            {/* Title */}
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                fontFamily: 'var(--serif)',
                margin: '0 0 var(--space-2) 0',
                color: 'var(--ink)',
              }}
            >
              {node.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                color: 'var(--ink-2)',
                margin: 0,
                flex: 1,
                fontFamily: 'var(--sans)',
              }}
            >
              {node.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Note Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: 'var(--space-4)',
          backgroundColor: 'var(--ink)',
          color: 'var(--chalk)',
          borderRadius: '0.5rem',
          border: `1px solid var(--rust)`,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.9375rem',
            lineHeight: 1.6,
            margin: 0,
            fontFamily: 'var(--sans)',
            fontWeight: 500,
          }}
        >
          Every component is sovereign. You own the infrastructure, the training data, and the outputs. If you leave, you take everything.
        </p>
      </motion.div>
    </section>
  );
};

export default EngineRoom;
