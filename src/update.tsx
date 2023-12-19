import React, {FC, useEffect, useState} from 'react';
// import axios from 'axios';
// import Select from "react-select";
// import {useParams} from "react-router-dom";

const update : FC = () => {
    const save = () => {
        console.log("Speichern");
    }


    // const updates = () => {
    //     const {id} = useParams();
    //     useEffect(() => {
    //         axios.get('http://localhost:3000/home' + id)
    //             .then(res => console.log(res))
    //             .catch(err => console.log(err))
    //     }, [])
    // }

//todo https://www.youtube.com/watch?v=CUyU_ySLnIM (IDK! -> lieber noch mal weitersuchen)

    return <div className={"container-sm"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Bearbeiten</h1></div>
                </div>
            </div>
        </div>
        {/*Fahrer:in*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Fahrer:in</label>
                </div>
                <div className={"col p-2"}>
                    <input type="text"
                           placeholder="Fahrer:in"
                           className={"form-control"}
                           name ="driver"

                    />
                </div>
            </div>
        </div>

        {/*Kilometerstand Beginn*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Kilometerstand Beginn</label>
                </div>
                <div className={"col p-2"}>
                    <input type="number"
                           placeholder="Kilometerstand Beginn"
                           className={"form-control"}
                           name = "begin"

                    />
                </div>
            </div>
        </div>

        {/*Kilometerstand Ende*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Kilometerstand Ende</label>
                </div>
                <div className={"col p-2"}>
                    <input type="number"
                           placeholder="Kilometerstand Ende"
                           className={"form-control"}
                           name = "end"

                    />
                </div>
            </div>
        </div>

        {/*Reisezweck*/}
        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Fahrzweck</label>
                </div>
                <div className={"col p-2"}>
                    <input type="text"
                           placeholder="Reisezweck"
                           className={"form-control"}
                           name = "reason"
                    />
                </div>
            </div>
        </div>


        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Datum</label>
                </div>
                <div className={"col p-2"}>
                    <input type="date"
                           placeholder="Datum"
                           className={"form-control"}
                           name = "day"
                    />
                </div>
            </div>
        </div>

        {/*Button*/}
        <div className={"row"}>
            <div className={"col"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"p-3"}>
                        <button type={"button"} className={"btn btn-outline-primary px mb "} onClick={save}>Speichern</button>  {/* Eingabe */}
                    </div>
                </div>
            </div>
        </div>





    </div>
}

export default update;