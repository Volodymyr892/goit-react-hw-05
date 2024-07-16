import { Link,useLocation } from "react-router-dom"
import css from "./MovieList.module.css"

export default function MovieList({movies}) {
    const location = useLocation();
    return(
       <div className={css.conteiner}>
            <ul>
                {movies.map(movie => (
                 <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                    {movie.title}
                    </Link>
                </li>
            ))}
            </ul>
       </div>
        );
}