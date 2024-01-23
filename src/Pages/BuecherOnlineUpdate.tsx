import React, {FC, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, FloatingLabel, FormControl, Row} from "react-bootstrap";

const BuecherOnlineUpdate: FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [titel, setTitel] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Datenbank Bücher</h1></div>
                    </div>
                </div>

                <form>
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
                            <Button variant={"outline-dark"}>Speichern</Button>
                        </div>
                    </Container>
                </form>

            </div>
        </div>
    )
}
export default BuecherOnlineUpdate;