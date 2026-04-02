import { motion } from 'framer-motion';

const CreatureMark = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="var(--green)" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="32" r="6" fill="var(--citrus)" />
    <path d="M32 4 L32 16 M32 48 L32 60 M4 32 L16 32 M48 32 L60 32" stroke="var(--green)" strokeWidth="1" opacity="0.4" />
    <circle cx="32" cy="32" r="18" stroke="var(--green)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
  </svg>
);

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, var(--chalk) 0%, white 100%)',
    }}>
      {/* Linear light leak */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, height: '3px',
        background: 'linear-gradient(90deg, var(--rust), var(--sand), var(--green), var(--citrus))',
      }} />

      {/* Dot grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(36,31,26,.04) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1140px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ marginBottom: '24px' }}>
            <CreatureMark />
          </div>

          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            fontWeight: 500,
            color: 'var(--green)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}>
            <span style={{ width: '24px', height: '1.5px', background: 'var(--green)', display: 'inline-block' }} />
            Sovereign AI Creative Engine
          </div>

          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(42px, 6vw, 72px)',
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
            marginBottom: '24px',
            maxWidth: '800px',
          }}>
            We replaced{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>$264k/yr</em>{' '}
            agency retainers with a{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--green)' }}>$102k/yr</em>{' '}
            autonomous engine.
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--ink-3)',
            lineHeight: 1.78,
            fontWeight: 300,
            maxWidth: '580px',
            marginBottom: '40px',
          }}>
            WYLD Made Studio builds sovereign AI systems — brand-trained,
            infrastructure-owned, human-directed. Three brains. One organism.
            Your creative metabolism, liberated.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '13px 28px',
                background: 'var(--green)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              See How It Works
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: '13px 28px',
                background: 'transparent',
                color: 'var(--ink-2)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                fontFamily: 'var(--sans)',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              View Engine Room
            </motion.button>
          </div>
        </motion.div>

        {/* Image placement zones - v2 upgrade */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'absolute',
            right: '32px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
            maxWidth: '380px',
          }}
        >
          {['Brand Asset', 'AI Output', 'Dashboard', 'Engine'].map((label, i) => (
            <div key={i} style={{
              width: '180px',
              height: i < 2 ? '120px' : '100px',
              background: 'var(--chalk-2)',
              border: '1px dashed var(--border-2)',
              borderRadius: 'var(--r-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              color: 'var(--ink-5)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}