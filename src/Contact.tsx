import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './App.css';
import {IInformation} from "./interfaces";
import 'bootswatch/dist/pulse/bootstrap.min.css';



const Contact: FC  = () => {

    return <div className={"container-sm"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Kontakt</h1></div>
                </div>
            </div>
        </div>
    </div>
}
export default Contact;