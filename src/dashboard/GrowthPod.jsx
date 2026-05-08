import DashboardShell, { SectionHeading } from './DashboardShell'
import KpiTile from './primitives/KpiTile'
import { growthFunnel, growthKpis, growthActivity } from './data/mocks'

export default function GrowthPod() {
  const top = growthFunnel[0].count

  return (
    <DashboardShell
      kicker="Surface 02 · Growth Pod"
      title="Outbound, end to end."
      subtitle="Apollo leads → Cassius sends → replies → meetings booked → close. One funnel, one truth."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          marginBottom: '36px',
        }}
      >
        {growthKpis.map((k) => (
          <KpiTile
            key={k.label}
            label={k.label}
            value={k.value}
            delta={k.delta}
            trend={k.trend}
            period={k.period}
            accent={k.trend === 'down' ? 'var(--rust)' : 'var(--lav)'}
          />
        ))}
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        {/* Funnel */}
        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
          }}
        >
          <SectionHeading kicker="Funnel" title="Lead → close" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
            {growthFunnel.map((step, i) => {
              const width = (step.count / top) * 100
              const conversion = i === 0 ? null : ((step.count / growthFunnel[i - 1].count) * 100).toFixed(1)
              return (
                <div key={step.stage}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--sans)',
                        fontSize: '13px',
                        color: 'var(--ink-2)',
                        fontWeight: 500,
                      }}
                    >
                      {step.stage}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: '11px',
                        color: 'var(--ink-3)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {step.count.toLocaleString()}
                      {conversion && (
                        <span style={{ color: 'var(--ink-4)', marginLeft: '10px' }}>
                          {conversion}% conv
                        </span>
                      )}
                    </span>
                  </div>
                  <div
                    style={{
                      height: '34px',
                      background: 'var(--chalk)',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      position: 'relative',
                    }}
                  >
                    <div
                      style={{
                        width: `${width}%`,
                        height: '100%',
                        background: step.color,
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        paddingLeft: '12px',
                        fontFamily: 'var(--mono)',
                        fontSize: '11px',
                        color: 'white',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {width > 18 && step.count.toLocaleString()}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Conversion ladder */}
        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
          }}
        >
          <SectionHeading kicker="Conversion" title="Stage → stage" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '8px' }}>
            {growthFunnel.slice(1).map((step, i) => {
              const prev = growthFunnel[i]
              const rate = ((step.count / prev.count) * 100).toFixed(1)
              return (
                <div
                  key={step.stage}
                  style={{
                    paddingBottom: '14px',
                    borderBottom: i === growthFunnel.length - 2 ? 'none' : '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: '10px',
                      letterSpacing: '0.06em',
                      color: 'var(--ink-4)',
                      textTransform: 'uppercase',
                      marginBottom: '6px',
                    }}
                  >
                    {prev.stage} → {step.stage}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                    <span
                      style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '24px',
                        fontWeight: 500,
                        color: 'var(--ink)',
                      }}
                    >
                      {rate}%
                    </span>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
                      {prev.count.toLocaleString()} → {step.count.toLocaleString()}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Activity feed */}
      <SectionHeading kicker="Live feed" title="Recent activity" />
      <div
        style={{
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 'var(--r-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '90px 120px 1fr 1.4fr 140px',
            padding: '14px 24px',
            borderBottom: '1px solid var(--border)',
            background: 'var(--chalk)',
            fontFamily: 'var(--mono)',
            fontSize: '10px',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          <span>Time</span>
          <span>Actor</span>
          <span>Event</span>
          <span>Target</span>
          <span>Outcome</span>
        </div>
        {growthActivity.map((row, i) => (
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateColumns: '90px 120px 1fr 1.4fr 140px',
              padding: '14px 24px',
              borderBottom: i === growthActivity.length - 1 ? 'none' : '1px solid var(--border)',
              alignItems: 'center',
              fontSize: '13px',
              color: 'var(--ink-2)',
            }}
          >
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink-3)' }}>
              {row.time}
            </span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--ink)' }}>
              {row.actor}
            </span>
            <span style={{ color: 'var(--ink-2)' }}>{row.event}</span>
            <span style={{ color: 'var(--ink)' }}>{row.target}</span>
            <span>
              <span
                className={
                  row.outcome.toLowerCase().includes('positive') ||
                  row.outcome.toLowerCase().includes('cleared') ||
                  row.outcome.toLowerCase().includes('thu')
                    ? 'tag tag-green'
                    : row.outcome.toLowerCase().includes('tier a')
                    ? 'tag tag-citrus'
                    : 'tag'
                }
              >
                {row.outcome}
              </span>
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: '24px',
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          color: 'var(--ink-4)',
          letterSpacing: '0.04em',
        }}
      >
        SOURCE → mock fixtures · wire to Apollo + Cassius mailer + Equinox booking
      </div>
    </DashboardShell>
  )
}
