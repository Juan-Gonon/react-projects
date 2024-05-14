import { useEffect, useState } from 'react'

export function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState(null)

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

  return {
    imgUrl
  }
}
