import { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../../utils/login";
import mainApi from "../../utils/MainApi";
import SignForm from "../SignForm/SignForm";
import "./Register.css";
import { useForm } from "react-hook-form";


export default function Register(props) {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm({ mode: 'onBlur' });

    const navigate = useNavigate();

    function onSubmit({email, name, password}) {
        mainApi.register({ userEmail: email, userName: name, userPassword: password })
            .then((res) => {
                setSuccess('Вы успешно зарегистрировались!');
                setTimeout(() => {
                    login(email, password)
                        .then(() => {
                            props.onLogin();
                            navigate('/movies');
                        })
                        .catch((error) => {
                            console.log(error);
                        })

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
            onSubmit={handleSubmit(onSubmit)}
            error={error}
            success={success}>
            <label className="sign__textbox">Имя
                <input
                    type="text"
                    className="sign__field"
                    placeholder="Введите имя"
                    onChange={(e) => setUserName(e.target.value)}
                    {...register('name', {
                        required: 'Поле не может быть пустым.',
                        minLength: {
                            value: 2,
                            message: 'Поле должно содержать минимум 2 символа.'
                        }
                    })}></input>
                {errors?.name && <span className="sign__field-error">{errors?.name?.message || 'Поле заполнено неверно!'}</span>}
            </label>
            <label className="sign__textbox">E-mail
                <input
                    type="text"
                    className="sign__field"
                    placeholder="Введите e-mail"
                    onChange={(e) => setUserEmail(e.target.value)}
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
                    })}
                ></input>
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