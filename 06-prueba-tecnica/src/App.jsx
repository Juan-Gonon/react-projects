import { useEffect, useState } from 'react'
import { getRandomFact } from './Services/facts'

export const App = () => {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const [imgUrl, setImgUrl] = useState(null)
  // const [factError, setFactError] = useState('')

  useEffect(() => {
    handleClickFact().then((newFact) => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(
            `https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response
        setImgUrl(`https://cataas.com${url}`)
      })
  }, [fact])

  const handleClickFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App de Gatos</h1>
      <button onClick={handleClickFact}>New cat</button>
      {fact && <p>{fact}</p>}
      {imgUrl && (
        <img
          src={imgUrl}
          alt={`Image extracted using the first three words for ${fact}`}
        />
      )}
    </main>
  )
}
