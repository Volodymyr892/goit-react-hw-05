import  { useEffect, useState } from 'react';
import { NavLink, useParams, useLocation,Outlet  } from 'react-router-dom';
import { fetchMovieDetails } from '../movie-api';
// import MovieCast from '../components/MovieCast/MovieCast'
// import MovieReviews from '../components/MovieReviews/MovieReviews';

 export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
        setError(null);
      } catch (error) {
        setError('Error fetching movie details');
      }
    };

    getMovieDetails();
  }, [movieId]);

  const previousPage = location.state?.from || '/movies';

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        movie && (
          <>
            <NavLink to={previousPage}>Go back</NavLink>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div>
                <h1>{movie.title}</h1>
                <p><strong>User Score:</strong> {movie.vote_average}</p>
                <p><strong>Overview:</strong> {movie.overview}</p>
                <p><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</p>
            </div>
            <ul>
                <li>
                    <NavLink to="cast">Cast</NavLink>
                </li>
                <li>
                    <NavLink to="reviews">Reviews</NavLink>
                </li>
            </ul>
          </>
        )
      )}
        <Outlet/>
    </div>
  
    );
    }