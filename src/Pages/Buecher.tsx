import React, {FC, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../app/store";
import {FormControl, Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Buecher: React.FC = () =>{
    const books= useSelector((state: RootState)=>state.books);
    const [suchen, setSuchen] = useState("");
    console.log(books);


    return(
        <div>
            <h1>Bücher</h1>

            <div className={"g-2 mb-3"}>
                <FormControl
                    placeholder="Suchen"
                    onChange={(e) => setSuchen(e.target.value)}
                />
            </div>


            <Table className={"table table-hover"} responsive={"lg"}>
                <thead>
                <tr className={"g-2 mb-3"}>
                    {/*<th scope={"col"}>ID</th>*/}
                    <th scope={"col"}>Titel</th>
                    <th scope={"col"}>Autor</th>
                    <th scope={"col"}>ISBN</th>

                </tr>
                </thead>
                <tbody>
                {/*{books.filter((book : any) => {*/}
                {/*    return suchen.toLowerCase() === ''*/}
                {/*        ? book*/}
                {/*        : book.title.toLowerCase().includes(suchen.toLowerCase()) ||*/}
                {/*        book.author.toLowerCase().includes(suchen.toLowerCase())*/}
                {/*}).map((book : any) =>(*/}
                {/*    <tr key={book.id}>*/}
                {/*        /!*<td>{fahrt.fahrt_id}</td>*!/*/}
                {/*        <td>{book.title}</td>*/}
                {/*        <td>{book.author}</td>*/}
                {/*        <td>{book.isbn}</td>*/}
                {/*        <td>*/}
                {/*            <Button  variant={"outline-dark"}>Bearbeiten</Button>*/}
                {/*        </td>*/}
                {/*    </tr>*/}
                {/*))}*/}

                </tbody>
            </Table>


        </div>
    )

}

export default Buecher;