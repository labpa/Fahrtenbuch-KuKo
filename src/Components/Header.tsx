import {FC} from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Stack} from "react-bootstrap";


const Header : FC = () => {
    return (
        <Nav className="justify-content-center" activeKey="/" as={"ul"}>
            <Stack direction={"horizontal"} gap={3}>
                <div className={"p-2"}>
                    <Nav.Item as={"li"}>
                        <NavLink to={"/"}>Login</NavLink>
                    </Nav.Item>
                </div>
                <div className={"p-2"}>
                    <Nav.Item as={"li"}>
                        <NavLink to={"/registrieren"}>Registrieren</NavLink>
                    </Nav.Item>
                </div>
                <div className={"p-2"}>
                    <Nav.Item as={"li"}>
                        <NavLink to={"/profil"}>Profil</NavLink>
                    </Nav.Item>
                </div>
            </Stack>
        </Nav>
    )
}
export default Header;