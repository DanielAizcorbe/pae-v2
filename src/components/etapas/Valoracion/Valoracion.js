import React, { useState } from "react";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns, Rows } from "../../utils/Containers";
import { useDispatch, useSelector } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { Secciones } from "../../generales/Secciones";
import { SeccionMapaMental } from "./SeccionMapaMental";
import { SeccionNecesidades } from "./SeccionesNecesidades";
import { SeccionExploracionFisica } from "./SeccionExploracionFisica";
import { updateAll } from "../../../store/slices/exploracionFisica";


const secciones = [
    "Valoración",
    "Exploración Física",
    "Mapa Mental",
    "Necesidades",
    "Finalizar"
];

const Valoracion = () => {

    const necesidades = useSelector(state => state.necesidades);
    const exploracionFisica = useSelector(state => state.exploracionFisica);
    const marcadores = useSelector(state => state.marcadores);

    const dispatch = useDispatch();

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

    const getResumen = (necesidadesSeleccionadas) => {

        let resumenEtapasExploracion = (inspeccion === "" ? "" : `INSPECCIÓN\n${inspeccion}\n\n`)
            + (auscultacion === "" ? "" : `AUSCULTACIÓN\n${auscultacion}\n\n`)
            + (percusion === "" ? "" : `PERCUSIÓN\n${percusion}\n\n`)
            + (palpacion === "" ? "" : `PALPACIÓN\n${palpacion}\n\n`);

        let necesidades = `Se identificaron las siguientes necesidades del paciente\n${necesidadesSeleccionadas.map(n => `> ${n.nombre}`).join('\n')}`;
        let resumen = resumenEtapasExploracion
            + necesidades;

        return resumen;
    }

    const sePuedeCompletar = () => {
        return necesidades.some(n => n.selected) && marcadores.some(m => m.etapa === "valoracion");
    }

    return (
        <Rows>
            <Secciones
                secciones={secciones}
            />
            <Columns
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
                        id={secciones[4]}
                        sePuedeActivar={sePuedeCompletar()}
                    />
                </Columns>
            </Columns>

        </Rows>
    );
}




export { Valoracion }