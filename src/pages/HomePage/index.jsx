import MainNavigationBar from "../../components/MainNavigationBar";
import { Outlet, Link } from "react-router-dom";
import Footer from "../../components/Footer";
import FirstWindow from "./FirstWindow";
import "./styles.css";

function HomePage(){
    return(
        <div className="home_page">
            <div>
                <MainNavigationBar />
                <FirstWindow />
            </div>
            <div className="window_content">
                <div>
                    <h2>about me</h2>
                    <hr/>
                    <p>
                        I'm a programmer with a passion for application and game development. My interest began through the Interactive Digital Media program offered at my high school, where my first projects were games built in JavaScript. I started to tinker around with assignments to see how they worked, made some games of my own, and before I knew it, I was hooked.
                    </p>
                    <br />
                    <p>
                        Nowadays, my programming is significantly less game-oriented. I'm currently in the Business Information Technology program at Red River College Polytechnic, where I'm learning about the fundamentals of IT and software development.
                    </p>
                </div>
            </div>
            <div className="window_content">
                <div>
                    <h2>work</h2>
                    <hr/>
                    <p>If you're interested in seeing some of the work I've done,</p>
                    <Link to="/projects">Check it out here!</Link>
                </div>
            </div>
            <div className="bottom_window_content">
                <div>
                    <h2>contact</h2>
                    <hr/>
                    {/* funky hack because inline-block auto-adds a space betwene elements */}
                    <p>
                        I can be reached at johnrcd.ar@gmail.com for any inquries. Alternatively, you can use johnrcd.music@gmail.com if it's music specific.
                    </p>
                    <br/>
                    <p>You can find me online at:</p>
                    <p>twitter:<a href="https://twitter.com/john_rcd">john_rcd</a></p>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default HomePage;