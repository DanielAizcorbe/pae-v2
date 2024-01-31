import React, { useState } from "react";
import { Columns, Rows } from "../utils/Containers";
import Title from "antd/es/typography/Title";
import { ParrafoEvolucion } from "./ParrafoEvolucion";
import { MapaMentalFinal } from "./MapaMentalFinal";

const FinalizarEvolucion = () => {

    const [valoracionTexto, setValoracionTexto] = useState("este es el texto de la valoracion");
    const [diagnosticoTexto, setdiagnosticoTexto] = useState("este es el texto del diagnostico");
    const [planeacionTexto, setplaneacionTexto] = useState("este es el texto de la planeacion");
    const [ejecucionTexto, setejecucionTexto] = useState("este es el texto de la ejecucion");
    const [evaluacionTexto, setevaluacionTexto] = useState("este es el texto de la evaluacion");



    return (
        <Rows
            elementPosition={"top-center"}
        >
            <Columns
                width={"25%"}
            >

            </Columns>
            <Columns
                elementPosition={"top-left"}
                padding={"2rem"}
                width={"70%"}
            >
                <Title level={1}>
                    Finalizar
                </Title>
                <ParrafoEvolucion
                    text={valoracionTexto}
                    setText={setValoracionTexto}
                    title={"Valoración"}
                />
                <ParrafoEvolucion
                    text={diagnosticoTexto}
                    setText={setdiagnosticoTexto}
                    title={"Diagnóstico"}
                />
                <ParrafoEvolucion
                    text={planeacionTexto}
                    setText={setplaneacionTexto}
                    title={"Planeación"}
                />
                <ParrafoEvolucion
                    text={ejecucionTexto}
                    setText={setejecucionTexto}
                    title={"Ejecución"}
                />
                <ParrafoEvolucion
                    text={evaluacionTexto}
                    setText={setevaluacionTexto}
                    title={"Evaluación"}
                />
                <Columns
                    height={"100%"}
                    width={"100%"}
                    padding={"2rem"}
                >
                </Columns>
            </Columns>
        </Rows>
    );
}

export { FinalizarEvolucion }