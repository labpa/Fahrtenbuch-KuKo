import React, {FC} from "react";
import {useGetAllProductsQuery} from "../apiSlice";
import {Table} from "react-bootstrap";
import supabase from "../config/SupabaseClient";

const Produkte: FC = () => {

    const {data} = useGetAllProductsQuery('');
    console.log(data);

    // const test = async () => {
    //     const { data, error } = await supabase.from('todos').select()
    //     if(error){
    //         console.log(error);
    //     }else{
    //         console.log(data);
    //     }
    // }
    // test();




    return(
        <div>
            <h1>Produkte</h1>
            {/*<Table>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>title</th>*/}
            {/*        <th>description</th>*/}
            {/*        <th>price</th>*/}
            {/*        <th>images</th>*/}
            {/*        <th>stock</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {data.map((produkt: any)=>(*/}
            {/*        <tr key={produkt.id}>*/}
            {/*            <td> {produkt.title}</td>*/}
            {/*            <td>{produkt.description}</td>*/}
            {/*        </tr>*/}
            {/*    ) )}*/}
            {/*    </tbody>*/}
            {/*</Table>*/}
        </div>
    )
}

export default Produkte;