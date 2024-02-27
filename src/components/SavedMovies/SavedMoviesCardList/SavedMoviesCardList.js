import { useEffect } from "react";
import { MovieCard } from "../../Movies/MoviesCard/MoviesCard";
import Preloader from "../../Movies/Preloader/Preloader";

export function SavedMovieCardList({ loading, moviesList, filteredSavedMovies, checkLike, searchInput, savedMovies, handleDeleteMovie, shortSwitch, handleDeleteMovieFromList, defaultSavedMovies }) {

    useEffect(() => {
        defaultSavedMovies();
    }, [])

    return (
        <div className="movie">
            <ul className="movie__area">
                {loading ? <Preloader />
                    :
                    filteredSavedMovies.map((movie) => {
                        return (
                            <MovieCard
                                key={movie._id}
                                movie={movie}
                                moviesList={moviesList}
                                savedMovies={savedMovies}
                                checkLike={checkLike}
                                handleDeleteMovie={handleDeleteMovie}
                                handleDeleteMovieFromList={handleDeleteMovieFromList}
                            />
                        )
                    })
                }
            </ul>
        </div>
    )
}