import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Button, Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {useAppDispatch} from "../app/hooks";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {remove, save, selectBooks} from "../features/books/booksSlice";

const BuecherUpdate : FC = () => {
    const [titel, setTitel] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [isbn, setIsbn] = useState<string>("")
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const buecher = useSelector(selectBooks);
  const {id:bookId} = useParams();
  const test = useParams();



  //todo Bei jedem Speichern wird ein neues Object erzeugt. Bestehendes soll geändert werden. Kein neues erzeugen
    const handleSubmit = (test: any) => {

        const updateBook={title:titel, author:autor, isbn:isbn}
        dispatch(save(updateBook));
      navigate("/buecher");
    }


    useEffect(() => {
            let datensatz = buecher.find((entry:any) => entry.id === bookId);
            if(datensatz){
                setTitel(datensatz.title)
                setAutor(datensatz.author)
                setIsbn(datensatz.isbn)
            }
    }, [bookId]);


    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">
                    <div className={"row"}>
                        <div className={"col p-2"}>
                            <div><h1>Bücher</h1></div>
                        </div>
                    </div>
                </div>

            <form onSubmit={handleSubmit}>
            <Container>
                <Row className={"g-2 mb-3"}>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Titel">
                            <FormControl type={"text"} value={titel} onChange={(e) => setTitel(e.target.value)}/>
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="Autor">
                            <FormControl type={"text"} value={autor} onChange={(e)=> setAutor(e.target.value)}/>
                        </FloatingLabel>
                    </Col>
                </Row>
                <Row className={"g-2 mb-3"}>
                    <Col>
                        <FloatingLabel controlId="floatingInputGrid" label="ISBN">
                            <FormControl type={"text"} value={isbn} onChange={(e) => setIsbn(e.target.value)}/>
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

export default BuecherUpdate;