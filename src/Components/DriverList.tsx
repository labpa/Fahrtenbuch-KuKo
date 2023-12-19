import React from "react";
import {IInformation} from "../interfaces";
import dayjs from "dayjs";
import { Link } from "react-router-dom";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride, completeRide}: Props) => {

//Berechnung Distanz
    const distance = () => {
        if(parseInt(String(ride.rideEnd)) >= parseInt(String(ride.rideBegin))){
            return parseInt(String(ride.rideEnd)) - parseInt(String(ride.rideBegin));
        } else {
            return "Ungültig";
        }
    }
const change = () => {
        console.log("Bearbeiten");
}


    return(
        <div className='driver'>
            <div className='content'>


                <div className={"row"}>
                    <div className={"col p-1"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Fahrzeug:&nbsp;&nbsp;</label>
                            <span>{ride.fahrzeug}</span>
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
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <div className={"p-3"}>
                                <button type={"button"} className={"btn btn-outline-primary"} onClick={() =>{
                                    completeRide(ride.id);
                                }}>Löschen</button>
                            </div>
                            <div className={"p-3"}>
                                <Link to={"/update"}>
                                    <button type={"button"} className={"btn btn-outline-primary"}>Bearbeiten</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
                <hr className={"border border-primary border-3 opacity-75"}/>
            </div>
        </div>
    );
}

export default DriverList