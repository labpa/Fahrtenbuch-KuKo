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

const App: FC = () => {

  let {userId} = useParams();
  console.log(userId);

  return <div className="container-sm">
    <div className={"container-sm"}>
      <Navbarzwei/>
    </div>

    <Routes>
      <Route path={"/"} element={<Dashboard/>}/>
      <Route path={"/home"} element={<Fahrtenbuch/>}/>
      <Route path={"/liste"} element={<Liste/>}/>
      <Route path={"/contact"} element={<Contact/>}/>
      <Route path={"/update/${ride.id}"} element={<Update/>}/>
    </Routes>

</div>

}

export default App;