import { EVENTS } from '../constants/constans'
// eslint-disable-next-line react-refresh/only-export-components
export function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

// eslint-disable-next-line react/prop-types
export function Link ({ target, to, ...props }) {
  const handleClick = (e) => {
    const isMainEvent = e.button === 0
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey
    const isManageableEvent = target === undefined || target === '_self'

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
