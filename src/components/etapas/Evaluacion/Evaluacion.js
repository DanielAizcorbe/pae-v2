import React, { useState } from "react";
import "./evaluacion.css";
import { TextArea } from "../../utils/TextArea/TextArea";
import { BotonSiguiente } from "../../botones/BotonSiguiente";

const Evaluacion = () => {
    const [text, setText] = useState("");

    return (
        <div className="evolucion-container">
            <h1>Evaluación</h1>
            <TextArea 
                text={text}
                setText={setText}
            />
            <BotonSiguiente
                nextPage={"/evolucion"}
            />
        </div>
    );
};

export { Evaluacion };
