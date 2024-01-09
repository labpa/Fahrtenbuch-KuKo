import {FC, useState} from "react";
import supabase from "../config/SupabaseClient";
import {useNavigate} from "react-router-dom";

const Eingabe : FC = () => {
    const [album, setAlbum] = useState("");
    const [artist, setArtist] = useState("");
    const [year, setYear] = useState("");
    const [formError, setFormError] = useState<string | null>(null);
    const navigate = useNavigate();



    const handleSubmit = async (e:any) => {
        e.preventDefault()

        if(!album){
            setFormError('Error')
            return
        }

        const {data, error} = await supabase
            .from('vinyl')
            .insert([{album, artist, year}])
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
            <label>Album:</label>
            <input
                type={"text"}
                id={"album"}
                value={album}
                onChange={(e)=> setAlbum(e.target.value)}
            />
            <label>Interpret:</label>
            <input
                type={"text"}
                id={"artist"}
                value={artist}
                onChange={(e)=> setArtist(e.target.value)}
            />

            <label>Jahr:</label>
            <input
                type={"number"}
                id={"year"}
                value={year}
                onChange={(e)=> setYear(e.target.value)}
            />


                <button>Hinzufügen</button>

            {formError && <p className={"error"}>{formError}</p>}

        </form>
    </div>)
}

export default Eingabe;