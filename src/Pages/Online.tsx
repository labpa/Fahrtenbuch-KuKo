import React, {FC, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import {useGetFahrtQuery , useGetFahrerinQuery, useGetFahrzeugQuery, useCreateFahrerinMutation, useCreateFahrtMutation, useRemoveFahrerinMutation, useCreateFahrzeugMutation, useRemoveFahrzeugMutation, useRemoveFahrtMutation} from "../Api/fahrtApi";



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
    const {data: fahrerin} = useGetFahrerinQuery('');
    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const [createFahrt] = useCreateFahrtMutation();
    const [createFahrerin] = useCreateFahrerinMutation();
    const [removeFahrerin] = useRemoveFahrerinMutation();
    const [createFahrzeug] = useCreateFahrzeugMutation();
    const [removeFahrzeug] = useRemoveFahrzeugMutation();
    const [removeFahrt] = useRemoveFahrtMutation();

    const [auswahlFahrzeug, setAuswahlFahrzeug] = useState<string>();
    const [auswahlFahrerin, setAuswahlFahrerin] = useState<string>();

console.log(fahrt);
    const handleSubmitFahrerin= (e: any) => {
        e?.preventDefault();

        createFahrerin({
            payload: {
                vorname: vorname,
                nachname: nachname,
            }
        })
        setVorname("");
        setNachname("");
    }

    const handleSubmitFahrzeug = (e: any) => {
        e?.preventDefault();

        createFahrzeug({
            payload: {
                nummernschild: nummernschild,
                baujahr: baujahr,
                modell: modell,
                marke: marke,
            }
        })
        setNummernschild("");
        setBaujahr("");
        setModell("");
        setMarke("");
    }

    const handleSubmitFahrt = (e: any) => {
        e?.preventDefault();

        createFahrt({
            payload: {
                grund: grund,
                kmbeginn: kmBeginn,
                kmende: kmEnde,
                datum: datum,
                fahrzeug_id: auswahlFahrzeug,
                fahrerin_id: auswahlFahrerin,
            }
        })
        setGrund("");
        setKmBeginn(0);
        setKmEnde(0);
        setDatum("");
    }

    const handleChangeFahrzeug = (selectedOption:any) =>{
        setAuswahlFahrzeug(selectedOption.value);
    }

    const handleChangeFahrerin = (selectedOption: any) => {
        setAuswahlFahrerin(selectedOption.value);
    }





    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div><h1>Onlinefahrtenbuch</h1></div>
                    </div>
                </div>

                {/*Fahrer:in Formular*/}
                <form onSubmit={handleSubmitFahrerin}>
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
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>
                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>Fahrer:in ID</th>
                        <th scope={"col"}>Vorname</th>
                        <th scope={"col"}>Nachname</th>
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fahrerin?.map((fahrerin: any)=>(
                        <tr key={fahrerin.fahrerin_id}>
                            <td>{fahrerin.fahrerin_id}</td>
                            <td>{fahrerin.vorname}</td>
                            <td>{fahrerin.nachname}</td>
                            <td><Button variant={"outline-dark"} onClick={() => removeFahrerin(fahrerin.fahrerin_id)}>Löschen</Button></td>
                            <td><Button variant={"outline-dark"} >Bearbeiten</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>


                {/*    Fahrzeug Formular*/}
                <form onSubmit={handleSubmitFahrzeug}>
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
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>

                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>Fahrzeug ID</th>
                        <th scope={"col"}>Nummernschild</th>
                        <th scope={"col"}>Marke</th>
                        <th scope={"col"}>Modell</th>
                        <th scope={"col"}>Baujahr</th>
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fahrzeug?.map((fahrzeug: any)=>(
                        <tr key={fahrzeug.fahrzeug_id}>
                            <td>{fahrzeug.fahrzeug_id}</td>
                            <td>{fahrzeug.nummernschild}</td>
                            <td>{fahrzeug.marke}</td>
                            <td>{fahrzeug.modell}</td>
                            <td>{fahrzeug.baujahr}</td>
                            <td><Button variant={"outline-dark"} onClick={() => removeFahrzeug(fahrzeug.fahrzeug_id)}>Löschen</Button></td>
                            <td><Button variant={"outline-dark"}>Bearbeiten</Button></td>


                        </tr>
                    ))}
                    </tbody>
                </Table>


            {/*    Fahrt Formular*/}
                <form onSubmit={handleSubmitFahrt}>
                    <div><h2>Fahrt</h2></div>
                    <Container>

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
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <Select placeholder={"Fahrzeug"}
                                        onChange={handleChangeFahrzeug}
                                        options={fahrzeug?.map((a: any)=> ({value: a.fahrzeug_id, label: `${a.nummernschild}`}))}
                                />
                            </Col>
                            <Col>
                                <Select placeholder={"Fahrer:in"}
                                        onChange={handleChangeFahrerin}
                                        options={fahrerin?.map((a:any)=> ({value: a.fahrerin_id, label: `${a.vorname} ${a.nachname}`}))}
                                />
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
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
                        <th scope={"col"}>Strecke</th>
                        <th scope={"col"}>Grund</th>
                        <th scope={"col"}>Datum</th>
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
                    </tr>
                    </thead>
                    <tbody>
                    {fahrt?.map((fahrt: any)=>(
                        <tr key={fahrt.fahrt_id}>
                            <td>{fahrzeug?.find((a: any)=> a.fahrzeug_id === fahrt.fahrzeug_id)?.nummernschild}</td>
                            <td>{fahrerin?.find((a: any)=> a.fahrerin_id === fahrt.fahrerin_id)?.vorname} {fahrerin?.find((a: any)=> a.fahrerin_id === fahrt.fahrerin_id)?.nachname}</td>
                            <td>{fahrt.kmbeginn}</td>
                            <td>{fahrt.kmende}</td>
                            <td>{fahrt.kmende - fahrt.kmbeginn}</td>
                            <td>{fahrt.grund}</td>
                            <td>{fahrt.datum}</td>
                            <td><Button variant={"outline-dark"} onClick={()=> removeFahrt(fahrt.fahrt_id)}>Löschen</Button></td>
                            <td><Button variant={"outline-dark"}>Bearbeiten</Button></td>

                        </tr>
                    ))}
                    </tbody>
                </Table>








            </div>
        </div>






    )
}

export default Onlinefahrtenbuch;