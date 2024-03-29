import "./Footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer__ref">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__info">
                <p className="footer__text footer__year">&copy; {new Date().getFullYear()}</p>
                <nav className="footer__links">
                    <a className="footer__text footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
                    <a className="footer__text footer__link" href="https://github.com/Kirill-Kor" target="_blank" rel="noreferrer">Github</a>
                </nav>
            </div>
        </footer>
    )
}