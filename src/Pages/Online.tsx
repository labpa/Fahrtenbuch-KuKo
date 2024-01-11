import React, {FC, useEffect, useState} from "react";
import supabase from "../config/SupabaseClient";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Onlinefahrtenbuch : FC = () => {

    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    //fehler
    const [formError, setFormError] = useState<string | null>(null)

    //Ausgabe
    const [fahrten, setFahrten] : any = useState([]);
console.log(datum);

    //Eingabe der Daten
    const handleSubmit = async (e:any) => {
        e.preventDefault()

        //todo muss noch auf alle Felder angepasst werden zuerst aber upload fertig machen
        if(!vorname || !nachname || !nummernschild || !baujahr || !grund || !datum || !kmBegin || !kmEnde){
            setFormError('Bitte alle Felder ausfüllen')
            return;
        }
        const{data, error} = await supabase
            .from('fahrten')
            .insert([{vorname, nachname, nummernschild, baujahr, grund, datum, kmBegin, kmEnde}])
            .select();
console.log(data)
        if(error){
            console.log(error);
        }
        if(data){
            console.log(data);
            setFormError(null);
        }
    }

    //Abfrage der Daten
    useEffect(() => {
        getFahrt()
    }, []);

    const getFahrt = async () => {
        const {data} = await supabase.from('fahrten').select();
        setFahrten(data)
        // console.log(data?.map(fa));
    }

    const handleDeleteFahrt = async (fahrt_id: any) => {

        const { error } = await supabase
            .from('fahrten')
            .delete()
            .eq('fahrt_id', fahrt_id)

        if(error){
            console.log(error);
        }
    }



    return (
        <div>
            <div className={"container-sm justify-content-center"}>
                <div className="d-flex justify-content-center">

                    <div className={"row"}>
                        <div className={"col p-2"}>
                            <div><h1>Onlinefahrtenbuch</h1></div>
                        </div>
                    </div>
                </div>



                <form onSubmit={handleSubmit}>


                    <div>
                        <label>Vorname:</label>
                        <input
                            type={"text"}
                            id={"vorname"}
                            value={vorname}
                            onChange={(e)=> setVorname(e.target.value)}
                        />

                        <label>Nachname:</label>
                        <input
                            type={"text"}
                            id={"nachname"}
                            value={nachname}
                            onChange={(e)=> setNachname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Nummernschild:</label>
                        <input
                            type={"text"}
                            id={"nummernschild"}
                            value={nummernschild}
                            onChange={(e)=> setNummernschild(e.target.value)}
                        />

                        <label>Baujahr:</label>
                        <input
                            type={"text"}
                            id={"baujahr"}
                            value={baujahr}
                            onChange={(e)=> setBaujahr(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Grund:</label>
                        <input
                            type={"text"}
                            id={"grund"}
                            value={grund}
                            onChange={(e)=> setGrund(e.target.value)}
                        />

                        <label>Datum:</label>
                        <input
                            type={"date"}
                            id={"datum"}
                            value={datum}
                            onChange={(e)=> setDatum(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>KM Stand Begin:</label>
                        <input
                            type={"number"}
                            id={"kmBegin"}
                            value={kmBegin}
                            onChange={(e)=> setKmBegin(e.target.value)}
                        />

                        <label>KM Stand Ende:</label>
                        <input
                            type={"number"}
                            id={"kmEnde"}
                            value={kmEnde}
                            onChange={(e)=> setKmEnde(e.target.value)}
                        />
                    </div>
                    <div>
                        <button>Hinzufügen</button>
                    </div>

                    {formError && <p>{formError}</p>}
                </form>



                <div className={"content"}>
                    <table className={"table table-hover"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>ID</th>
                            <th scope={"col"}>Vorname</th>
                            <th scope={"col"}>Nachname</th>
                            <th scope={"col"}>Nummernschild</th>
                            <th scope={"col"}>Grund</th>
                            <th scope={"col"}>Datum</th>
                            <th scope={"col"}>Baujahr</th>
                            <th scope={"col"}>KM Beginn</th>
                            <th scope={"col"}>KM Ende</th>
                            <th scope={"col"}>Löschen</th>



                        </tr>
                        </thead>
                        <tbody>
                        {fahrten.map((fahrt : any)=>(
                            <tr key={fahrt.fahrten_id}>
                                <td>{fahrt.fahrten_id}</td>
                                <td>{fahrt.vorname}</td>
                                <td>{fahrt.nachname}</td>
                                <td>{fahrt.nummernschild}</td>
                                <td>{fahrt.grund}</td>
                                <td>{fahrt.datum}</td>
                                <td>{fahrt.baujahr}</td>
                                <td>{fahrt.kmBegin}</td>
                                <td>{fahrt.kmEnde}</td>
                                <td><button onClick={()=>handleDeleteFahrt(fahrt.fahrt_id)}>Löschen</button></td>
                                <td>
                                    <Link to={`/bearbeiten/${fahrt.fahrt_id}`}>
                                        <Button variant={"outline-dark"}>Bearbeiten</Button>
                                    </Link>
                                </td>

                            </tr>
                        ))}
                        </tbody>
                    </table>


                </div>





            </div>
        </div>
    )
}

export default Onlinefahrtenbuch;