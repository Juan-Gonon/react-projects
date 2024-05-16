import { useMemo, useRef, useState } from 'react'
import { searchMovies } from '../Services/movies'

export function useMovies ({search, sort}){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const previousSearch = useRef(search)

    const getMovies = useMemo(()=>{
      return async ({search})=>{
        //console.log(previousSearch)
        if(search === previousSearch.current) return
  
        try {
          setLoading(true)
          setError(null)
          previousSearch.current = search
          const newMovies = await searchMovies({search})
          setMovies(newMovies)
        } catch (error) {
          setError(e.message)
        }finally{
          setLoading(false)
        }
      }
    }, [])

    const sortedMovies = useMemo(()=>{
      console.log('memo sorted movies')
      return sort
      ? [...movies].sort((a,b)=> a.title.localeCompare(b.title))
      : movies
  
    }, [sort, movies])

    return {movies : sortedMovies, loading, getMovies}

}
