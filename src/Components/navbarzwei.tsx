import {NavLink} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useAppSelector} from "../app/hooks";


const NavbarZwei = () => {
    const {userinfo} = useAppSelector((state) => state.auth);

    if (userinfo){
        return (
            <Navbar expand="lg" className="bg-body-tertiary" bg={"dark"} data-bs-theme={"dark"}>
                <Container>
                    <Navbar.Brand href={"/"}>App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={"nav-link"} to={"home"}>Fahrtenbuch-Offline<span className={"visually-hidden"}>(current)</span></NavLink>
                            <NavLink className={"nav-link"} to={"/liste"}>Liste</NavLink>
                            <NavLink className={"nav-link"} to={"/onlinefahrtenbuch"}>Fahrtenbuch</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    } else {
        return (
            <Navbar expand="lg" className="bg-body-tertiary" bg={"dark"} data-bs-theme={"dark"}>
                <Container>
                    <Navbar.Brand href={"/"}>App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className={"nav-link"} to={"/login"}>Login</NavLink>
                            <NavLink className={"nav-link"} to={"/registrieren"}>Registrieren</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }

}

export default NavbarZwei;
