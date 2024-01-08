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
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        <a href="https://bienensteinp.de/login">Bla Bla bLa </a>
                    </p>
                </div>
                <button onClick={()=> setShowArea(false)}>
                    Hide
                </button>
            </div>
        )}
        <button onClick={()=> setShowArea(true)}>Zurück</button>
        <div>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

        </div>




    </div>
}

export default Test;