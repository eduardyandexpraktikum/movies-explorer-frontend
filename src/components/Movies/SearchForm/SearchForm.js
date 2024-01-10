function SearchForm() {
    return (
        <article className="search">
            <div className="search__box">
                <div className="search__input">
                    <input className="search__input-area" placeholder="Фильм" />
                    <img className="search__enter" src={require("../../../images/find-3.png")} alt="Найти фильм" />
                </div>
                <div className="search__shorts">
                    <img className="search__shorts-thumb" src={require("../../../images/smalltumb.png")} alt="Только короткометражки" />
                    <p className="search__shorts-description">Короткометражки</p>
                </div>
                <div className="search__underline"></div>
            </div>
        </article>
    )
}

export default SearchForm;