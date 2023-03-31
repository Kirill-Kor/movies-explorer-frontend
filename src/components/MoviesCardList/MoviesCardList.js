import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";
// import cards from "../../utils/cards";

export default function MoviesCardList(props) {
    const favoritesIds = props.favorites ? props.favorites.map(movie => movie.movieId) : [];
    
    

    return (
        <section>
            {props.movies &&
                <ul className="movies-list">
                    {props.movies.slice(0, props.moviesCount).map(card =>
                        <MoviesCard 
                        key={props.isSaved ? card.movieId : card.id} 
                        name={card.nameRU} 
                        duration={card.duration}
                        trailer={card.trailerLink}
                        card={card}        
                        link={props.isSaved ? card.image : `https://api.nomoreparties.co/${card.image.url}`} 
                        favorites={props.favorites}
                        isSaved={props.isSaved ? props.isSaved
                                : favoritesIds.includes(card.id)}></MoviesCard>)}
                </ul>
            }

        </section>
    )
}