import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi";
import { moviesFilter } from "../../utils/moviesFilter";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        mainApi.getMyMovies()
            .then(movies => {
                localStorage.setItem('savedMovies', JSON.stringify(movies));
                setMovies(moviesFilter(movies));
            });
    }, []);

    function loading() {
        setIsLoading(true);
    }

    function handleSubmit(keyword) {
        setMovies(moviesFilter(JSON.parse(localStorage.getItem('savedMovies')), keyword));
        setIsLoading(false);
    }

    function handleCheck() {
        setMovies(moviesFilter(JSON.parse(localStorage.getItem('savedMovies')), JSON.parse(localStorage.getItem('savedKeyword'))));
    }

    function handleDeleteCard(card) {

        mainApi.removeFromFavorite(card._id)
            .then((result) => {
                setMovies((movies) => movies = movies.filter(card => card._id !== result._id));
            })
            .catch((err) => console.log(err));
    }


    return (
        <div className="saved-movies-page">
            <Header isLogged={true}></Header>
            <main className="saved-movies-page__content">
                <SearchForm
                    onLoading={loading}
                    onSubmit={handleSubmit}
                    onCheck={handleCheck}
                    page={'savedMovies'}
                ></SearchForm>
                {isLoading
                    ? <Preloader />
                    : <MoviesCardList
                        movies={movies}
                        isSaved={true}
                        isSavedMoviesPage={true}
                        onDelete={handleDeleteCard}></MoviesCardList>
                }

            </main>
            <Footer></Footer>
        </div>
    )
}