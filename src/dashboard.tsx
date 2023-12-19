import React, {FC} from "react";
import {Link} from "react-router-dom";
import auto from "./images/auto.jpg";

const dashboard: FC = () =>{

    return <div>
        <div className={"container-sm"}>
            <div className={"d-flex justify-content-center"}>
                <Link to={"/home"}>
                    <img src={auto}/>
                </Link>
            </div>
        </div>

    </div>


}

export default dashboard;