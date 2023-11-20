import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import'bootswatch/dist/pulse/bootstrap.min.css';
// import "bootstrap/dist/css/bootstrap.min.css";
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
  const [id, setId] = useState<string>("");
  const [files, setFiles] = useState("");

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

  //Daten werden als PDF gespeichert
  cgionst exportPdf = () => {
     console.log("Download als PDF");
  }

  //JSON dateien lassen sich hochladen

  // const handleChange = (e: string) => {
  //   const fileReader = new FileReader();
  //   fileReader.readAsText(e.target.files[0], "UTF-8");
  //   fileReader.onload = e => {
  //     console.log("e.target.result", e.target.result);
  //     setFiles(e.target.result);
  //   };
  // };


  return <div className="App">
    <h1 className={"text-center"}>Fahrtenbuch</h1>
    <div className="header">
      <div className="container-sm">




        <div className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Kennzeichen</label>
            </div>
            <div className="col">
              <input id="inputLarge" className="form-control form-control-lg" type="text"
                     placeholder="Kennzeichen"
                     name ="plate"
                     value = {plate}
                     onChange = {handleChange}
              />
            </div>
          </div>
        </div>

      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col">
            <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Fahrer:in</label>
          </div>
          <div className="col">
            <input id="inputLarge" className="form-control form-control-lg" type="text"
                   placeholder="Fahrer:in"
                   name = "driver"
                   value = {driver}
                   onChange = {handleChange}
            />
          </div>
        </div>
      </div>

        <div className={"container text-center"}>
          <div className={"row align-items-center"}>
            <div className={"col"}>
              <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Kilometerstand Beginn</label>
            </div>
            <div className={"col"}>
              <input id="inputLarge" className="form-control form-control-lg" type="number"
                     placeholder="Kilometerstand Beginn"
                     name = "begin"
                     value= {begin}
                     onChange = {handleChange}
              />
            </div>
          </div>
        </div>

        <div className={"container text-center"}>
          <div className={"row align-items-center"}>
            <div className={"col"}>
              <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Kilometerstand Ende</label>
            </div>
            <div className={"col"}>
              <input id="inputLarge" className="form-control form-control-lg" type="number"
                     placeholder="Kilometerstand Ende"
                     name = "end"
                     value = {end}
                     onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={"container text-center"}>
          <div className={"row align-items-center"}>
            <div className={"col"}>
              <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Reisezweck</label>
            </div>
            <div className={"col"}>
              <input id="inputLarge" className="form-control form-control-lg" type="text"
                     placeholder="Reisezweck"
                     name = "reason"
                     value = {reason}
                     onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={"container text-center"}>
          <div className={"row align-items-center"}>
            <div className={"col"}>
              <label className="col-form-label col-form-label-lg mt-4" htmlFor="inputLarge" >Datum</label>
            </div>
            <div className={"col"}>
              <input id="inputLarge" className="form-control form-control-lg" type="date"
                     placeholder="Datum"
                     name = "day"
                     value = {day}
                     onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={"btn-group"} role={"group"}>
          <div className={"text-center"}>
              <button className="btn btn-primary" type="button" onClick={addRide}>Hinzufügen </button>  {/* Eingabe */}
              <button className="btn btn-primary" type="button" onClick={exportData}>JSON </button>
              <button className="btn btn-primary" type="button" onClick={exportPdf}>PDF</button>
          </div>
        </div>


        {/*//todo JSON liste läst sich hochladen und wird ausgegeben*/}
        <div>
          <input type={"file"}
                 id={"formFile"}
                 className={"form-control"}
                 onChange={handleChange}

          />

        </div>

{/*//Ausgabe der */}
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