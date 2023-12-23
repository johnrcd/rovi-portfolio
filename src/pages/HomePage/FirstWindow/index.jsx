import "./styles.css";
import MainNavigationBar from "../../../components/MainNavigationBar";
import ScrollDownArrow from "../ScrollDownArrow";

export default function FirstWindow(){
    return(
        <div className="first_window">
            <div className="inner_section">
                <h1 className="first_window_h1">Hey, I'm Rovi Decena.</h1>
                <h3 className="first_window_h3">I write code for apps, websites, and games.</h3>
                <h3 className="first_window_h3 quiet_text">Also, I make music sometimes.</h3>
            </div>
            <ScrollDownArrow />
        </div>
    );
}