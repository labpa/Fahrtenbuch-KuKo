import React, {FC, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useResetPasswordMutation} from "../Api/authApi";

const NeuesPasswort : FC = () => {
    const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    // const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [newPassword] = useResetPasswordMutation();

    const handleSubmit = (e : any) => {
        e.preventDefault();
        newPassword({
            body: {
                email: email
            }
        })
    }


    return(
        <div className={"bs-body-bg"}>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={12} md={6}>
                        <h1 className="text-center mb-4">Passwort Vergessen?</h1>
                        <form onClick={handleSubmit}>
                            <FloatingLabel  label="Email" className="mt-3">
                                <FormControl
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </FloatingLabel>
                            {/*<FloatingLabel label="Password" className="mt-3">*/}
                            {/*    <FormControl*/}
                            {/*        type="password"*/}
                            {/*        placeholder="Password"*/}
                            {/*        value={password}*/}
                            {/*        onChange={(e) => setPassword(e.target.value)}*/}
                            {/*    />*/}
                            {/*</FloatingLabel>*/}
                            {/*<FloatingLabel label="Confirm Password" className="mt-3">*/}
                            {/*    <FormControl*/}
                            {/*        type="password"*/}
                            {/*        placeholder="Confirm Password"*/}
                            {/*        value={confirmPassword}*/}
                            {/*        onChange={(e) => setConfirmPassword(e.target.value)}*/}
                            {/*    />*/}
                            {/*</FloatingLabel>*/}
                            <div className="d-grid mt-4 g-2 mb-3">
                                <Button type="submit" variant="outline-dark">Neues Passwort</Button>
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default NeuesPasswort;

