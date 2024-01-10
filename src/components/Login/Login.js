import { Link } from "react-router-dom";

export function Login() {
    return (
        <article className="login">
            <Link to={'/'}><div className="login__logo" /></Link>
            <h5 className="login__header">Рады видеть!</h5>
            <p className="login__label">E-mail</p>
            <input className="login__field" />
            <p className="login__label">Пароль</p>
            <input className="login__field" />
            <button className="login__submit">Войти</button>
            <p className="login__to-registration">Ещё не зарегистрированы? <Link to={'/signup'} className={'login__to-registration-link'}>Регистрация</Link></p>
        </article>
    )
}