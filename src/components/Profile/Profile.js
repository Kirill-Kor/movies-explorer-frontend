import { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import Header from "../Header/Header";
import "./Profile.css";

export default function Profile(props) {
    const user = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setName(user.name);
        setEmail(user.email);

    }, [user])

    useEffect(() => {
        if (name !== user.name && name) setButtonDisabled(false)
        else setButtonDisabled(true);

    }, [name])

    useEffect(() => {
        if (email !== user.email && email) setButtonDisabled(false)
        else setButtonDisabled(true);

    }, [email])

    function handleEdit() {
        if (name !== user.name || email !== user.email) {
            props.onEdit(name, email)
            .then((res) => {
                setSuccess(true);

            })
            .catch((error) => {
                console.log(error);
            })

            
        }
    }

    return (
        <div className="profile">
            <Header isLogged={true}></Header>
            <div className="profile__content">
                <h2 className="profile__title">{`Привет, ${user.name}!`}</h2>
                <form className="profile__form">
                    <label className="profile__label">Имя
                        <input type="text" className="profile__field" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>
                    <label className="profile__label">E-mail
                        <input type="text" className="profile__field" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </label>
                    
                </form>
                <span className={`profile__success ${success ? 'profile__success_visible' : ''}`}>Сохранено!</span>
                <button type="button" className={`profile__button profile__edit-button ${buttonDisabled && 'profile__button_disabled'}`} onClick={handleEdit} disabled={buttonDisabled}>Редактировать</button>
                <button type="button" className="profile__button profile__exit-button" onClick={props.onLogout}>Выйти из аккаунта</button>
            </div>

        </div>
    )
}