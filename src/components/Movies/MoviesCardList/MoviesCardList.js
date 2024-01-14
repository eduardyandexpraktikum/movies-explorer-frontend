import MovieCard from "../MoviesCard/MoviesCard";

// UseState movies, getMovies

function MovieCardList() {
    return (
        <section className="movies">
            <ul className="movies__area">
                <MovieCard />
                <button className="movies__more">Еще</button>
            </ul>
        </section>
    )
}

export default MovieCardList;