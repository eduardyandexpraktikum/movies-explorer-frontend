import { Link } from "react-router-dom";

export function Login() {
    return (
        <section className="login">
            <Link to={'/'}><div className="login__logo" /></Link>
            <div className="login__mobilearea">
                <h1 className="login__header">Рады видеть!</h1>
                <form>
                    <p className="login__label">E-mail</p>
                    <input className="login__field" />
                    <p className="login__label">Пароль</p>
                    <input className="login__field" />
                    <button className="login__submit" type="submit">Войти</button>
                </form>
                <p className="login__to-registration">Ещё не зарегистрированы? <Link to={'/signup'} className={'login__to-registration-link'}>Регистрация</Link></p>
            </div>
        </section>
    )
}