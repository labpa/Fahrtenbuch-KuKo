import React from "react";
import {IInformation} from "../interfaces";

interface Props {
    plate: string;
    driver: IInformation;
    begin: IInformation;
    end: IInformation;
    reason: IInformation;
    day: IInformation;
    completeRide(numberplateToDelete: string): void;
}

const DriverList = ({numberplate, rideDriver, rideBegin, rideEnd, rideReason, rideDay}: IInformation) => {
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
                return;
            }}>Löschen</button>
        </div>
    );
}

export default DriverList