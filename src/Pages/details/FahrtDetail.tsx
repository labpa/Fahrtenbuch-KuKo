import React, {FC, useEffect, useState} from "react";
import {
    useGetFahrerinQuery,
    useGetFahrtQuery,
    useGetFahrzeugQuery,
    useGetProfilesQuery,
    useRemoveFahrtMutation
} from "../../Api/fahrtApi";
import {Link, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import dayjs from "dayjs";

const FahrtDetail : FC = () => {
    const {data: fahrt} = useGetFahrtQuery('');
    const {data: fahrerin} = useGetFahrerinQuery('');
    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const {id: fahrt_id}= useParams();
    const [removeFahrt] = useRemoveFahrtMutation();

    const [datum, setDatum] = useState<string>("");
    const [fahrerin_id, setFahrerin_id] = useState<string>("");
    const [fahrzeug_id, setFahrzeug_id] = useState<string>("");
    const [grund, setGrund] = useState<string>("");
    const [kmbeginn, setKmBeginn] = useState<number>(0);
    const [kmEnde, setKmEnde] = useState<number>(0);
    const [creator, setCreator] = useState<string>("");


    // todo: Tabelle die auth.users Öffentlich macht
    const {data: profiles} = useGetProfilesQuery('');


    useEffect(() => {
        let datensatz = fahrt?.find((entry: any)=> entry.fahrt_id === fahrt_id);
        if(datensatz){
            setFahrerin_id(datensatz.fahrerin_id);
            setFahrzeug_id(datensatz.fahrzeug_id);
            setDatum(datensatz.datum);
            setGrund(datensatz.grund);
            setKmBeginn(datensatz.kmbeginn);
            setKmEnde(datensatz.kmende);
            setCreator(datensatz.created_from);
        }
    }, [fahrt_id]);

    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>

                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Details</h1></div>
                    </div>
                </div>
                <Container>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Name der Fahrer:in</label></Col>
                        <Col><span>{fahrerin?.find((a: any)=> a.fahrerin_id === fahrerin_id)?.vorname} {fahrerin?.find((a: any)=> a.fahrerin_id === fahrerin_id)?.nachname}</span></Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Fahrzeug</label></Col>
                        <Col><span>{fahrzeug?.find((a: any)=> a.fahrzeug_id === fahrzeug_id)?.nummernschild}</span></Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Datum</label></Col>
                        <Col>{dayjs(datum).format("D.M.YYYY")}</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Grund der Fahrt</label></Col>
                        <Col>{grund}</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>km-Stand Fahrt-Beginn</label></Col>
                        <Col>{kmbeginn} km</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>km-Stand Fahrt-Ende</label></Col>
                        <Col>{kmEnde} km</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Gefahrene km</label></Col>
                        <Col>{kmEnde - kmbeginn} km</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col><label>Erstellt von: </label></Col>
                        {/*<Col>{creator}</Col>*/}
                        <Col>{profiles?.find((a: any) => a.id=== creator)?.email}</Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col>
                            <Link to={`/fahrtbearbeiten/${fahrt_id}`}>
                                <Button variant={"outline-dark"}>Bearbeiten</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/onlinefahrtenbuch"}>
                                <Button variant={"outline-dark"} onClick={()=> removeFahrt(fahrt_id)}>Löschen</Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={"/onlinefahrtenbuch"}>
                                <Button variant={"outline-dark"}>Zurück</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}
export default FahrtDetail