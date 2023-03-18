import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuButton from '../MenuButton/MenuButton';
import Navigation from '../Navigation/Navigation';
import './Header.css';

export default function Header({ isLogged }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleSignup() {
        navigate('/signup');

    }

    function handleSignin() {
        navigate('/signin');
    }

    function handleMenuClick() {
        setIsMenuOpen((state => !state));
        console.log(isMenuOpen);

    }

    return (
        <header className="header">
            <Link to="/" className="header__logo"></Link>
            {isLogged ?
                <>
                    <Navigation isOpen={isMenuOpen}></Navigation>
                    <MenuButton handleClick={handleMenuClick}></MenuButton>
                </>
                : <div className="header__login-container">
                    <button className="header__signup-button" type="button" onClick={handleSignup}>Регистрация</button>
                    <button className="header__signin-button" type="button" onClick={handleSignin}>Войти</button>
                </div>
            }
        </header>
    )
}