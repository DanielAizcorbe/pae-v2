import React, { useEffect } from "react";
import { EtapasEvolucion } from "./EtapasEvolucion";
import { Columns } from "../utils/containers/Containers";
import { Titulo } from "../utils/Titulos";
import { NavBar } from "../generales/NavBar";
import { useSelector } from "react-redux";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { limpiarMensaje } from "../../store/slices/avisosSlice";

const Evolucion = () => {

    const paciente = useSelector(state => state.paciente);
    const etapaCompletada = useSelector(state => state.avisos.message)

    const [messageApi, contextHolder] = message.useMessage();
    const dispatch = useDispatch();

    const showAviso = () => {
        if (etapaCompletada) {
            messageApi.info({
                content: "Se ha editado la etapa " + etapaCompletada + ", recuerda revisar las etapas siguientes",
                duration: 10,
                onClose: () => {
                    dispatch(limpiarMensaje())
                },
                style: {
                    marginTop: "60px",
                    fontSize: "1rem"
                }
            });
        }
    }
    useEffect(
        () => {
            showAviso()
        }, [etapaCompletada]
    );

    return (
        <Columns
            elementPosition="top-center"
            height="100%"
            width="100%"
        >
            <NavBar defaultSection={1} />
            <Columns
                elementPosition="center"
                height="20vh"
                width="100%"
            >
                <Titulo texto={paciente.nombre + " " + paciente.apellido} />
            </Columns>
            <EtapasEvolucion />
            {contextHolder}
        </Columns>

    );
}




export { Evolucion }