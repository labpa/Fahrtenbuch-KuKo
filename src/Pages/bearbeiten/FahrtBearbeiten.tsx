import React, {FC, useEffect} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import {Link, useParams} from "react-router-dom";
import {useGetFahrtQuery} from "../../Api/fahrtApi";

const FahrtBearbeiten : FC = () => {
    const {data: fahrt} = useGetFahrtQuery('');

    const {id: fahrt_id} = useParams();
    console.log(fahrt_id);
    console.log(fahrt);

    useEffect(() => {
        let datensatz= fahrt?.find((entry: any) => entry.fahrt_id === fahrt_id);
        if(datensatz){
            console.log(datensatz);
        }
    }, [fahrt_id]);



    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Fahrt Bearbeiten</h1></div>
                    </div>
                </div>
                <form>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"km-Stand Beginn"}>
                                    <FormControl type={"number"} />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"km-Stand Ende"}>
                                    <FormControl type={"number"}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Datum"}>
                                    <FormControl type={"date"}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Grund"}>
                                    <FormControl type={"text"}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
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