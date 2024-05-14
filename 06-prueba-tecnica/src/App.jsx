// import { useEffect, useState } from 'react'
// import { getRandomFact } from './Services/facts'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFat'

export const App = () => {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  // const [factError, setFactError] = useState('')

  const handleClickFact = async () => {
    refreshFact()
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
