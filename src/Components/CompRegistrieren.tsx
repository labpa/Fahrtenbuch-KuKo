import React, {FC, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useRegisterUserMutation} from "../Api/authApi";

const CompRegistrieren : FC = () => {
    const [firstname, setFirstname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [registerUser] = useRegisterUserMutation();


    //NEU -> funktioniert auch :D
    const submitForm = (e : any) => {
        e?.preventDefault();
        if(password !== confirmPassword){
            alert('Password mismatch')
        }
        registerUser({firstname, email, password})
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
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={12} md={6}>
                        <h1 className="text-center mb-4">Registrieren</h1>
                        <form onSubmit={submitForm}>
                            <FloatingLabel  label="Vorname">
                                <FormControl
                                    type="text"
                                    placeholder="Vorname"
                                    value={firstname}
                                    onChange={(e) => setFirstname(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel  label="Email" className="mt-3">
                                <FormControl
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Password" className="mt-3">
                                <FormControl
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </FloatingLabel>
                            <FloatingLabel label="Confirm Password" className="mt-3">
                                <FormControl
                                    type="password"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </FloatingLabel>
                            <div className="d-grid mt-4 g-2 mb-3">
                                <Button type="submit" variant="outline-dark">Registrieren</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CompRegistrieren;