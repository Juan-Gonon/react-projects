import { Link } from '../components/Link'

// eslint-disable-next-line react/prop-types
function HomePage ({ routeParams }) {
  console.log(routeParams)
  return (
    <>
      <h1>Home</h1>
      <Link to='/about'>ir a about</Link>
    </>
  )
}

export default HomePage
