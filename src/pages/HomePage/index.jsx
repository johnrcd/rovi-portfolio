import MainNavigationBar from "../../components/MainNavigationBar";
import { Outlet, Link } from "react-router-dom";

function HomePage(){
    return(
        <>
            <MainNavigationBar />
            <div>
                <p>Hi, my name is</p>
                <h1>Rovi Decena</h1>
                <h2>I write code for apps, websites, and games.</h2>
                <h3>Also I make music, sometimes.</h3>
                <p>
                    Currently, I'm taking the Business Information Technology 
                    course at Red River Polytech.
                </p>
            </div>
            <div>
                <p>Interested in seeing some of my work?</p>
                <Link to="/projects">Check it out here.</Link>
            </div>
        </>
    )
}

export default HomePage;