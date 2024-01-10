import {FC, useEffect, useState} from "react";
import supabase from "../config/SupabaseClient";
import VinylCard from "../Components/VinylCard";


const Datenbank : FC = () => {
    const [collection, setCollection] :any = useState([]);

    useEffect(() => {
        getCollection();
    }, []);

    const getCollection = async () => {
        const {data} = await supabase.from('vinyl').select();
        setCollection(data);

    }

    return(
        <div>
            <div className={"content"}>
                <table className={"table table-hover"}>
                    <thead>
                    <tr>
                        {/*<th scope={"col"}>ID</th>*/}
                        <th scope={"col"}>Album</th>
                        <th scope={"col"}>Interpret</th>
                        <th scope={"col"}>Jahr</th>


                    </tr>
                    </thead>
                    <tbody>
                    {collection.map((record : any)=>(
                        <tr key={record.id}>
                            {/*<td>{record.id}</td>*/}
                            <td >{record.album}</td>
                            <td>{record.artist}</td>
                            <td>{record.year}</td>
                            <td><button>Löschen</button></td>

                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Datenbank;