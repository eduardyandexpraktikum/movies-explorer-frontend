import { Link } from "react-router-dom";
import { useFormValidation } from "../../utils/Validation";
import { useEffect } from "react";

export function Login({ onSubmit }) {

    const { values, setValues, handleChange, errors, isValid, formReset } = useFormValidation();

    useEffect(() => {
        formReset();
    }, [formReset]);

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit({
            email: values.email,
            password: values.password,
        });
    }

    return (
        <section className="login">
            <Link to={'/'}><div className="login__logo" /></Link>
            <div className="login__mobilearea">
                <h1 className="login__header">Рады видеть!</h1>
                <form onSubmit={handleSubmit} noValidate>
                    <p className="login__label">E-mail</p>
                    <input className="login__field" value={values.email || ''} name="email" onChange={handleChange} type="email" />
                    <span className="registration__error-label">{errors.email || ""}</span>
                    <p className="login__label">Пароль</p>
                    <input className="login__field" value={values.password || ''} name="password" onChange={handleChange} type="password" />
                    <span className="registration__error-label">{errors.password || ""}</span>
                    <button className="login__submit" type="submit" disabled={!isValid}>Войти</button>
                </form>
                <p className="login__to-registration">Ещё не зарегистрированы? <Link to={'/signup'} className={'login__to-registration-link'}>Регистрация</Link></p>
            </div>
        </section>
    )
}