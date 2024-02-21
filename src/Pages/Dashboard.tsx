import React, {FC} from "react";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import LoginScreen from "../Components/CompLogin";
import Header from "../Components/Header";
import Button from "react-bootstrap/Button";

const dashboard: FC = () =>{

    return <div className={"container-sm justify-content-center"}>
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
        <LoginScreen/>
    </div>
}

export default dashboard;