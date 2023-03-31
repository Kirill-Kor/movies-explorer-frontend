import "./NotFound.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1);
    }
    return (
        <div className="notfound">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__subtitle">Страница не найдена</p>
            <button type="button" className="notfound__back" onClick={goBack}>Назад</button>
        </div>
        
    )
}