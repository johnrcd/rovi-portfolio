import "./styles.css";

/**
 * Displays a list of technical skills in a horizontal line.
 * 
 * @param {Array<string>} skills The list of skills to display.
 */
export default function TechnicalSkills({skills}){
    const listElements =
        skills.map(
            (data, i) =>
            <li key={"technical_skills_list_" + i}>{data}</li>
        );

    return (
        <div className="technical_skills">
            <ul className="technical_skills_list">
                {listElements}
            </ul>
        </div>
    )
}