import SectionTitle from "../SectionTitle/SectionTitle";
import "./AboutMe.css";
import avatar from "../../images/avatar.jpg";
import Portfolio from "../Portfolio/Portfolio";

export default function AboutMe() {
    return (
        <section className="aboutme" id="aboutme">
            <SectionTitle title="Студент" ></SectionTitle>
            <div className="aboutme__container">
                <h2 className="aboutme__name">Кирилл</h2>
                <p className="aboutme__profession">Фронтенд-разработчик, 26 лет</p>
                <p className="aboutme__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
                    С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                    начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <p className="aboutme__mark">Github</p>
                <img className="aboutme__avatar" src={avatar} alt="" />
            </div>
            <Portfolio></Portfolio>
        </section>
    )

}