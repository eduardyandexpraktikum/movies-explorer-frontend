import { useState } from "react";
import { Link } from "react-router-dom";

export function Register({ onSubmit }) {

    const [formValue, setFormValue] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValue);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    return (
        <section className="registration">
            <Link to={'/'}><div className="registration__logo" /></Link>
            <div className="registration__mobilearea">
                <h1 className="registration__header">Добро пожаловать!</h1>
                <form onSubmit={handleSubmit}>
                    <p className="registration__label">Имя</p>
                    <input className="registration__field" value={formValue.name} name="name" type="text" onChange={handleChange} />
                    <p className="registration__label">E-mail</p>
                    <input className="registration__field" value={formValue.email} name="email" type="email" onChange={handleChange} />
                    <p className="registration__label">Пароль</p>
                    <input className="registration__field" value={formValue.password} name="password" type="password" onChange={handleChange} />
                    <p className="registration__error-label">Что-то пошло не так...</p>
                    <button className="registration__submit" type="submit">Зарегистрироваться</button>
                </form>
                <p className="registration__to-login">Уже зарегистрированы? <Link to={'/signin'} className={'registration__to-login-link'}>Войти</Link></p>
            </div>
        </section>
    )
}