import React, {FC, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch} from "react-redux";
import {registerUser} from "../features/auth/authActions";
import {useAppDispatch} from "../app/hooks";

const CompRegistrieren : FC = () => {
    const [firstname, setFirstname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const dispatch = useAppDispatch();
    
    const submitForm = (e : any) => {
        e?.preventDefault();
        if(password !== confirmPassword){
            alert('Password mismatch')
        }
        dispatch(registerUser({firstname, email, password}));
        clearField();
    }
    const clearField = () => {
        setFirstname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }


    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Registrieren</h1></div>
                    </div>
                </div>
                <form onSubmit={submitForm}>
                    <Container>

                        <Row className={"g-2 mb-3"}>
                            <Col></Col>
                            <Col>
                                <FloatingLabel label={"Vorname"}>
                                    <FormControl type={"text"}
                                                 placeholder={"Vorname"}
                                                 value={firstname}
                                                 onChange={(e) => setFirstname(e.target.value)}
                                    />
                                </FloatingLabel>
                            </Col>
                            <Col></Col>
                        </Row>

                        <Row className={"g-2 mb-3"}>
                            <Col></Col>
                            <Col>
                                <FloatingLabel label={"Email"}>
                                    <FormControl type={"email"}
                                                 placeholder={"Email"}
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
                                <FloatingLabel label={"Confirm Password"}>
                                    <FormControl type={"password"}
                                                 placeholder={" Confirm Password"}
                                                 value={confirmPassword}
                                                 onChange={(e)=> setConfirmPassword(e.target.value)}

                                    />
                                </FloatingLabel>
                            </Col>
                            <Col></Col>
                        </Row>

                        <Row>
                            <Col></Col>
                            <Col>
                                <div className="d-flex justify-content-center">
                                    <Button type={"submit"} variant={"outline-dark"} className={"g-2 mb-3"}>Registrieren</Button>
                                </div>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </form>

            </div>
        </div>
    );
}
export default CompRegistrieren;