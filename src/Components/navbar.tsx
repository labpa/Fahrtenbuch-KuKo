import {NavLink} from "react-router-dom";
import 'bootswatch/dist/pulse/bootstrap.min.css';

const Navbar = () => {
    return (
       <nav className={"navbar navbar-expand-lg bg-primary"} data-bs-theme={"dark"}>
           <div className={"container-fluid"}>
               <NavLink className={"navbar-brand"} end to={"/"}>App</NavLink>
               <NavLink className={"navbar-brand"} to={"home"}>Fahrtenbuch</NavLink>
               <NavLink className={"navbar-brand"} to={"/liste"}>Liste</NavLink>
               <NavLink className={"navbar-brand"} to={"/contact"}>Contact</NavLink>
           </div>
       </nav>
    );
}

export default Navbar