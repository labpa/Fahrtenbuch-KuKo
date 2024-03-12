import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useGetFahrerinQuery, useGetFahrtQuery, useGetFahrzeugQuery, useUpdateFahrtMutation} from "../../Api/fahrtApi";
import Select, {Options} from "react-select";
import {selectOptions} from "@testing-library/user-event/dist/select-options";

const FahrtBearbeiten : FC = () => {
    const {data: fahrt} = useGetFahrtQuery('');
    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const {data: fahrerin}= useGetFahrerinQuery('');
    const [updateFahrt] = useUpdateFahrtMutation();

    const [kmBeginn, setKmBeginn] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const [datum, setDatum] = useState<string>("");
    const [grund, setGrund] = useState<string>("");


    const [updateFahrzeug, setUpdateFahrzeug]= useState<string>("");

    const {id: fahrt_id} = useParams();
    const navigate = useNavigate();





    //todo: Anzeige Nummernschild
    const [fahrzeug_id, setFahrzeug_id] = useState<string>("");

    const selectedFahrzeugLabel = fahrzeug
        ?.filter((a: any) => a.fahrzeug_id === fahrzeug_id)
        .map((a: any) => a.nummernschild)[0];

    console.log(selectedFahrzeugLabel);


    //todo: Anzeige Name der Fahrerin
    const [fahrerin_id, setFahrerin_id] = useState<string>("");

    const selectedFahrerinLabel = fahrerin
        ?.filter((a: any) => a.fahrerin_id === fahrerin_id)
        .map((a: any) => `${a.vorname} ${a.nachname}`)
        .join(', ');
    console.log(selectedFahrerinLabel);





    useEffect(() => {
        let datensatz= fahrt?.find((entry: any) => entry.fahrt_id === fahrt_id);
        if(datensatz){
            setFahrzeug_id(datensatz.fahrzeug_id); //todo
            setDatum(datensatz.datum);
            setGrund(datensatz.grund)
            setKmBeginn(datensatz.kmbeginn);
            setKmEnde(datensatz.kmende);

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
                fahrerin_id: fahrerin_id,
                fahrzeug_id: updateFahrzeug,
            }
        })
        navigate(`/onlinefahrtenbuch`)
    }

    const handleChangeFahrzeug = (selectedOption: any) => {
        setUpdateFahrzeug(selectedOption.value);
        // console.log(selectedOption);
    }

    const handleChangeFahrerin = (selectedOption: any) => {
        setFahrerin_id(selectedOption.value);
        // console.log(selectedOption);
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
                                        value={{value: fahrzeug_id, label: selectedFahrzeugLabel}}
                                        options={fahrzeug?.map((a:any)=>({value: a.fahrzeug_id, label: `${a.nummernschild}`}))}
                                />
                            </Col>
                            <Col>
                                <Select placeholder={"Fahrer:in"}
                                        styles={{
                                            menu: provided => ({...provided, zIndex: 9999})
                                        }}
                                        onChange={handleChangeFahrerin}
                                        value={{value: fahrerin_id, label: selectedFahrerinLabel }}
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