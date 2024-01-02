import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {IInformation} from "./interfaces";
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom";

const Update: FC = () => {

    const [rideList, setRideList] = useState<IInformation[]>([]);
    const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
    let {drId} = useParams();
    let [values, setValues] = useState({
        id: drId,
        rideDriver: "",
        rideBegin: "",
        rideEnd: "",
        rideReason: "",
        rideDay: ""
    })


    //Daten aus lokalem speicher holen
    const getFromBrowser = (): IInformation[] => {
        return JSON.parse(localStorage.getItem('rideList') || '[]');
    }


    // todo hier weiter!!
    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('rideList') || '[]');
        if(getData.find((entry: any) => entry.id === drId)){
            let datensatz = getData.find((entry: any) => entry.id === drId);
            // console.log(datensatz);
            // console.log(datensatz.id);
            // console.log(datensatz.rideDriver);
            setValues({...values, id: datensatz.id,
                rideDriver: datensatz.rideDriver ,
                rideBegin: datensatz.rideBegin,
                rideEnd: datensatz.rideEnd,
                rideReason: datensatz.rideReason,
                rideDay: datensatz.rideDay })
        }else {
            console.log("No Data!")
        }
    }, [drId]);


    //Speichern in lokalem Speicher von Browser
    const saveInBrowser = (): void => {
        localStorage.setItem('rideList', JSON.stringify(rideList));
    }


    // loaded fromLocalStorage wird bei deklaration false gesetzt. Hier wird aus false True was das aufrufen der beiden Funktionen zur folge hat
    useEffect(() => {
        if (!loadedFromLocalStorage) {
            setLoadedFromLocalStorage(true);
            setRideList(getFromBrowser());
        }
    }, [loadedFromLocalStorage]);


    // loadedFromLocalStorage ruft das erneute speichern auf
    useEffect(() => {
        if(loadedFromLocalStorage){
            saveInBrowser();
        }
    }, [loadedFromLocalStorage, rideList]);


    //todo Funktion die Speichert und änderungen dem State übergibt
    const save = () => {
        console.log("Speichern");
    }


    return <div className={"container-sm"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Bearbeiten</h1></div>
                </div>
            </div>
        </div>

        {/*Fahrer:in*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Fahrer:in</label>
                </div>
                <div className={"col p-2"}>
                    <input type="text"
                           placeholder="Fahrer:in"
                           className={"form-control"}
                           name ="driver"
                           value={values.rideDriver}


                    />
                </div>
            </div>
        </div>

        {/*Kilometerstand Beginn*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Kilometerstand Beginn</label>
                </div>
                <div className={"col p-2"}>
                    <input type="number"
                           placeholder="Kilometerstand Beginn"
                           className={"form-control"}
                           name = "begin"
                           value={values.rideBegin}

                    />
                </div>
            </div>
        </div>

        {/*Kilometerstand Ende*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Kilometerstand Ende</label>
                </div>
                <div className={"col p-2"}>
                    <input type="number"
                           placeholder="Kilometerstand Ende"
                           className={"form-control"}
                           name = "end"
                           value={values.rideEnd}

                    />
                </div>
            </div>
        </div>

        {/*Reisezweck*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Fahrzweck</label>
                </div>
                <div className={"col p-2"}>
                    <input type="text"
                           placeholder="Reisezweck"
                           className={"form-control"}
                           name = "reason"
                           value={values.rideReason}

                    />
                </div>
            </div>
        </div>


        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Datum</label>
                </div>
                <div className={"col p-2"}>
                    <input type="date"
                           placeholder="Datum"
                           className={"form-control"}
                           name = "day"
                           value={values.rideDay}

                    />
                </div>
            </div>
        </div>

        {/*Button*/}
        <div className={"row"}>
            <div className={"col"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"p-3"}>
                        <Button variant={"outline-dark"} onClick={save}>Speichern</Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Update;