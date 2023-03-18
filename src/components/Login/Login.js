import SignForm from "../SignForm/SignForm";
import "./Login.css";

export default function Login() {
    return (
        <SignForm
        title="Рады видеть!"
        buttonText="Войти"
        tooltip="Ещё не зарегистрированы?"
        linkText="Регистрация"
        isLoginPage={true}>
            <label className="sign__textbox">E-mail
                <input type="text" className="sign__field" placeholder="Введите e-mail"></input>
            </label>
            <label className="sign__textbox">Пароль
                <input type="text" className="sign__field" placeholder="Введите пароль"></input>
            </label>

        </SignForm>
    )
}