import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetFahrerinQuery, useGetFahrtQuery, useGetFahrzeugQuery, useUpdateFahrtMutation} from "../../Api/fahrtApi";
import Select from "react-select";


const FahrtBearbeiten : FC = () => {
    const {data: fahrt} = useGetFahrtQuery('');
    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const {data: fahrerin}= useGetFahrerinQuery('');
    const [updateFahrt] = useUpdateFahrtMutation();

    const [kmBeginn, setKmBeginn] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const [datum, setDatum] = useState<string>("");
    const [grund, setGrund] = useState<string>("");

    const [updateFahrzeug, setUpdateFahrzeug]= useState<any>(null);
    const [updateFahrerin, setUpdateFahrerin] = useState<any>(null);

    const {id: fahrt_id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        let datensatz= fahrt?.find((entry: any) => entry.fahrt_id === fahrt_id);
        if(datensatz){
            setDatum(datensatz.datum);
            setGrund(datensatz.grund)
            setKmBeginn(datensatz.kmbeginn);
            setKmEnde(datensatz.kmende);

            setUpdateFahrzeug(fahrzeug?.find((a : any) => a.fahrzeug_id === datensatz.fahrzeug_id));
            setUpdateFahrerin(fahrerin?.find((a : any) => a.fahrerin_id === datensatz.fahrerin_id));

            console.log(fahrzeug?.find((a : any) => a.fahrzeug_id === datensatz.fahrzeug_id) );

        } else {
            console.log("No Data!");
        }
    }, [fahrt_id]);

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        updateFahrt({
            fahrt_id,
            payload: {
                kmbeginn: kmBeginn,
                kmende: kmEnde,
                datum: datum,
                grund: grund,
                fahrerin_id: updateFahrerin.fahrerin_id,
                fahrzeug_id: updateFahrzeug.fahrzeug_id,
            }
        })
        navigate(`/onlinefahrtenbuch`)
    }

    const handleChangeFahrzeug = (selectedOption: any) => {
        setUpdateFahrzeug(fahrzeug?.find((a : any) => a.fahrzeug_id === selectedOption.value));
    }

    const handleChangeFahrerin = (selectedOption: any) => {
        setUpdateFahrerin(fahrerin?.find((a : any) => a.fahrerin_id === selectedOption.value));
    }



    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Fahrt Bearbeiten</h1></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <Select placeholder={"Fahrzeug"}
                                        styles={{
                                            menu: provided => ({...provided, zIndex: 9999})
                                        }}
                                        onChange={handleChangeFahrzeug}
                                        value={updateFahrzeug ? {value: updateFahrzeug.fahrzeug_id, label: updateFahrzeug.nummernschild} : null}
                                        options={fahrzeug?.map((a:any)=>({value: a.fahrzeug_id, label: `${a.nummernschild}`}))}
                                />
                            </Col>
                            <Col>
                                <Select placeholder={"Fahrer:in"}
                                        styles={{
                                            menu: provided => ({...provided, zIndex: 9999})
                                        }}
                                        onChange={handleChangeFahrerin}
                                        value={updateFahrerin ? {value: updateFahrerin.fahrerin_id, label: `${updateFahrerin.vorname} ${updateFahrerin.nachname}`} : null}
                                        options={fahrerin?.map((a:any)=>({value: a.fahrerin_id, label: `${a.vorname} ${a.nachname}`}))}
                                />
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"km-Stand Beginn"}>
                                    <FormControl type={"number"} value={kmBeginn} onChange={(e)=> setKmBeginn(e.target.value)} />
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
                                <FloatingLabel label={"Grund"}>
                                    <FormControl type={"text"} value={grund} onChange={(e)=> setGrund(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"d-flex"}>
                                    <div className={"p-3"}>
                                            <Button variant={"outline-dark"} type={"submit"}>Speichern</Button>
                                    </div>
                                    <div className={"p-3"}>
                                        <Link to={"/onlinefahrtenbuch"}>
                                            <Button variant={"outline-dark"}>Abbrechen</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </form>
            </div>
        </div>
    )
}
export default FahrtBearbeiten;