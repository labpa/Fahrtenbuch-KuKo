import React from "react";
import {IInformation} from "../interfaces";
import dayjs from "dayjs";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride: {id, numberplate, rideDriver, rideBegin, rideEnd, rideReason, rideDay}, completeRide}: Props) => {

    const distance = () => {
        let distanz: number= 0;
        if(rideEnd >= rideBegin){
            distanz = rideEnd - rideBegin;
            return distanz;
        } else {
            return "Ungültig";
        }
    }

    return(
        <div className='driver'>
            <div className='content'>

                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Kennzeichen:&nbsp;&nbsp;</label>
                            <span>{numberplate}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Fahrer:in:&nbsp;&nbsp;</label>
                            <span>{rideDriver}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Beginn:&nbsp;&nbsp;</label>
                            <span>{rideBegin}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Ende:&nbsp;&nbsp;</label>
                            <span>{rideEnd}</span>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Gefahrene Kilometer:&nbsp;&nbsp;</label>
                            <span>{distance()}</span>
                        </div>
                    </div>
                </div>




                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label className={"text-"}>Grund der Fahrt:&nbsp;&nbsp;</label>
                            <span className={"text-end"}>{rideReason}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Tag der Fahrt:&nbsp;&nbsp;</label>
                            <span>{dayjs(rideDay).format("D.M.YYYY")}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div className={"d-flex justify-content-center"}>
                            <button type={"button"} className={"btn btn-outline-primary"} onClick={() =>{
                                completeRide(id);
                            }}>Löschen</button>
                        </div>
                    </div>
                </div>
                <hr className={"border border-primary border-3 opacity-75"}/>
            </div>
        </div>
    );
}

export default DriverList