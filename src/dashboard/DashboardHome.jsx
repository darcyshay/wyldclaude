import DashboardShell from './DashboardShell'
import { Link } from './router'
import StatusDot from './primitives/StatusDot'
import { fleetSummary, growthKpis, demandKpis } from './data/mocks'

const SURFACES = [
  {
    to: '/dashboard/fleet',
    code: '01',
    title: 'Fleet',
    blurb: 'Status of the 13-agent fleet — last run, owner, and health for every operator in the system.',
    headline: `${fleetSummary.green} healthy · ${fleetSummary.yellow} warning · ${fleetSummary.red} down`,
    accent: 'var(--green)',
  },
  {
    to: '/dashboard/growth',
    code: '02',
    title: 'Growth Pod',
    blurb: 'Outbound funnel: Apollo leads → Cassius sends → replies → meetings booked → close rate.',
    headline: `${growthKpis[0].value} reply · ${growthKpis[3].value} pipeline`,
    accent: 'var(--lav)',
  },
  {
    to: '/dashboard/demand',
    code: '03',
    title: 'Demand Engine',
    blurb: 'Top-of-funnel: traffic, signups, content engagement, channel attribution.',
    headline: `${demandKpis[0].value} sessions · ${demandKpis[1].value} signups (7d)`,
    accent: 'var(--mist)',
  },
]

export default function DashboardHome() {
  return (
    <DashboardShell
      kicker="Wyld OS · Operations"
      title="Three surfaces. One organism."
      subtitle="Every brain, every funnel, every channel — one console. Data is mocked until the live sources are wired."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {SURFACES.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'block',
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 'var(--r-md)',
              padding: '28px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                background: s.accent,
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '14px' }}>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-4)',
                }}
              >
                Surface {s.code}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '11px',
                  color: 'var(--ink-3)',
                }}
              >
                →
              </div>
            </div>
            <h3
              style={{
                fontFamily: 'var(--serif)',
                fontSize: '24px',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                margin: '0 0 10px',
                color: 'var(--ink)',
              }}
            >
              {s.title}
            </h3>
            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.55,
                color: 'var(--ink-3)',
                margin: '0 0 18px',
              }}
            >
              {s.blurb}
            </p>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '11px',
                color: 'var(--ink)',
                paddingTop: '14px',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <StatusDot status="green" size={6} />
              {s.headline}
            </div>
          </Link>
        ))}
      </div>

      <div
        style={{
          background: 'var(--ink)',
          color: 'var(--chalk)',
          borderRadius: 'var(--r-md)',
          padding: '28px 32px',
          display: 'flex',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: '260px' }}>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--citrus)',
              marginBottom: '8px',
            }}
          >
            System note
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', lineHeight: 1.4, fontWeight: 400 }}>
            Sovereign by design. The console reads what the agents emit — never the other way around.
          </div>
        </div>
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: 'var(--chalk-3)',
            letterSpacing: '0.06em',
          }}
        >
          v0.1 · mock fixtures
        </div>
      </div>
    </DashboardShell>
  )
}
