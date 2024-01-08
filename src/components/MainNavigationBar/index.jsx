//import { Outlet } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
//import { HashLink as Link } from 'react-router-hash-link';
import "./styles.css";

function MainNavigationBar(){
    return(
        <>
            <nav className="main_navigation_bar">
                <ul className="main_navigation_bar_list">
                    <li><Link to="/" className="main_navigation_link">home</Link></li>
                    <li><Link to="/" className="main_navigation_link">about</Link></li>
                    <li><Link to="/" className="main_navigation_link">projects</Link></li>
                    <li><Link to="/" className="main_navigation_link">contact</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;