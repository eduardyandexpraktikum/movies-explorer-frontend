function NavTab() {
    return (
        <section className="hero">
            <h1 className="hero__phrase">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <nav className="hero__buttons">
                <button className="hero__button" type="button">
                    <a className="hero__buttonlinks" href="#about">О проекте</a>
                </button>
                <button className="hero__button" type="button">
                    <a className="hero__buttonlinks" href="#tech">Технологии</a>
                </button>
                <button className="hero__button" type="button">
                    <a className="hero__buttonlinks" href="#student">Студент</a>
                </button>
            </nav>
        </section>
    )
}

export default NavTab;