import {FC, useEffect} from "react";
import {useAppSelector} from "../app/hooks";
import {useGetUserDetailsQuery} from "../Api/authApi";
import {setCredentials, logout} from "../features/auth/authSlice";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Col, Row, Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useNavigate} from "react-router-dom";

const Status : FC = () => {
    const {userinfo} = useAppSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isFetching} = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 900000,
    })

    useEffect(() => {
        if(data){
            // dispatch(setCredentials(data))
        }
    }, [data, dispatch]);

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login")
    }

    return(
            <div>
                <Container>
                    <Nav activeKey="/" as={"ul"}>
                        <Row className={"align-items-center"}>
                            <Col sm={15}>
                            <span>
                                {isFetching
                                    ? <div className={"text-danger"}>Fetching your profile...</div>
                                    : userinfo !== null
                                        ? <div className={"text-success"}>Logged in as {userinfo}</div>
                                        : <div className={"text-danger"}>Nicht Angemeldet</div>}
                            </span>
                            </Col>
                            <Col sm={15} className={"d-flex justify-content-end"} >
                                <div className={""}>
                                    {userinfo? (<Button variant={"outline-dark"} onClick={handleLogout}>Logout</Button>)
                                        : (
                                            // <NavLink to={"/login"}>Login</NavLink>
                                            <div><span></span></div>
                                        )}
                                </div>
                            </Col>
                        </Row>
                    </Nav>
                </Container>
        </div>
    )
}
export default Status;