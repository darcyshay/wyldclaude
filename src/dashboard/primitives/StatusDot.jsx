const COLORS = {
  green: { fill: 'var(--green)', halo: 'rgba(45,106,79,0.18)' },
  yellow: { fill: 'var(--sand)', halo: 'rgba(201,148,26,0.20)' },
  red: { fill: 'var(--rust)', halo: 'rgba(181,70,42,0.22)' },
}

export default function StatusDot({ status = 'green', size = 8, label }) {
  const c = COLORS[status] || COLORS.green
  return (
    <span
      title={label}
      style={{
        display: 'inline-block',
        width: size,
        height: size,
        borderRadius: '50%',
        background: c.fill,
        boxShadow: `0 0 0 3px ${c.halo}`,
      }}
    />
  )
}
