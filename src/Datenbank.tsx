import React, {useEffect, useState, FC, ChangeEvent} from "react";
import { createClient } from "@supabase/supabase-js";
import Button from "react-bootstrap/Button";

const supabase = createClient("https://vmklasdkediyaiuzkwvq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZta2xhc2RrZWRpeWFpdXprd3ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ3MjkxNjUsImV4cCI6MjAyMDMwNTE2NX0.XH_7TnSybIbrenc0yEbVck-MHiDFQlQ9hMyU0ofON6I");

const Datenbank : FC = () => {
    const [countries, setCountries] : any = useState([]);
    const [test, setTest] : any = useState();

    useEffect(() => {
        getCountries();
    }, []);

    const getCountries = async () => {
        const { data } = await supabase.from("countries").select();
        setCountries(data);
    }

    const handleChange = (event: ChangeEvent <HTMLInputElement>) => {
        setTest(event.target.value);
        console.log(setTest);
    }




    return( <div className={"container-sm justify-content-center"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Datenbankspaß</h1></div>
                </div>
            </div>
        </div>

        <div className={"container text-end p-2"}>
            <div className={"row"}>
                <div className={"col"}>
                    <label className={"col-form-label mt-2"}>Land:</label>
                </div>
                <div className={"col p-2"}>
                    <input type="text"
                           placeholder="Land"
                           className={"form-control"}
                           name ="test"
                           onChange = {handleChange}
                    />
                </div>
            </div>
        </div>

        {/*Button*/}
        <div className={"row"}>
            <div className={"col"}>
                <div className={"d-flex justify-content-center"}>
                    <div className={"p-3"}>
                        <Button variant={"outline-dark"}>Hinzufügen</Button>
                    </div>
                </div>
            </div>
        </div>







        {/*Strich*/}
        <hr className={"border-end border-dark border-5 opacity-75"}/>
        {/*Hier beginnt die Ausgabe der Daten aus Supabase*/}

        <div>
            <ul>
                {countries.map((country : any)=>(
                    <li key={country.name}> {country.name}</li>
                ))}
            </ul>
            <ul>
                <button>Löschen</button>
            </ul>
        </div>

    </div>)
}

export default Datenbank;