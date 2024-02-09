import { Link } from "react-router-dom";
import { useState } from "react";

export function Login({ onSubmit }) {

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(formValue)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <section className="login">
            <Link to={'/'}><div className="login__logo" /></Link>
            <div className="login__mobilearea">
                <h1 className="login__header">Рады видеть!</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <p className="login__label">E-mail</p>
                    <input className="login__field" value={formValue.email} name="email" onChange={handleChange} type="email" />
                    <span className="registration__error-label">Что-то так...</span>
                    <p className="login__label">Пароль</p>
                    <input className="login__field" value={formValue.password} name="password" onChange={handleChange} type="password" />
                    <span className="registration__error-label">Что-то пошло не так...</span>
                    <button className="login__submit" type="submit">Войти</button>
                </form>
                <p className="login__to-registration">Ещё не зарегистрированы? <Link to={'/signup'} className={'login__to-registration-link'}>Регистрация</Link></p>
            </div>
        </section>
    )
}