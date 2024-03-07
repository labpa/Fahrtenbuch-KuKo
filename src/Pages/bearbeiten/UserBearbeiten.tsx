import React, {FC, useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import {Col, FloatingLabel, FormControl, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link, useNavigate} from "react-router-dom";
import {useAppSelector} from "../../app/hooks";
import {useGetProfilesQuery, useUpdateProfilesMutation} from "../../Api/fahrtApi";

const UserBearbeiten : FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const navigate = useNavigate();

    const {userinfo} : {userinfo: any} = useAppSelector((state)=> state.auth);
    const id = userinfo.user.id;


    const {data: profiles} = useGetProfilesQuery('');
    const [updateUser] = useUpdateProfilesMutation();

    useEffect(() => {
        let datensatz = profiles?.find((entry : any)=> entry.id === id);
        if(datensatz){
            setVorname(datensatz.first_name);
            setNachname(datensatz.last_name);
        }
    }, [id]);

    const handleSubmit = (e: any) => {
        e?.preventDefault();

        updateUser({
            id,
            payload: {
                first_name: vorname,
                last_name: nachname,
            }
        })
        navigate("/user")
    }



    return(
        <div className={"bs-body-bg"}>
            <div className={"container-sm justify-content-center"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div><h1>Fahrer:in Bearbeiten</h1></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
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
                        <div className={"row"}>
                            <div className={"col"}>
                                <div className={"d-flex"}>
                                    <div className={"p-3"}>
                                        <Button variant={"outline-dark"} type={"submit"}>Speichern</Button>
                                    </div>
                                    <div className={"p-3"}>
                                        <Link to={"/user"}>
                                            <Button variant={"outline-dark"}>Abbrechen</Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </Container>
                </form>

            </div>
        </div>
    )
}

export default UserBearbeiten;