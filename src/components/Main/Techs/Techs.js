function Techs() {
    return (
        <article className="tech">
            <h2 className="tech__header headers-block">Технологии</h2>
            <div className="about__underline"></div>
            <h4 className="tech__phrase">7 технологий</h4>
            <p className="tech__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном
                проекте.</p>
            <div className="tech__buttons">
                <div className="tech__button">HTML</div>
                <div className="tech__button">CSS</div>
                <div className="tech__button">JS</div>
                <div className="tech__button">React</div>
                <div className="tech__button">Git</div>
                <div className="tech__button">Express.js</div>
                <div className="tech__button">mongoDB</div>
            </div>
        </article>
    )
}

export default Techs;