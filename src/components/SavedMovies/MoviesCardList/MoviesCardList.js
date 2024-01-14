import MovieCard from "../MoviesCard/MoviesCard";

// UseState movies, getMovies

function SavedMovieCardList() {
    return (
        <section className="movies">
            <div className="movies__area">
                <MovieCard />
            </div>
        </section>
    )
}

export default SavedMovieCardList;