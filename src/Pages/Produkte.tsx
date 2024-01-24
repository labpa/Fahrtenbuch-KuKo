import React, {FC} from "react";
import {useGetAllProductsQuery} from "../apiSlice";

const Produkte: FC = () => {

    const {data} = useGetAllProductsQuery('');
    console.log(data);



    return(
        <div>
            <h1>Produkte</h1>
        </div>
    )
}

export default Produkte;