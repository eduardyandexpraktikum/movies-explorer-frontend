function SearchForm({ handleSearchMovies, setShortSwitch, searchInput, handleSearchChange, shortSwitch, handleShortSwitch }) {

    function handleMoviesSearchSubmit(e) {
        e.preventDefault();
        handleSearchMovies(e.target.search.value);
    };

    return (
        <div className="search">
            <div className="search__box">
                <form onSubmit={handleMoviesSearchSubmit}>
                    <div className="search__input">
                        <input name='search'
                            className="search__input-area"
                            type="text"
                            placeholder="Фильм"
                            minLength="1"
                            value={searchInput}
                            onChange={handleSearchChange}
                            required
                        />
                        <button className="search__enter" type="submit" />
                    </div>
                    <div className="search__shorts">
                        <button className={`search__shorts-tumb ${!shortSwitch ? "" : "search__shorts-tumb-enabled"}`} onClick={handleShortSwitch} type="button" />
                        <p className="search__shorts-description">Короткометражки</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;