import SectionTitle from "../SectionTitle/SectionTitle";
import Skills from "../Skills/Skills";
import "./Techs.css";

const skills = ["HTML", "CSS", "JS", "React", "Git", "Express.js", "mongoDB"];


export default function Techs() {

    return (
        <section className="techs" id="techs">
            <SectionTitle title="Технологии"></SectionTitle>
            <h2 className="techs__title">7 технологий</h2>
            <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <Skills skills={skills}></Skills>
        </section>
    )
}