import { Link } from "react-router-dom";

export function Register() {
    return (
        <section className="registration">
            <Link to={'/'}><div className="login__logo" /></Link>
            <div className="registration__mobilearea">
                <h1 className="registration__header">Добро пожаловать!</h1>
                <form>
                    <p className="registration__label">Имя</p>
                    <input className="registration__field" />
                    <p className="registration__label">E-mail</p>
                    <input className="registration__field" />
                    <p className="registration__label">Пароль</p>
                    <input className="registration__field" />
                    <p className="registration__error-label">Что-то пошло не так...</p>
                    <button className="registration__submit" type="submit">Зарегистрироваться</button>
                </form>
                <p className="registration__to-login">Уже зарегистрированы? <Link to={'/signin'} className={'registration__to-login-link'}>Войти</Link></p>
            </div>
        </section>
    )
}