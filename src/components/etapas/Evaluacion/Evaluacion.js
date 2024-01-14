import React, { useState } from "react";
import "./evaluacion.css";
import { TextArea } from "../../utils/TextArea";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";

const Evaluacion = () => {
    const [text, setText] = useState("");

    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding={"1rem"}
        >
            <Titulo texto="Evaluación"/>
            <TextArea 
                text={text}
                setText={setText}
            />
            <BotonSiguiente
                nextPage={"/evolucion"}
            />
        </EtapaContainer>
    );
};



export { Evaluacion };
