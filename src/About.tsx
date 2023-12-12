import React, {FC} from "react";
import {Link} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import contact from "./Contact";

const About: FC = () => {
    return <div className={"About"}>
            <h1>About</h1>
            <div>
                <Link to={"./home"}>Fahrtenbuch</Link>
                <Link to={"./about"}>Click to view About page</Link>
                <Link to={"./contact"}>Click to view Contact page</Link>
            </div>
        <div>
            <h2>Hallo</h2>
        </div>

    </div>
}
export default About;