import { Link } from "react-router-dom";

export function Register() {
    return (
        <article className="registration">
            <Link to={'/'}><div className="login__logo" /></Link>
            <h5 className="registration__header">Добро пожаловать!</h5>
            <p className="registration__label">Имя</p>
            <input className="registration__field" />
            <p className="registration__label">E-mail</p>
            <input className="registration__field" />
            <p className="registration__label">Пароль</p>
            <input className="registration__field" />
            <p className="registration__error-label">Что-то пошло не так...</p>
            <button className="registration__submit">Зарегистрироваться</button>
            <p className="registration__to-login">Уже зарегистрированы? <Link to={'/signin'} className={'registration__to-login-link'}>Войти</Link></p>

        </article>
    )
}