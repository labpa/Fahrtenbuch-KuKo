import React, {FC, useEffect, useState} from "react";
import {useGetFahrerinQuery, useUpdateFahrerinMutation} from "../../Api/fahrtApi";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {Link, useNavigate, useParams} from "react-router-dom";
import Button from "react-bootstrap/Button";

const FahrerinBearbeiten : FC = () => {

    const {data: fahrerin}= useGetFahrerinQuery('');
    const [updateFahrerin]= useUpdateFahrerinMutation();

    const {id: fahrerin_id}= useParams();

    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");

    const navigate= useNavigate();

    //Zeigt die bereits bestehenden Werte im Eingabefeld an
    useEffect(() => {
        let datensatz= fahrerin?.find((entry: any)=> entry.fahrerin_id === fahrerin_id);
        if(datensatz){
            setVorname(datensatz.vorname);
            setNachname(datensatz.nachname);
        }
    }, [fahrerin_id]);

    //Übermittelt die Änderungen an die Datenbank
    const handleSubmit = (e:any) => {
        e?.preventDefault();

        updateFahrerin({
            fahrerin_id,
            payload: {
                vorname: vorname,
                nachname: nachname,
            }
        })
        navigate("/onlinefahrtenbuch");
    }


    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Fahrer:in Bearbeiten</h1></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
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

export default FahrerinBearbeiten;