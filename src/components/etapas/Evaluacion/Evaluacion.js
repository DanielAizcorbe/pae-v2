import React, { useState } from "react";
import "./evaluacion.css";
import { TextArea } from "../../utils/TextArea/TextArea";

const Evaluacion = () => {
    const [text, setText] = useState("");

    return (
        <div className="evolucion-container">
            <h1>Evaluación</h1>
            <TextArea 
                text={text}
                setText={setText}
            />
        </div>
    );
};

export { Evaluacion };
