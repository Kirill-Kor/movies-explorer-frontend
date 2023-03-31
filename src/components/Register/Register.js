import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mainApi from "../../utils/MainApi";
import SignForm from "../SignForm/SignForm";
import "./Register.css";

export default function Register() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();

    function handleSubmit(e) {      
        mainApi.register({userEmail, userName, userPassword})
            .then((res) => {
                setSuccess('Вы успешно зарегистрировались!');
                setTimeout(() => {
                    navigate('/signin');
                }, 3000);
            })
            .catch((err) => {
                setError('Что-то пошло не так :(');
            })

    }

    return (
        <SignForm
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            tooltip="Уже зарегистрированы?"
            linkText="Войти"
            onSubmit={handleSubmit}
            error={error}
            success={success}>
            <label className="sign__textbox">Имя
                <input type="text" className="sign__field" placeholder="Введите имя" onChange={(e) => setUserName(e.target.value)}></input>
            </label>
            <label className="sign__textbox">E-mail
                <input type="text" className="sign__field" placeholder="Введите e-mail" onChange={(e) => setUserEmail(e.target.value)}></input>
            </label>
            <label className="sign__textbox">Пароль
                <input type="password" className="sign__field" placeholder="Введите пароль" onChange={(e) => setUserPassword(e.target.value)}></input>
            </label>

        </SignForm>
    )
}