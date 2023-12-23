import "./styles.css";

import social_media_github from "/social_media_github.png";
import social_media_linked_in from "/social_media_linked_in.png";
import social_media_twitter from "/social_media_twitter.png";
import social_media_youtube from "/social_media_youtube.png";


export default function SocialMediaLinks(){
    return(
        <>
            <p className="social_media_text">
                If you'd like, you can visit my socials!
            </p>
            <div className="social_media_icons">
                <a href="https://github.com/johnrcd" className="social_media_link">
                    <img src={social_media_github} alt="github logo" className="social_media_icon"/>
                </a>
                <a href="https://www.linkedin.com/in/rovi-decena/" className="social_media_link">
                    <img src={social_media_linked_in} alt="linked in logo" className="social_media_icon"/>
                </a>
                <a href="https://twitter.com/john_rcd" className="social_media_link">
                    <img src={social_media_twitter} alt="twitter logo" className="social_media_icon"/>
                </a>
                <a href="https://www.youtube.com/channel/UC4DSofCYni5blSEns_Vq3Ww" className="social_media_link">
                    <img src={social_media_youtube}   alt="youtube logo"    className="social_media_icon"/>
                </a>
            </div>
        </>
    )
}