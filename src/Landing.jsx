import Hero from './components/Hero'
import Origin from './components/Origin'
import ThreeBrains from './components/ThreeBrains'
import ServiceMetabolism from './components/ServiceMetabolism'
import MetabolicPulse from './components/MetabolicPulse'
import BrandedAsset from './components/BrandedAsset'
import EngineRoom from './components/EngineRoom'
import SovereignOnboarding from './components/SovereignOnboarding'

export default function Landing() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--chalk)' }}>
      <Hero />
      <Origin />
      <ThreeBrains />
      <ServiceMetabolism />
      <MetabolicPulse />
      <BrandedAsset />
      <EngineRoom />
      <SovereignOnboarding />

      {/* Footer */}
      <footer style={{
        padding: '48px 0',
        borderTop: '1px solid var(--border)',
        background: 'white',
      }}>
        <div style={{
          maxWidth: '1140px',
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--serif)',
              fontSize: '19px',
              fontWeight: 500,
              color: 'var(--ink)',
              letterSpacing: '-0.02em',
              marginBottom: '4px',
            }}>
              WYLD Made Studio
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                background: 'var(--citrus)',
                borderRadius: '50%',
                marginLeft: '4px',
                marginBottom: '2px',
                boxShadow: '0 0 0 3px rgba(181,232,83,0.2)',
              }} />
            </div>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: 'var(--ink-5)',
              letterSpacing: '0.06em',
            }}>
              Sovereign AI Creative Engine
            </div>
          </div>
          <div style={{
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            color: 'var(--ink-5)',
            letterSpacing: '0.04em',
          }}>
            © 2026 WYLD Made Studio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
