import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Header from "../Components/Header";
import {useAppSelector} from "../app/hooks";
import Alert from 'react-bootstrap/Alert';
import dayjs from "dayjs";

import {useGetProfilesQuery} from "../Api/fahrtApi";

const User : FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");

    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth)
    const user_id = userinfo.user.id;

    const {data: profiles} = useGetProfilesQuery('');


    useEffect(() => {
        let datensatz = profiles?.find((entry: any) => entry.id === user_id)
        if(datensatz){
            setVorname(datensatz.first_name);
            setNachname(datensatz.last_name);
        }
    }, [user_id]);

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
                                <p>Vorname: {vorname}</p>
                                <p>Nachname: {nachname}</p>
                                <Link to={"/userbearbeiten"}>
                                    Bearbeiten
                                </Link>

                            </Alert>
                    </div>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}
export default User