import React, {ChangeEvent, FC, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";

const App: FC = () => {
  const [plate, setPlate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [begin, setBegin] = useState<any>(0);
  const [end, setEnd] = useState<any>(0);
  const [reason, setReason] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [rideList, setRideList] = useState<IInformation[]>([]);

  //Eingabe
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
//Die Eingabe wird an ein Array übergeben
  const addRide = (): void => {
    const newRide = {numberplate: plate, rideDriver: driver, rideBegin: begin, rideEnd: end, rideReason: reason, rideDay: day }
    setRideList([...rideList, newRide])
    setPlate("");
    setDriver("");
    setBegin(0);
    setEnd(0);
    setReason("");
    setDay("");
  }

  //Löschen
  const completeRide = (numberplateToDelete:string): void => {
    setRideList(rideList.filter((plate)=> {
      return plate.numberplate != numberplateToDelete
    }))
  }

  //todo Array soll in lokalem Speicher von Browser gespeichert werden
  const saveInBrowser = (): void => {

  }


  //todo Download als JSON REACT LIBRARY
  const downloadList = (): void => {
    let element = document.createElement('a');
    let text = JSON.stringify(rideList);
    element.setAttribute('href', 'rideList:text/plain; charset=utf-8'+ encodeURIComponent(text));
    element.setAttribute('download', 'fahrtenbuch.json');
    element.style.display='none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
      <div className="button">
        <button onClick={addRide}>Hinzufügen </button>  {/* Button der später die eingabe der Liste hinzufügt */}
        <button onClick={downloadList}>Download</button>    {/* Download Datei als json  */}
      </div>

    </div>
    <div className="rideList">
      {rideList.map((ride, rI) => (
          <DriverList ride={ride} completeRide={completeRide}/>
      ))}
    </div>
  </div>
  //todo <br> entfernen => Bootstrap
}

export default App;
