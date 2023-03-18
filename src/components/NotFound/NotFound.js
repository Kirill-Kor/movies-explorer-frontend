import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();
    return (
        <div className="notfound">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__subtitle">Страница не найдена</p>
            <a href="#" className="notfound__back">Назад</a>
        </div>
        
    )
}