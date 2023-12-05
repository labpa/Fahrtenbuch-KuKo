import React from "react";
import {IInformation} from "../interfaces";
import dayjs from "dayjs";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride, completeRide}: Props) => {

    // const distance = () => {
    //     let distanz: number= 0;
    //     let beginn : number= parseInt(String(ride.rideBegin));
    //     let end : number= parseInt(String(ride.rideEnd));
    //     if(end >= beginn){
    //         distanz = end - beginn;
    //         return distanz;
    //     } else {
    //         return "Ungültig";
    //     }
    // }

    const distance = () => {
        if(parseInt(String(ride.rideEnd)) >= parseInt(String(ride.rideBegin))){
            return parseInt(String(ride.rideEnd)) - parseInt(String(ride.rideBegin));
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
                            <span>{ride.numberplate}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Fahrer:in:&nbsp;&nbsp;</label>
                            <span>{ride.rideDriver}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Beginn:&nbsp;&nbsp;</label>
                            <span>{ride.rideBegin}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Ende:&nbsp;&nbsp;</label>
                            <span>{ride.rideEnd}</span>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Gefahrene Kilometer:&nbsp;&nbsp;</label>
                            <span>{distance()}</span>
                            {/*<span>{distanceZwei()}</span>*/}
                        </div>
                    </div>
                </div>




                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label className={"text-"}>Grund der Fahrt:&nbsp;&nbsp;</label>
                            <span className={"text-end"}>{ride.rideReason}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Tag der Fahrt:&nbsp;&nbsp;</label>
                            <span>{dayjs(ride.rideDay).format("D.M.YYYY")}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div className={"d-flex justify-content-center"}>
                            <button type={"button"} className={"btn btn-outline-primary"} onClick={() =>{
                                completeRide(ride.id);
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