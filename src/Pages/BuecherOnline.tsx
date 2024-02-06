import React, {FC, useState} from "react";
import {useGetAutorQuery, useGetBuchQuery, useRemoveBuchMutation, useCreateBuchMutation, useCreateAutorMutation, useRemoveAutorMutation} from "../features/books/buchApi";
import {Button, Col, FloatingLabel, FormControl, Row, Table} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";
import Select from "react-select";


const BuecherOnline : FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");

    const [formError, setFormError] = useState<string | null>(null);
    const [formErrorZwei, setFormErrorZwei]= useState<string | null>(null)

    const { data: books} = useGetBuchQuery('');
    const {data: autor} = useGetAutorQuery('');
    const [removeBuch] = useRemoveBuchMutation();
    const [createBuch]= useCreateBuchMutation();
    const [createAutor] = useCreateAutorMutation();
    const [removeAutor] = useRemoveAutorMutation();

    const [senden, setSenden]= useState<string>("") //umbenennen

    const handleChangeAutor = (selectedOption: any) => {
        setSenden(selectedOption.value);
    }


    const handleSubmitBuch = (e: any) => {
        e?.preventDefault();

        if(!title || !isbn || !senden  ){
            setFormError("Bitte alle Felder ausfüllen!")
            return;
        }

        createBuch({
            payload: {
                title: title,
                isbn: isbn,
                autor_id: senden
            }
        })
        setTitle("");
        setIsbn("");
        setFormError(null);
    }


    const handleSubmitAutor = (e: any) => {
        e?.preventDefault();

        if(!vorname || !nachname){
            setFormErrorZwei("Bitte alle Felder ausfüllen!")
            return;
        }
        createAutor({
            payload: {
                vorname: vorname,
                nachname: nachname
            }
        })
        setVorname("");
        setNachname("");
        setFormErrorZwei(null);
    }

    return (
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Datenbank Bücher</h1></div>
                    </div>
                </div>

                <form onSubmit={handleSubmitAutor}>
                    <div><h2 className={"g-2 mb-3"}>Autor</h2></div>
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
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Erstellen</Button>
                        </div>
                        {formErrorZwei && <p className={"text-danger"}>{formErrorZwei}</p>}
                    </Container>
                </form>
                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>Autor Id</th>
                        <th scope={"col"}>Vorname</th>
                        <th scope={"col"}>Nachname</th>
                        <th scope={"col"}>Löschen</th>
                    </tr>
                    </thead>
                    <tbody>
                    {autor?.map((autor:any)=>(
                        <tr key={autor.autor_id}>
                            <td>{autor.autor_id}</td>
                            <td>{autor.vorname}</td>
                            <td>{autor.nachname}</td>
                            <td><Button variant={"outline-dark"} onClick={() => removeAutor(autor.autor_id)}>Löschen</Button></td>
                        </tr>
                    ))}
                    </tbody>
                </Table>


                <form onSubmit={handleSubmitBuch}>
                    <div><h2>Buch</h2></div>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel label={"Titel"}>
                                    <FormControl type={"text"} value={title} onChange={(e)=> setTitle(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"ISBN"}>
                                    <FormControl type={"text"} value={isbn} onChange={(e)=> setIsbn(e.target.value)}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <Select placeholder={"Autor"}
                                        onChange={handleChangeAutor}
                                        // getOptionLabel={option => option.vorname + " " +option.nachname}
                                        // getOptionValue={option => option.autor_id}
                                        // options={autor}
                                        options={autor?.map((a: any) => ({value: a.autor_id, label: `${a.vorname} ${a.nachname}`}))}
                                />

                            </Col>
                        </Row>
                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>
                        {formError && <p className={"text-danger"}>{formError}</p>}
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
                    <tbody>
                    {books?.map((buch: any)=>(
                        <tr key={buch.buch_id}>
                            <td>{buch.buch_id}</td>
                            <td>{buch.title}</td>
                            <td>{buch.isbn}</td>
                            <td>{autor?.find((a: any) => a.autor_id === buch.autor_id)?.vorname} {autor?.find((a: any) => a.autor_id === buch.autor_id)?.nachname} </td>
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