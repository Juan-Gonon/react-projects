import { useEffect, useRef, useState } from "react";
import "./App.css";

// import withoutResults from './mocks/no-results.json'
import { Movies } from "./components/Movies";
import { useMovies } from "./Hook/useMovie";

function useSearch(){
    const [query, setQuery] = useState("");
    const [error, setError] = useState("");
    const isFirstInput = useRef(true)

    useEffect(()=>{


        // console.log(isFirstInput.current)
        if(isFirstInput.current){
            isFirstInput.current = query === ''
            return
        }
    
        if(query === ''){
            setError('No se puede buscar una película vacía')
            return
        }
    
        if(query.match(/^\d+$/)){
            setError('No se puede buscar una película con número')
            return 
        }
    
        if(query.length < 3){
            setError('La búsqueda debe tener al menos 3 caracteres')
            return 
        }
    
        setError(null)
    
    }, [query])

    return {
        query,
        error,
        setQuery
    }
}

function App() {
    const { movies } = useMovies();
    const {query, error, setQuery} = useSearch()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(query)
    };

    const handleChange = (e)=>{
        const newQuery = e.target.value;
        if(newQuery.startsWith(' ')) return
        setQuery(newQuery)
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
                        value={query}
                        onChange={handleChange}
                    />
                    <button type="submit">Buscar</button>
                </form>
                {error && <p style={{color: "red"}}>{error}</p> }
            </header>

            <main>
                <Movies movies={movies}></Movies>
            </main>
        </div>
    );
}

export default App;
