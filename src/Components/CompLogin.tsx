import React, {FC, useState} from "react";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {userLogin} from "../features/auth/authActions";
import {useAppDispatch} from "../app/hooks";


const LoginScreen : FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();




    const handleLoginEvent = (e : any) => {
        e?.preventDefault();
        dispatch(userLogin({email, password}))
    }

    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Login</h1></div>
                    </div>
                </div>
                <form onSubmit={handleLoginEvent}>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col></Col>
                            <Col>
                                <FloatingLabel label={"Email Adresse"}>
                                    <FormControl type={"email"}
                                                 placeholder={"beispiel@beispiel.com"}
                                                 value={email}
                                                 onChange={(e)=> setEmail(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col></Col>
                            <Col>
                                <FloatingLabel label={"Password"}>
                                    <FormControl type={"password"}
                                                 placeholder={"Password"}
                                                 value={password}
                                                 onChange={(e)=> setPassword(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col></Col>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <Button type={"submit"} variant={"outline-dark"} className={"g-2 mb-3"}>Anmelden</Button>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </form>

            </div>
        </div>
    )
}
export default LoginScreen