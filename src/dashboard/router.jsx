import { useCallback } from 'react'
import { usePathname, navigate } from './routerCore'

export function Link({ to, children, style, className, activeStyle }) {
  const pathname = usePathname()
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(to + '/'))

  const handleClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return
      e.preventDefault()
      navigate(to)
    },
    [to]
  )

  return (
    <a
      href={to}
      onClick={handleClick}
      className={className}
      style={{ ...style, ...(isActive ? activeStyle : null) }}
    >
      {children}
    </a>
  )
}
