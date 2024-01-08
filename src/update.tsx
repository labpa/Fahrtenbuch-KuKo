import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {IInformation} from "./interfaces";
import Button from "react-bootstrap/Button";
import {Link, useParams} from "react-router-dom";
import Select, {Options} from "react-select";
import Error from "./Components/error";

const Update: FC = () => {

    const [rideList, setRideList] = useState<IInformation[]>([]);
    const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
    let {drId} = useParams();
    let [values, setValues] = useState({
        id: drId,
        fahrzeug:"",
        rideDriver: "",
        rideBegin: "",
        rideEnd: "",
        rideReason: "",
        rideDay: ""
    })

    //Array mit den Fahrzeugen
    const cars: Options<any> = [
        { value: "B-SP-1234", label: "B-SP-1234" },
        { value: "HH-OP-4321", label: "HH-OP-4321" },
        { value: "S-OS-1312", label: "S-OS-1312" },
        { value: "NT-BE-4321", label: "NT-BE-4321" },
        { value: "F-OG-8721", label: "F-OG-8721"},
        { value: "L-OL-4365", label: "L-OL-4365"},
    ];


    //Daten aus lokalem speicher holen
    const getFromBrowser = (): IInformation[] => {
        return JSON.parse(localStorage.getItem('rideList') || '[]');
    }


    // übergibt die id des zu bearbeitenden Datensatzes und setzt Values
    useEffect(() => {
        let getData = JSON.parse(localStorage.getItem('rideList') || '[]');
        if(getData.find((entry: any) => entry.id === drId)){
            let datensatz = getData.find((entry: any) => entry.id === drId);
            console.log(datensatz);
            setValues({...values, id: datensatz.id,
                fahrzeug: datensatz.fahrzeug,
                rideDriver: datensatz.rideDriver ,
                rideBegin: datensatz.rideBegin,
                rideEnd: datensatz.rideEnd,
                rideReason: datensatz.rideReason,
                rideDay: datensatz.rideDay })
        }else {
            console.log("No Data!");

        }
    }, [drId]);

    const handleChangeCarUpdate = (selectedOption: any) => {
        setValues({...values, fahrzeug: selectedOption.value})
    }

    const handleChangeUpdate = (event: ChangeEvent <HTMLInputElement>): void => {
        switch(event.target.name){
            case "driver":
              setValues({...values, rideDriver: event.target.value})
                break;
            case "begin":
                setValues({...values, rideBegin: event.target.value})
                break;
            case "end":
              setValues({...values, rideEnd: event.target.value})
                break;
            case "reason":
                setValues({...values, rideReason: event.target.value})
                break;
            case "day":
                setValues({...values, rideDay: event.target.value})
        }
    }


    //Speichern in lokalem Speicher von Browser
    const saveInBrowser = (): void => {
        let datensatz = values;
         const updateRideList = rideList.map(item => {
             if(item.id === datensatz.id){
                 return datensatz;
             }
             return item;
         })
        localStorage.setItem('rideList', JSON.stringify(updateRideList));
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


    return <div className={"container-sm justify-content-center"}>

        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Bearbeiten</h1></div>
                </div>
            </div>
        </div>

        {/* Kennzeichen mit Auswahl*/}

            <div className={"container text-center p-2"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"text-end"}>
                            <label className={"col-form-label mt-2"}>Fahrzeug</label>
                        </div>

                    </div>
                    <div className={"col p-2"}>
                        <div className={"form-group row"}>
                            <Select className={"exampleSelect1"}
                                    id={"exampleSelect1"}
                                    options={cars}
                                    name={"car"}
                                    value={cars?.find(c => c.value === values.fahrzeug)}
                                    placeholder={"Fahrzeug"}
                                    onChange = {handleChangeCarUpdate}
                            />
                        </div>
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
                           onChange={handleChangeUpdate}
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
                           onChange={handleChangeUpdate}
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
                           onChange={handleChangeUpdate}
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
                           onChange={handleChangeUpdate}
                    />
                </div>
            </div>
        </div>

        {/*Datum*/}
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
                           onChange={handleChangeUpdate}
                    />
                </div>
            </div>
        </div>

        {/*Button*/}
        <div className={"row"}>
            <div className={"col"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"p-3"}>
                        <Link to={"/liste"}>
                            <Button onClick={saveInBrowser} variant={"outline-dark"}>Speichern</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Update;