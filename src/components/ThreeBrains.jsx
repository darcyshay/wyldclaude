import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ThreeBrains = () => {
  const [activeBrain, setActiveBrain] = useState('claude');

  const brains = {
    claude: {
      id: 'claude',
      name: 'Claude',
      role: 'Strategy & Language',
      strengths: 'Brand voice calibration, editorial direction, sales copy, strategic reasoning',
      color: 'var(--green)',
      description: 'Orchestrates strategic reasoning and language tasks. Claude handles complex copywriting, brand voice calibration, and provides the philosophical backbone of your creative engine.',
    },
    gemini: {
      id: 'gemini',
      name: 'Gemini',
      role: 'Visual Intelligence',
      strengths: 'Image analysis, design critique, visual trend detection, multimodal understanding',
      color: 'var(--mist)',
      description: 'Processes visual information and provides design critique. Gemini analyzes images, detects visual trends, and brings multimodal understanding to your creative process.',
    },
    ollama: {
      id: 'ollama',
      name: 'Ollama',
      role: 'Private Inference',
      strengths: 'On-premise processing, data privacy, rapid iteration, cost-zero inference',
      color: 'var(--lav)',
      description: 'Runs locally on your infrastructure for complete data sovereignty. Ollama enables private inference, rapid iteration without external dependencies, and cost-effective processing.',
    },
  };

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

  const cardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1.5rem',
    marginBottom: '2rem',
  };

  const getCardStyle = (brainId) => ({
    padding: '1.5rem',
    borderRadius: '0.5rem',
    border: activeBrain === brainId ? `2px solid ${brains[brainId].color}` : '2px solid var(--ink)',
    backgroundColor: activeBrain === brainId ? 'color-mix(in srgb, var(--green) 10%, white)' : 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease-out',
  });

  const cardNameStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: 'var(--ink)',
    marginBottom: '0.5rem',
  };

  const cardRoleStyle = {
    fontSize: '0.875rem',
    color: 'var(--ink)',
    opacity: 0.7,
    marginBottom: '1rem',
    fontWeight: '500',
  };

  const cardStrengthsStyle = {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: 'var(--ink)',
    opacity: 0.8,
  };

  const detailPanelStyle = {
    padding: '2rem',
    borderRadius: '0.5rem',
    border: `1px solid ${brains[activeBrain].color}`,
    backgroundColor: 'color-mix(in srgb, var(--chalk) 98%, white)',
  };

  const detailTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: 'var(--ink)',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  };

  const colorDotStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    backgroundColor: brains[activeBrain].color,
  };

  const detailDescriptionStyle = {
    fontSize: '1rem',
    lineHeight: 1.8,
    color: 'var(--ink)',
    opacity: 0.85,
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={kickerStyle}>Architecture</div>
        <h2 style={titleStyle}>Three brains. One organism.</h2>
      </div>

      <div style={cardsContainerStyle}>
        {Object.values(brains).map((brain) => (
          <motion.div
            key={brain.id}
            onClick={() => setActiveBrain(brain.id)}
            style={getCardStyle(brain.id)}
            whileHover={{ transform: 'translateY(-4px)' }}
            whileTap={{ transform: 'translateY(-2px)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div style={cardNameStyle}>{brain.name}</div>
            <div style={cardRoleStyle}>{brain.role}</div>
            <div style={cardStrengthsStyle}>{brain.strengths}</div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeBrain}
          style={detailPanelStyle}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <div style={detailTitleStyle}>
            <div style={colorDotStyle} />
            {brains[activeBrain].name}
          </div>
          <div style={detailDescriptionStyle}>{brains[activeBrain].description}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ThreeBrains;
