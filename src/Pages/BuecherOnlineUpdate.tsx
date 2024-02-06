import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {useGetAutorQuery, useGetBuchQuery, useUpdateBuchMutation} from "../Api/buchApi";
import {useNavigate, useParams} from "react-router-dom";
import Select from "react-select";

const BuecherOnlineUpdate: FC = () => {
    const [title, setTitle] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("");
    const navigate = useNavigate();
    const { data: books } = useGetBuchQuery('');
    const {data: autor} = useGetAutorQuery('');
    const {id: buch_id} = useParams();
    const [updateBuch] = useUpdateBuchMutation();
    const [senden, setSenden] = useState<string>("");

    const handleChangeAutor = (selectedOption : any)=> {
        setSenden(selectedOption.autor_id);
    }



    const handleSubmit = (e: any) => {
        e?.preventDefault();
        updateBuch({
            buch_id,
            payload: {
                title: title,
                isbn: isbn,
                autor_id: senden
            }
        })
        navigate("/buecheronline")
    }


    useEffect(() => {
        let datensatz = books?.find((entry:any) => entry.buch_id === buch_id);
        if(datensatz){
            setIsbn(datensatz.isbn)
            setTitle(datensatz.title)
            setSenden(autor.autor_id) //todo FRAGE: Wie muss
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
                                        getOptionLabel={option => option.vorname + " " + option.nachname}
                                        getOptionValue={option => option.autor_id}
                                        options={autor}
                                />

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