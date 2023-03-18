import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

export default function SavedMovies() {
    return (
        <div className="saved-movies-page">
            <Header isLogged={true}></Header>
            <main className="saved-movies-page__content">
                <SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList>
            </main>
            <Footer></Footer>
        </div>
    )
}