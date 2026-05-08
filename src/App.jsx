import Landing from './Landing'
import DashboardHome from './dashboard/DashboardHome'
import Fleet from './dashboard/Fleet'
import GrowthPod from './dashboard/GrowthPod'
import DemandEngine from './dashboard/DemandEngine'
import { usePathname } from './dashboard/routerCore'

export default function App() {
  const pathname = usePathname()

  if (pathname === '/dashboard' || pathname === '/dashboard/') return <DashboardHome />
  if (pathname === '/dashboard/fleet') return <Fleet />
  if (pathname === '/dashboard/growth') return <GrowthPod />
  if (pathname === '/dashboard/demand') return <DemandEngine />

  return <Landing />
}
