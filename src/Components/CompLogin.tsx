import React, {FC, useEffect, useState} from "react";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {useAppDispatch} from "../app/hooks";
import {Link, useNavigate} from "react-router-dom";
import {setCredentials} from "../features/auth/authSlice";

import {useLoginUserMutation} from "../Api/authApi";

const LoginScreen : FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [login] = useLoginUserMutation();


const handleLoginEvent = async (e: any) => {
    e?.preventDefault();
    try {
        login({ email, password}).unwrap().then((response)=> {
            dispatch(setCredentials(response));
            navigate("/user");
        })
    } catch (error){
        setError("Falsche Anmeldeinformationen")
    }
}

    return(
        <div className={"bs-body-bg"}>
            <Container>
                <Row className="justify-content-md-center mt-5">
                    <Col xs={12} md={6}>
                        <h1 className="text-center mb-4">Login</h1>
                        <form onSubmit={handleLoginEvent}>
                            <FloatingLabel label="Email Adresse">
                                <FormControl
                                    type="email"
                                    placeholder="beispiel@beispiel.com"
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
                            <div className="d-grid mt-4 g-2 mb-3">
                                <Button type="submit" variant="outline-dark">Anmelden</Button>
                            </div>
                            {/* Hier wird die Fehlermeldung angezeigt, wenn ein Fehler auftritt */}
                            {error && (
                                <div className="alert alert-danger">
                                    {error} <Link to={"/neuespasswort"}>Passwort Vergessen?</Link>{" "}
                                </div>
                            )}
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default LoginScreen