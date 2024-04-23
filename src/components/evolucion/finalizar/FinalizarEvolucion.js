import React, { useState } from "react";
import { Columns, Rows } from "../../utils/containers/Containers";
import Title from "antd/es/typography/Title";
import { ParrafoEvolucion } from "../ParrafoEvolucion";
import { MapaMentalFinal } from "../MapaMentalFinal";
import { useSelector } from "react-redux";
import { Button, Flex, message } from "antd";
import { useNavigate } from "react-router-dom";
import ContenidoBorrador from "../ContenidoBorrador";
import GuardarPDF from "./GuardarPDF";
import Copiar from "./Copiar";
import { Finalizar } from "./Finalizar";

const FinalizarEvolucion = () => {

    const etapas = useSelector(state => state.estadoEtapas);

    const [valoracionTexto, setValoracionTexto] = useState(etapas.valoracion.resumen);
    const [diagnosticoTexto, setdiagnosticoTexto] = useState(etapas.diagnostico.resumen);
    const [planeacionTexto, setplaneacionTexto] = useState(etapas.planeacion.resumen);
    const [ejecucionTexto, setejecucionTexto] = useState(etapas.ejecucion.resumen);
    const [evaluacionTexto, setevaluacionTexto] = useState(etapas.evaluacion.resumen);

    const [messageApi, contextHolder] = message.useMessage();

    const copiar = () => {
        messageApi.open({
            type: 'success',
            content: 'Se copió al portapapeles',
        });
    };

    const notificarGurdado = () => {
        messageApi.open({
            type: 'success',
            content: 'Se guardo como PDF',
        });
    };

    const navegar = useNavigate();

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
        >
            {contextHolder}
            <Columns
                width={"80%"}
                height={"auto"}
            >
                <Title level={1}>
                    Finalizar
                </Title>
                <ContenidoBorrador 
                    editable={true}
                />
                <Flex
                    justify="space-between"
                    style={{ width: "60%", padding: "2rem" }}
                >
                    <GuardarPDF 
                        
                    />
                    <Copiar 
                    />
                    <Finalizar 
                        
                    />
                </Flex>
            </Columns>
        </Columns>
    );
}

export { FinalizarEvolucion }