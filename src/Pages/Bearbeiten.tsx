import React, {FC, useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import supabase from "../config/SupabaseClient";

const Bearbeiten : FC = () => {
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {

        const fetchFahrt = async () => {
            const {data, error} = await supabase
                .from('fahrten')
                .select()
                .eq('fahrt_id', id)
                .single()

            if(error){
                navigate("/onlinefahrtenbuch", {replace:true})
            }
            if(data){
                        setVorname(data.vorname)
                        setNachname(data.nachname)
                        setNummernschild(data.nummernschild)
                        setBaujahr(data.baujahr)
                        setGrund(data.grund)
                        setDatum(data.datum)
                        setKmBegin(data.kmBegin)
                        setKmEnde(data.kmEnde)
                        console.log(data);
            }
        }
        fetchFahrt()
    }, [id, navigate]);



    return(
        <div className={"container-sm justify-content-center"}>
            <div className="d-flex justify-content-center">

                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div><h1>Bearbeiten - {id} </h1></div>
                    </div>
                </div>
            </div>


            <form>
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
                        value={nachname}
                        onChange={(e)=> setNachname(e.target.value)}
                    />
                </div>
                <div>
                    <label>Nummernschild:</label>
                    <input
                        type={"text"}
                        value={nummernschild}
                        onChange={(e)=> setNummernschild(e.target.value)}
                    />

                    <label>Baujahr:</label>
                    <input
                        type={"text"}
                        value={baujahr}
                        onChange={(e)=> setBaujahr(e.target.value)}
                    />
                </div>
                <div>
                    <label>Grund:</label>
                    <input
                        type={"text"}
                        value={grund}
                        onChange={(e)=> setGrund(e.target.value)}
                    />

                    <label>Datum:</label>
                    <input
                        type={"date"}
                        value={datum}
                        onChange={(e)=> setDatum(e.target.value)}
                    />
                </div>
                <div>
                    <label>KM Stand Begin:</label>
                    <input
                        type={"number"}
                        value={kmBegin}
                        onChange={(e)=> setKmBegin(e.target.value)}
                    />

                    <label>KM Stand Ende:</label>
                    <input
                        type={"number"}
                        value={kmEnde}
                        onChange={(e)=> setKmEnde(e.target.value)}
                    />
                </div>
                <div>
                    <button>Speichern</button>
                </div>

                {/*{formError && <p>{formError}</p>}*/}
            </form>


        </div>

    )

}

export default Bearbeiten;