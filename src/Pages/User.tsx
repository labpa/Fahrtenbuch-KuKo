import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import {useAppSelector} from "../app/hooks";
import Alert from 'react-bootstrap/Alert';
import dayjs from "dayjs";

import {useGetProfilesQuery} from "../Api/fahrtApi";

const User : FC = () => {
    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth);
    const user_id = userinfo.user.id;
    const {data: profiles} = useGetProfilesQuery('');

    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");

    useEffect(() => {
        if (user_id && profiles) {
            let datensatz = profiles.find((entry: any) => entry.id === user_id);
            if (datensatz) {
                setVorname(datensatz.first_name);
                setNachname(datensatz.last_name);
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
            <Row>
                <Col></Col>
                <Col>
                    <div>
                            <Alert variant={"success"}>
                                <p>Herzlich Wilkommen <strong>{vorname} {nachname}</strong></p>
                                <p>Vorname: <strong>{vorname}</strong></p>
                                <p>Nachname: <strong>{nachname}</strong></p>
                                <p>E-Mail: <strong>{userinfo.user.email}</strong></p>
                                <p>Login: <strong>{dayjs(userinfo.user.last_sign_in_at).locale('de').format('DD.MM.YYYY HH:mm:ss')}</strong></p>
                                <p>ID: <strong>{userinfo.user.id}</strong></p>

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
