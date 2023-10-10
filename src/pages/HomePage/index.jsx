import MainNavigationBar from "../../components/MainNavigationBar";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function HomePage(){
    return(
        <>
            <MainNavigationBar />
            <div className="titleCardWrapper">
            <section className="titleCard">
                <article className="main">
                    <p>Hey, my name is</p>
                    <h1>Rovi Decena</h1>
                    <h2>I write code for apps, websites, and games.</h2>
                    <h3>Also I make music, sometimes.</h3>
                </article>
                <article className="bio">
                    <p>
                        I'm a software developer with a focus on application
                        and game development. I first got into programming
                        through an Interactive Digital Media program.
                    </p>
                    <br/>
                    <p>
                        Currently, I'm taking the Business Information
                        Technology program over at Red River College
                        Polytechic.
                    </p>
                </article>
                <article className="showcase">
                    <p>Interested in seeing some of my work?</p>
                    <Link to="/projects">Check it out here.</Link>
                </article>
            </section>
            </div>
        </>
    )
}

export default HomePage;