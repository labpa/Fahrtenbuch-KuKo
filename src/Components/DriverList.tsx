import React from "react";
import {IInformation} from "../interfaces";
import dayjs from "dayjs";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const DriverList = ({ride: {id, numberplate, rideDriver, rideBegin, rideEnd, rideReason, rideDay}, completeRide}: Props) => {
    return(
        <div className='driver'>
            <div className='content'>

                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label className={"col-form-label mt-4"}>Kennzeichen:</label>
                            <span className={"col-form-label mt-4"}>{numberplate}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Fahrer:in:</label>
                            <span>{rideDriver}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Beginn:</label>
                            <span>{rideBegin}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>KM Ende:</label>
                            <span>{rideEnd}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Grund der Fahrt:</label>
                            <span>{rideReason}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <label>Tag der Fahrt:</label>
                            <span>{dayjs(rideDay).format("D.M.YYYY")}</span>
                        </div>
                    </div>
                </div>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"d-flex justify-content-center"}>
                            <button type={"button"} className={"btn btn-outline-primary"} onClick={() =>{
                                completeRide(id);
                            }}>Löschen</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DriverList