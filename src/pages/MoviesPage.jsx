import  { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../movie-api'
import MovieList from '../components/MovieList/MovieList'

export default function MoviesPage(){
    const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const queryParam = searchParams.get('query') || '';
    setQuery(queryParam);

    if (queryParam) {
        const getMovies = async () => {
            try {
                const movies = await searchMovies(queryParam);
                setMovies(movies);
                setError(null);
            } catch (error) {
                setError('Error searching movies');
            }
        };
        getMovies();
    }
}, [searchParams]);

const handleSearch = async (e) => {
    e.preventDefault();
    setSearchParams({ query });
};
    return (
        <>
        <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie"
        />
        <button type="submit">Search</button>
      </form>
      {error ? <p>{error}</p> : <MovieList movies={movies} />}
        </>
    )
}