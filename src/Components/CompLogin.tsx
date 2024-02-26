import React, {FC, useEffect, useState} from "react";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {userLogin} from "../features/auth/authActions";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {useNavigate} from "react-router-dom";

const LoginScreen : FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {userinfo} = useAppSelector((state: any) => state.auth);

    // console.log(userinfo);

    useEffect(() => {
        if(userinfo){
            navigate('/user')
        }
    }, [navigate, userinfo]);


    const handleLoginEvent = (e : any) => {
        e?.preventDefault();
        dispatch(userLogin({email, password}))
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
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default LoginScreen