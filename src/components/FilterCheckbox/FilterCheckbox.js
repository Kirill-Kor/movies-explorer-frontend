import { useEffect, useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {
    const [checked, setChecked] = useState(JSON.parse(localStorage.getItem('checked')))

    function handleChange() {
        setChecked(!checked);
        
        
    }

    useEffect(() => {
        if (localStorage.getItem('movies') || localStorage.getItem('savedMovies')) {
            localStorage.setItem('checked', JSON.stringify(checked));
            props.onCheck();
        }
        

    }, [checked]);

    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={handleChange}></input>
            <span className="checkbox__text">Короткометражки</span>
        </label>
    )
}