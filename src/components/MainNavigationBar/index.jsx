import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function MainNavigationBar(){
    return(
        <>
            <nav className="main_navigation_bar">
                <ul className="main_navigation_bar_list">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/debug">debug</Link></li>
                    <li><Link to="/projects">projects</Link></li>
                    <li><Link to="/archive">archive</Link></li>
                    <li><Link to="/contact">contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;