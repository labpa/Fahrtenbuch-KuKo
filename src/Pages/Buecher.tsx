import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {remove, selectBooks} from "../features/books/booksSlice";
import {Table, Button} from "react-bootstrap";
import {useAppDispatch} from "../app/hooks";
import Container from "react-bootstrap/Container";


const Buecher: React.FC = () =>{
    const books= useSelector(selectBooks);
    const [suchen, setSuchen] = useState("");
    const dispatch = useAppDispatch();

    console.log(books);

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

                <form>
                    <Container>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel controlId="floatingInputGrid" label="Titel">
                                    <FormControl type={"text"}/>
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel controlId="floatingInputGrid" label="Autor">
                                    <FormControl type={"text"}/>
                                </FloatingLabel>
                            </Col>
                        </Row>
                        <Row className={"g-2 mb-3"}>
                            <Col>
                                <FloatingLabel controlId="floatingInputGrid" label="ISBN">
                                    <FormControl type={"text"}/>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        <div className={"g-2 mb-3"}>
                            <Button variant={"outline-dark"} type={"submit"}>Hinzufügen</Button>
                        </div>


                        <div className={"g-2 mb-3"}>
                            <FormControl
                                placeholder="Suchen"
                                onChange={(e) => setSuchen(e.target.value)}
                            />
                        </div>
                    </Container>
                </form>







                <Table className={"table table-hover"} responsive={"lg"}>
                    <thead>
                    <tr className={"g-2 mb-3"}>
                        <th scope={"col"}>ID</th>
                        <th scope={"col"}>Titel</th>
                        <th scope={"col"}>Autor</th>
                        <th scope={"col"}>ISBN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {books.filter((book : any) => {
                        return suchen.toLowerCase() === ''
                            ? book
                            : book.title.toLowerCase().includes(suchen.toLowerCase()) ||
                            book.author.toLowerCase().includes(suchen.toLowerCase())
                    }).map((book : any) =>(
                        <tr key={book.id}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.isbn}</td>
                            <td>
                                <Button variant={"outline-dark"} onClick={() => dispatch(remove(book.id))}>Löschen</Button>
                            </td>
                            <td>
                                <Button  variant={"outline-dark"}>Bearbeiten</Button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </div>
        </div>
    )

}

export default Buecher;