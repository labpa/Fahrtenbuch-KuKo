import React, { FC, useEffect, useState } from "react";
import { Container, Row, Col, FloatingLabel, FormControl, Button, Spinner, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { useGetProfilesQuery, useUpdateProfilesMutation } from "../../Api/fahrtApi";

const UserBearbeiten: FC = () => {
    const [vorname, setVorname] = useState<string>("");
    const [nachname, setNachname] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();
    const { userinfo }: { userinfo: any } = useAppSelector((state) => state.auth);
    const id = userinfo.user.id;
    const { data: profiles, isLoading, isError } = useGetProfilesQuery('');

    useEffect(() => {
        if (profiles) {
            const datensatz = profiles.find((entry: any) => entry.id === id);
            if (datensatz) {
                setVorname(datensatz.first_name);
                setNachname(datensatz.last_name);
            }
            setLoading(false);
        }
    }, [id, profiles]);

    const [updateUser] = useUpdateProfilesMutation();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateUser({
                id,
                payload: {
                    first_name: vorname,
                    last_name: nachname,
                }
            });
            navigate("/user");
        } catch (error) {
            setError("Fehler beim Speichern der Benutzerdaten.");
        }
    };

    if (isLoading) return <Spinner animation="border" role="status">Loading...</Spinner>;
    if (isError) return <Alert variant="danger">Fehler beim Laden der Daten.</Alert>;

    return (
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
                                    <FormControl type={"text"} value={vorname} onChange={(e) => setVorname(e.target.value)} />
                                </FloatingLabel>
                            </Col>
                            <Col>
                                <FloatingLabel label={"Nachname"}>
                                    <FormControl type={"text"} value={nachname} onChange={(e) => setNachname(e.target.value)} />
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
                {error && <Alert variant="danger">{error}</Alert>}
            </div>
        </div>
    )
}

export default UserBearbeiten;
