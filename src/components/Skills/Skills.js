import "./Skills.css";

export default function Skills(props) {
    return (
        <ul className="skills">
            { props.skills.map((skill, index) => (
                <li className="skills__item" key={ index }>{ skill }</li>
            ))}
        </ul>
    )

}