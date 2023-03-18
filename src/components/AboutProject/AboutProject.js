import "./AboutProject.css";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function AboutProject() {
    return (
        <section className="about" id="about">
            <SectionTitle title="О проекте"></SectionTitle>
            <div className="about__details">
                <div className="about__detail">
                    <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                    <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className="about__detail">
                    <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about__timeline">
                <p className="about__timeline-header about__timeline-header_style_green">1 неделя</p>
                <p className="about__timeline-header">4 недели</p>
                <p className="about__timeline-row">Back-end</p>
                <p className="about__timeline-row">Front-end</p>
            </div>
        </section>
    )
}