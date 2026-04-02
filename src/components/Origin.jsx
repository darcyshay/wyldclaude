import { motion } from 'framer-motion';

const columns = [
  {
    kicker: 'The Problem',
    title: 'Creative agencies are broken.',
    body: 'You\'re paying $22k/month for a team of humans who context-switch between 15 clients. Your brand voice gets diluted. Your content calendar runs on vibes. Your ROI is a mystery wrapped in a retainer.',
    accent: 'var(--rust)',
  },
  {
    kicker: 'The Shift',
    title: 'AI changed the economics.',
    body: 'Three foundation models — Claude for strategy, Gemini for visual intelligence, Ollama for private inference — now match or exceed human creative output at 1/3 the cost. But only if you architect them correctly.',
    accent: 'var(--sand)',
  },
  {
    kicker: 'The Solution',
    title: 'Sovereign creative infrastructure.',
    body: 'We don\'t sell you AI tools. We build you a sovereign creative engine — brand-trained, self-improving, human-directed. It runs on your infrastructure. It learns your voice. It compounds.',
    accent: 'var(--green)',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
};

export default function Origin() {
  return (
    <section style={{ background: 'white', padding: '96px 0' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 32px' }}>
        <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
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
            marginBottom: '16px',
          }}>
            <span style={{ width: '24px', height: '1.5px', background: 'var(--green)', display: 'inline-block' }} />
            Origin
          </div>
          <h2 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 400,
            lineHeight: 1.14,
            letterSpacing: '-0.025em',
            color: 'var(--ink)',
            marginBottom: '48px',
            maxWidth: '600px',
          }}>
            Why we built <em style={{ fontStyle: 'italic', color: 'var(--rust)' }}>this</em>.
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}>
          {columns.map((col, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: 'var(--chalk)',
                border: '1px solid var(--border)',
                borderLeft: `3px solid ${col.accent}`,
                borderRadius: 'var(--r-md)',
                padding: '28px',
              }}
            >
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: '9px',
                fontWeight: 500,
                color: col.accent,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                {col.kicker}
              </div>
              <h3 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 400,
                color: 'var(--ink)',
                lineHeight: 1.22,
                marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}>
                {col.title}
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'var(--ink-3)',
                lineHeight: 1.78,
                fontWeight: 300,
              }}>
                {col.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}