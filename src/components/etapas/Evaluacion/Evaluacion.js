import React, { useState } from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { useDispatch } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { useSelector } from "react-redux";
import TextArea from "antd/es/input/TextArea";
import { Columns, ContentContainer } from "../../utils/containers/Containers";

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
        height: "100%",
        resize: "none",
        fontSize: "1rem",
        cursor: "default"
    };

    return (
        <ContentContainer>
            <Titulo texto="Evaluación" />
            <Columns
                elementPosition={"center"}
                width="100%"
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
                elementPosition="center"
                padding="2rem"
                width="100%"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={onClick}
                    sePuedeActivar={text !== ""}
                />
            </Columns>
        </ContentContainer>
    );
};



export { Evaluacion };
