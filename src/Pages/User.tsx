import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Header from "../Components/Header";
import {useAppSelector} from "../app/hooks";
import Alert from 'react-bootstrap/Alert';

const User : FC = () => {

    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth)

    return(
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
            <Row>
                <Col></Col>
                <Col>
                    <div>
                        {[
                            'success',
                        ].map((variant) => (
                            <Alert key={variant} variant={variant}>
                                Welcome <strong>{userinfo.user.email} !</strong> You can view this page because you're logged in
                            </Alert>
                        ))}
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}
export default User