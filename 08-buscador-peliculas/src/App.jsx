import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

// import withoutResults from './mocks/no-results.json'
import { Movies } from "./components/Movies";
import { useMovies } from "./Hook/useMovie";
import debounce from 'just-debounce-it'

function useSearch(){
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const isFirstInput = useRef(true)

    useEffect(()=>{


        // console.log(isFirstInput.current)
        if(isFirstInput.current){
            isFirstInput.current = search === ''
            return
        }
    
        if(search === ''){
            setError('No se puede buscar una película vacía')
            return
        }
    
        if(search.match(/^\d+$/)){
            setError('No se puede buscar una película con número')
            return 
        }
    
        if(search.length < 3){
            setError('La búsqueda debe tener al menos 3 caracteres')
            return 
        }
    
        setError(null)
    
    }, [search])

    return {
        search,
        error,
        setSearch
    }
}

function App() {
    const [sort, setSort] = useState(false)
    const {search, error, setSearch} = useSearch()
    const { movies, loading, getMovies } = useMovies({search, sort});

    const debouncedGetMovies = useCallback(
        debounce(search =>{
        getMovies({search})
    },2000), [])

    const handleSubmit = (e) => {
        e.preventDefault();
       getMovies({search})
    };

    const handleChange = (e)=>{
        const newQuery = e.target.value;
        if(newQuery.startsWith(' ')) return
        setSearch(newQuery)
        debouncedGetMovies(newQuery)
    }

    const handleSort = ()=>{
        setSort(!sort)
    }
    


    return (
        <div className="page">
            <h1>Movies</h1>

            <header>
                <form className="form" onSubmit={handleSubmit}>
                    <input
                        name="query"
                        type="text"
                        placeholder="Avenger, Star Wars..."
                        value={search}
                        onChange={handleChange}
                    />
                    <input type="checkbox" onChange={handleSort} checked={sort} />
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{color: "red"}}>{error}</p> }
            </header>

            <main>
               {
                loading ? <p>Cargando...</p> :  <Movies movies={movies}></Movies>
               }
            </main>
        </div>
    );
}

export default App;
