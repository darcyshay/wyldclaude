import { useEffect, useState } from 'react'

export function usePathname() {
  const [pathname, setPathname] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  )

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname)
    const onNav = (e) => setPathname(e.detail.pathname)
    window.addEventListener('popstate', onPop)
    window.addEventListener('wyld:navigate', onNav)
    return () => {
      window.removeEventListener('popstate', onPop)
      window.removeEventListener('wyld:navigate', onNav)
    }
  }, [])

  return pathname
}

export function navigate(pathname) {
  if (typeof window === 'undefined') return
  window.history.pushState({}, '', pathname)
  window.dispatchEvent(new CustomEvent('wyld:navigate', { detail: { pathname } }))
  window.scrollTo(0, 0)
}
