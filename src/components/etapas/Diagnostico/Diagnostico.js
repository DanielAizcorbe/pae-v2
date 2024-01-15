import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { DiagnosticoItem } from "./DiagnosticoItem";
import { BotonSiguiente } from "../../botones/BotonSiguiente";
import { Titulo } from "../../utils/Titulos";
import { EtapaContainer } from "../EtapaContainer";
import { Columns } from "../../utils/Containers";
import { styled } from "styled-components";
import { UList } from "../../utils/List";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDiagnosticoSeleccion } from "../../../store/slices/diagnosticos";
import { switchOrder } from "../../../store/slices/prioridades";


const Diagnostico = () => {

    const [showSection, setShowSection] = useState(true);

    const diagnosticos = useSelector(state => state.diagnosticos);

    const dispatch = useDispatch();

    const toggleSelection = (id) => {
        dispatch(toggleDiagnosticoSeleccion(id));
    }

    const onClickFunction = () => {
        dispatch(switchOrder(diagnosticos.filter(d => d.selected)));
    }

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
                        .map(n =>
                            <DiagnosticoItem
                                nombre={n.nombre}
                                id={n.id}
                                tipo={n.tipo}
                                selected={n.selected}
                                toggleSelection={toggleSelection}
                                key={n.id}
                            />)}
                </ListaDiagnosticos>
            </ToggleSection>
            <Columns
                padding={"1rem"}
                elementPosition="bottom-center"
            >
                <BotonSiguiente
                    nextPage={"/evolucion"}
                    onClick={onClickFunction}
                />
            </Columns>
        </EtapaContainer>
    );
}

const ListaDiagnosticos = styled(UList)`
    max-width: 100%;
`;

export { Diagnostico }