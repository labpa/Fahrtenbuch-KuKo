import {FC, useState} from "react";
import supabase from "../config/SupabaseClient";
import {useNavigate} from "react-router-dom";

const Eingabe : FC = () => {
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

    return(
    <div>
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
    </div>)
}

export default Eingabe;