import React from "react";
import {IInformation} from "../interfaces";
import dayjs from "dayjs";

interface Props {
    ride: IInformation;
    completeRide(numberplateToDelete: string): void;
}

//Ausgabe Inhalt Array
const Ausgabe = ({ride, completeRide}: Props) => {

//Berechnung Distanz
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
                <table className={"table table-hover"}>
                    <tbody>
                    <tr className="table-active">
                        <th>{ride.fahrzeug}</th>
                        <td>{ride.rideDriver}</td>
                        <td>{ride.rideReason}</td>
                        <td>{ride.rideBegin}</td>
                        <td>{distance()}</td>
                        <td>{ride.rideReason}</td>
                        <td>{dayjs(ride.rideDay).format("D.M.YYYY")}</td>
                        <td><button type={"button"} className={"btn btn-outline-primary"} onClick={() =>{
                            completeRide(ride.id);
                        }}>Löschen</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ausgabe