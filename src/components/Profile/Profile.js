import { Link } from "react-router-dom";
import Header from "../Header/Header";
import { useState, useEffect } from "react";
import { useFormValidation } from "../../utils/Validation";

export function Profile({ loggedIn, handleLogout, handlePatchMe, currentUser }) {

    const { values, setValues, handleChange, errors, isValid, formReset } = useFormValidation();

    useEffect(() => {
        formReset({
            name: currentUser.name,
            email: currentUser.email
        });
    }, [formReset, currentUser]);

    const handleSubmitPatch = (e) => {
        e.preventDefault();
        handlePatchMe({
            name: values.name,
            email: values.email,
        });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <section className="profile">
                    <h1 className="profile__header">Привет, {currentUser.name}</h1>
                    <form onSubmit={handleSubmitPatch} noValidate>
                        <div className="profile__fields">
                            <div className="profile__field">
                                <p className="profile__label">Имя</p>
                                <input
                                    disabled={false}
                                    type="text"
                                    name="name"
                                    minLength="2"
                                    maxLength="30"
                                    value={values.name || ""}
                                    required
                                    id="name"
                                    className="profile__input"
                                    onChange={handleChange} />
                            </div>
                            <div className="profile__underline"></div>
                            <div className="profile__field">
                                <p className="profile__label">E-mail</p>
                                <input className="profile__input" name="email" value={values.email || ""} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="profile__links">
                            <button className="profile__edit" type="submit">Редактировать</button>

                            <Link to={'/'} className="profile__exit" onClick={handleLogout}>Выйти из аккаунта</Link>
                        </div>
                    </form>
                </section >
            </main>
        </>
    )
}