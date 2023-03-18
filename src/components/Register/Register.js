import SignForm from "../SignForm/SignForm";
import "./Register.css";

export default function Register() {
    return (
        <SignForm 
        title="Добро пожаловать!" 
        buttonText="Зарегистрироваться"
        tooltip="Уже зарегистрированы?"
        linkText="Войти">
            <label className="sign__textbox">Имя
                <input type="text" className="sign__field" placeholder="Введите имя"></input>
            </label>
            <label className="sign__textbox">E-mail
                <input type="text" className="sign__field" placeholder="Введите e-mail"></input>
            </label>
            <label className="sign__textbox">Пароль
                <input type="text" className="sign__field" placeholder="Введите пароль"></input>
            </label>

        </SignForm>
    )
}