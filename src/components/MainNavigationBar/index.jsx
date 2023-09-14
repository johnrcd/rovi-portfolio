
import { Outlet, Link } from "react-router-dom";

function MainNavigationBar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/debug">Debug</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default MainNavigationBar;