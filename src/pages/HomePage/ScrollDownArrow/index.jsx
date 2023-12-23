import { useState, useEffect } from "react";
import "./styles.css";

export default function ScrollDownArrow(){
    const [classes, setClasses] = useState("down_arrow");

    useEffect(() => {
        const onScroll = () => {
            setClasses("down_arrow" + " fade_out");
            window.removeEventListener("scroll", onScroll);
        }
        window.addEventListener("scroll", onScroll);
    });

    return <h4 className={classes}>v</h4>;
}