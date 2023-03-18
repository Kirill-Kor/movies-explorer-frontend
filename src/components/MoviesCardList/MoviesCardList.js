import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
import cards from "../../utils/cards";

export default function MoviesCardList() {
    return (
        <section>
            <ul className="movies-list">
            {cards.map(card => <MoviesCard name={card.name} duration={card.duration} link={card.link}></MoviesCard>)}
            </ul>

        </section>
    )
}