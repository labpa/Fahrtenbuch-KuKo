import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Header from "../Components/Header";
import LoginScreen from "../Components/Login";
import CompRegistrieren from "../Components/CompRegistrieren";

const Registrieren : FC = () => {
    return (
        <div className={"container-sm justify-content-center"}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className={"justify-content-center"}>
                            <Link to={"login"}>
                                <Image src={auto} fluid/>
                            </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Header/>
            <CompRegistrieren/>
        </div>



    )
}

export default Registrieren