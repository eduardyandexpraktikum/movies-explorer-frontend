import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function MovieCard({ movie, moviesList, savedMovies, checkLike, handleDeleteMovie, handleDeleteMovieFromList }) {

    const { pathname } = useLocation();
    const [addedMovie, setAddedMovie] = useState(false);

    useEffect(() => {
        if (pathname === "/movies") {
            if (savedMovies) {
                setAddedMovie(savedMovies.some((item) => movie.id === item.movieId))
            }
        }
    }, [savedMovies, movie.id, setAddedMovie, pathname]);

    function handleAddMovie() {
        if (savedMovies.some((element) => movie.id === element.movieId)) {
            setAddedMovie(false);
            checkLike(movie)
        } else {
            setAddedMovie(true)
            checkLike(movie)
        }
    }

    function handleToggleLike() {
        if (addedMovie) {
            handleDeleteMovieFromList(movie.id)

            checkLike(movie)
        } else {
            handleAddMovie()
        }
    }

    function durationFilm(duration) {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч ${minutes}м`);
    }

    return (
        <li className="movie__card">
            {/* <div>{movie.nameRu}</div> */}
            <div className="movie__imagebox">
                <a href={movie.trailerLink} target="_blank" rel="noreferrer">
                    <img className="movie__image" src={pathname === '/movies' ? `https://api.nomoreparties.co${movie.image.url}` : `${movie.image}`} alt={movie.nameRU} />
                </a>
                {pathname === "/movies" ?
                    <button className={`movie__button ${addedMovie ? "movie__added-mark" : "movie__save-mark"}`} type="button" onClick={handleToggleLike}></button>
                    :
                    <button className="movie__button movie__button-remove" type="button" onClick={() => handleDeleteMovie(movie._id)}></button>
                }
            </div>
            <div className="movie__infobox">
                <p className="movie__card-description">{movie.nameRU}</p>
                <div className="movie__length">{durationFilm(movie.duration)}</div>
            </div>
        </li>
    )
}

