import React from "react";
import {IInformation} from "../interfaces";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride: {id, numberplate, rideDriver, rideBegin, rideEnd, rideReason, rideDay}, completeRide}: Props) => {
    return(
        <div className='driver'>
            <div className='content'>
                <p>Nummernschild:</p>
                <span>{numberplate}</span>
                <p>Fahrer:in: </p>
                <span>{rideDriver}</span>
                <p>KM stand Beginn</p>
                <span>{rideBegin}</span>
                <p>KM stand Ende</p>
                <span>{rideEnd}</span>
                <p>Grund</p>
                <span>{rideReason}</span>
                <p>Tag</p>
                <span>{rideDay}</span>
            </div>
            <button onClick={() =>{
                completeRide(id);
            }}>Löschen</button>
        </div>
    );
}

export default DriverList