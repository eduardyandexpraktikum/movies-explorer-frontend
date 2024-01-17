import { Link } from "react-router-dom";

export function Profile() {
    return (
        <section className="profile">
            <h1 className="profile__header">Привет, ты!</h1>
            <form>
                <div className="profile__fields">
                    <div className="profile__field">
                        <p className="profile__label">Имя</p>
                        <input className="profile__input" placeholder="подставить имя" />
                    </div>
                    <div className="profile__underline"></div>
                    <div className="profile__field">
                        <p className="profile__label">E-mail</p>
                        <input className="profile__input" placeholder="pochta@yandex.ru" />
                    </div>
                </div>
            </form>
            <div className="profile__links">
                <p className="profile__edit">Редактировать</p>

                <Link to={'/signin'} className="profile__exit">Выйти из аккаунта</Link>
            </div>
        </section >
    )
}