import { useState } from "react";
import login from "../../utils/login";
import mainApi from "../../utils/MainApi";
import SignForm from "../SignForm/SignForm";
import "./Login.css";

export default function Login(props) {
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');

    function handleSubmit() {
        login(userEmail, userPassword)
            .then((res) => {
                props.onLogin();
            })
            .catch((error) => {
                setError(error);
            })
    }

    

    return (
        <SignForm
        title="Рады видеть!"
        buttonText="Войти"
        tooltip="Ещё не зарегистрированы?"
        linkText="Регистрация"
        isLoginPage={true}
        onSubmit={ handleSubmit }
        error={error}>
            <label className="sign__textbox">E-mail
                <input type="text" className="sign__field" placeholder="Введите e-mail" onChange={(e) => setUserEmail(e.target.value)}></input>
            </label>
            <label className="sign__textbox">Пароль
                <input type="password" className="sign__field" placeholder="Введите пароль" onChange={(e) => setUserPassword(e.target.value)}></input>
            </label>

        </SignForm>
    )
}