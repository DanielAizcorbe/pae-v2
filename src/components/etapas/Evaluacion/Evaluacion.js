import React, { useState } from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { EtapaContainer } from "../EtapaContainer";
import { Titulo } from "../../utils/Titulos";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { Columns } from "../../utils/Containers";

const Evaluacion = () => {

    const textoEscritoAntes = useSelector(state => state.estadoEtapas.evaluacion.resumen);
    const [text, setText] = useState(textoEscritoAntes);

    const dispatch = useDispatch();

    const onClick = () => {
        console.log(text);
        dispatch(completarEtapa({ etapa: "evaluacion", completada: true, resumen: text }))
    }

    const textAreaStyles = {
        width: '50%',
        minHeight: '450px',
        height: "60%",
        resize: "none",
        fontSize: "1rem",
        cursor: "default"
    };

    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding={"1rem"}
        >
            <Titulo texto="Evaluación" />
            <Columns
                elementPosition={"center"}
                height={"100%"}
            >
                <TextArea
                    style={textAreaStyles}
                    placeholder="Escribí como fue la respuesta del paciente a las acciones tomadas"
                    spellCheck={false}
                    onChange={event => setText(event.target.value)}
                    name="textarea"
                    value={text}
                />
            </Columns>
            <Columns
                elementPosition="bottom-center"
                padding="2rem"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={onClick}
                    sePuedeActivar={text !== ""}
                />
            </Columns>
        </EtapaContainer>
    );
};



export { Evaluacion };
