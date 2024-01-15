import React, { useState } from "react";
import { ToggleSection } from "../../utils/ToggleSection";
import { Columns } from "../../utils/Containers";
import { Accion } from "./Accion";

const ListaDeAcciones = ({ diagnostico, diagnosticoId, acciones, toggleSelection,  }) => {

    const [showToggle, setShowToggle] = useState(false);

    const toggleFunction = () => {
        setShowToggle(!showToggle);
    }

    return (
        <ToggleSection
            title={diagnostico}
            elementPosition={"top-left"}
            showCondition={showToggle}
            toggleFunction={toggleFunction}
        >
            <Columns
                elementPosition={"top-left"}

            >
                {acciones.map(a =>
                    <Accion
                        htmlFor={a.nombre}
                        toggleSelection={toggleSelection}
                        selected={a.selected}
                        accionId={a.id}
                        diagnosticoId={diagnosticoId}
                        key={a.id}
                    >
                        {a.nombre}{a.selected}
                    </Accion>
                )}
            </Columns>
        </ToggleSection>
    );
}

export { ListaDeAcciones }