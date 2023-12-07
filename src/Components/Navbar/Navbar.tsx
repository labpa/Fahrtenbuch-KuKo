import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import'bootswatch/dist/pulse/bootstrap.min.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Fahrtenbuch from "../pages/Fahrtenbuch";
import Dokumentation from "../pages/Dokumentation";
import App from "../../App";

const Navbar = () =>{
    return (

        <nav>
            <Link to={"App"}>App</Link>
            <ul>
                <li>
                    <Link to ={"/Dokumentation"}>Dokumentation</Link>
                </li>
            </ul>
        </nav>

        // <Router>
        //     <Route path="/" element={<App/>}>
        //         <Route path="Fahrtenbuch" element={<Fahrtenbuch/>} />
        //         <Route path="Dokumentation" element={<Dokumentation/>} />
        //     </Route>
        //
        // </Router>
    );
}

export default Navbar