import MovieCard from "../MoviesCard/MoviesCard";

// UseState movies, getMovies

function SavedMovieCardList() {
    return (
        <article className="movies">
            <div className="movies__area">
                <MovieCard />
            </div>
        </article>
    )
}

export default SavedMovieCardList;