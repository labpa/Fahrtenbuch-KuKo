import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import DriverList from "./Components/DriverList";
import 'bootswatch/dist/pulse/bootstrap.min.css';
import uuid from 'react-uuid';
import Select, {Options} from 'react-select';
import {Routes, Route, Link} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import Liste from "./Liste";
import Contact from "./Contact";
import Navbar from "./Components/navbar";
import auto from "./images/auto.jpg";



const App: FC = () => {



   //Darstellung
  return <div className="App">
    <div className={"container-sm"}>
      <Navbar/>



    </div>
    <Routes>
      {/*<Route path={"/"} element={<App/>}/>*/}
      <Route path={"/home"} element={<Fahrtenbuch/>}/>
      <Route path={"/liste"} element={<Liste/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
    </Routes>

    <div className={"container-sm"}>
      <div className={"d-flex justify-content-center"}>
        <Link to={"/home"}>
          <img src={auto}/>
        </Link>

      </div>

    </div>



</div>

}

export default App;