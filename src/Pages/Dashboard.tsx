import React, {FC} from "react";
import {Link} from "react-router-dom";
import auto from "../images/auto.jpg";
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";

const dashboard: FC = () =>{

    return <div className={"container-sm justify-content-center"}>
                <Container className={"justify-content-center"}>
                            <Link to={"home"}>
                                <Image src={auto} fluid/>
                            </Link>
                </Container>
    </div>


}

export default dashboard;