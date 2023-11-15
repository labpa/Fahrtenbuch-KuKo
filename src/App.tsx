import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";

const App: FC = () => {
  const [plate, setPlate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [begin, setBegin] = useState<any>(0);
  const [end, setEnd] = useState<any>(0);
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

  const handleChange = (event: ChangeEvent <HTMLInputElement>): void => {
    switch(event.target.name){
      case "plate":
        setPlate(event.target.value)
            break;
      case "driver":
        setDriver(event.target.value)
            break
      case "begin":
        setBegin(event.target.value)
            break;
      case "end":
        setEnd(event.target.value)
            break;
      case "reason":
        setReason(event.target.value)
            break;
      case "day":
        setDay(event.target.value)
            break;
    }
  }

  return <div className="App">
    <h1>Fahrtenbuch</h1>
    <div className="header">
      <div className="inputContainer">


        <input type="text"
        placeholder="Kennzeichen"
        name ="plate"
        value = {plate}
        onChange = {handleChange}
      /><br></br>


      <input type="text"
        placeholder="Fahrer:in"
        name = "driver"
        value = {driver}
        onChange = {handleChange}
      /><br></br>

      <input type="number"
        placeholder="Kilometerstand Beginn"
        name = "begin"
        value= {begin}
        onChange = {handleChange}
      /><br></br>


      <input type="number"
        placeholder="Kilometerstand Ende"
        name = "end"
        value = {end}
        onChange={handleChange}
      /><br></br>


      {/* Das mit den <br> kann so nicht bleiben I´m very sure! */}
      <input type="text"
        placeholder="Reisezweck"
        name = "reason"
        value = {reason}
        onChange={handleChange}
      /><br></br>


      <input type="date"
        placeholder="Datum"
        name = "day"
        value = {day}
        onChange={handleChange}
      />
      </div>
      
      <button onClick={addRide}>Hinzufügen </button>  {/* Button der später die eingabe der Liste hinzufügt */}
      <button>Download</button>    {/* Download Datei als json  */}
    </div>
  </div>
}

export default App;
