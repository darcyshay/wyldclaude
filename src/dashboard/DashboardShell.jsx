import { Link } from './router'
import { usePathname } from './routerCore'

const NAV = [
  { to: '/dashboard', label: 'Overview', code: '00' },
  { to: '/dashboard/fleet', label: 'Fleet', code: '01' },
  { to: '/dashboard/growth', label: 'Growth Pod', code: '02' },
  { to: '/dashboard/demand', label: 'Demand Engine', code: '03' },
]

const CreatureMark = () => (
  <svg width="28" height="28" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="28" stroke="var(--green)" strokeWidth="1.5" fill="none" />
    <circle cx="32" cy="32" r="6" fill="var(--citrus)" />
    <path
      d="M32 4 L32 16 M32 48 L32 60 M4 32 L16 32 M48 32 L60 32"
      stroke="var(--green)"
      strokeWidth="1"
      opacity="0.4"
    />
    <circle cx="32" cy="32" r="18" stroke="var(--green)" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
  </svg>
)

export default function DashboardShell({ kicker, title, subtitle, children }) {
  const pathname = usePathname()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--chalk)', color: 'var(--ink)' }}>
      {/* Top light leak — same signature as the landing page */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--rust), var(--sand), var(--green), var(--citrus))',
          zIndex: 50,
        }}
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          minHeight: '100vh',
        }}
      >
        {/* Sidebar */}
        <aside
          style={{
            background: 'white',
            borderRight: '1px solid var(--border)',
            padding: '32px 20px',
            position: 'sticky',
            top: 0,
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'var(--ink)',
            }}
          >
            <CreatureMark />
            <div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '15px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.1,
                }}
              >
                WYLD OS
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '9px',
                  color: 'var(--ink-4)',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: '2px',
                }}
              >
                Operations
              </div>
            </div>
          </Link>

          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-4)',
              marginTop: '12px',
            }}
          >
            Surfaces
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {NAV.map((item) => {
              const active =
                item.to === '/dashboard'
                  ? pathname === '/dashboard' || pathname === '/dashboard/'
                  : pathname === item.to || pathname.startsWith(item.to + '/')
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontFamily: 'var(--sans)',
                    fontSize: '14px',
                    color: active ? 'var(--ink)' : 'var(--ink-3)',
                    background: active ? 'var(--chalk)' : 'transparent',
                    border: active ? '1px solid var(--border)' : '1px solid transparent',
                    fontWeight: active ? 500 : 400,
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {active && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--citrus)',
                          boxShadow: '0 0 0 3px rgba(181,232,83,0.25)',
                        }}
                      />
                    )}
                    {!active && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--chalk-3)',
                        }}
                      />
                    )}
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      color: 'var(--ink-4)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {item.code}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div style={{ flex: 1 }} />

          <div
            style={{
              padding: '12px 14px',
              borderRadius: 'var(--r)',
              background: 'var(--chalk)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '9px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--ink-4)',
                marginBottom: '6px',
              }}
            >
              Mock data
            </div>
            <div style={{ fontSize: '12px', color: 'var(--ink-3)', lineHeight: 1.5 }}>
              Surfaces are wired to fixtures. Replace <code style={{ fontFamily: 'var(--mono)', fontSize: '11px' }}>data/mocks.js</code> with live sources.
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ padding: '40px 48px 80px' }}>
          <header style={{ marginBottom: '36px', maxWidth: '900px' }}>
            {kicker && (
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--green)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '12px',
                }}
              >
                <span style={{ width: '24px', height: '1.5px', background: 'var(--green)' }} />
                {kicker}
              </div>
            )}
            {title && (
              <h1
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 500,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                  color: 'var(--ink)',
                  margin: 0,
                }}
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--ink-3)',
                  lineHeight: 1.6,
                  marginTop: '12px',
                  fontWeight: 300,
                }}
              >
                {subtitle}
              </p>
            )}
          </header>

          {children}
        </main>
      </div>
    </div>
  )
}

export function SectionHeading({ kicker, title, right }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '24px',
        marginBottom: '16px',
        marginTop: '8px',
      }}
    >
      <div>
        {kicker && (
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '9px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--ink-4)',
              marginBottom: '6px',
            }}
          >
            {kicker}
          </div>
        )}
        {title && (
          <h2
            style={{
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '-0.01em',
              color: 'var(--ink)',
              margin: 0,
            }}
          >
            {title}
          </h2>
        )}
      </div>
      {right}
    </div>
  )
}
