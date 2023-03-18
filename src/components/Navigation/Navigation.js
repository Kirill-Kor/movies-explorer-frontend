import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation(props) {
    return (
        <div className={`navigation-container ${props.isOpen ? 'navigation-container_opened' : ''}`}>
            <nav className={`navigation ${props.isOpen ? 'navigation_visible' : ''}`}>
                <ul className="navigation__list">
                    <li><NavLink to="/" className={({ isActive }) => `navigation__item ${!props.isOpen ? 'navigation__item_hidden' : ''} ${isActive ? 'navigation__item_active' : ''}`} >Домой</NavLink></li>
                    <li><NavLink to="/movies" className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item_active' : ''}`} >Фильмы</NavLink></li>
                    <li><NavLink to="/saved-movies" className={({ isActive }) => `navigation__item ${isActive ? 'navigation__item_active' : ''}`}>Сохранённые фильмы</NavLink></li>
                </ul>
                <NavLink to="/profile" className={({ isActive }) => `navigation__account-button ${isActive ? 'navigation__account-button_active' : ''}`}>Аккаунт</NavLink>
            </nav>
        </div>
    )
}