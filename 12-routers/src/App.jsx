import { lazy, Suspense } from 'react'
// import { HomePage } from './page/Home'
import { Router } from './routers/routes'
import { Page404 } from './page/404'
import { SearchPage } from './page/SearchPage'
import { Route } from './components/Route'
// import { About } from './page/About'
const AboutPage = lazy(() => import('./page/About.jsx'))
const HomePage = lazy(() => import('./page/Home'))

const routes = [
  {
    path: '/:lang/about',
    Component: AboutPage

  },
  {

    path: '/search/:query',
    // eslint-disable-next-line react/prop-types
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<div>Loading..</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
