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
            props.onAdd(props.card)
                .then(() => {
                    setIsChecked(true);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            props.onDelete(props.card)
                .then(() => {
                    setIsChecked(false)
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }

    function handleDeleteButton(e) {
        e.preventDefault();
        props.onDelete(props.card);
    }


    return (
        <li className="card-item">
            <a href={props.trailer} className="card" target="_blank" rel="noreferrer">
                <img className="card__image" src={props.link} alt={props.name} />
                <p className="card__name">{props.name}</p>
                <p className="card__duration">{Math.floor(props.duration / 60)}:{String(props.duration % 60).length === 1 ? `0${props.duration % 60}` : props.duration % 60}</p>

                {!props.isSavedMoviesPage
                    ? <label className="card__favorites">
                        <input type="checkbox" onChange={(e) => handleChange(e)} checked={isChecked}></input>
                        <span></span>
                    </label>
                    : <button type="button" className="card__delete" onClick={(e) => handleDeleteButton(e)}></button>}
            </a>
        </li>
    )
}