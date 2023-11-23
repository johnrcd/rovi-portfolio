import "./styles.css";
import MainNavigationBar from "../../../components/MainNavigationBar";

export default function FirstWindow(){
    return(
        <div className="first_window">
            <div className="inner_section">
                <h1>Hey, I'm Rovi Decena.</h1>
                <h3>I write code for apps, websites, and games.</h3>
                <h3 className="quiet_text">Also, I make music sometimes.</h3>
            </div>
            <h4 className="center_text down_arrow">v</h4>
        </div>
    );
}