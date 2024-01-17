import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import {Provider} from "react-redux";


import Fahrtenbuch from "./Pages/Fahrtenbuch";
import Liste from "./Pages/Liste";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Update from "./Pages/Update";
import Navbarzwei from "./Components/navbarzwei";
import Test from "./Pages/Test";
import Error from "./Components/error";
import Footer from "./Components/Footer";
import Impressum from "./Pages/Impressum";
import Datenbank from "./Pages/Datenbank";
import Eingabe from "./Pages/Eingabe";
import Onlinefahrtenbuch from "./Pages/Online";
import Bearbeiten from "./Pages/Bearbeiten";



const App: FC = () => {




  return <div className="container-sm">
    <div className={"container-sm"}>
      <Navbarzwei/>
    </div>
    <Routes>
      <Route path={"/"} element={<Dashboard/>}/>
      <Route path={"/home"} element={<Fahrtenbuch/>}/>
      <Route path={"/onlinefahrtenbuch"} element={<Onlinefahrtenbuch/>}/>
      <Route path={"/liste"} element={<Liste/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
      <Route path={"/update/:drId"} element={<Update/>}/>
      <Route path={"/test"} element={<Test/>}/>
      <Route path={"/impressum"} element={<Impressum/>}/>
      <Route path={"/datenbank"} element={<Datenbank/>}/>
      <Route path={"/eingabe"} element={<Eingabe/>}/>
      <Route path={"/bearbeiten/:id"} element={<Bearbeiten/>}/>
      <Route path={"*"} element={<Error/>}/>
    </Routes>
    <div>
      <Footer/>
    </div>
</div>

}

export default App;