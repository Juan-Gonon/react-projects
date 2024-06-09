import { Link } from '../components/Link'

const i18n = {
  es: {
    title: 'Sobre nosotros',
    description: 'Hola me llamo Juan y estoy creando un clon de React Router'
  },
  en: {
    title: 'About us',
    description: 'Hi My name is Juan and I am creating a clone of React Router'
  }
}

const use18n = (lang) => {
  return i18n[lang] || i18n.en
}

// eslint-disable-next-line react/prop-types
function About ({ routeParams }) {
  // eslint-disable-next-line react/prop-types
  const i18n = use18n(routeParams.lang ?? 'es')
  return (
    <>
      <h1>About</h1>
      <p>{i18n.description}</p>
      <Link to='/'>{i18n.title}</Link>
    </>
  )
}

export default About
