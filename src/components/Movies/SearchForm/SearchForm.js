import { useState } from "react";

function SearchForm() {

    const [isTumbDisabled, setIsTumbDisabled] = useState(false);

    function tumbSwitch() {
        setIsTumbDisabled(!isTumbDisabled)
    }

    return (
        <section className="search">
            <div className="search__box">
                <form>
                    <div className="search__input">
                        <input className="search__input-area" placeholder="Фильм" type="text" />
                        <button className="search__enter" type="button" />
                    </div>
                    <div className="search__shorts">
                        <button className={`search__shorts-tumb ${!isTumbDisabled ? "" : "search__shorts-tumb-disabled"}`} onClick={tumbSwitch} type="button" />
                        <p className="search__shorts-description">Короткометражки</p>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchForm;