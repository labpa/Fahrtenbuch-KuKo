import {FC} from "react";
import {useAppSelector} from "../app/hooks";
import {useGetUserDetailsQuery} from "../Api/authApi";
import {logout} from "../features/auth/authSlice";
import {useDispatch} from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";

const Status : FC = () => {
    const {userinfo} = useAppSelector((state: any) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {data, isFetching} = useGetUserDetailsQuery('userDetails', {
        pollingInterval: 9000000000,
    })


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
                                        ? <div className={"text-success"}>Angemeldet als: &nbsp;
                                            <Link to={"/user"}>
                                               {userinfo.user.email} &nbsp;
                                            </Link>
                                            </div>

                                        : <div className={"text-danger"}>Nicht Angemeldet</div>}
                            </span>
                            </Col>
                            <Col sm={15} className={"d-flex justify-content-end"} >
                                <div className={""}>
                                    {userinfo? (<Button variant={"outline-dark"} onClick={handleLogout}>Logout</Button>)
                                        : (
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