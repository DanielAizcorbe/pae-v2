import React, { useState } from "react";
import { TextArea } from "../../utils/TextArea";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { useSelector } from "react-redux";

const Evaluacion = () => {

    const textoEscritoAntes = useSelector(state => state.estadoEtapas.evaluacion.text);
    const [text, setText] = useState(textoEscritoAntes);

    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(completarEtapa({etapa:"evaluacion",completada: true, text:text}))
    }

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
                onClick={onClick}
            />
        </EtapaContainer>
    );
};



export { Evaluacion };
