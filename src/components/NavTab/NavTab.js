import './NavTab.css';

export default function NavTab() {
    return (
        <nav>
            <ul className="navtab">
                <li><a className="navtab__item" href="#about">О проекте</a></li>
                <li><a className="navtab__item" href="#techs">Технологии</a></li>
                <li><a className="navtab__item" href="#aboutme">Студент</a></li>
            </ul>
        
        </nav>
    )
}