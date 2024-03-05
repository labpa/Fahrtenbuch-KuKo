import React, {FC} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Header from "../Components/Header";
import {useAppSelector} from "../app/hooks";
import Alert from 'react-bootstrap/Alert';
import dayjs from "dayjs";

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
                            <Alert variant={"success"}>
                                <p> Herzlich Wilkommen </p>
                                <p> <strong>{userinfo.user.email} !</strong></p>
                                <p>Siese Seite wird dir angezeigt, weil du Angemeldet bist.</p>
                                <p>Du bist Angemeldet seit: <strong>{dayjs(userinfo.user.last_sign_in_at).locale('de').format('DD.MM.YYYY HH:mm:ss')}</strong></p>
                                <p>Deine User Id von Supabase: <strong>{userinfo.user.id}</strong></p>

                            </Alert>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
export default User