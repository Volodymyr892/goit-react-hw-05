import { useEffect, useState } from "react"
import fetchTrendingMovie from "../movie-api"
import MovieList from "../components/MovieList/MovieList"

export default function HomePage(){
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        const getTrendingMovies = async()=> {
            try {
                const movies =await fetchTrendingMovie();
                setMovies(movies);
                setError(null);
            } catch (error) {
                setError('Error fetching trending movies');
            }
        }
        getTrendingMovies();
      
    }, [])
    

    return(
        <>
        <h1>Trending Movies</h1>
        {error && <p>{error}</p>}
      {!error && movies.length > 0 && <MovieList movies={movies} />}
      {!error && movies.length === 0 && <p>No movies found.</p>}
        </>
    )
}