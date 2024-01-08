import React, {FC} from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"
import {Link} from "react-router-dom";

const Footer : FC = () => {

    return(
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <div className={"row"}>
                        <div className={"col"}>
                            <div className={"d-flex justify-content-center"}>
                                <div className={"p-3"}>
                                    <Link to={"/"}>
                                        <Button variant={"outline-dark"}>Home</Button>
                                    </Link>
                                </div>
                                <div className={"p-3"}>
                                    <Link to={"/home"}>
                                        <Button variant={"outline-dark"}>Fahrtenbuch</Button>
                                    </Link>
                                </div>
                                <div className={"p-3"}>
                                    <Link to={"/liste"}>
                                        <Button variant={"outline-dark"}>Liste</Button>
                                    </Link>
                                </div>
                                <div className={"p-3"}>
                                    <Link to={"/test"}>
                                        <Button variant={"outline-dark"}>Test</Button>
                                    </Link>
                                </div>
                                <div className={"p-3"}>
                                    <Link to={"/contact"}>
                                        <Button variant={"outline-dark"}>Kontakt</Button>
                                    </Link>
                                </div>



                            </div>
                        </div>
                    </div>


                </Card.Body>
            </Card>

        </div>
    )
}
export default Footer;