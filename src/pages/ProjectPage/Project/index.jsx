import { Outlet, Link } from "react-router-dom";

function Project({name, description, tags, link}){
    return(
        <>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <ul>{
                    tags.map(
                        tag =>
                        <li>{tag}</li>
                    )
                }
                </ul>
                <Link to={link}></Link>
            </div>
        </>
    )
}

export default Project;