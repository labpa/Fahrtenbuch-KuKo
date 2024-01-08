import React, {FC} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, useParams} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import Liste from "./Liste";
import Contact from "./Contact";
import Dashboard from "./dashboard";
import Update from "./update";
import Navbarzwei from "./Components/navbarzwei";
import Test from "./test";
import Error from "./Components/error";
import Footer from "./Components/Footer";
import Impressum from "./Impressum";


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
      <Route path={"/update/:drId"} element={<Update/>}/>
      <Route path={"/test"} element={<Test/>}/>
      <Route path={"/impressum"} element={<Impressum/>}/>
      <Route path={"*"} element={<Error/>}/>
    </Routes>
    <div>
      <Footer/>
    </div>
</div>

}

export default App;