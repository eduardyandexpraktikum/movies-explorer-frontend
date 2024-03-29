function SavedMovieCard() {
    return (
        <ul className="movie__area">
            <li class="movie__card">
                <div className="movie__imagebox">
                    <img className="movie__image" src={require("../../../images/movie_example_1.jpg")} alt="Фильм" />
                    <button className="movie__added-mark" type="button"></button>
                </div>
                <div className="movie__infobox">
                    <p className="movie__card-description">33 слова о дизайне</p>
                    <div className="movie__length">1ч 17м</div>
                </div>
            </li>
            <li class="movie__card">
                <div className="movie__imagebox">
                    <img className="movie__image" src={require("../../../images/movie_example_1.jpg")} alt="Фильм" />
                    <button className="movie__added-mark" type="button"></button>
                </div>
                <div className="movie__infobox">
                    <p className="movie__card-description">33 слова о дизайне</p>
                    <div className="movie__length">1ч 17м</div>
                </div>
            </li>

        </ul>
    )
}

export default SavedMovieCard;