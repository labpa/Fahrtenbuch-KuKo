import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import 'bootswatch/dist/pulse/bootstrap.min.css';
import uuid from 'react-uuid';
import Select, {Options} from 'react-select';
import {Routes, Route, Link} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import About from "./About";
import Contact from "./Contact";


const App: FC = () => {



   //Darstellung
  return <div className="App">
    <Routes>
      <Route path={"home"} element={<Fahrtenbuch/>}/>
      <Route path={"about"} element={<About/>}/>
      <Route path={"contact"} element={<Contact/>}/>
    </Routes>

</div>

}

export default App;