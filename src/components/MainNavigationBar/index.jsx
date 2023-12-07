import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function MainNavigationBar(){
    return(
        <>
            <nav className="main_navigation_bar">
                <ul className="main_navigation_bar_list">
                    <li><Link to="/"         className="main_navigation_link">home</Link></li>
                    <li><Link to="/debug"    className="main_navigation_link">debug</Link></li>
                    <li><Link to="/projects" className="main_navigation_link">projects</Link></li>
                    <li><Link to="/archive"  className="main_navigation_link">archive</Link></li>
                    <li><Link to="/contact"  className="main_navigation_link">contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;