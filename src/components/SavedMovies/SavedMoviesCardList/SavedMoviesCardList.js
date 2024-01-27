import { MovieCard } from "../../Movies/MoviesCard/MoviesCard";
import Preloader from "../../Movies/Preloader/Preloader";

export function SavedMovieCardList({ loading, moviesList, filteredMovies, checkLike, searchInput, savedMovies, handleDeleteMovie }) {

    return (
        <div className="movie">
            <ul className="movie__area">
                {loading ? <Preloader /> : savedMovies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie._id}
                            movie={movie}
                            moviesList={moviesList}
                            savedMovies={savedMovies}
                            checkLike={checkLike}
                            handleDeleteMovie={handleDeleteMovie}
                        />
                    )
                })
                }
            </ul>
        </div>
    )
}