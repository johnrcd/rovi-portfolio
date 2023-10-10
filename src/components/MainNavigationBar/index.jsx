import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function MainNavigationBar(){
    return(
        <>
            <nav className="mainNavigationBar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/debug">Debug</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/archive">Archive</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;