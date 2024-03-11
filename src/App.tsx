import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";



import Fahrtenbuch from "./Pages/Fahrtenbuch";
import Liste from "./Pages/Liste";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Update from "./Pages/Update";
import Navbarzwei from "./Components/navbarzwei";
import Error from "./Components/error";
import Footer from "./Components/Footer";
import Impressum from "./Pages/Impressum";
import Onlinefahrtenbuch from "./Pages/Online";

import FahrerinBearbeiten from "./Pages/bearbeiten/FahrerinBearbeiten";
import FahrtBearbeiten from "./Pages/bearbeiten/FahrtBearbeiten";
import FahrzeugBearbeiten from "./Pages/bearbeiten/FahrzeugBearbeiten";
import FahrtDetail from "./Pages/details/FahrtDetail";
import LoginScreen from "./Components/CompLogin";
import Registrieren from "./Pages/Registrieren";
import User from "./Pages/User";
import ProtectedRoute from "./Pages/protection/ProtectedRoute";
import Status from "./Components/Status"
import NeuesPasswort from "./Pages/NeuesPasswort";
import UserBearbeiten from "./Pages/bearbeiten/UserBearbeiten";



const App: FC = () => {

  return <div className="container-sm">
    <div className={"container-sm"}>
      <Navbarzwei/>
    </div>
    <div>
      <Status/>
    </div>
    <Routes>
      //Für die App Relevant
      <Route path={"/"} element={<Dashboard/>}/> //Dashboard            // Dashboard
      <Route path={"/login"} element={<LoginScreen/>}/>                // Login
      <Route path={"/registrieren"} element={<Registrieren/>}/>       // Registrieren
      <Route path={"/contact"} element={<Contact/>}/>                // Kontaktseite
      <Route path={"/impressum"} element={<Impressum/>}/>           // todo Impressum
      <Route path={"/neuespasswort"} element={<NeuesPasswort/>}/>  // Neues Password
      <Route path={"*"} element={<Error/>}/>                      // Fehlermeldung



      // Ab hier Nur nach Login
      <Route element={<ProtectedRoute/>}>
        //User
        <Route path={"/user"} element={<User/>}/>
        <Route path={"/userbearbeiten"} element={<UserBearbeiten/>}/>

        //Fahrtenbuch Offline
        <Route path={"/home"} element={<Fahrtenbuch/>}/>
        <Route path={"/update/:drId"} element={<Update/>}/>
        <Route path={"/liste"} element={<Liste/>}/>

        //Fahrtenbuch Online
        <Route path={"/onlinefahrtenbuch"} element={<Onlinefahrtenbuch/>}/>
        <Route path={"fahrerinbearbeiten/:id"} element={<FahrerinBearbeiten/>}/>
        <Route path={"fahrzeugbearbeiten/:id"} element={<FahrzeugBearbeiten/>}/>
        <Route path={"fahrtbearbeiten/:id"} element={<FahrtBearbeiten/>}/>
        <Route path={"fahrtdetail/:id"} element={<FahrtDetail/>}/>



      </Route>
    </Routes>
    <div>
      <Footer/>
    </div>
</div>

}

export default App;