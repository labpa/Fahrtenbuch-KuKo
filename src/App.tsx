import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  
  return <div className="App">
    <h1>Fahrtenbuch</h1>
    <div className="header">
      <div className="inputContainer">
        <input type="text"
        placeholder="Kennzeichen"
      />
      <input type="text"
        placeholder="Fahrer:in"
      />
      <input type="number"
        placeholder="Kilometerstand Beginn"
      />
      <input type="number"
        placeholder="Kilometerstand Ende"
      />
      <input type="text"
        placeholder="Reisezweck"
      />
      <input type="date"
        placeholder="Datum"
      />
      </div>
      <button>Hinzufügen</button>
      <button>Download</button>
    </div>
  </div>
}

export default App;
