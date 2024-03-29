function AboutMe() {
    return (
        <section id="student" className="student body">
            <h2 className="student__header headers-block">Студент</h2>
            <div className="student__infoblock">
                <img className="student__photo" src={require("../../../images/pic__COLOR_pic.jpg")} alt="Фото"></img>
                <div className="student__text">
                    <h3 className="student__name">Эдуард</h3>
                    <p className="student__prof">Фронтенд-разработчик, 31 год</p>
                    <p className="student__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <a href="https://github.com/eduardyandexpraktikum" target="_blank" rel="noreferrer" className="student__git">Github</a>
                </div>
            </div>
            <h2 className="student__portfolio-header">Портфолио</h2>
            <ul className="student__portfolio">
                <li className="student__portfolio-linkbox">
                    <a href="https://github.com/eduardyandexpraktikum/how-to-learn" target="_blank" rel="noreferrer" className="student__portfolio-link">Статичный сайт</a>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Стрелка" />
                </li>
                <li className="student__portfolio-linkbox">
                    <a href="https://github.com/eduardyandexpraktikum/russian-travel" target="_blank" rel="noreferrer" className="student__portfolio-link">Адаптивный сайт</a>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Стрелка" />
                </li>
                <li className="student__portfolio-linkbox">
                    <a href="https://github.com/eduardyandexpraktikum/react-mesto-api-full-gha" target="_blank" rel="noreferrer" className="student__portfolio-link">Одностраничное приложение</a>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Стрелка" />
                </li>
            </ul>
        </section>
    )
}

export default AboutMe;