import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Header from "../Components/Header";
import {useAppSelector} from "../app/hooks";

const User : FC = () => {

    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth)
    console.log(userinfo);
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
                    <figure>{userinfo?.email?.toUpperCase()}</figure>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                    <span>
                        Welcome <strong>{userinfo?.email}!</strong> You can view this page because you're logged in
                    </span>
                </Col>
                <Col></Col>
            </Row>

        </div>
    )
}
export default User