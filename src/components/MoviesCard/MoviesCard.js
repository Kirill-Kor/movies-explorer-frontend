import "./MoviesCard.css";

export default function MoviesCard(props) {
    return (
        <div className="card">
            <img className="card__image" src={props.link} alt={props.name} />
            <p className="card__name">{props.name}</p>
            <p className="card__duration">{props.duration}</p>

            <label className="card__favorites">
                <input type="checkbox" ></input>
                <span></span>
            </label>
        </div>
    )
}