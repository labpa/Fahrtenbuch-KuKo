import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'react-uuid';


const App: FC = () => {
  const [plate, setPlate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [begin, setBegin] = useState<any>(0);
  const [end, setEnd] = useState<any>(0);
  const [reason, setReason] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [rideList, setRideList] = useState<IInformation[]>([]);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);

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
  const addRide = () => {
    const newRide = {id:uuid(), numberplate: plate, rideDriver: driver, rideBegin: begin, rideEnd: end, rideReason: reason, rideDay: day }
    setRideList([...rideList, newRide]);
    setPlate("");
    setDriver("");
    setBegin(0);
    setEnd(0);
    setReason("");
    setDay("");
    //saveInBrowser();
    console.log(newRide);
  }

  // loaded fromLocalStorage wird bei deklaration false gesetzt. Hier wird aus false True was das aufrufen der beiden Funktionen zur folge hat
  //todo useEffect LESEN
  useEffect(() => {
    if (!loadedFromLocalStorage) {
      setLoadedFromLocalStorage(true);
      setRideList(getFromBrowser());
    }
  }, [loadedFromLocalStorage]);

  // loadedFromLocalStorage ruft das erneute speichern auf
  useEffect(() => {
    if(loadedFromLocalStorage){
      saveInBrowser();
    }

  }, [loadedFromLocalStorage, rideList]);


  //Löschen
  const completeRide = (numberplateToDelete:string): void => {
    setRideList(rideList.filter((plate)=> {
      return plate.numberplate != numberplateToDelete
    }))
  }

  //todo => Löschen via id nicht mehr numberplate

  // const completeRide = (idToDelete:string): void => {
  //   setRideList(rideList.filter((id)=> {
  //     return id != idToDelete
  //
  //   }))
  // }


  //Speichern in Lokalem Speicher von Browser
  const saveInBrowser = (): void => {
    localStorage.setItem('rideList', JSON.stringify(rideList));
  }

  //Daten aus Lokelem speicher holen
  const getFromBrowser = (): IInformation[] => {
    const ausgabe = JSON.parse(localStorage.getItem('rideList')||'[]');
    return ausgabe;
  }

  //Daten werden in json datei zum Download bereitgestellt
  const exportData = () => {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
        JSON.stringify(rideList)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "rideList.json";
    link.click();
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
        <button onClick={addRide}>Hinzufügen </button>  {/* Eingabe */}
        <button onClick={exportData}>Download</button>    {/* Download Datei als json  */}
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