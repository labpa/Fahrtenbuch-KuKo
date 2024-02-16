import React, {FC} from "react";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const LoginScreen : FC = () => {

    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Login</h1></div>
                    </div>
                </div>
                <Container>
                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                controlId={"floatingInput"}
                                label={"Email Adresse"}
                                className={"mb-3"}
                            >
                                <FormControl type={"email"} placeholder={"beispiel@beispiel.com"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                controlId={"floatingPassword"}
                                label={"Password"}
                            >
                                <FormControl type={"password"} placeholder={"Password"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <Button variant={"outline-dark"} className={"g-2 mb-3"}>Anmelden</Button>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default LoginScreen