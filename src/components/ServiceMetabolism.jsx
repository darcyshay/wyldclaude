import React from 'react';
import { motion } from 'framer-motion';

const ServiceMetabolism = () => {
  const tiers = [
    {
      id: 'spark',
      tag: 'Ignition',
      name: 'Spark',
      price: '$4,800',
      period: '/engagement',
      description: 'One-time AI audit + implementation sprint. We diagnose your creative metabolism and build the first engine.',
      features: [
        'Brand voice calibration',
        '3-model architecture design',
        'SOUL.md + RULES.md creation',
        '2-week implementation',
      ],
      accent: 'var(--sand)',
      featured: false,
    },
    {
      id: 'build',
      tag: 'Recommended',
      name: 'Build',
      price: '$8,500',
      period: '/month',
      description: 'Full sovereign engine buildout. We architect, deploy, and train your AI creative infrastructure.',
      features: [
        'Everything in Spark',
        'Custom Docker deployment',
        'Weekly optimization cycles',
        'Content pipeline automation',
        'Dedicated engine operator',
      ],
      accent: 'var(--green)',
      featured: true,
    },
    {
      id: 'partnership',
      tag: 'Enterprise',
      name: 'Partnership',
      price: '$15,000',
      period: '/month',
      description: 'Strategic partnership with ongoing evolution. Your engine becomes a competitive moat.',
      features: [
        'Everything in Build',
        'C-suite AI strategy',
        'Multi-brand orchestration',
        'Quarterly infrastructure upgrades',
        'Priority support + SLA',
      ],
      accent: 'var(--rust)',
      featured: false,
    },
  ];

  const containerStyle = {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    marginBottom: '3rem',
    textAlign: 'center',
  };

  const kickerStyle = {
    fontSize: '0.875rem',
    fontWeight: '600',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--ink)',
    marginBottom: '0.5rem',
    opacity: 0.7,
  };

  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: '700',
    fontFamily: 'var(--serif)',
    color: 'var(--chalk)',
    lineHeight: 1.2,
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2rem',
    alignItems: 'stretch',
  };

  const getCardStyle = (tier) => {
    const baseStyle = {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      borderRadius: '0.5rem',
      border: '1px solid var(--ink)',
      backgroundColor: 'white',
      position: 'relative',
      overflow: 'hidden',
    };

    if (tier.featured) {
      return {
        ...baseStyle,
        borderTopWidth: '4px',
        borderTopStyle: 'solid',
        borderTopColor: tier.accent,
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      };
    }

    return baseStyle;
  };

  const tagStyle = {
    display: 'inline-block',
    padding: '0.375rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    backgroundColor: 'color-mix(in srgb, var(--chalk) 95%, white)',
    color: 'var(--ink)',
    marginBottom: '1.5rem',
    width: 'fit-content',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--ink)',
    marginBottom: '0.5rem',
  };

  const priceStyle = {
    fontSize: '2.25rem',
    fontWeight: '700',
    fontFamily: 'var(--mono)',
    color: 'var(--ink)',
    marginBottom: '0.25rem',
  };

  const periodStyle = {
    fontSize: '0.875rem',
    color: 'var(--ink)',
    opacity: 0.6,
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '0.95rem',
    lineHeight: 1.6,
    color: 'var(--ink)',
    opacity: 0.8,
    marginBottom: '1.5rem',
  };

  const featureListStyle = {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
    flex: 1,
  };

  const featureItemStyle = {
    fontSize: '0.95rem',
    color: 'var(--ink)',
    opacity: 0.85,
    marginBottom: '0.75rem',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
  };

  const checkmarkStyle = {
    color: 'var(--green)',
    fontWeight: '700',
    flexShrink: 0,
    marginTop: '2px',
  };

  const ctaStyle = {
    padding: '0.875rem 1.5rem',
    borderRadius: '0.375rem',
    fontSize: '0.95rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
    backgroundColor: 'var(--ink)',
    color: 'white',
    textAlign: 'center',
  };

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={kickerStyle}>Service Metabolism</div>
        <h2 style={titleStyle}>Choose your metabolic rate.</h2>
      </div>

      <motion.div
        style={gridStyle}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {tiers.map((tier) => (
          <motion.div
            key={tier.id}
            style={getCardStyle(tier)}
            variants={cardVariants}
            whileHover={{
              transform: tier.featured ? 'translateY(-8px)' : 'translateY(-4px)',
              boxShadow: tier.featured
                ? '0 16px 32px rgba(0, 0, 0, 0.12)'
                : '0 8px 16px rgba(0, 0, 0, 0.08)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div style={tagStyle}>{tier.tag}</div>

            <div style={nameStyle}>{tier.name}</div>

            <div style={priceStyle}>{tier.price}</div>
            <div style={periodStyle}>{tier.period}</div>

            <p style={descriptionStyle}>{tier.description}</p>

            <ul style={featureListStyle}>
              {tier.features.map((feature, idx) => (
                <li key={idx} style={featureItemStyle}>
                  <span style={checkmarkStyle}>✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              style={{
                ...ctaStyle,
                backgroundColor: tier.featured ? tier.accent : 'var(--ink)',
                color: tier.featured && tier.id === 'partnership' ? 'white' : 'white',
              }}
              whileHover={{ opacity: 0.9 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              Get Started
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceMetabolism;
