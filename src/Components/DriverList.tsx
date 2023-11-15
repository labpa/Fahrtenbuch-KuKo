import React from "react";
import {IInformation} from "../interfaces";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride: {numberplate, rideDriver, rideBegin, rideEnd, rideReason, rideDay}, completeRide}: Props) => {
    return(
        <div className='driver'>
            <div className='content'>
                <span>{numberplate}</span>
                <span>{rideDriver}</span>
                <span>{rideBegin}</span>
                <span>{rideEnd}</span>
                <span>{rideReason}</span>
                <span>{rideDay}</span>
            </div>
            <button onClick={() =>{
                completeRide(numberplate);
            }}>Löschen</button>
        </div>
    );
}

export default DriverList