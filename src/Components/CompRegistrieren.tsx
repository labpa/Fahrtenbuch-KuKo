import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const CompRegistrieren : FC = () => {
    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Registrieren</h1></div>
                    </div>
                </div>
                <Container>

                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                controlId={"floatingInput"}
                                label={"Vorname"}
                                className={"mb-3"}
                            >
                                <FormControl type={"text"} placeholder={"Vorname"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                label={"Email"}
                                controlId={"floatingInput"}
                                className={"mb-3"}
                            >
                                <FormControl type={"email"} placeholder={"Email"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>









                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                controlId={"floatingInput"}
                                label={"Password"}
                                className={"mb-3"}
                            >
                                <FormControl type={"password"} placeholder={"Password"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row className={"g-2 mb-3"}>
                        <Col></Col>
                        <Col>
                            <FloatingLabel
                                controlId={"floatingPassword"}
                                label={"Confirm Password"}
                            >
                                <FormControl type={"password"} placeholder={" Confirm Password"}/>
                            </FloatingLabel>
                        </Col>
                        <Col></Col>
                    </Row>


                    <Row>
                        <Col></Col>
                        <Col>
                            <div className="d-flex justify-content-center">
                                <Button variant={"outline-dark"} className={"g-2 mb-3"}>Registrieren</Button>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default CompRegistrieren;