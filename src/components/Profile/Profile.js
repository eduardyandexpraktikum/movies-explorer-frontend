export function Profile() {
    return (
        <article className="profile">
            <h5 className="profile__header">Привет, "подставить имя"!</h5>
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
            <div className="profile__links">
                <p className="profile__edit">Редактировать</p>
                <p className="profile__exit">Выйти из аккаунта</p>
            </div>
        </article>
    )
}