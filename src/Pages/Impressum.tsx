import React, {FC} from "react";

const Impressum : FC = () => {
    return(
        <div className={"container-sm justify-content-center"}>
            <div className="d-flex justify-content-center">
                <div className={"row"}>
                    <div className={"col p-2"}>
                        <div><h1>Impressum</h1></div>
                    </div>
                </div>
            </div>
            {/*streifen*/}
            <hr className={"border-end border-dark border-5 opacity-75"}/>
        </div>
    )
}


export default Impressum;