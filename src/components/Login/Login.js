import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../utils/login";
import mainApi from "../../utils/MainApi";
import SignForm from "../SignForm/SignForm";
import "./Login.css";
import { useForm } from "react-hook-form";

export default function Login(props) {
    const [userPassword, setUserPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onBlur' });

    function onSubmit({email, password}) {
        login(email, password)
            .then((res) => {

                props.onLogin()
                    .then(() => {
                        navigate('/movies');
                    })
                    .catch((error) => {
                        setError(error);
                    })
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
            onSubmit={handleSubmit(onSubmit)}
            error={error}>
            <label className="sign__textbox">E-mail
                <input type="text" className="sign__field" placeholder="Введите e-mail" onChange={(e) => setUserEmail(e.target.value)}
                    {...register('email', {
                        required: 'Поле не может быть пустым.',
                        minLength: {
                            value: 2,
                            message: 'Поле должно содержать минимум 2 символа.'
                        },
                        pattern: {
                            value: /.+@.+\..+/i,
                            message: 'Невалидный E-mail.'
                        }
                    })}></input>
                    {errors?.email && <span className="sign__field-error">{errors?.email?.message || 'Поле заполнено неверно!'}</span>}
            </label>
            <label className="sign__textbox">Пароль
                <input type="password" className="sign__field" placeholder="Введите пароль" onChange={(e) => setUserPassword(e.target.value)}
                    {...register('password', {
                        required: 'Поле не может быть пустым.',
                        minLength: {
                            value: 2,
                            message: 'Поле должно содержать минимум 2 символа.'
                        }
                    })}></input>
                    {errors?.password && <span className="sign__field-error">{errors?.password?.message || 'Поле заполнено неверно!'}</span>}
            </label>

        </SignForm>
    )
}