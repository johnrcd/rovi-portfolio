import MainNavigationBar from "../../components/MainNavigationBar";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

function HomePage(){
    return(
        <>
            <MainNavigationBar />
            <div>
                <div className="sticky_note_cyan sticky_note">
                    <h2>Hey! I'm Rovi Decena.</h2>
                    <hr />
                    <p>I write code for apps, website, and games.</p>
                    <p>Also I make music, sometimes.</p>
                </div>
                <div className="sticky_note_cyan sticky_note">
                    <h2>about_me.txt</h2>
                    <hr/>
                    <p>
                        My entryway into programming began with the Interactive Digital Media program in my high school, where I tinkered in JavaScript and Unity to create small games. Eventually, I found myself working on projects on my own, and then I before I knew it, I was hooked.
                    </p>
                    <br />
                    <p>
                        Nowadays, my programming is a lot more general. I'm currently in the Business Information Technology program at Red River College Polytechnic, where I'm learning about the fundamentals of IT and software development.
                    </p>
                </div>
                <div className="sticky_note_cyan sticky_note">
                    <h2>more info</h2>
                    <hr/>
                    <p>If you're interested in seeing some of the work I've done,</p>
                    <Link to="/projects">Check it out here!</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage;