import { MovieCard } from "../MoviesCard/MoviesCard";
import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import { MoviesLayout } from "../../../utils/MoviesLayout";
import { useLocation } from "react-router-dom";
import { DESKTOP_LAYOUT_WIDTH, TABLET_LAYOUT_WIDTH, MOBILE_LAYOUT_WIDTH } from "../../../utils/Constants";

function MovieCardList({ loading, moviesList, filteredMovies, checkLike, searchInput, savedMovies, handleDeleteMovie }) {

    const [widthScreen, setWidthScreen] = useState('');
    const movies = filteredMovies.slice(0, widthScreen);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/movies") {
            setWidthScreen(MoviesLayout().cards);

            function handleMoviesLayout() {

                if (window.innerWidth < DESKTOP_LAYOUT_WIDTH) {
                    setWidthScreen(MoviesLayout().cards)
                }
                if (window.innerWidth < TABLET_LAYOUT_WIDTH) {
                    setWidthScreen(MoviesLayout().cards)
                }
                if (window.innerWidth < MOBILE_LAYOUT_WIDTH) {
                    setWidthScreen(MoviesLayout().cards)
                }
            }

            window.addEventListener("resize", handleMoviesLayout);
            return () => window.removeEventListener("resize", handleMoviesLayout);
        }
    }, [pathname])

    function handleButtonMore() {
        setWidthScreen(widthScreen + MoviesLayout().add);
    }

    return (
        <div className="movie">
            <ul className="movie__area">
                {loading
                    ? <Preloader />
                    : filteredMovies.length === 0 ? <span className="movie__search-result">Ничего не найдено</span> :
                        movies.map((movie) => {
                            return (
                                <MovieCard
                                    key={movie.id}
                                    movie={movie}
                                    moviesList={moviesList}
                                    checkLike={checkLike}
                                    savedMovies={savedMovies}
                                    handleDeleteMovie={handleDeleteMovie}
                                />
                            )
                        })
                }
            </ul>
            <button className={`movie__more ${widthScreen >= filteredMovies.length && "movie__more_disabled"}`} type="button" onClick={handleButtonMore}>Еще</button>
        </div>
    )
}

export default MovieCardList;