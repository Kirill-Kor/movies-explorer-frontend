import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

export default function Movies() {
    return (
        <div className="movies-page">
            <Header isLogged={true}></Header>
            <div className="movies-page__content">
                <SearchForm></SearchForm>
                <MoviesCardList></MoviesCardList>
                <button type="button" className="movies-page-more-button">Ещё</button>
            </div>
            <Footer></Footer>
        </div>
    )
}