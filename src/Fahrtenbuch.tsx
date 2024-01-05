import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import uuid from 'react-uuid';
import Select, {Options} from 'react-select';
import Button from "react-bootstrap/Button";
import {useParams} from "react-router-dom";


const Fahrtenbuch: FC = () => {
    const [plate, setPlate] = useState<string>("");
    const [driver, setDriver] = useState<string>("");
    const [begin, setBegin] = useState<any>(0);
    const [end, setEnd] = useState<any>(0);
    const [reason, setReason] = useState<string>("");
    const [day, setDay] = useState<string>("");
    const [rideList, setRideList] = useState<IInformation[]>([]);
    const [updateRideList, setUpdateRideList] = useState<IInformation[]>([]);
    const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
    const [files, setFiles] = useState<string | ArrayBuffer | null | undefined>(null)
    const [car, setCar] = useState<string>("");
    let {drId} = useParams();


    //Array mit den Fahrzeugen
    const cars: Options<any> = [
        { value: "B-SP-1234", label: "B-SP-1234" },
        { value: "HH-OP-4321", label: "HH-OP-4321" },
        { value: "S-OS-1312", label: "S-OS-1312" },
        { value: "NT-BE-4321", label: "NT-BE-4321" },
        { value: "F-OG-8721", label: "F-OG-8721"},
        { value: "L-OL-4365", label: "L-OL-4365"},
    ];

    // Eingabe auswahl aus Array cary
    const handleChangeCar = (selectedOption: any) => {
        setCar(selectedOption.value)
    }

    //useEffect bezieht sich auf handleChangeCar -> car Wenn sich car verändert wird lastKm() ausgeführt
    useEffect(() => {
        if(car){
            lastKm();
        }
    },[car])

    //Eingabe
    const handleChange = (event: ChangeEvent <HTMLInputElement>): void => {
        switch(event.target.name){
            case "plate":
                setPlate(event.target.value)
                break;
            case "driver":
                setDriver(event.target.value)
                break;
            case "begin":
                setBegin(event.target.value)
                break;
            case "end":
                setEnd(event.target.value)
                break;
            case "reason":
                setReason(event.target.value)
                break;
            case "day":
                setDay(event.target.value)
                break;
        }
    }

//Eingabe wird an Array übergeben
    const addRide = () => {
        const newRide = {id:uuid(), fahrzeug:car, rideDriver: driver, rideBegin: begin, rideEnd: end, rideReason: reason, rideDay: day }
        setRideList([...rideList, newRide]);
        setCar("");
        setDriver("");
        setBegin(0);
        setEnd(0);
        setReason("");
        setDay("");
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

    //Löschen → Löscht über die id
    const deleteRide = (idToDelete:string):void => {
        setRideList(rideList.filter((id) => {
            return id.id !== idToDelete
        }))
    }

    //Bearbeiten
    const updateRide = (idToUpdate:string):void => {
        setRideList(rideList.filter((id) => {
            return id.id !== idToUpdate
        }))
    }


// ermittelt den letzten km stand einer fahrzeuges
    const lastKm = () => {
        let carRideList = rideList.filter( rli => rli.fahrzeug === car);
        let carKms = carRideList.map(crl => crl.rideEnd);
        let maxKms = Math.max(...carKms);
        setBegin(maxKms);
    }

    //Speichern in lokalem Speicher von Browser
    const saveInBrowser = (): void => {
        localStorage.setItem('rideList', JSON.stringify(rideList));
    }

    //Daten aus lokalem speicher holen
    const getFromBrowser = (): IInformation[] => {
        return JSON.parse(localStorage.getItem('rideList') || '[]');
    }

    //Daten werden in json datei zum Download bereitgestellt
    const exportData = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(rideList)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = "rideList.json";
        link.click();
    }

    //JSON dateien lassen sich hochladen
    const uploadData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileReader = new FileReader();
        if(e.target?.files && e.target.files.length > 0){
            fileReader.readAsText(e.target?.files[0], "UTF-8");
            fileReader.onload = e => {
                setFiles(e.target?.result);
                if(e.target?.result){
                    setRideList(JSON.parse(e.target?.result.toString()));
                }
            };
        }
    };

    //return
    return <div className={"container-sm justify-content-center"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Fahrtenbuch</h1></div>
                </div>
            </div>
        </div>
        {/*streifen*/}
        <hr className={"border-end border-dark border-5 opacity-75"}/>


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
                                        value={cars?.find(c => c.value === car)}
                                        placeholder={"Fahrzeug"}
                                        onChange = {handleChangeCar}
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
                               value = {driver}
                               onChange = {handleChange}
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
                               value= {begin}
                               onChange = {handleChange}
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
                               value = {end}
                               onChange={handleChange}
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
                               value = {reason}
                               onChange={handleChange}
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
                               value = {day}
                               onChange={handleChange}
                        />
                    </div>
                </div>
            </div>


            {/*Button*/}
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"d-flex justify-content-center"}>
                        <div className={"p-3"}>
                            <Button variant={"outline-dark"} onClick={addRide}>Hinzufügen</Button>
                        </div>
                        <div className={"p-3"}>
                            <Button variant={"outline-dark"} onClick={exportData}>Download</Button>
                        </div>
                    </div>
                </div>
            </div>

            {/*Upload*/}
            <div className={"row"}>
                <div className={"col p-3"}>
                    <div className={"d-flex justify-content-center"}>
                        <input type={"file"}
                               className={"form-control"}
                               id={"formFile"}
                               onChange={uploadData}
                        />
                    </div>
                </div>
            </div>


        <hr className={"border-end border-dark border-5 opacity-75"}/>


         {/*Ausgabe der Liste -> Extra Container*/}
         <div className={"container-sm"}>
                <div className="rideList">
                    {rideList.map((ride, rI) => (
                       <DriverList ride={ride} key={ride.id} deleteRide={deleteRide} updateRide={updateRide}/>
                   ))}
                </div>
         </div>
</div>
}
export default Fahrtenbuch;