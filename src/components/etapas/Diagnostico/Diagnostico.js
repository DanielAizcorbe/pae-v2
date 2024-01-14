import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { diagnosticos } from "../../datos/datos-diagnostico";
import { DiagnosticoItem } from "./DiagnosticoItem";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { EtapaContainer } from "../EtapaContainer";
import { Columns } from "../../utils/Containers";
import { styled } from "styled-components";
import { UList } from "../../utils/List";


const Diagnostico = ({ completada, setCompletada }) => {

    const [showSection, setShowSection] = useState(true);

    return (
        <EtapaContainer
            elementPosition={"top-center"}
            padding={"1rem"}
        >
            <Titulo texto={"Diagnóstico"} />
            <ToggleSection
                title={"Diagnosticos de enfermería"}
                showCondition={showSection}
                toggleFunction={() => setShowSection(!showSection)}
            >
                <ListaDiagnosticos>
                    {diagnosticos
                        .sort((d1, d2) => d1.tipo - d2.tipo)
                        .map(n => <DiagnosticoItem
                            nombre={n.nombre}
                            id={n.id}
                            tipo={n.tipo}
                        />)}
                </ListaDiagnosticos>
            </ToggleSection>
            <Columns
                padding={"1rem"}
                elementPosition="bottom-center"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                />
            </Columns>
        </EtapaContainer>
    );
}

const ListaDiagnosticos = styled(UList)`
    max-width: 100%;
`;

export { Diagnostico }