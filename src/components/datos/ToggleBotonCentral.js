import { BotonConfirmarEdicion } from "../botones/BotonConfirmarEdicion";
import { BotonGenerarEvolucion } from "../botones/BotonGenerarEvolucion";
import { IconoPaciente } from "../botones/IconoPaciente";

const FALTA_CONFIRMAR_EDICION = "CONFIRMAR EDICIÓN";
const GENERAR_EVOLUCION = "FINALIZAR EVOLUCIÓN";
const FALTAN_ETAPAS = "FALTAN ETAPAS";

const toggleBotonCentral = (flag) => {
    switch(flag) {
        case FALTA_CONFIRMAR_EDICION:
            return <BotonConfirmarEdicion/>;
        case GENERAR_EVOLUCION: 
            return <BotonGenerarEvolucion/>
        case FALTAN_ETAPAS:
            return <IconoPaciente/>
        default:
            return <div></div>;
    }
}

export {toggleBotonCentral, FALTAN_ETAPAS, GENERAR_EVOLUCION, FALTA_CONFIRMAR_EDICION}