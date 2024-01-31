import React from "react";
import { MapaMental } from "../utils/MapaMental/MapaMental";

const MapaMentalFinal = ({etapa, disabled}) => {

    return (
        <MapaMental
            etapa={etapa}
            disabled={disabled}
        />
    );
}

export { MapaMentalFinal }