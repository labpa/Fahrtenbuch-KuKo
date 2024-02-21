import {FC, useEffect} from "react";
import Nav from "react-bootstrap/Nav";
import {NavLink, useNavigate} from "react-router-dom";
import {Col, Row, Stack} from "react-bootstrap";
import {useGetUserDetailsQuery} from "../Api/authApi";
import {useAppSelector} from "../app/hooks";
import {useDispatch} from "react-redux";
import {logout, setCredentials} from "../features/auth/authSlice"
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



const Header : FC = () => {
    const {userinfo} = useAppSelector((state:any)=> state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isFetching} = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    })
console.log(data);
    useEffect(() => {
        if(data){
            dispatch(setCredentials(data))
        }
    }, [data, dispatch]);

    const test = () => {
        navigate("/");
        dispatch(logout());
    }

    return (
        <div>

            <Container>
                <Nav className="justify-content-center" activeKey="/" as={"ul"}>
                    <div className={"container-sm"} data-bs-theme={"dark"}>
                        <div className={"bg-body-tertiary"}>
                            <Row>
                                <Col>
                                    <span className={"text-light"}>
                                        {isFetching
                                        ? `Fetching your profile...`
                                        : userinfo !== null
                                        ? ` Logged in as ${userinfo.email}`
                                        : "You're not logged in"}
                                    </span>
                                </Col>
                                <Col></Col>
                                <Col>
                                    {userinfo? (<Button variant={"outline-light"} onClick={()=> test()}>Logout</Button>)
                                        : (
                                            <NavLink to={"/login"}>Login</NavLink>
                                        )}
                                </Col>
                            </Row>
                        </div>
                    </div>

                    {/*<Row>*/}
                    {/*    <Col>*/}
                    {/*        <span>*/}
                    {/*            {isFetching*/}
                    {/*            ? `Fetching your profile...`*/}
                    {/*            : userinfo !== null*/}
                    {/*            ? ` Logged in as ${userinfo.email}`*/}
                    {/*            : "You're not logged in"}*/}
                    {/*        </span>*/}
                    {/*    </Col>*/}
                    {/*    <Col>*/}
                    {/*        {userinfo? (<Button variant={"outline-dark"} onClick={()=> test()}>Logout</Button>)*/}
                    {/*            : (*/}
                    {/*                <NavLink to={"/login"}>Login</NavLink>*/}
                    {/*            )}*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    <Row>
                        <Stack direction={"horizontal"} gap={3}>
                            {/*<div className={"p-2"}>*/}
                            {/*    <Nav.Item as={"li"}>*/}
                            {/*        <NavLink to={"/"}>Login</NavLink>*/}
                            {/*    </Nav.Item>*/}
                            {/*</div>*/}
                            {/*<div className={"p-2"}>*/}
                            {/*    <Nav.Item as={"li"}>*/}
                            {/*        <NavLink to={"/registrieren"}>Registrieren</NavLink>*/}
                            {/*    </Nav.Item>*/}
                            {/*</div>*/}
                            {/*<div className={"p-2"}>*/}
                            {/*    <Nav.Item as={"li"}>*/}
                            {/*        <NavLink to={"/user"}>User</NavLink>*/}
                            {/*    </Nav.Item>*/}
                            {/*</div>*/}
                        </Stack>
                    </Row>
                </Nav>
            </Container>



        </div>
    )
}
export default Header;