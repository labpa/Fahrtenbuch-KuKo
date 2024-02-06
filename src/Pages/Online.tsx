import React, {ChangeEvent, FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import {useGetFahrtQuery} from "../Api/fahrtApi";



const Onlinefahrtenbuch : FC = () => {
    //Fahrer:in
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    //Fahrzeug
    const [nummernschild, setNummernschild] = useState<string>("");
    const [baujahr, setBaujahr] = useState<string>("");
    const [marke, setMarke] = useState<string>("");
    const [modell, setModell] = useState<string>("");
    //Fahrt
    const [kmBeginn, setKmBeginn] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const [datum, setDatum] = useState<string>("");
    const [grund, setGrund] = useState<string>("");

    const {data: fahrt} = useGetFahrtQuery('');



    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Onlinefahrtenbuch</h1></div>
                    </div>
                </div>

                {/*Fahrer:in Formular*/}
                <form>
                    <div><h2 className={"g-2 mb-3"}>Fahrer:in</h2></div>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Vorname"}>
                                    <FormControl type={"text"} value={vorname} onChange={(e)=> setVorname(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Nachname"}>
                                    <FormControl type={"text"} value={nachname} onChange={(e)=> setNachname(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>

            {/*    Fahrzeug Formular*/}
                <form>
                    <div><h2>Fahrzeug</h2></div>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Nummernschild"}>
                                    <FormControl type={"text"} value={nummernschild} onChange={(e)=> setNummernschild(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Baujahr"}>
                                    <FormControl type={"number"} value={baujahr} onChange={(e)=> setBaujahr(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Marke"}>
                                    <FormControl type={"text"} value={marke} onChange={(e)=> setMarke(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Modell"}>
                                    <FormControl type={"text"} value={modell} onChange={(e)=> setModell(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>

            {/*    Fahrt Formular*/}
                <form>
                    <div><h2>Fahrt</h2></div>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <Select placeholder={"Fahrzeug"}
                                />
                            </Col>
                            <Col>
                                <Select placeholder={"Fahrer:in"}
                                />
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"km-Stand Beginn"}>
                                    <FormControl type={"number"} value={kmBeginn} onChange={(e)=> setKmBeginn(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"km-Stand Ende"}>
                                    <FormControl type={"number"} value={kmEnde} onChange={(e)=> setKmEnde(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Datum"}>
                                    <FormControl type={"date"} value={datum} onChange={(e)=> setDatum(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Grund der fahrt"}>
                                    <FormControl type={"text"} value={grund} onChange={(e)=> setGrund(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>

                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>Fahrzeug</th>
                        <th scope={"col"}>Fahrer:in</th>
                        <th scope={"col"}>KM-Beginn</th>
                        <th scope={"col"}>KM-Ende</th>
                        <th scope={"col"}>Grund</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fahrt?.map((fahrt: any)=>(
                        <tr key={fahrt.fahrt_id}>
                            <td>{fahrt.fahrzeug_id}</td>
                            <td>{fahrt.fahrerin_id}</td>
                            <td>{fahrt.kmbeginn}</td>
                            <td>{fahrt.kmende}</td>
                            <td>{fahrt.grund}</td>

                        </tr>
                    ))}
                    </tbody>
                </Table>








            </div>
        </div>






    )
}

export default Onlinefahrtenbuch;