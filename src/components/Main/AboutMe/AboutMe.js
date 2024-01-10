function AboutMe() {
    return (
        <article className="student">
            <h2 className="student__header headers-block">Студент</h2>
            <div className="student__underline"></div>
            <div className="student__infoblock">
                <img className="student__photo" src={require("../../../images/pic__COLOR_pic.jpg")} alt="Фото"></img>
                <div className="student__text">
                    <h4 className="student__name">Эдуард</h4>
                    <p className="student__prof">Фронтенд-разработчик, 31 год</p>
                    <p className="student__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="student__git">Github</p>
                </div>
            </div>
            <div className="student__portfolio">
                <h2 className="student__portfolio-header">Портфолио</h2>
                <div className="student__portfolio-linkbox">
                    <p className="student__portfolio-link">Статичный сайт</p>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Обложка" />
                </div>
                <div className="student__portfolio-underline"></div>
                <div className="student__portfolio-linkbox">
                    <p className="student__portfolio-link">Адаптивный сайт</p>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Обложка" />
                </div>
                <div className="student__portfolio-underline"></div>
                <p className="student__portfolio-link"></p>
                <div className="student__portfolio-linkbox">
                    <p className="student__portfolio-link">Одностраничное приложение</p>
                    <img className="student__arrow" src={require("../../../images/arrow.png")} alt="Обложка" />
                </div>
            </div>
        </article>
    )
}

export default AboutMe;