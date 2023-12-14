import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import 'bootswatch/dist/pulse/bootstrap.min.css';
import Ausgabe from "./Components/ausgabe";


const Liste: FC  = () => {
    const [rideList, setRideList] = useState<IInformation[]>([]);
    const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);

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
    const completeRide = (idToDelete:string):void => {
        setRideList(rideList.filter((id) => {
            return id.id !== idToDelete
        }))
    }

    //Speichern in lokalem Speicher von Browser
    const saveInBrowser = (): void => {
        localStorage.setItem('rideList', JSON.stringify(rideList));
    }

    //Daten aus lokalem speicher holen
    const getFromBrowser = (): IInformation[] => {
        return JSON.parse(localStorage.getItem('rideList') || '[]');
    }

    return <div className={"container-sm"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Anzeige Fahrten</h1></div>
                </div>
            </div>
        </div>

        {/*streifen*/}
        <hr className={"border border-primary border-3 opacity-75"}/>
        <div className={"content"}>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th scope={"col"}>Fahrzeug</th>
                    <th scope={"col"}>Fahrer:in</th>
                    <th scope={"col"}>KM Beginn</th>
                    <th scope={"col"}>KM Ende</th>
                    <th scope={"col"}>Gefahrene Kilometer</th>
                    <th scope={"col"}>Grund der Fahrt</th>
                    <th scope={"col"}>Tag der Fahrt</th>
                </tr>
                </thead>
            </table>
        </div>










        {/*Ausgabe der Liste -> Extra Container*/}
        <div className={"container-sm"}>
            <div className="rideList">
                {rideList.map((ride, rI) => (
                    <Ausgabe ride={ride}  completeRide={completeRide}/>
                ))}
            </div>
        </div>


    </div>
}
export default Liste;