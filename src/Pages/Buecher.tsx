import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import {remove, save, selectBooks} from "../features/books/booksSlice";
import {Table, Button} from "react-bootstrap";
import {useAppDispatch,} from "../app/hooks";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const Buecher: React.FC = () =>{
    const books= useSelector(selectBooks);
    const [suchen, setSuchen] = useState<string>("");
    const [titel, setTitel] = useState<string>("");
    const [autor, setAutor] = useState<string>("");
    const [isbn, setIsbn] = useState("");
    const dispatch = useAppDispatch();

const addBook = () => {
    const newBook={ title: titel, author: autor, isbn: isbn}
    dispatch(save(newBook));
    clearBook();
}

const clearBook = () => {
    setTitel("");
    setAutor("");
    setIsbn("");
}

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
                            <Button variant={"outline-dark"} onClick={addBook}>Hinzufügen</Button>
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
                        <th scope={"col"}>Löschen</th>
                        <th scope={"col"}>Bearbeiten</th>
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
                                <Link to={`/buecherupdate/${book.id}`}>
                                    <Button  variant={"outline-dark"}>Bearbeiten</Button>
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

export default Buecher;