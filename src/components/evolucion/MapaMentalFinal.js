import React from "react";
import { MapaMental } from "../utils/MapaMental/MapaMental";

const MapaMentalFinal = ({ etapa }) => {

    return (
        <MapaMental
            etapa={etapa}
            disabled
            mostrarSoloLosDeLaEtapa
        />
    );
}

export { MapaMentalFinal }