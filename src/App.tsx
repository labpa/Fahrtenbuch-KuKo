import React, {FC} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";



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
import Buecher from "./Pages/Buecher";
import BuecherUpdate from "./Pages/BuecherUpdate";
import BuecherOnline from "./Pages/BuecherOnline";
import BuecherOnlineUpdate from "./Pages/BuecherOnlineUpdate";
import Produkte from "./Pages/Produkte";
import FahrerinBearbeiten from "./Pages/bearbeiten/FahrerinBearbeiten";
import FahrtBearbeiten from "./Pages/bearbeiten/FahrtBearbeiten";
import FahrzeugBearbeiten from "./Pages/bearbeiten/FahrzeugBearbeiten";
import FahrtDetail from "./Pages/details/FahrtDetail";
import LoginScreen from "./Components/CompLogin";
import Registrieren from "./Pages/Registrieren";
import User from "./Pages/User";
import ProtectedRoute from "./Pages/details/ProtectedRoute";
import Status from "./Components/Status"
import NeuesPasswort from "./Pages/NeuesPasswort";



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

      // todo kann weg!
      //Bücher offline todo entfernen
      <Route path={"/buecher"} element={<Buecher/>}/> //
      <Route path={"/buecherupdate/:id"} element={<BuecherUpdate/>}/>

      //Ausgabe Vinyl Sammlung todo entfernen
      <Route path={"/eingabe"} element={<Eingabe/>}/>       // Eingabe der Daten
      <Route path={"/datenbank"} element={<Datenbank/>}/>   // Ausgabe der Daten

      // Playground / Testzone todo entfernen
      <Route path={"/test"} element={<Test/>}/>

      // Produkte todo entfernen
      <Route path={"/produkte"} element={<Produkte/>}/>   // Übung Daten abholen :D


      // Ab hier Nur nach Login
      <Route element={<ProtectedRoute/>}>
        //User
        <Route path={"/user"} element={<User/>}/>

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

        // Bücher Online
        <Route path={"/buecheronline"} element={<BuecherOnline/>}/>
        <Route path={"/buecheronlineupdate/:id"} element={<BuecherOnlineUpdate/>}/>

      </Route>
    </Routes>
    <div>
      <Footer/>
    </div>
</div>

}

export default App;