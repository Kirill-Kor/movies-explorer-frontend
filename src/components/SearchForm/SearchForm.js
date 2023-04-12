import "./SearchForm.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useEffect, useState } from "react";

export default function SearchForm(props) {
    const [keyword, setKeyword] = useState('');

    useEffect(() => {

        if (props.page === 'movies' && localStorage.getItem('keyword')) {
            setKeyword(JSON.parse(localStorage.getItem('keyword')));
        }
        else {
            setKeyword('');
        }
    }, []);

    function search(e) {
        e.preventDefault();
        if (props.page === 'movies') {
            if (!keyword) return;
        }

        props.onLoading();
        props.onSubmit(keyword);

    }

    function handleCheck(checked) {
        props.onCheck(checked);
    }

    return (
        <div className="search">
            <form className="search__form" onSubmit={search}>
                <input type="text" className="search__bar" placeholder="Фильм" onChange={(e) => setKeyword(e.target.value)} value={keyword} required></input>
                <button type="submit" className="search__button"></button>
            </form>
            <FilterCheckbox search={search} onCheck={handleCheck} page={props.page}></FilterCheckbox>
        </div>
    )
}