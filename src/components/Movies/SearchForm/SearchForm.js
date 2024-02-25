import { useLocation } from "react-router-dom";

function SearchForm({
    handleSearchMovies,
    handleSearchSavedMovies,
    searchInput,
    searchSavedInput,
    handleSearchChange,
    handleSavedSearchChange,
    shortSwitch,
    savedShortSwitch,
    handleShortSwitch,
    handleSavedShortSwitch }) {

    const { pathname } = useLocation();

    function handleMoviesSearchSubmit(e) {
        e.preventDefault();
        console.log("ищем по всем фильмам")
        handleSearchMovies(e.target.search.value);
    };

    function handleSavedMoviesSearchSubmit(e) {
        e.preventDefault();
        console.log("ищем по сохраненным фильмам")
        handleSearchSavedMovies(e.target.search.value);
    };

    return (
        <div className="search">
            <div className="search__box">
                <form onSubmit={pathname === '/saved-movies' ? handleSavedMoviesSearchSubmit : handleMoviesSearchSubmit}>
                    <div className="search__input">
                        <input
                            name='search'
                            className="search__input-area"
                            type="text"
                            placeholder="Фильм"
                            minLength="1"
                            value={pathname === '/saved-movies' ? searchSavedInput : searchInput}
                            onChange={pathname === '/saved-movies' ? handleSavedSearchChange : handleSearchChange}
                            required
                        />
                        <button className="search__enter" type="submit" />
                    </div>
                    <div className="search__shorts">
                        {pathname === '/saved-movies'
                            ? <button
                                className={`search__shorts-tumb ${!savedShortSwitch ? "" : "search__shorts-tumb-enabled"}`}
                                onClick={handleSavedShortSwitch}
                                type="button"
                            />
                            : <button
                                className={`search__shorts-tumb ${!shortSwitch ? "" : "search__shorts-tumb-enabled"}`}
                                onClick={handleShortSwitch}
                                type="button"
                            />
                        }
                        <p className="search__shorts-description">Короткометражки</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;