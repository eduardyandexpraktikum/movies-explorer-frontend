import MovieCard from "../MoviesCard/MoviesCard";

// UseState movies, getMovies

function MovieCardList() {
    return (
        <div className="movie">
            <MovieCard />
            <button className="movie__more" type="button">Еще</button>
        </div>
    )
}

export default MovieCardList;