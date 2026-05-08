export default function KpiTile({ label, value, delta, trend = 'up', period, accent = 'var(--green)' }) {
  const trendColor = trend === 'up' ? 'var(--green)' : trend === 'down' ? 'var(--rust)' : 'var(--ink-3)'
  const arrow = trend === 'up' ? '▲' : trend === 'down' ? '▼' : '→'

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--border)',
        borderRadius: 'var(--r-md)',
        padding: '20px 22px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '2px',
          background: accent,
        }}
      />
      <div
        style={{
          fontFamily: 'var(--mono)',
          fontSize: '10px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--ink-3)',
          marginBottom: '10px',
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: 'var(--serif)',
          fontSize: '36px',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          color: 'var(--ink)',
          lineHeight: 1,
          marginBottom: '8px',
        }}
      >
        {value}
      </div>
      {delta != null && (
        <div
          style={{
            fontFamily: 'var(--mono)',
            fontSize: '11px',
            color: trendColor,
            display: 'flex',
            alignItems: 'baseline',
            gap: '8px',
          }}
        >
          <span>{arrow} {delta}</span>
          {period && (
            <span style={{ color: 'var(--ink-4)', letterSpacing: '0.04em' }}>{period}</span>
          )}
        </div>
      )}
    </div>
  )
}
