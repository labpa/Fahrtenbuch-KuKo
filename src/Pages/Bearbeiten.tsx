import React, {FC, useState} from "react";

const Bearbeiten : FC = () => {

    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [nummernschild, setNummernschild] = useState("");
    const [baujahr, setBaujahr] = useState("");
    const [grund, setGrund] = useState("");
    const [datum, setDatum] = useState("");
    const [kmBegin, setKmBegin] = useState<any>(0);
    const [kmEnde, setKmEnde] = useState<any>(0);




    const handleUpdate = () => {



    }

    return(
        <div className={"container-sm justify-content-center"}>
            <div className="d-flex justify-content-center">

                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div><h1>Bearbeiten-Online</h1></div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleUpdate}>


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

                {/*{formError && <p>{formError}</p>}*/}
            </form>


        </div>

    )

}

export default Bearbeiten;