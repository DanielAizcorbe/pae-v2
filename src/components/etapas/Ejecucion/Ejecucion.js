import React, { useState } from "react";
import { Container } from "../../utils/Container/Container";
import { ToggleSection } from "../../utils/ToggleSection/ToggleSection";
import { diagnosticos } from "../../datos/datos-diagnostico";
import { useNavigate } from "react-router-dom";
import ListaDeAcciones from "./ListaDeAcciones";


const Ejecucion = () => {

    const [showAcciones, setShowAcciones] = useState(true);
    const diagnosticosPrueba = diagnosticos.filter(d => d.tipo === "Prevención")

    const acciones = diagnosticosPrueba.map(
        o => ({
            nombre: o.nombre,
            acciones: o.acciones
        })
    );

    const navegar = useNavigate();

    const nextPage = () => {
        navegar("/evolucion");
    }

    return (
        <Container
            position={"top-center"}
            direction={"column"}
            height={"100%"}
            width={"100%"}
        >
            <h1>Ejecución</h1>
            <ToggleSection
                title={"Acciones"}
                showCondition={showAcciones}
                toggleFunction={setShowAcciones}
            >
                <ul>
                    {acciones.map(a => <ListaDeAcciones nombre={a.nombre} acciones={a.acciones}/>)}
                </ul>
            </ToggleSection>
            <button onClick={nextPage}>
                Siguiente
            </button>
        </Container>
    );
}

export { Ejecucion }