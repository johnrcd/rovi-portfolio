import { Outlet, Link } from "react-router-dom";

import MainNavigationBar from "../../components/MainNavigationBar";
import Footer from "../../components/Footer";
import FirstWindow from "./FirstWindow";
import TechnicalSkills from "../../components/TechnicalSkills";
import "./styles.css";

import img_monospace from "/monospace_banner.png";
import img_dictionary_page from "/dictionary_page_banner.png";

function HomePage(){

    console.log(img_monospace);
    return(
        <div className="home_page">
            <div>
                <MainNavigationBar />
                <FirstWindow />
            </div>
            <ul className="home_page_content">
                <li className="home_page_section">
                    <h2>about me</h2>
                    <hr/>
                    <p>
                        I'm a programmer with a passion for application and game development. My interest began through the Interactive Digital Media program offered at my high school, where my first projects were games built in JavaScript. I started to tinker around with assignments to see how they worked, made some games of my own, and before I knew it, I was hooked.
                    </p>
                    <br />
                    <p>
                        Nowadays, my programming is significantly less game-oriented. I'm currently in the Business Information Technology program at Red River College Polytechnic, where I'm learning about the fundamentals of IT and software development.
                    </p>
                </li>
                <li className="home_page_section">
                    <h2>things i have made</h2>
                    <hr/>
                    <h3>Monospace</h3>
                    <img src={img_monospace} alt="monospace game project" />
                    <p>
                        A 2D platformer about a mouse trying to get home. Developed over a period of five months, released for Slow Jam Winnipeg 2022.
                    </p>
                    <TechnicalSkills
                        skills={["Unity", "C#", "Plastic SCM"]}
                    />
                    <br /> <br /> <br />
                    <h3>Dictionary Page</h3>
                    <img src={img_dictionary_page} alt="dictionary website" />
                    <p>
                        Website for interfacing and retrieving definitions from the Free Dictionary API.
                    </p>
                    <TechnicalSkills
                        skills={["React", "AJAX", "git"]}
                    />
                </li>
                <li className="home_page_section">
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
                </li>
            </ul>
        </div>
    )
}

export default HomePage;