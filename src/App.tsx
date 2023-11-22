import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import'bootswatch/dist/pulse/bootstrap.min.css';
import uuid from 'react-uuid';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import dayjs from "dayjs";
import { PDFViewer } from '@react-pdf/renderer';


const App: FC = () => {
  const [plate, setPlate] = useState<string>("");
  const [driver, setDriver] = useState<string>("");
  const [begin, setBegin] = useState<any>(0);
  const [end, setEnd] = useState<any>(0);
  const [reason, setReason] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [rideList, setRideList] = useState<IInformation[]>([]);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [files, setFiles] = useState<string | ArrayBuffer | null | undefined>(null)


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
    setId("");
    setPlate("");
    setDriver("");
    setBegin(0);
    setEnd(0);
    setReason("");
    setDay("");
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

  //Löschen -> Löscht über die id
   const completeRide = (idToDelete:string):void => {
    setRideList(rideList.filter((id) => {
      return id.id != idToDelete
     }))
   }

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

  //todo Daten werden als PDF gespeichert
  const exportPdf = () => {
     console.log("Download als PDF");
  }

  //JSON dateien lassen sich hochladen
  const uploadData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    if(e.target?.files && e.target.files.length > 0){
      fileReader.readAsText(e.target?.files[0], "UTF-8");
      fileReader.onload = e => {
        setFiles(e.target?.result);
        if(e.target?.result){
          setRideList(JSON.parse(e.target?.result.toString()));
        }
      };
    };
  };

   //Layout oder so
  return <div className="App">
    <div className={"container-sm"}>
      <div className={"border"}>

        {/*Überschrift -> Fahrtenbuch*/}
        <div className="d-flex justify-content-center">
          <div className={"row"}>
            <div className={"col"}>
              <div><h1>Fahrtenbuch</h1></div>
            </div>
          </div>
        </div>

        {/*Kennzeichen*/}
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div>
                <label className={"col-form-label mt-0"}>Kennzeichen</label>
              </div>

              {/*Inputfield Kennzeichen*/}
              <div>
                <input type="text"
                       placeholder="Kennzeichen"
                       className={"form-control"}
                       name ="plate"
                       value = {plate}
                       onChange = {handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Fahrer:in*/}
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <div>
                <label className={"col-form-label mt-0"}>Fahrer:in</label>
              </div>

              {/*Inputfield Fahrer:in*/}
              <div>
                <input type="text"
                       placeholder="Fahrer:in"
                       className={"form-control"}
                       name = "driver"
                       value = {driver}
                       onChange = {handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Kilometerstand Beginn*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className="d-flex justify-content-center">
              <div>
                <label className={"col-form-label mt-0"}>Kilometerstand Beginn</label>
              </div>

              {/*Inputfield Kilometerstand Beginn*/}
              <div>
                <input type="number"
                       placeholder="Kilometerstand Beginn"
                       className={"form-control"}
                       name = "begin"
                       value= {begin}
                       onChange = {handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Kilometerstand Ende*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className={"d-flex justify-content-center"}>
              <div>
                <label className={"col-form-label mt-0"}>Kilometerstand Ende</label>
              </div>

              {/*  Inputfield Kilometerstand Ende*/}
              <div>
                <input type="number"
                       placeholder="Kilometerstand Ende"
                       className={"form-control"}
                       name = "end"
                       value = {end}
                       onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Reisezweck*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className={"d-flex justify-content-center"}>
              <div>
                <label className={"col-form-label mt-0"}>Reisezweck</label>
              </div>

              {/*  Insertfield Reisezweck*/}
              <div>
                <input type="text"
                       placeholder="Reisezweck"
                       className={"form-control"}
                       name = "reason"
                       value = {reason}
                       onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Datum*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className={"d-flex justify-content-center"}>
              <div>
                <label className={"col-form-label mt-4"}>Datum</label>
              </div>

              {/*Inputfield Datum*/}
              <div>
                <input type="date"
                       placeholder="Datum"
                       className={"form-control"}
                       name = "day"
                       value = {day}
                       onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/*Button*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className={"d-flex justify-content-center"}>
              <button type={"button"} className={"btn btn-outline-primary"} onClick={addRide}>Hinzufügen </button>  {/* Eingabe */}
              <button type={"button"} className={"btn btn-outline-primary"} onClick={exportData}>JSON </button>
              <button type={"button"} className={"btn btn-outline-primary"} onClick={exportPdf}>PDF</button>
            </div>
          </div>
        </div>

        {/*Upload*/}
        <div className={"row"}>
          <div className={"col"}>
            <div className={"d-flex justify-content-center"}>
              <input type={"file"}
                     className={"form-control"}
                     id={"formFile"}
                     onChange={uploadData}
              />
            </div>
          </div>
        </div>

      </div>
    </div>

    {/*Ausgabe der Liste -> Extra Container*/}
    <div className={"container-sm"}>
      <div className={"border"}>
          <div className="rideList">
            {rideList.map((ride, rI) => (
                <DriverList ride={ride} completeRide={completeRide}/>
            ))}
          </div>
        </div>
    </div>

</div>

}

export default App;