import { useState } from "react";
import "./MenuButton.css";


export default function MenuButton(props) {
    const [isActive, setIsActive] = useState(false);

    function handleClick() {
        setIsActive((state => !state));
        props.handleClick();
    }



    return (
        <button type="button" onClick={handleClick} className={`menu-button ${isActive ? 'menu-button_active' : ''}`}>
            <span className="menu-button__part"></span>
            <span className="menu-button__part" ></span>
            <span className="menu-button__part" ></span>
        </button>
    )
}