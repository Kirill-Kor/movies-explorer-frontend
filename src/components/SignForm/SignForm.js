import { Link } from "react-router-dom";
import "./SignForm.css";

export default function SignForm(props) {
    return (
        <div className="sign">
            <Link to="/" className="sign__logo"></Link>
            <h2 className="sign__title">{props.title}</h2>
            <form className="sign__form">
                {props.children}
            </form>
            <button type="button" className="sign__button">{props.buttonText}</button>
            <p className="sign__tooltip">{props.tooltip} <Link to={props.isLoginPage ? "/signup" : "/signin"} className="sign__link">{props.linkText}</Link></p>
            
        </div>
    )
}