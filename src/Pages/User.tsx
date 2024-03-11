import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import {useAppSelector} from "../app/hooks";
import Alert from 'react-bootstrap/Alert';
import dayjs from "dayjs";

import {useGetProfilesQuery} from "../Api/profilesApi";

const User : FC = () => {
    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth);
    const user_id = userinfo.user.id;
    const {data: profiles} = useGetProfilesQuery('');

    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [kommentar, setKommentar] = useState<string>("");

    useEffect(() => {
        if (user_id && profiles) {
            let datensatz = profiles.find((entry: any) => entry.id === user_id);
            if (datensatz) {
                console.log(datensatz);
                setVorname(datensatz.first_name);
                setNachname(datensatz.last_name);
                setKommentar(datensatz.kommentar);
            }
        }
    }, [user_id, profiles]);


    return(
        <div className={"container-sm justify-content-center"}>
            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className={"justify-content-center"}>
                            <Image src={auto} fluid/>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Alert variant={"success"} className="text-left">
                        <p>Herzlich willkommen, <strong>{vorname} {nachname}</strong>!</p>
                        <ul className="list-unstyled">
                            <li><strong>Vorname:</strong> {vorname}</li>
                            <li><strong>Nachname:</strong> {nachname}</li>
                            <li><strong>E-Mail:</strong> {userinfo.user.email}</li>
                            <li><strong>Login:</strong> {dayjs(userinfo.user.last_sign_in_at).locale('de').format('DD.MM.YYYY HH:mm:ss')}</li>
                            <li><strong>ID:</strong> {userinfo.user.id}</li>
                            <li className="text-break"><strong>Kommentar: </strong>{kommentar}</li>
                        </ul>
                        <div className="text-center">
                            <Link to={"/userbearbeiten"} className="btn btn-outline-dark">
                                Bearbeiten
                            </Link>
                        </div>
                    </Alert>
                </Col>
            </Row>
        </div>
    )
}
export default User
