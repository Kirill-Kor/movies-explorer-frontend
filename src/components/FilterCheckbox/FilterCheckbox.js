import { useEffect, useState } from "react";
import "./FilterCheckbox.css";

export default function FilterCheckbox(props) {
    const [checked, setChecked] = useState(props.page ==='movies' ? JSON.parse(localStorage.getItem('checked')) : true);

    useEffect(() => {
        props.onCheck(checked);

    }, [checked]);

    function handleChange() {
        setChecked(!checked);

    }

    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={handleChange}></input>
            <span className="checkbox__text">Короткометражки</span>
        </label>
    )
}