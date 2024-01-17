function NavTab() {
    return (
        <section className="hero">
            <h1 className="hero__phrase">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <ul className="hero__buttons">
                <li className="hero__button" >
                    <a className="hero__buttonlinks" href="#about">О проекте</a>
                </li>
                <li className="hero__button" >
                    <a className="hero__buttonlinks" href="#tech">Технологии</a>
                </li>
                <li className="hero__button" >
                    <a className="hero__buttonlinks" href="#student">Студент</a>
                </li>
            </ul>
        </section>
    )
}

export default NavTab;