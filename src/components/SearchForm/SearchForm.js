import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <div className="search">
            <form className="search__form">
                <input type="text" className="search__bar" placeholder="Фильм" required></input>
                <button type="submit" className="search__button"></button>
            </form>
            <FilterCheckbox></FilterCheckbox>
        </div>
    )
}