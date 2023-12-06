import React, {ChangeEvent, FC, useState, useEffect} from 'react';
import'bootswatch/dist/pulse/bootstrap.min.css';

const Navbar = () =>{
    return (
       <nav className={"navbar navbar-expand-lg bg-primary"} data-bs-theme={"dark"}>
           <div className={"container-fluid"}>
               <ul className={"navbar-nav me-auto"}>
                   <li className="nav-item">
                       <a className="nav-link active" href="#">Home
                           <span className="visually-hidden">(current)</span>
                       </a>
                   </li>

                   <li className="nav-item">
                       <a className="nav-link" href="/components/pages/Fahrtenbuch">Fahrtenbuch
                           <span className="visually-hidden">(current)</span>
                       </a>
                   </li>

                   <li className="nav-item">
                       <a className="nav-link" href="/Dokumentation">Dokumentation
                           <span className="visually-hidden">(current)</span>
                       </a>
                   </li>
               </ul>
           </div>
       </nav>
    )
}

export default Navbar