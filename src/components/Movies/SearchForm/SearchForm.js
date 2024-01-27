import { useState } from "react";

function SearchForm({ handleMovies, setShortSwitch }) {

    const [isTumbDisabled, setIsTumbDisabled] = useState(false);

    function tumbSwitch() {
        setShortSwitch(!isTumbDisabled)
    }

    function handleMoviesSubmit(e) {
        e.preventDefault();
        handleMovies(e.target.search.value);
    };

    return (
        <div className="search">
            <div className="search__box">
                <form onSubmit={handleMoviesSubmit}>
                    <div className="search__input">
                        <input name='search'
                            className="search__input-area"
                            type="text"
                            placeholder="Фильм"
                            minLength="1"
                            required
                        />
                        <button className="search__enter" type="submit" />
                    </div>
                    <div className="search__shorts">
                        <button className={`search__shorts-tumb ${!isTumbDisabled ? "" : "search__shorts-tumb-disabled"}`} onClick={tumbSwitch} type="button" />
                        <p className="search__shorts-description">Короткометражки</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchForm;