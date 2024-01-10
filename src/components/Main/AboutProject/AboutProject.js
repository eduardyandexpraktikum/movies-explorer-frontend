function AboutProject() {
    return (
        <article className="about">
            <h2 className="about__header headers-block">О проекте</h2>
            <div className="about__underline"></div>
            <div className="about__columns">
                <div className="about__column">
                    <h3 className="about__columnheader">Дипломный проект включал 5 этапов</h3>
                    <p className="about__columntext">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div className="about__column">
                    <h3 className="about__columnheader">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__columntext">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,
                        чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__visualtrack">
                <div className="about__oneweekbox about__grid-item">1 неделя</div>
                <div className="about__fourweekbox about__grid-item">4 недели</div>
                <div className="about__description about__grid-item">Back-end</div>
                <div className="about__description about__grid-item">Front-end</div>
            </div>
        </article>
    )
}
export default AboutProject;