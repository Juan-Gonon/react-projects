import { useEffect, useState } from 'react'
import { getRandomFact } from './Services/facts'
import { useCatImage } from './hooks/useCatImage'

export const App = () => {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  const { imgUrl } = useCatImage({ fact })

  // const [factError, setFactError] = useState('')

  useEffect(() => {
    handleClickFact().then((newFact) => setFact(newFact))
  }, [])

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
