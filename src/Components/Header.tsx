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
// console.log(data);
    useEffect(() => {
        if(data){
            // dispatch(setCredentials(data))
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
                                </Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </div>
                    </div>

                    <Row>
                        <Stack direction={"horizontal"} gap={3}>

                        </Stack>
                    </Row>
                </Nav>
            </Container>



        </div>
    )
}
export default Header;