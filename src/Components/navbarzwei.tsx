import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarZwei = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme={"dark"}>
            <Container>
                <Navbar.Brand><NavLink to={"/"}>App</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={"nav-link"} to={"home"}>Fahrtenbuch<span className={"visually-hidden"}>(current)</span></NavLink>
                        <NavLink className={"nav-link"} to={"/liste"}>Liste</NavLink>
                        <NavLink className={"nav-link"} to={"/contact"}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarZwei;

