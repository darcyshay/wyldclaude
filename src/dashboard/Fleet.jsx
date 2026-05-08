import DashboardShell, { SectionHeading } from './DashboardShell'
import StatusDot from './primitives/StatusDot'
import KpiTile from './primitives/KpiTile'
import { fleet, fleetSummary } from './data/mocks'

const STATUS_LABEL = {
  green: 'Healthy',
  yellow: 'Warning',
  red: 'Down',
}

export default function Fleet() {
  return (
    <DashboardShell
      kicker="Surface 01 · Fleet"
      title="The thirteen."
      subtitle="Every operator in the WYLD fleet — what they do, who owns them, and whether they're awake."
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px',
          marginBottom: '36px',
        }}
      >
        <KpiTile label="Healthy" value={fleetSummary.green} accent="var(--green)" />
        <KpiTile label="Warning" value={fleetSummary.yellow} accent="var(--sand)" />
        <KpiTile label="Down" value={fleetSummary.red} accent="var(--rust)" />
        <KpiTile label="Runs today" value={fleetSummary.totalRuns.toLocaleString()} accent="var(--ink)" />
      </div>

      <SectionHeading
        kicker="Roster"
        title="13 agents · current state"
        right={
          <div
            style={{
              display: 'flex',
              gap: '14px',
              fontFamily: 'var(--mono)',
              fontSize: '10px',
              color: 'var(--ink-3)',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <StatusDot status="green" size={6} /> healthy
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <StatusDot status="yellow" size={6} /> warning
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <StatusDot status="red" size={6} /> down
            </span>
          </div>
        }
      />

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
            gridTemplateColumns: '24px 1.2fr 1.5fr 0.9fr 0.7fr 0.9fr',
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
          <span />
          <span>Agent</span>
          <span>Role</span>
          <span>Last run</span>
          <span style={{ textAlign: 'right' }}>Runs / 24h</span>
          <span>Owner</span>
        </div>

        {fleet.map((a, i) => (
          <div
            key={a.id}
            style={{
              borderBottom: i === fleet.length - 1 ? 'none' : '1px solid var(--border)',
              padding: '18px 24px',
              display: 'grid',
              gridTemplateColumns: '24px 1.2fr 1.5fr 0.9fr 0.7fr 0.9fr',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <StatusDot status={a.status} size={9} label={STATUS_LABEL[a.status]} />
            <div>
              <div
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '17px',
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                }}
              >
                {a.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: '10px',
                  color: 'var(--ink-4)',
                  letterSpacing: '0.04em',
                  marginTop: '2px',
                }}
              >
                {a.id}.agent
              </div>
            </div>
            <div style={{ fontSize: '13px', color: 'var(--ink-2)', lineHeight: 1.5 }}>
              <div style={{ color: 'var(--ink)', fontWeight: 500, marginBottom: '2px' }}>{a.role}</div>
              <div style={{ color: 'var(--ink-3)', fontSize: '12px' }}>{a.note}</div>
            </div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '12px',
                color: a.status === 'red' ? 'var(--rust)' : 'var(--ink-2)',
              }}
            >
              {a.lastRun}
            </div>
            <div
              style={{
                fontFamily: 'var(--mono)',
                fontSize: '13px',
                color: 'var(--ink)',
                textAlign: 'right',
              }}
            >
              {a.runsToday}
            </div>
            <div>
              <span
                className={
                  a.owner === 'Growth Pod'
                    ? 'tag tag-mist'
                    : a.owner === 'Demand Engine'
                    ? 'tag tag-citrus'
                    : 'tag tag-green'
                }
              >
                {a.owner}
              </span>
            </div>
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
        SOURCE → mock fixtures · wire to cron-runner + agent heartbeat endpoints
      </div>
    </DashboardShell>
  )
}
