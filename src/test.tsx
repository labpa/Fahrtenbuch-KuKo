import React, {FC, useEffect, useState} from 'react';

const Test: FC  = () => {
    const [showArea, setShowArea] = useState(true);

    useEffect(() => {
        const data = window.localStorage.getItem('Beispiel');
        if(data !== null) setShowArea(JSON.parse(data))
    }, []);

    useEffect(() => {
        window.localStorage.setItem('Beispiel', JSON.stringify(showArea))
    }, [showArea]);


    return <div className={"container-sm"}>
        <div className="d-flex justify-content-center">
            <div className={"row"}>
                <div className={"col p-2"}>
                    <div><h1>Playground</h1></div>
                </div>
            </div>
        </div>

        {showArea && (
            <div>
                <div>
                    <h2>Test mit Local Storage!</h2>
                    <p>Wenn ich den Button klicke soll dieser Bereich verschwinden</p>
                </div>
                <div>
                    <p>
                        <a href="https://bienensteinp.de/login">Bla Bla bLa </a>
                    </p>
                </div>
                <button onClick={()=> setShowArea(false)}>
                    Hide
                </button>
            </div>
        )}

        <button onClick={()=> setShowArea(true)}>Zurück</button>


    </div>
}

export default Test;