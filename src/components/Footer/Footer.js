function Footer() {
    return (
        <footer className="footer">
            <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__underline"></div>
            <div className="footer__credits">
                <p className="footer__year">© 2023</p>
                <div className="footer__links">
                    <a href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">Яндекс.Практикум</a>
                    <a href="https://github.com/eduardyandexpraktikum" target="_blank" rel="noreferrer" className="footer__link">Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;