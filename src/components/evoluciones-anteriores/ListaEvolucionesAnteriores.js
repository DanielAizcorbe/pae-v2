import React, { useState } from "react";
import { Columns } from "../utils/Containers";
import { TablaEvolucionesAnteriores } from "./TablaEvolucionesAnteriores";
import { ModalEvolucionAnterior } from "./ModalEvoluciónAnterior";

const ListaEvolucionesAnteriores = () => {


    const handleRowClick = (record) => {
        setFilaSeleccionada(record);
        setShowModal(true);
    }

    const [showModal, setShowModal] = useState(false);
    const [filaSeleccionada, setFilaSeleccionada] = useState({});

    const closeModal = () => {
        setShowModal(false);
        setFilaSeleccionada({});
    }

    return (
        <Columns
            width={"100%"}
            height={"100%"}
            elementPosition={"top-center"}
        >
            <TablaEvolucionesAnteriores
                handleRowClick={handleRowClick}
            />
            <ModalEvolucionAnterior 
                open={showModal}
                closeModal={closeModal}
                filaSeleccionada={filaSeleccionada}
            />
        </Columns>
    );
};

export { ListaEvolucionesAnteriores };

