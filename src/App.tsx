import React, { FC, useState } from 'react';
import './App.css';
import {IInformation} from "./interfaces";


const App: FC = () => {
  const [plate, setPlate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [begin, setBegin] = useState<number>(0);
  const [end, setEnd] = useState<number>(0);
  const [reason, setReason] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [rideList, setRideList] = useState<IInformation[]>([]);

  const addRide = (): void => {
    const newRide = {numberplate: plate, rideDriver: driver, rideBegin: begin, rideEnd: end, rideReason: reason, rideDay: day }
    setRideList([...rideList, newRide])
    setPlate("");
    setDriver("");
    setBegin(0);
    setEnd(0);
    setReason("");
    setDay("");
    console.log(rideList);
  }
  // todo: Event klick Eintragen der Daten in Array


  return <div className="App">
    <h1>Fahrtenbuch</h1>
    <div className="header">
      <div className="inputContainer">


        <input type="text"
        placeholder="Kennzeichen"
        //name ="kennzeichen"
        defaultValue = {plate}
      /><br></br>


      <input type="text"
        placeholder="Fahrer:in"
        defaultValue = {driver}
      /><br></br>

      <input type="number"
        placeholder="Kilometerstand Beginn"
        defaultValue = {begin}
      /><br></br>


      <input type="number"
        placeholder="Kilometerstand Ende"
        defaultValue = {end}
      /><br></br>


      {/* Das mit den <br> kann so nicht bleiben I´m very sure! */}
      <input type="text"
        placeholder="Reisezweck"
        defaultValue = {reason}
      /><br></br>


      <input type="date"
        placeholder="Datum"
        defaultValue = {day}
      />
      </div>
      
      <button onClick={addRide}>Hinzufügen </button>  {/* Button der später die eingabe der Liste hinzufügt */}
      <button>Download</button>    {/* Download Datei als json  */}
    </div>
  </div>
}

export default App;
