import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import "./MoviesCard.css";

export default function MoviesCard(props) {
    const [isChecked, setIsChecked] = useState(false);
    
    useEffect(() => {
        setIsChecked(() => props.isSaved);
    }, [props.isSaved])

    function handleChange(e) {
        if (e.target.checked) {
            mainApi.addToFavorite(props.card)
                .then((result) => {
                    console.log(result);
                    setIsChecked(true);
                })
                .catch((err) => console.log(err));
        }
        else {
            const cardId = props.card._id ? props.card._id : props.favorites.find((movie) => movie.movieId === props.card.id)._id;
            mainApi.removeFromFavorite(cardId)
                .then((result) => {
                    console.log(result);
                    setIsChecked(false);
                })
                .catch((err) => console.log(err));
        }

    }

    return (
        <li className="card-item">
            <a href={props.trailer} className="card" target="_blank" rel="noreferrer">
            <img className="card__image" src={props.link} alt={props.name} />
            <p className="card__name">{props.name}</p>
            <p className="card__duration">{Math.floor(props.duration / 60)}:{String(props.duration % 60).length === 1 ? `0${props.duration % 60}` : props.duration % 60}</p>

            <label className="card__favorites">
                <input type="checkbox" onChange={(e) => handleChange(e)} checked={isChecked}></input>
                <span></span>
            </label>
            </a>
        </li>
    )
}