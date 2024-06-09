import { useEffect, useState, Children } from 'react'
import { EVENTS } from '../constants/constans'
import { match } from 'path-to-regexp'
import { getCurrentPath } from '../utils'

// eslint-disable-next-line react/prop-types
export function Router ({ children, routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [navigation, setNavigation] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationOnChange = () => {
      setNavigation(getCurrentPath())
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationOnChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationOnChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationOnChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationOnChange)
    }
  }, [])

  // eslint-disable-next-line array-callback-return
  let routeParams = {}

  const routesFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'

    return isRoute ? props : null
  })

  const routesToUse = routes.concat(routesFromChildren)?.filter(Boolean)

  const Page = routesToUse.find(({ path }) => {
    if (path === navigation) return true

    const matchedUrl = match(path, { decode: decodeURIComponent })
    const matched = matchedUrl(navigation)
    if (!matched) return false
    console.log(matched)

    routeParams = matched.params
    return true
  })?.Component
  return Page ? <Page routeParams={routeParams} /> : <DefaultComponent routeParams={routeParams} />
}
