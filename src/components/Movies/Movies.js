import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import getAllMovies from "../../utils/MoviesApi";
import { moviesFilter } from "../../utils/moviesFilter";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [myMovies, setMyMovies] = useState([]);
    const [cardsToRender, setCardsToRender] = useState(0);
    const [additionalCards, setAdditionalCards] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('movies')) {
            setMovies(moviesFilter(JSON.parse(localStorage.getItem('movies')), JSON.parse(localStorage.getItem('keyword'))));
        }
        
        updateMyMovies();

        setCardsToRender((v) => (window.innerWidth >= 1200 && 16)
            || (window.innerWidth >= 910 && 12)
            || (window.innerWidth >= 758 && 8)
            || 5)
    }, [])

    useEffect(() => {
        setAdditionalCards(0);

    }, [movies])

    function addCardsRow() {
        setAdditionalCards((v) => v + (window.innerWidth >= 758 ? cardsToRender / 4 : 2))
    }

    function onSubmit(keyword) {
        localStorage.setItem('keyword', JSON.stringify(keyword));
        if (!localStorage.getItem('movies')) {

            getAllMovies()
                .then((movies) => {
                    localStorage.setItem('movies', JSON.stringify(movies));
                    setMovies(moviesFilter(movies, keyword));
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }
        else {
            setMovies(moviesFilter(JSON.parse(localStorage.getItem('movies')), keyword));
            setIsLoading(false);
        }
    }

    function handleCheck(checked) {
        if (!localStorage.getItem('movies') && !localStorage.getItem('keyword')) return;
        localStorage.setItem('checked', JSON.stringify(checked));
        
        setMovies(moviesFilter(JSON.parse(localStorage.getItem('movies')), JSON.parse(localStorage.getItem('keyword'))));

    }

    function loading() {
        setIsLoading(true);
    }

    function handleAddToFavorites(card) {
        return mainApi.addToFavorite(card)
        .then(() => {
            updateMyMovies();
        })
        .catch((err) => console.log(err));
    }

    function handleDeleteFromFavorites(card) {
        const cardToDelete = myMovies.find(myCard => myCard.movieId === card.id);
    
        return mainApi.removeFromFavorite(cardToDelete._id)
            .then(() => {
                updateMyMovies();
            })
            .catch((error) => console.log(error))
    }

    function updateMyMovies() {
        mainApi.getMyMovies()
        .then((myMovies) => {
            setMyMovies(myMovies);
        })
        .catch((error) => console.log(error));
    }

    return (
        <div className="movies-page">
            <Header isLogged={true}></Header>
            <main className="movies-page__content">
                <SearchForm
                    onSubmit={onSubmit}
                    onLoading={loading}
                    onCheck={handleCheck}
                    page={'movies'}
                ></SearchForm>
                {isLoading
                    ? <Preloader />
                    : <>
                        <MoviesCardList 
                        movies={movies} 
                        moviesCount={cardsToRender + additionalCards} 
                        favorites={myMovies}
                        onAdd={handleAddToFavorites}
                        onDelete={handleDeleteFromFavorites}>

                        </MoviesCardList>
                        {movies.length > (cardsToRender + additionalCards) && <button type="button" className="movies-page-more-button" onClick={addCardsRow}>Ещё</button>}
                    </>
                }

            </main>
            <Footer></Footer>
        </div>
    )
}