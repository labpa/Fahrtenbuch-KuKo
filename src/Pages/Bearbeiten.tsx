import React, {FC, useState, useEffect} from "react";
import {Col, Container, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";
import supabase from "../config/SupabaseClient";
import Button from "react-bootstrap/Button";

const Bearbeiten : FC = () => {
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const { id } = useParams();
    const navigate = useNavigate();
    //fehler
    const [formError, setFormError] = useState<string | null>(null)

    //Bearbeiten
    const handleSubmit = async (e : any) => {
        e.preventDefault()

        if(!vorname || !nachname || !nummernschild || !baujahr || !grund || !datum || !kmBegin || !kmEnde){
            setFormError('Bitte alle Felder ausfüllen')
            return;
        }

        const {data, error} = await supabase
            .from('fahrten')
            .update({vorname, nachname, nummernschild, baujahr, grund, datum, kmBegin, kmEnde})
            .eq('fahrt_id', id)
            .select()

        if(error){
            console.log(error);
            setFormError("Bitte alle Felder ausfüllen!")

        }
        if(data){
            console.log(data);
            setFormError(null);
            navigate("/onlinefahrtenbuch")
        }

    }






    //Daten werden aus der Datenbank geladen und im entsprechenden Feld angezeigt. Nur ein Datensatz entsprechend gleichheit mit id
    useEffect(() => {
        const fetchFahrt = async () => {
            const {data, error} = await supabase
                .from('fahrten')
                .select()
                .eq('fahrt_id', id)
                .single()

            if(error){
                navigate("/onlinefahrtenbuch", {replace:true})
            }
            if(data){
                        setVorname(data.vorname)
                        setNachname(data.nachname)
                        setNummernschild(data.nummernschild)
                        setBaujahr(data.baujahr)
                        setGrund(data.grund)
                        setDatum(data.datum)
                        setKmBegin(data.kmBegin)
                        setKmEnde(data.kmEnde)
            }
        }
        fetchFahrt()
    }, [id, navigate]);



    return(
        <div className={"container-sm justify-content-center"}>
            <div className="d-flex justify-content-center">

                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div><h1>Bearbeiten</h1></div>
                    </div>
                </div>
            </div>


            <form onSubmit={handleSubmit}>

                <Container>
                    <Row className={"g-2 mb-3"}>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Vorname">
                                <FormControl type="text" value={vorname} onChange={(e)=> setVorname(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Nachname">
                                <FormControl type="text" value={nachname} onChange={(e)=> setNachname(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Nummernschild">
                                <FormControl type="text" value={nummernschild} onChange={(e)=> setNummernschild(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Baujahr">
                                <FormControl type="text" value={baujahr} onChange={(e)=> setBaujahr(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Grund">
                                <FormControl type="text" value={grund} onChange={(e)=> setGrund(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Datum">
                                <FormControl type="date" value={datum} onChange={(e)=> setDatum(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className={"g-2 mb-3"}>
                        <Col md>
                            <FloatingLabel controlId="floatingInputGrid" label="Kilometerstand Begin">
                                <FormControl type="number" value={kmBegin} onChange={(e)=> setKmBegin(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <FloatingLabel controlId="floatingInputGrid" label="Kilometerstand Ende">
                                <FormControl type="number" value={kmEnde} onChange={(e)=> setKmEnde(e.target.value)}/>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <div className={"g-2 mb-3"}>
                        <Button variant={"outline-dark"} type={"submit"}>Speichern</Button>
                    </div>

                </Container>




                {formError && <p>{formError}</p>}
            </form>


        </div>

    )

}

export default Bearbeiten;