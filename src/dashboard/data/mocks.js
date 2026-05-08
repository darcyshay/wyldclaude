// Mocked data for the WYLD OS multi-surface dashboard.
// All sources are stand-ins; wire to real APIs (Apollo, Cassius mailer,
// analytics, Cron runs) by replacing these exports.

export const fleet = [
  {
    id: 'juno',
    name: 'Juno',
    role: 'Strategy & briefs',
    status: 'green',
    lastRun: '4m ago',
    runsToday: 12,
    owner: 'Darcy',
    note: 'Daily strategic diagnostic shipped.',
  },
  {
    id: 'verity',
    name: 'Verity',
    role: 'Truth-check & QA',
    status: 'green',
    lastRun: '11m ago',
    runsToday: 27,
    owner: 'Darcy',
    note: 'No tone violations flagged in last 24h.',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    role: 'Knowledge graph',
    status: 'yellow',
    lastRun: '2h ago',
    runsToday: 3,
    owner: 'Darcy',
    note: 'Embedding refresh queued; awaiting Pinecone quota reset.',
  },
  {
    id: 'cassius',
    name: 'Cassius',
    role: 'Outbound sender',
    status: 'green',
    lastRun: '38m ago',
    runsToday: 184,
    owner: 'Growth Pod',
    note: '184 sends today · 11.4% reply rate.',
  },
  {
    id: 'cato',
    name: 'Cato',
    role: 'Compliance & guardrails',
    status: 'green',
    lastRun: '1h ago',
    runsToday: 9,
    owner: 'Darcy',
    note: 'All outbound passed CAN-SPAM + tone gates.',
  },
  {
    id: 'lyra',
    name: 'Lyra',
    role: 'Brand voice tuning',
    status: 'green',
    lastRun: '2h ago',
    runsToday: 6,
    owner: 'Darcy',
    note: 'SOUL.md v4.2 calibrated against last 30 outputs.',
  },
  {
    id: 'vane',
    name: 'Vane',
    role: 'Cultural pulse scan',
    status: 'green',
    lastRun: '6h ago',
    runsToday: 1,
    owner: 'Demand Engine',
    note: 'Weekly scan complete · 4 signals queued for Juno.',
  },
  {
    id: 'elias',
    name: 'Elias',
    role: 'Content drafting',
    status: 'yellow',
    lastRun: '3h ago',
    runsToday: 4,
    owner: 'Demand Engine',
    note: 'Awaiting brand-asset upload for Friday post.',
  },
  {
    id: 'silas',
    name: 'Silas',
    role: 'Visual director',
    status: 'green',
    lastRun: '47m ago',
    runsToday: 8,
    owner: 'Demand Engine',
    note: 'Gemini vision pass on 8 assets — 2 flagged for retake.',
  },
  {
    id: 'aura',
    name: 'Aura',
    role: 'CRM enrichment',
    status: 'green',
    lastRun: '22m ago',
    runsToday: 41,
    owner: 'Growth Pod',
    note: 'Apollo → Notion sync clean. 41 contacts enriched.',
  },
  {
    id: 'equinox',
    name: 'Equinox',
    role: 'Scheduling & cadence',
    status: 'green',
    lastRun: '8m ago',
    runsToday: 19,
    owner: 'Darcy',
    note: 'All cron routines healthy.',
  },
  {
    id: 'kairos',
    name: 'Kairos',
    role: 'Timing & opportunity',
    status: 'red',
    lastRun: '11h ago',
    runsToday: 0,
    owner: 'Darcy',
    note: 'Calendar API auth expired — re-auth required.',
  },
  {
    id: 'midas',
    name: 'Midas',
    role: 'Revenue & invoicing',
    status: 'green',
    lastRun: '1h ago',
    runsToday: 5,
    owner: 'Darcy',
    note: 'Mercury + Stripe reconciled · 2 invoices finalized.',
  },
]

export const fleetSummary = {
  green: fleet.filter((a) => a.status === 'green').length,
  yellow: fleet.filter((a) => a.status === 'yellow').length,
  red: fleet.filter((a) => a.status === 'red').length,
  totalRuns: fleet.reduce((s, a) => s + a.runsToday, 0),
}

// ──────────────────────────────────────────────────────────────────────
// Growth Pod — outbound funnel
// ──────────────────────────────────────────────────────────────────────

export const growthFunnel = [
  { stage: 'Apollo leads sourced', count: 1840, color: 'var(--mist)' },
  { stage: 'Cassius sends', count: 1284, color: 'var(--lav)' },
  { stage: 'Replies', count: 146, color: 'var(--sand)' },
  { stage: 'Meetings booked', count: 38, color: 'var(--citrus-dk)' },
  { stage: 'Closed-won', count: 7, color: 'var(--green)' },
]

export const growthKpis = [
  { label: 'Reply rate', value: '11.4%', delta: '+1.8pp', trend: 'up', period: 'vs last 14d' },
  { label: 'Meeting rate', value: '26.0%', delta: '+3.1pp', trend: 'up', period: 'reply → meeting' },
  { label: 'Close rate', value: '18.4%', delta: '−2.2pp', trend: 'down', period: 'meeting → won' },
  { label: 'Pipeline', value: '$284k', delta: '+$42k', trend: 'up', period: 'this month' },
]

export const growthActivity = [
  { time: '09:42', actor: 'Cassius', event: 'Sent', target: 'B. Tran (Halo Studio)', outcome: 'Delivered' },
  { time: '09:31', actor: 'Aura', event: 'Enriched', target: 'M. Okafor (Northwind)', outcome: 'Tier A' },
  { time: '09:14', actor: 'Cassius', event: 'Reply received', target: 'L. Park (Heron Co)', outcome: 'Positive' },
  { time: '08:58', actor: 'Equinox', event: 'Meeting booked', target: 'L. Park (Heron Co)', outcome: 'Thu 2pm' },
  { time: '08:40', actor: 'Cato', event: 'Compliance pass', target: 'Sequence: Q2-foundry', outcome: 'Cleared' },
  { time: '08:22', actor: 'Cassius', event: 'Sent', target: 'D. Levin (Saltwell)', outcome: 'Delivered' },
  { time: '08:05', actor: 'Aura', event: 'Enriched', target: 'R. Iyer (Borough)', outcome: 'Tier B' },
]

// ──────────────────────────────────────────────────────────────────────
// Demand Engine — top-of-funnel
// ──────────────────────────────────────────────────────────────────────

export const demandKpis = [
  { label: 'Sessions (7d)', value: '12,408', delta: '+18%', trend: 'up' },
  { label: 'Signups (7d)', value: '342', delta: '+11%', trend: 'up' },
  { label: 'Avg. dwell', value: '2:48', delta: '+0:14', trend: 'up' },
  { label: 'Newsletter subs', value: '4,902', delta: '+86', trend: 'up' },
]

export const demandTrend = [
  { day: 'Mon', sessions: 1420, signups: 38 },
  { day: 'Tue', sessions: 1680, signups: 47 },
  { day: 'Wed', sessions: 1740, signups: 52 },
  { day: 'Thu', sessions: 1980, signups: 58 },
  { day: 'Fri', sessions: 2104, signups: 61 },
  { day: 'Sat', sessions: 1620, signups: 44 },
  { day: 'Sun', sessions: 1864, signups: 42 },
]

export const demandChannels = [
  { channel: 'Organic search', sessions: 4820, signups: 138, share: 38.8, color: 'var(--green)' },
  { channel: 'Direct', sessions: 2740, signups: 84, share: 22.1, color: 'var(--ink-2)' },
  { channel: 'LinkedIn', sessions: 2104, signups: 61, share: 17.0, color: 'var(--mist)' },
  { channel: 'Newsletter', sessions: 1248, signups: 38, share: 10.1, color: 'var(--sand)' },
  { channel: 'Referral', sessions: 920, signups: 14, share: 7.4, color: 'var(--lav)' },
  { channel: 'Twitter / X', sessions: 576, signups: 7, share: 4.6, color: 'var(--rust)' },
]

export const demandContent = [
  { title: 'Sovereign AI Creative Engine — manifesto', views: 3920, dwell: '4:12', shares: 142 },
  { title: 'Three brains, one organism', views: 2104, dwell: '3:38', shares: 88 },
  { title: 'Why we replaced $264k retainers with $102k systems', views: 1870, dwell: '5:04', shares: 211 },
  { title: 'Engine room: under the hood', views: 1284, dwell: '2:51', shares: 47 },
  { title: 'SOUL.md — brand DNA as a file', views: 942, dwell: '3:22', shares: 63 },
]
