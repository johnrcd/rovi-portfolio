import { Outlet, Link } from "react-router-dom";

import MainNavigationBar from "../../components/MainNavigationBar";
import Footer from "../../components/Footer";
import FirstWindow from "./FirstWindow";
import TechnicalSkills from "../../components/TechnicalSkills";
import SocialMediaLinks from "../../components/SocialMediaLinks";
import "./styles.css";

import img_monospace from "/monospace_banner.png";
import img_dictionary_page from "/dictionary_page_banner.png";
import img_instalocked_inc from "/instalocked_inc_banner.png";


function HomePage(){

    console.log(img_monospace);
    return(
        <div className="home_page">
            <div>
                <FirstWindow />
            </div>
            <ul className="home_page_content" id="anchor_about_me">
                <li className="home_page_section">
                    <h2>about me</h2>
                    <hr/>
                    <p>
                        I'm a programmer with a passion for application and game development. My interest began through the Interactive Digital Media program offered at my high school, where my first projects were games built in JavaScript. I started to tinker around with assignments to see how they worked, made some games of my own, and before I knew it, I was hooked.
                    </p>
                    <br />
                    <p>
                        Nowadays, my programming is significantly less game-oriented. I'm currently in the Business Information Technology program at Red River College Polytechnic, where I'm learning about IT and software development.
                    </p>
                </li>
                <li className="home_page_section">
                    <h2>things i've worked on</h2>
                    <hr/>
                    <h3>Monospace</h3>
                    <a href="https://johnrcd.itch.io/monospace" className="home_page_image_link">
                        <img src={img_monospace} alt="monospace game project" />
                    </a>
                    <p>
                        A 2D platformer about a mouse trying to get home. Developed over a period of five months, released for Slow Jam Winnipeg 2022.
                    </p>
                    <TechnicalSkills
                        skills={["Unity", "C#", "Plastic SCM"]}
                    />
                    <br /> <br /> <br />
                    <h3>Dictionary Page</h3>
                    <a href="https://codesandbox.io/p/sandbox/dictionary-page-744txs" className="home_page_image_link">
                        <img src={img_dictionary_page} alt="dictionary website" />
                    </a>
                    <p>
                        Website for interfacing and retrieving definitions from the Free Dictionary API.
                    </p>
                    <TechnicalSkills
                        skills={["React", "AJAX", "git"]}
                    />
                    <br /> <br /> <br />
                    <h3>Instalocked Inc.</h3>
                    <a href="https://github.com/johnrcd/instalocked-react" className="home_page_image_link">
                        <img src={img_instalocked_inc} alt="instalocked inc page" />
                    </a>
                    <p>
                        Static webpage built as a joke from the game Valorant. Originally built using pure HTML/CSS, recreated with the React framework for practice.
                    </p>
                    <TechnicalSkills
                        skills={["React", "CSS", "Github Pages"]}
                    />
                </li>
                <li className="home_page_section">
                    <h2>contact</h2>
                    <hr/>
                    <p>
                        While I'm currently busy studying at RRC Polytech, I'm open to any inquiries, new opportunities, or just a friendly chat. Feel free to reach out to me at johnrcd.ar@gmail.com!
                    </p>
                    <br/> <br/>
                    <SocialMediaLinks />
                </li>
                <Footer />
            </ul>
        </div>
    )
}

export default HomePage;