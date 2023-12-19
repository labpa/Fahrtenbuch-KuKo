import React, {FC} from 'react';
import './App.css';
import 'bootswatch/dist/pulse/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import Fahrtenbuch from "./Fahrtenbuch";
import Liste from "./Liste";
import Contact from "./Contact";
import Navbar from "./Components/navbar";
import Dashboard from "./dashboard";
import Update from "./update";

const App: FC = () => {

  return <div className="container-sm">
    <div className={"container-sm"}>
      <Navbar/>
    </div>

    <Routes>
      <Route path={"/"} element={<Dashboard/>}/>
      <Route path={"/home"} element={<Fahrtenbuch/>}/>
      <Route path={"/liste"} element={<Liste/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
      <Route path={"/update"} element={<Update/>}/>
    </Routes>

</div>

}

export default App;