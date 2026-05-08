import DashboardShell, { SectionHeading } from './DashboardShell'
import KpiTile from './primitives/KpiTile'
import Sparkline from './primitives/Sparkline'
import { demandKpis, demandTrend, demandChannels, demandContent } from './data/mocks'

export default function DemandEngine() {
  const sessionsSeries = demandTrend.map((d) => d.sessions)
  const signupsSeries = demandTrend.map((d) => d.signups)
  const maxSessions = Math.max(...sessionsSeries)

  return (
    <DashboardShell
      kicker="Surface 03 · Demand Engine"
      title="The top of the funnel."
      subtitle="Where attention is born — sessions, signups, dwell, and the channels that bring people in."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          marginBottom: '36px',
        }}
      >
        {demandKpis.map((k) => (
          <KpiTile
            key={k.label}
            label={k.label}
            value={k.value}
            delta={k.delta}
            trend={k.trend}
            accent="var(--mist)"
          />
        ))}
      </div>

      {/* Trend chart + sparkline summary */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
          gap: '20px',
          marginBottom: '36px',
        }}
      >
        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
          }}
        >
          <SectionHeading
            kicker="7-day trend"
            title="Sessions per day"
            right={
              <div style={{ display: 'flex', gap: '14px', fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-3)', letterSpacing: '0.04em' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '2px', background: 'var(--mist)' }} /> Sessions
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '10px', height: '2px', background: 'var(--citrus-dk)' }} /> Signups
                </span>
              </div>
            }
          />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${demandTrend.length}, 1fr)`,
              gap: '12px',
              alignItems: 'end',
              height: '220px',
              marginTop: '20px',
              borderBottom: '1px solid var(--border)',
              paddingBottom: '12px',
            }}
          >
            {demandTrend.map((d) => {
              const sessionsH = (d.sessions / maxSessions) * 180
              const signupsH = (d.signups / Math.max(...signupsSeries)) * 60
              return (
                <div key={d.day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '180px' }}>
                    <div
                      style={{
                        width: '60%',
                        height: `${sessionsH}px`,
                        background: 'linear-gradient(180deg, var(--mist) 0%, var(--mist-lt) 100%)',
                        borderRadius: '4px 4px 0 0',
                        position: 'relative',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: '-4px',
                          right: '-4px',
                          bottom: `${signupsH}px`,
                          height: '2px',
                          background: 'var(--citrus-dk)',
                        }}
                      />
                    </div>
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-3)', letterSpacing: '0.04em' }}>{d.day}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)' }}>{d.sessions.toLocaleString()}</div>
                </div>
              )
            })}
          </div>
        </div>

        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <SectionHeading kicker="Pulse" title="At a glance" />
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '8px' }}>
              Sessions · 7d
            </div>
            <Sparkline data={sessionsSeries} width={240} height={48} stroke="var(--mist)" fill="rgba(74,111,165,0.10)" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-4)', marginBottom: '8px' }}>
              Signups · 7d
            </div>
            <Sparkline data={signupsSeries} width={240} height={48} stroke="var(--citrus-dk)" fill="rgba(122,170,26,0.10)" />
          </div>
          <div
            style={{
              padding: '14px',
              background: 'var(--chalk)',
              borderRadius: 'var(--r)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--mono)',
              fontSize: '11px',
              color: 'var(--ink-2)',
              lineHeight: 1.5,
            }}
          >
            Friday peak held — manifesto post still pulling. Saturday dip is normal.
          </div>
        </div>
      </div>

      {/* Channels + content */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          gap: '20px',
        }}
      >
        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
          }}
        >
          <SectionHeading kicker="Attribution" title="Channel breakdown" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
            {demandChannels.map((c) => (
              <div key={c.channel}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: '6px',
                  }}
                >
                  <span style={{ fontSize: '13px', color: 'var(--ink)', fontWeight: 500 }}>{c.channel}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--ink-3)' }}>
                    {c.sessions.toLocaleString()} <span style={{ color: 'var(--ink-4)' }}>· {c.signups} signups · {c.share}%</span>
                  </span>
                </div>
                <div style={{ height: '6px', background: 'var(--chalk)', borderRadius: '999px', overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${c.share * 2.5}%`,
                      maxWidth: '100%',
                      height: '100%',
                      background: c.color,
                      borderRadius: '999px',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: 'var(--r-md)',
            padding: '28px',
          }}
        >
          <SectionHeading kicker="Engagement" title="Top content (7d)" />
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
            {demandContent.map((post, i) => (
              <div
                key={post.title}
                style={{
                  padding: '14px 0',
                  borderBottom: i === demandContent.length - 1 ? 'none' : '1px solid var(--border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '15px',
                      color: 'var(--ink)',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                      marginBottom: '4px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {post.title}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '10px', color: 'var(--ink-4)', letterSpacing: '0.04em' }}>
                    dwell {post.dwell} · {post.shares} shares
                  </div>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: '14px',
                    color: 'var(--ink)',
                    minWidth: '70px',
                    textAlign: 'right',
                  }}
                >
                  {post.views.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
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
        SOURCE → mock fixtures · wire to Plausible / GA + newsletter provider + Vane signal stream
      </div>
    </DashboardShell>
  )
}
