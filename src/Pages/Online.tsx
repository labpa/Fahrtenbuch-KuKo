import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import {useGetFahrtQuery , useGetFahrerinQuery, useGetFahrzeugQuery, useCreateFahrerinMutation, useCreateFahrtMutation, useRemoveFahrerinMutation, useCreateFahrzeugMutation, useRemoveFahrzeugMutation, useRemoveFahrtMutation} from "../Api/fahrtApi";
import {Link} from "react-router-dom";
import dayjs from "dayjs";
import {useAppSelector} from "../app/hooks";


const Onlinefahrtenbuch : FC = () => {
    //Fahrer:in
    const {data: fahrerin} = useGetFahrerinQuery('');
    const [createFahrerin] = useCreateFahrerinMutation();
    const [removeFahrerin] = useRemoveFahrerinMutation();

    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [formErrorFahrerin, setFormErrorFahrerin] = useState<string | null>(null);

    //Fahrzeug
    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const [createFahrzeug] = useCreateFahrzeugMutation();
    const [removeFahrzeug] = useRemoveFahrzeugMutation();

    const [nummernschild, setNummernschild] = useState<string>("");
    const [baujahr, setBaujahr] = useState<string>("");
    const [marke, setMarke] = useState<string>("");
    const [modell, setModell] = useState<string>("");
    const [formErrorFahrzeug, setFormErrorFahrzeug] = useState<string | null>(null);

    //Fahrt
    const {data: fahrt} = useGetFahrtQuery('');
    const [createFahrt] = useCreateFahrtMutation();
    const [removeFahrt] = useRemoveFahrtMutation();

    const [kmBeginn, setKmBeginn] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const [datum, setDatum] = useState<string>("");
    const [grund, setGrund] = useState<string>("");
    const [formErrorFahrt, setFormErrorFahrt] = useState<string | null>(null);

    //Select Auswahl
    const [auswahlFahrzeug, setAuswahlFahrzeug] = useState<string>();
    const [auswahlFahrerin, setAuswahlFahrerin] = useState<string>();

    //App
    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth)


    const handleSubmitFahrerin= (e: any) => {
        e?.preventDefault();

        if(!vorname || !nachname){
            setFormErrorFahrerin("Bitte alle Felder ausfüllen")
            return;
        }

        createFahrerin({
            payload: {
                vorname: vorname,
                nachname: nachname,
                created_from: userinfo.user.id,
            }
        })
        setVorname("");
        setNachname("");
        setFormErrorFahrerin(null);
    }

    const handleSubmitFahrzeug = (e: any) => {
        e?.preventDefault();
        if(!nummernschild || !marke){
            setFormErrorFahrzeug("Nummernschild und Marke sind Pflichtfelder")
            return;
        }

        createFahrzeug({
            payload: {
                nummernschild: nummernschild,
                baujahr: baujahr,
                modell: modell,
                marke: marke,
                created_from: userinfo.user.id,
            }
        })
        setNummernschild("");
        setBaujahr("");
        setModell("");
        setMarke("");
        setFormErrorFahrzeug(null);
    }

    const handleSubmitFahrt = (e: any) => {
        e?.preventDefault();
        if(!auswahlFahrzeug || !auswahlFahrerin || !datum || !kmBeginn || !kmEnde || !grund){
            setFormErrorFahrt("Bitte alle Felder ausfüllen!")
            return;
        }

        createFahrt({
            payload: {
                grund: grund,
                kmbeginn: kmBeginn,
                kmende: kmEnde,
                datum: datum,
                fahrzeug_id: auswahlFahrzeug,
                fahrerin_id: auswahlFahrerin,
                created_from: userinfo.user.id,
            }
        })
        setGrund("");
        setDatum("");
        setKmEnde(0);
        setKmBeginn(0);
        setFormErrorFahrt(null);
    }

    const handleChangeFahrzeug = (selectedOption:any) =>{
        setAuswahlFahrzeug(selectedOption.value);
    }

    const handleChangeFahrerin = (selectedOption: any) => {
        setAuswahlFahrerin(selectedOption.value);
    }


    const lastKm = () => {
        let carRideList = fahrt.filter((rli: any) => rli.fahrzeug_id === auswahlFahrzeug);
        let carKms = carRideList.map((crl: any)=> crl.kmende);
        let maxKms = Math.max(...carKms)
        setKmBeginn(maxKms);
    }
    useEffect(() => {
        if(auswahlFahrzeug){
            lastKm()
        }
    }, [auswahlFahrzeug]);


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
                                <FloatingLabel label={"Vorname"} >
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
                        {formErrorFahrerin && <p className={"text-danger"}>{formErrorFahrerin}</p>}
                    </Container>
                </form>


                <Table className={"table table-hover"} responsive={"sm"}>
                    <tbody>
                    {fahrerin?.map((fahrerin: any) => (
                        <tr key={fahrerin.fahrerin_id}>
                            <td>
                                <strong>Vorname:</strong> {fahrerin.vorname} <br />
                                <strong>Nachname:</strong> {fahrerin.nachname} <br />

                            </td>

                            <td>
                                <div className="d-flex justify-content-end">
                                    <div className="d-grid gap-2">
                                        <Button variant={"outline-dark"} style={{ width: '200px' }} onClick={() => removeFahrerin(fahrerin.fahrerin_id)}>
                                            Löschen
                                        </Button>
                                        <Link to={`/fahrerinbearbeiten/${fahrerin.fahrerin_id}`}>
                                            <Button variant={"outline-dark"} style={{ width: '200px' }}>Bearbeiten</Button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
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
                        {formErrorFahrzeug && <p className={"text-danger"}>{formErrorFahrzeug}</p>}
                    </Container>
                </form>

                <Table className={"table table-hover"} responsive={"sm"}>
                    <tbody>
                    {fahrzeug?.map((fahrzeug: any) => (
                        <tr key={fahrzeug.fahrzeug_id}>
                            <td>
                                <strong>Nummernschild:</strong> {fahrzeug.nummernschild} <br />
                                <strong>Marke:</strong> {fahrzeug.marke} <br />
                                <strong>Modell:</strong> {fahrzeug.modell} <br />
                                <strong>Baujahr:</strong> {fahrzeug.baujahr}
                            </td>
                            <td>
                                <div className={"d-flex justify-content-end"}>
                                    <div className="d-grid gap-2">
                                        <Button variant={"outline-dark"} style={{ width: '200px' }} onClick={() => removeFahrzeug(fahrzeug.fahrzeug_id)}>
                                            Löschen
                                        </Button>
                                        <Link to={`/fahrzeugbearbeiten/${fahrzeug.fahrzeug_id}`}>
                                            <Button variant={"outline-dark"} style={{ width: '200px' }}>Bearbeiten</Button>
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>




            {/*    Fahrt Formular*/}
                <form onSubmit={handleSubmitFahrt}>
                    <div><h2>Fahrt</h2></div>
                    <Container>

                        <Row className={"g-2 mb-3"}>
                            <Row className={"g-2 mb-3"}>
                                <Col>
                                    <Select placeholder={"Fahrzeug"}
                                            styles={{
                                                menu: provided => ({...provided, zIndex: 9999})
                                            }}
                                            onChange={handleChangeFahrzeug}
                                            options={fahrzeug?.map((a: any)=> ({value: a.fahrzeug_id, label: `${a.nummernschild}`}))}
                                    />
                                </Col>
                                <Col>
                                    <Select placeholder={"Fahrer:in"}
                                            styles={{
                                                menu: provided => ({...provided, zIndex: 9999})
                                            }}
                                            onChange={handleChangeFahrerin}
                                            options={fahrerin?.map((a:any)=> ({value: a.fahrerin_id, label: `${a.vorname} ${a.nachname}`}))}
                                    />
                                </Col>
                            </Row>
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
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                        {formErrorFahrt && <p className={"text-danger"}>{formErrorFahrt}</p>}
                    </Container>
                </form>

                <Table className={"table table-hover"} responsive={"sm"}>
                    <tbody>
                    {fahrt?.map((fahrt: any) => (
                        <tr key={fahrt.fahrt_id}>
                            <td>
                                <strong>Fahrzeug:</strong> {fahrzeug?.find((a: any) => a.fahrzeug_id === fahrt.fahrzeug_id)?.nummernschild} <br />
                                <strong>Fahrer:in:</strong> {fahrerin?.find((a: any) => a.fahrerin_id === fahrt.fahrerin_id)?.vorname} {fahrerin?.find((a: any) => a.fahrerin_id === fahrt.fahrerin_id)?.nachname} <br />
                                <strong>Datum:</strong> {dayjs(fahrt.datum).format("D.M.YYYY")}
                            </td>
                            <td>
                                <div className={"d-flex justify-content-end"}>
                                    <Link to={`/fahrtdetail/${fahrt.fahrt_id}`}>
                                        <Button variant={"outline-dark"} style={{ width: '200px' }}>Details</Button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>
        </div>

    )
}

export default Onlinefahrtenbuch;