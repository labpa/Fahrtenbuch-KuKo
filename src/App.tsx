import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  
  return <div className="App">
    <h1>Fahrtenbuch</h1>
    <div className="header">
      <div className="inputContainer">
        <input type="text"
        placeholder="Kennzeichen"
      /><br></br>
      <input type="text"
        placeholder="Fahrer:in"
      /><br></br>
      <input type="number"
        placeholder="Kilometerstand Beginn"
      /><br></br>
      <input type="number"
        placeholder="Kilometerstand Ende"
      /><br></br>
      {/* Das mit den <br> kann so nicht bleiben I´m very sure! */}
      <input type="text"
        placeholder="Reisezweck"
      /><br></br>
      <input type="date"
        placeholder="Datum"
      />
      </div>
      
      <button>Hinzufügen</button>  {/* Button der später die eingabe der Liste hinzufügt */}
      <button>Download</button>    {/* Download Datei als json  */}
    </div>
  </div>
}

export default App;
