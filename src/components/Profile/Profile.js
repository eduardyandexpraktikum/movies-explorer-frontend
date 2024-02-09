import { Link } from "react-router-dom";
import Header from "../Header/Header";
// import { useContext } from "react";

export function Profile({ loggedIn, handleLogout, handlePatchMe, currentUser }) {

    console.log(currentUser);

    function handleSubmitPatch(e) {
        e.preventDefault();
        handlePatchMe({
            name: currentUser.name,
            email: currentUser.email
        });
    }

    return (
        <>
            <Header loggedIn={loggedIn} />
            <main>
                <section className="profile">
                    <h1 className="profile__header">Привет, {currentUser.name}</h1>
                    <form onClick={handleSubmitPatch} noValidate>
                        <div className="profile__fields">
                            <div className="profile__field">
                                <p className="profile__label">Имя</p>
                                <input className="profile__input" value={currentUser.name} />
                            </div>
                            <div className="profile__underline"></div>
                            <div className="profile__field">
                                <p className="profile__label">E-mail</p>
                                <input className="profile__input" value={currentUser.email} />
                            </div>
                        </div>
                    </form>
                    <div className="profile__links">
                        <p className="profile__edit">Редактировать</p>

                        <Link to={'/'} className="profile__exit" onClick={handleLogout}>Выйти из аккаунта</Link>
                    </div>
                </section >
            </main>
        </>
    )
}