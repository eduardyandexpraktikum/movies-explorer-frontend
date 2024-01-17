import MovieCard from "../MoviesCard/MoviesCard";

// UseState movies, getMovies

function MovieCardList() {
    return (
        <section className="movies">
            <MovieCard />
            <button className="movies__more" type="button">Еще</button>
        </section>
    )
}

export default MovieCardList;