import Header from "../Header/Header";
import "./Profile.css";

export default function Profile(props) {
    return (
        <div className="profile">
            <Header isLogged={true}></Header>
            <div className="profile__content">
                <h2 className="profile__title">{`Привет, ${props.name}!`}</h2>
                <form className="profile__form">
                    <label className="profile__label">Имя
                        <input type="text" className="profile__field" value={props.name}></input>
                    </label>
                    <label className="profile__label">E-mail
                        <input type="text" className="profile__field" value={props.email}></input>
                    </label>
                </form>
                <button type="button" className="profile__button profile__edit-button">Редактировать</button>
                <button type="button" className="profile__button profile__exit-button">Выйти из аккаунта</button>
            </div>

        </div>
    )
}