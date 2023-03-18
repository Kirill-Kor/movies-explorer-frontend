import "./Portfolio.css";

export default function Portfolio() {
    return (
        <div className="portfolio">
            <p className="portfolio__title">Портфолио</p>
            <ul className="portfolio__list">
                <li >
                    <a href="https://kirill-kor.github.io/how-to-learn/" className="portfolio__item" target="_blank" rel="noreferrer">Статичный сайт<div className="portfolio__link-icon"></div></a>
                </li>
                <li>
                    <a href="https://kirill-kor.github.io/russian-travel/" className="portfolio__item" target="_blank" rel="noreferrer">Адаптивный сайт<div className="portfolio__link-icon"></div></a>

                </li>
                <li>
                    <a href="http://kirkors.mesto.nomoredomains.work/" className="portfolio__item" target="_blank" rel="noreferrer">Одностраничное приложение<div className="portfolio__link-icon"></div></a>

                </li>

            </ul>
        </div>
    )
}