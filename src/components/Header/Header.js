import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="header__block">
                <Link to={'/'} className={'header__logo'}></Link>
                <div className="header__menu">
                    <Link to={'/movies'} className={'header__movies'}>Фильмы</Link>
                    <Link to={'/saved-movies'} className={'header__savedmovies'}>Сохраненные фильмы</Link>
                </div>
                <div className="header__authorization">
                    <Link to={'/signup'} className={'header__signup'}>Регистрация</Link>
                    <Link to={'/signin'} className={'header__signin'}>Войти</Link>
                    <Link to={'/profile'} className={'header__profile'}>Аккаунт</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;