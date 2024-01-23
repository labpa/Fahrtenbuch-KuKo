import React, {FC, useState} from "react";
import {useGetBuchQuery} from "../features/books/buchApi";
import {Button, Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";




const BuecherOnline : FC = () => {
    const [vorname, setVorname] = useState("");

    const {data} = useGetBuchQuery('');
    console.log(data);


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
                        <Row>
                            <Col>
                                <FloatingLabel label={"Vorname"}>
                                    <FormControl type={"text"} value={vorname} onChange={(e)=> setVorname(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                    </Container>
                </form>



                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>ID</th>
                        <th scope={"col"}>Titel</th>
                        <th scope={"col"}>ISBN</th>
                        <th scope={"col"}>Autor ID</th>
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data?.map((buch: any)=>(
                        <tr key={buch.buch_id}>
                            <td>{buch.buch_id}</td>
                            <td>{buch.title}</td>
                            <td>{buch.isbn}</td>
                            <td>{buch.autor_id}</td>
                            <td><Button variant={"outline-dark"} onClick={() => console.log(buch.buch_id)}>Löschen</Button></td>
                            <td><Button variant={"outline-dark"}>Bearbeiten</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>

            </div>
        </div>
    )
}

export default BuecherOnline;