import React, {FC, useState} from "react";
import {useGetAutorQuery, useGetBuchQuery, useRemoveBuchMutation, useCreateBuchMutation} from "../features/books/buchApi";
import {Button, Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Select from "react-select";


const BuecherOnline : FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [titel, setTitel] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    const { data: books} = useGetBuchQuery('');
    const {data: autor} = useGetAutorQuery('');
    const [removeBuch] = useRemoveBuchMutation();
    const [createBuch]= useCreateBuchMutation();


    console.log(autor);
    // console.log(autor.map((test : any) => test.buch_id))




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
                                    <Select className={"exampleSelect1"}
                                            placeholder={"Autor"}
                                            // options={autor}
                                    />
                            </Col>
                        </Row>
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
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                    </Container>
                </form>


                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>ID</th>
                        <th scope={"col"}>Titel</th>
                        <th scope={"col"}>ISBN</th>
                        <th scope={"col"}>Autor</th>
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
                    </tr>
                    </thead>
                    {/*console.log(autor.map((test : any) => autor.test.buch_id))*/}
                    <tbody>
                    {books?.map((buch: any)=>(
                        <tr key={buch.buch_id}>
                            <td>{buch.buch_id}</td>
                            <td>{buch.title}</td>
                            <td>{buch.isbn}</td>
                            <td>{buch.autor_id}</td>
                            <td><Button variant={"outline-dark"} onClick={() => removeBuch(buch.buch_id)}>Löschen</Button></td>
                            <td>
                                <Link to={`/buecheronlineupdate/${buch.buch_id}`}>
                                <Button variant={"outline-dark"}>Bearbeiten</Button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default BuecherOnline;