import React, { useState } from "react";
import { BotonSiguiente } from "../BotonSiguiente";
import { Titulo } from "../../utils/Titulos"
import { Columns, ContentContainer, Rows } from "../../utils/containers/Containers";
import { useDispatch, useSelector } from "react-redux";
import { completarEtapa } from "../../../store/slices/etapas";
import { Secciones } from "../../generales/Secciones";
import { SeccionMapaMental } from "./SeccionMapaMental";
import { SeccionNecesidades } from "./SeccionesNecesidades";
import { SeccionExploracionFisica } from "./SeccionExploracionFisica";
import { updateAll } from "../../../store/slices/exploracionFisica";
import { setMensaje } from "../../../store/slices/avisosSlice";
import { getResumenValoracion } from "../generarResumenes";


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
    const fueCompletadaLaEtapaSiguiente = useSelector(state => state.estadoEtapas.diagnostico.completada);

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
            resumen: getResumenValoracion(necesidades.filter(n => n.selected), etapasExploracionFisica)
        }))
        dispatch(updateAll({
            inspeccion: etapasExploracionFisica.inspeccion.text,
            auscultacion: etapasExploracionFisica.auscultacion.text,
            percusion: etapasExploracionFisica.percusion.text,
            palpacion: etapasExploracionFisica.palpacion.text,
        }))

        if (fueCompletadaLaEtapaSiguiente) {
            dispatch(setMensaje("VALORACIÓN"));
        }
    }

    const sePuedeCompletar = () => {
        return necesidades.some(n => n.selected) && marcadores.some(m => m.etapa === "valoracion");
    }

    return (
        <Rows>
            <Secciones
                secciones={secciones}
            />
            <ContentContainer>
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
            </ContentContainer>

        </Rows>
    );
}




export { Valoracion }