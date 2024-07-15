import { Link } from "react-router-dom"
import css from "./MovieList.module.css"

export default function MovieList({movies}) {
    console.log("Movies in MovieList:", movies);
    return(
       <div className={css.conteiner}>
            <ul>
                {movies.map(movie => (
                 <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                    {movie.title}
                    </Link>
                </li>
            ))}
            </ul>
       </div>
        );
}