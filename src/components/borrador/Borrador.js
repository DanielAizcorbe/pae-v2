import React from "react";
import { Columns } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";
import TextArea from "antd/es/input/TextArea";
import { Titulo } from "../utils/Titulos";
import Alert from "antd/es/alert/Alert";
import { useSelector } from "react-redux";

const Borrador = () => {

    const textAreaStyles = {
        width: '50%',
        minHeight: '200px',
        height: "60%",
        resize: "none",
        fontSize: "1rem",
        backgroundColor: "white",
        color: "black",
        cursor: "default"
    };

    const resumenesEtapa = useSelector(state => state.estadoEtapas);

    const textoResumido = `VALORACIÓN\n${resumenesEtapa.valoracion.resumen}\n\n`
    + `DIAGNÓSTICO\n${resumenesEtapa.diagnostico.resumen}\n\n`
    + `PLANEACIÓN\n${resumenesEtapa.planeacion.resumen}\n\n`
    + `EJECUCIÓN\n${resumenesEtapa.ejecucion.resumen}\n\n`
    + `EVALUACIÓN\n${resumenesEtapa.evaluacion.resumen}\n`;

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <NavBar defaultSection={3} />
            <Columns
                elementPosition={"top-center"}
                width={"100%"}
                height={"100%"}
            >
                <Titulo texto={"Borrador"} />
                <TextArea
                    style={textAreaStyles}
                    placeholder="Completa las distintas etapas para generar la evaluación"
                    disabled
                    spellCheck={false}
                    name="textarea"
                    value={textoResumido}
                />
                <Columns
                    elementPosition={"top-center"}
                    width={"100%"}
                    height={"30%"}
                    padding={"2rem"}
                >
                    <Alert message="Podrás editar este texto cuando termines todas las etapas de la evolución actual" type="info" showIcon />
                </Columns>
            </Columns>
        </Columns>
    );
}

export { Borrador }