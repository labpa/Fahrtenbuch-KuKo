import React, {FC} from "react";
import {Link} from "react-router-dom";

const Error : FC = () =>{
    return(
        <div className={"container-sm justify-content-center"}>
            <div className="d-flex justify-content-center">
                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div><h1>Error 404</h1></div>
                    </div>
                </div>
            </div>
            {/*streifen*/}
            <hr className={"border-end border-dark border-5 opacity-75"}/>
            <div className={"container text-center p-2"}>
                <div className={"row"}>
                    <div className={"col p-2"}>
                        <label className={"col-form-label mt-2"}>Seite nicht gefunden</label>
                    </div>
                </div>
            </div>




            <div>
                <Link to={"/"}>Home</Link>
            </div>
            <div>
                <Link to={"/home"}>Fahrtenbuch</Link>
            </div>
            <div>
                <Link to={"/contact"}>Kontakt</Link>
            </div>
        </div>
    )
}

export default Error;