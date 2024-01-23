import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarZwei = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" bg={"dark"} data-bs-theme={"dark"}>
            <Container>
                <Navbar.Brand href={"/"}>App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to={"home"}>Fahrtenbuch<span className={"visually-hidden"}>(current)</span></NavLink>
                        <NavLink className={"nav-link"} to={"/liste"}>Liste</NavLink>
                        <NavLink className={"nav-link"} to={"/onlinefahrtenbuch"}>Onlinefahrtenbuch</NavLink>
                        <NavLink className={"nav-link"} to={"/test"}>Test</NavLink>
                        {/*<NavLink className={"nav-link"} to={"/datenbank"}>Datenbankspaß</NavLink>*/}
                        {/*<NavLink className={"nav-link"} to={"/eingabe"}>Eingabe Datenbank</NavLink>*/}
                        <NavLink className={"nav-link"} to={"/buecher"}>Bücher</NavLink>
                        <NavLink className={"nav-link"} to={"/buecheronline"}>Online Bücher</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarZwei;

