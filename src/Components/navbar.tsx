import {NavLink} from "react-router-dom";



const Navbar = () => {
    return (
        <nav className={"navbar navbar-expand-lg bg-primary"} data-bs-theme={"dark"}>
            <div className={"container-fluid"}>
                <NavLink className={"navbar-brand"} end to={"/"}>App</NavLink>
                <button className={"navbar-toggler"} type={"button"} data-bs-toggle={"collapse"} data-bs-target={"#navbarColor01"} aria-controls={"#navbarColor01"} aria-expanded={"false"} aria-label={"Toggle navigation"} >
                    <span className={"navbar-toggler-icon"}></span>
                </button>
                <div className={"collapse navbar-collapse navbarColor01"} >
                    <ul className={"navbar-nav me-auto"}>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={"home"}>Fahrtenbuch<span className={"visually-hidden"}>(current)</span>
                            </NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={"/liste"}>Liste</NavLink>
                        </li>
                        <li className={"nav-item"}>
                            <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar