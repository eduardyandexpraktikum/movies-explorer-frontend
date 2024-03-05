import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({ loggedIn }) {

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    function burgerOpener() {
        setIsBurgerOpen(!isBurgerOpen);
        document.body.classList.toggle('fix-scroll')
    }

    const { pathname } = useLocation();

    return (
        <header id="header" className={`header ${isBurgerOpen ? "burger-open" : ""}`}>

            <div className="header__block">
                <Link to={'/'} className={'header__logo'}></Link>
                {loggedIn && (
                    <div className="header__menu">
                        <div className="header__linkblock">
                            <Link to={'/'} className={'header__main'}>Главная</Link>
                            <Link to={'/movies'} className={'header__movies'}>Фильмы</Link>
                            <Link to={'/saved-movies'} className={'header__savedmovies'}>Сохранённые фильмы</Link>
                            <Link to={'/profile'} className={'header__profile-burger'}>Аккаунт</Link>
                        </div>
                    </div>)}
                <div className="header__authorization">
                    {!loggedIn ? (
                        <>
                            <Link to={'/signup'} className={'header__signup'}>Регистрация</Link>
                            <Link to={'/signin'} className={'header__signin'}>Войти</Link>
                        </>
                    ) : (
                        <>
                            <Link to={'/profile'} className={'header__profile'}>Аккаунт</Link>
                            <button className="header__burger" id="burger" onClick={burgerOpener}>
                                <span></span><span></span><span></span>
                            </button>
                        </>
                    )}

                </div>
            </div>
        </header >
    )
}

export default Header;