import React, {FC, useEffect, useState} from "react";
import {useGetFahrzeugQuery, useUpdateFahrzeugMutation} from "../../Api/fahrtApi";
import {Link, useNavigate, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const FahrzeugBearbeiten : FC = () => {

    const {data: fahrzeug} = useGetFahrzeugQuery('');
    const [updateFahrzeug] = useUpdateFahrzeugMutation();

    const {id: fahrzeug_id} = useParams();

    const [nummernschild, setNummernschild] = useState<string>("");
    const [baujahr, setBaujahr] = useState<string>("");
    const [marke, setMarke] = useState<string>("");
    const [modell, setModell] = useState<string>("");

    const navigate = useNavigate();

    useEffect(() => {
        let datensatz= fahrzeug?.find((entry: any)=> entry.fahrzeug_id === fahrzeug_id);
        if(datensatz){
            setNummernschild(datensatz.nummernschild);
            setBaujahr(datensatz.baujahr);
            setMarke(datensatz.marke);
            setModell(datensatz.modell);
        }
    }, [fahrzeug_id]);

    const handleSubmit = (e: any) => {
        e?.preventDefault();
        updateFahrzeug({
            fahrzeug_id,
            payload: {
                nummernschild: nummernschild,
                baujahr: baujahr,
                marke: marke,
                modell: modell
            }
        })
        navigate("/onlinefahrtenbuch");
    }


    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Fahrzeug Bearbeiten</h1></div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Nummernschild"}>
                                    <FormControl type={"text"} value={nummernschild} onChange={(e)=> setNummernschild(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Baujahr"}>
                                    <FormControl type={"text"} value={baujahr} onChange={(e)=> setBaujahr(e.target.value)}/>
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
export default FahrzeugBearbeiten;