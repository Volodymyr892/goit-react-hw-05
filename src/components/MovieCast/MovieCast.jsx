import { useEffect, useState } from 'react';
import { fetchMovieCredits } from '../../movie-api';
import { useParams } from 'react-router-dom';
export default function MovieCast(){
    const {movieId} = useParams()
    
    const [cast, setCast] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
        setError(null);
      } catch (error) {
        setError('Error fetching cast');
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {cast.map(actor => (
            <li key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    width="100"
                  />
                ) : (
                  <p>No image available</p>
                )}
             <p> {actor.name} as {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

