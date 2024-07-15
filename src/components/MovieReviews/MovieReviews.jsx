import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../movie-api';

export default function MovieReviews() {
  const{movieId} = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
        setError(null);
      } catch (error) {
        setError('Error fetching reviews');
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {reviews.length === 0 ? (
            <p>No reviews available</p>
          ) : (
            reviews.map(review => (
              <li key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}