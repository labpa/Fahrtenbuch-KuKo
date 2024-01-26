import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {useGetBuchQuery} from "../features/books/buchApi";

import {useNavigate, useParams} from "react-router-dom";

const BuecherOnlineUpdate: FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [titel, setTitel] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    const navigate = useNavigate();
    const { data } = useGetBuchQuery('');
    const {id: buch_id} = useParams();




    //todo Speichern integrieren
    const handleSubmit = () => {
        navigate("/buecheronline")
    }


    useEffect(() => {
        let datensatz = data?.find((entry:any) => entry.buch_id === buch_id);
        if(datensatz){
            setIsbn(datensatz.isbn)
            setTitel(datensatz.title)
        }
    }, [buch_id]);



    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Datenbank Bücher</h1></div>
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
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Titel"}>
                                    <FormControl type={"text"} value={titel} onChange={(e)=> setTitel(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"ISBN"}>
                                    <FormControl type={"text"} value={isbn} onChange={(e)=> setIsbn(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Speichern</Button>
                        </div>
                    </Container>
                </form>

            </div>
        </div>
    )
}
export default BuecherOnlineUpdate;