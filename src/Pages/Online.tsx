import React, {FC, useEffect, useState} from "react";
import supabase from "../config/SupabaseClient";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, FormLabel, Row, Stack, Table} from "react-bootstrap";


const Onlinefahrtenbuch : FC = () => {

    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    //fehler
    const [formError, setFormError] = useState<string | null>(null)

    //Ausgabe -> Local State
    const [fahrten, setFahrten] : any = useState([]);

    //Suchen
    const [suchen, setSuchen] = useState("");

    //Eingabe der Daten
    const handleSubmit = async (e:any) => {
        e.preventDefault()


        if(!vorname || !nachname || !nummernschild || !baujahr || !grund || !datum || !kmBegin || !kmEnde){
            setFormError('Bitte alle Felder ausfüllen')
            return;
        }
        const{data, error} = await supabase
            .from('fahrten')
            .insert([{vorname, nachname, nummernschild, baujahr, grund, datum, kmBegin, kmEnde}])
            .select();

        if(error){
            console.log(error);
        }
        if(data){
            console.log(data);
            setFormError(null);
            clear();
            getFahrt();
        }
    }

    //Setzt werte im Formular zurück
    const clear = () => {
        setNachname("");
        setVorname("");
        setNummernschild("");
        setBaujahr("")
        setGrund("");
        setKmEnde(0);
        setKmBegin(0);
        setDatum("")
    }


    //Abfrage der Daten
    useEffect(() => {
        getFahrt()
    }, []);

    const getFahrt = async () => {
        const {data} = await supabase.from('fahrten').select();
        setFahrten(data)
    }

    //Löscht mit der ID den entsprechenden Eintrag aus der Datenbank
    const handleDeleteFahrt = async (fahrt_id: any) => {

        const {  error } = await supabase
            .from('fahrten')
            .delete()
            .eq('fahrt_id', fahrt_id)

        if(error){
            console.log(error);
        }
        else{
            await getFahrt();
        }
    }

console.log(fahrten);

    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div className={"col p-2"}>
                            <div><h1>Onlinefahrtenbuch</h1></div>
                        </div>
                    </div>
                </div>



                <form onSubmit={handleSubmit}>

                    <Container>
                        <Row  className={"g-2 mb-3 "}>
                            <Col md>
                                <FloatingLabel  controlId="floatingInputGrid" label="Vorname">
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
                          <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                        {formError && <p>{formError}</p>}
                        <div className={"g-2 mb-3"}>
                            <FormControl
                                placeholder="Suchen"
                                onChange={(e) => setSuchen(e.target.value)}
                            />
                        </div>
                    </Container>


                </form>



                <div className={"content g-2 mb-3"}>
                    <Table className={"table table-hover"} responsive={"lg"}>
                        <thead>
                        <tr className={"g-2 mb-3"}>
                            {/*<th scope={"col"}>ID</th>*/}
                            <th scope={"col"}>Vorname</th>
                            <th scope={"col"}>Nachname</th>
                            <th scope={"col"}>Nummernschild</th>
                            <th scope={"col"}>Grund</th>
                            <th scope={"col"}>Datum</th>
                            <th scope={"col"}>Baujahr</th>
                            <th scope={"col"}>KM Beginn</th>
                            <th scope={"col"}>KM Ende</th>
                            <th scope={"col"}>KM Gesamt</th>
                            <th scope={"col"}>Löschen</th>
                            <th scope={"col"}>Bearbeiten</th>
                        </tr>
                        </thead>
                        <tbody>
                        {fahrten.filter((fahrt : any) => {
                            return suchen.toLowerCase() === ''
                            ? fahrt
                            : fahrt.vorname.toLowerCase().includes(suchen.toLowerCase()) ||
                                fahrt.nachname.toLowerCase().includes(suchen.toLowerCase())
                        }).map((fahrt : any) =>(
                            <tr key={fahrt.fahrt_id}>
                                {/*<td>{fahrt.fahrt_id}</td>*/}
                                <td>{fahrt.vorname}</td>
                                <td>{fahrt.nachname}</td>
                                <td>{fahrt.nummernschild}</td>
                                <td>{fahrt.grund}</td>
                                <td>{fahrt.datum}</td>
                                <td>{fahrt.baujahr}</td>
                                <td>{fahrt.kmBegin}</td>
                                <td>{fahrt.kmEnde}</td>
                                <td>{fahrt.kmEnde - fahrt.kmBegin}</td>
                                <td><Button onClick={ () =>handleDeleteFahrt(fahrt.fahrt_id)} variant={"outline-dark"}>Löschen</Button></td>
                                <td>
                                    <Link to={`/bearbeiten/${fahrt.fahrt_id}`}>
                                        <Button  variant={"outline-dark"}>Bearbeiten</Button>
                                    </Link>
                                </td>

                            </tr>

                        ))}

                        </tbody>
                    </Table>


                </div>





            </div>
        </div>
    )
}

export default Onlinefahrtenbuch;