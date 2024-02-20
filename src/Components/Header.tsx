import {FC} from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {Stack} from "react-bootstrap";
import {useGetUserDetailsQuery} from "../Api/authApi";
import {useAppSelector} from "../app/hooks";
import {useDispatch} from "react-redux";


const Header : FC = () => {
    const {userinfo} = useAppSelector((state:any)=> state.auth);
    const dispatch = useDispatch();

    const {data, isFetching} = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    })

    console.log(data);


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
                        <NavLink to={"/user"}>User</NavLink>
                    </Nav.Item>
                </div>
            </Stack>
        </Nav>
    )
}
export default Header;