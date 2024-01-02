import React, {FC} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useParams} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import Liste from "./Liste";
import Contact from "./Contact";
// import Navbar from "./Components/navbar";
import Dashboard from "./dashboard";
import Update from "./update";
import Navbarzwei from "./Components/navbarzwei";
import Test from "./test";
import Button from 'react-bootstrap/Button';

const App: FC = () => {




  return <div className="container-sm">
    <div className={"container-sm"}>
      <Navbarzwei/>
    </div>

    <Routes>
      <Route path={"/"} element={<Dashboard/>}/>
      <Route path={"/home"} element={<Fahrtenbuch/>}/>
      <Route path={"/liste"} element={<Liste/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
      {/*/!*<Route path={"/update/${ride.id}"} element={<Update/>}/>*!/ ride.id wird als Parameter der url angehängt allerdings ohne useParams zu verwenden*/}
      <Route path={"/update/:drId"} element={<Update/>}/>
      <Route path={"/test"} element={<Test/>}/>
    </Routes>

</div>

}

export default App;