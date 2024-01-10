import React, {FC, useState} from "react";
import supabase from "../config/SupabaseClient";

const Onlinefahrtenbuch : FC = () => {
    //fahrerin
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    //fahrzeug
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    //fahrt
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);
    //fehler
    const [formError, setFormError] = useState<string | null>(null)

    console.log(vorname);

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        //todo muss noch auf alle Felder angepasst werden zuerst aber upload fertig machen
        if(!vorname || !nachname){
            setFormError('Bitte alle Felder ausfüllen')
            return;
        }
        const{data, error} = await supabase
            .from('fahrerin')
            .insert([{vorname, nachname}])
            .select();




        if(error){
            console.log(error);
        }
        if(data){
            console.log(data);
            setFormError(null);
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

                    <button>Hinzufügen</button>
                    {formError && <p>{formError}</p>}
                </form>


            </div>
        </div>
    )
}

export default Onlinefahrtenbuch;