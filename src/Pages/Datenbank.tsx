import React, {useEffect, useState, FC} from "react";
import Button from "react-bootstrap/Button";
import supabase from "../config/SupabaseClient";
import {useNavigate} from "react-router-dom";


const Datenbank : FC = () => {
    const [countries, setCountries] : any = useState([]);

    const [land, setLand] = useState("");
    const [kontinent, setKontinent] = useState("");
    const [formError, setFormError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if(!land){
            setFormError('Error')
            return
        }

        const {data, error} = await supabase
            .from('countries')
            .insert([{land, kontinent}])
            .select()

        if(error){
            console.log(error);
        }
        if(data){
            console.log(data);
            setFormError(null);
            navigate("/datenbank");
        }
    }




































    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
    }


    return( <div className={"container-sm justify-content-center"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Datenbankspaß</h1></div>
                </div>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
            <label htmlFor={"land"}>Land:</label>
            <input
                type={"text"}
                id={"land"}
                value={land}
                onChange={(e)=> setLand(e.target.value)}
            />
            <label htmlFor={"kontinent"}>Kontinent:</label>
            <input
                type={"text"}
                id={"kontinent"}
                value={kontinent}
                onChange={(e)=> setKontinent(e.target.value)}
            />
            <button>Hinzufügen</button>

            {formError && <p className={"error"}>{formError}</p>}

        </form>























        <div className={"content"}>
            <table className={"table table-hover"}>
            <thead>
            <tr>
                <th scope={"col"}>ID</th>
                <th scope={"col"}>Land</th>
                <th scope={"col"}>Kontinent</th>
                <th scope={"col"}>Löschen</th>
                <th scope={"col"}>Bearbeiten</th>

            </tr>
            </thead>
            <tbody>
            {countries.map((country : any)=>(
                <tr key={country.id}>
                    <td>{country.id}</td>
                    <td >{country.land}</td>
                    <td>{country.kontinent}</td>
                    <td><Button variant={"outline-dark"}>Löschen</Button></td>
                    <td><Button variant={"outline-dark"}>Bearbeiten</Button></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </div>)
}

export default Datenbank;