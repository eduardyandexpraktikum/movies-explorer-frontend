import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormValidation } from "../../utils/Validation";

export function Register({ onSubmit }) {

    const { values, setValues, handleChange, errors, isValid, formReset } = useFormValidation();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            name: values.name,
            email: values.email,
            password: values.password,
        });
    }

    return (
        <section className="registration">
            <Link to={'/'}><div className="registration__logo" /></Link>
            <div className="registration__mobilearea">
                <h1 className="registration__header">Добро пожаловать!</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <p className="registration__label">Имя</p>
                    <input className="registration__field" value={values.name} name="name" type="text" onChange={handleChange} />
                    <span className="registration__error-label">{errors.name || ""}</span>
                    <p className="registration__label">E-mail</p>
                    <input className="registration__field" value={values.email} name="email" type="email" onChange={handleChange} />
                    <span className="registration__error-label">{errors.email || ""}</span>
                    <p className="registration__label">Пароль</p>
                    <input className="registration__field" value={values.password} name="password" type="password" onChange={handleChange} />
                    <span className="registration__error-label">{errors.password || ""}</span>
                    <button className="registration__submit" type="submit" disabled={!isValid}>Зарегистрироваться</button>
                </form>
                <p className="registration__to-login">Уже зарегистрированы? <Link to={'/signin'} className={'registration__to-login-link'}>Войти</Link></p>
            </div>
        </section>
    )
}