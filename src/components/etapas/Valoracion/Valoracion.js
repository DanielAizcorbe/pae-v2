import React, { useState } from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns, Rows } from "../../utils/Containers";
import { EtapaContainer } from "../EtapaContainer";
import { useDispatch, useSelector } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { Secciones } from "../../generales/Secciones";
import { SeccionMapaMental } from "./SeccionMapaMental";
import { SeccionNecesidades } from "./SeccionesNecesidades";
import { SeccionExploracionFisica } from "./SeccionExploracionFisica";
import { updateAll } from "../../../store/slices/exploracionFisica";

const Valoracion = () => {

    const necesidades = useSelector(state => state.necesidades);

    const dispatch = useDispatch();

    const exploracionFisica = useSelector(state => state.exploracionFisica);

    const [inspeccion, setInspeccion] = useState(exploracionFisica.inspeccion);
    const [auscultacion, setAuscultacion] = useState(exploracionFisica.auscultacion);
    const [percusion, setPercusion] = useState(exploracionFisica.percusion);
    const [palpacion, setPalpacion] = useState(exploracionFisica.palpacion);

    const etapasExploracionFisica = {
        inspeccion: {
            text: inspeccion,
            change: setInspeccion
        },
        auscultacion: {
            text: auscultacion,
            change: setAuscultacion
        },
        percusion: {
            text: percusion,
            change: setPercusion
        },
        palpacion: {
            text: palpacion,
            change: setPalpacion
        }
    };

    const getResumen = (necesidadesSeleccionadas) => {
        return `Necesidades del paciente\n${necesidadesSeleccionadas.map(n => `> ${n.nombre}`).join('\n')}`;
    }

    const onClick = () => {
        dispatch(completarEtapa({
            etapa: "valoracion",
            completada: true,
            resumen: getResumen(necesidades.filter(n => n.selected))
        }))
        dispatch(updateAll({
            inspeccion: etapasExploracionFisica.inspeccion.text,
            auscultacion: etapasExploracionFisica.auscultacion.text,
            percusion: etapasExploracionFisica.percusion.text,
            palpacion: etapasExploracionFisica.palpacion.text,

        }))
    }

    const secciones = [
        "Valoración",
        "Exploración Física",
        "Mapa Mental",
        "Necesidades",
        "Finalizar"
    ];


    return (
        <Rows>
            <EtapaContainer
                elementPosition={"top-center"}
                padding="1rem"
            >
                <Titulo texto="Valoración" id={secciones[0]} />
                <SeccionExploracionFisica
                    stateEtapas={etapasExploracionFisica}
                    seccion={secciones[1]}
                />
                <SeccionMapaMental
                    seccion={secciones[2]}
                    etapa={"valoracion"}
                />
                <SeccionNecesidades
                    seccion={secciones[3]}
                />
                <Columns
                    elementPosition="bottom-center"
                    padding="2rem"
                >
                    <BotonSiguiente
                        nextPage={"/evolucion"}
                        onClick={onClick}
                        id={secciones[3]}
                        sePuedeActivar={necesidades.some(n => n.selected)}
                    />
                </Columns>
            </EtapaContainer>
            <Secciones
                secciones={secciones}
            />
        </Rows>
    );
}




export { Valoracion }