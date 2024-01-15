import { BOTON_PRIMARIO, WARNING_COLOR } from "../datos/colores";
import { IconoPaciente } from "./IconoPaciente";

import { styled } from "styled-components";

const FALTA_CONFIRMAR_EDICION = "CONFIRMAR EDICIÓN";
const GENERAR_EVOLUCION = "FINALIZAR EVOLUCIÓN";
const FALTAN_ETAPAS = "FALTAN ETAPAS";

const toggleBotonCentral = (flag, onClick) => {
    switch (flag) {
        case FALTA_CONFIRMAR_EDICION:
            return (
                <BtnCentral
                    $bgcolor={WARNING_COLOR}
                >
                    {FALTA_CONFIRMAR_EDICION}
                </BtnCentral>
            );
        case GENERAR_EVOLUCION:
            return (
                <BtnCentral
                    $bgcolor={BOTON_PRIMARIO}
                    onClick={onClick}
                >
                    {GENERAR_EVOLUCION}
                </BtnCentral>
            );
        case FALTAN_ETAPAS:
            return <IconoPaciente />
        default:
            return <></>;
    }
}

const BtnCentral = styled.button`
    text-align: center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: black;
    cursor: pointer;
    color: white;
    font-size: 1.25rem;
    border: none;
    width: 14rem;
    height: 9rem;
    border-radius: 30%;
    line-height: 2rem;
    margin: 2.5rem;
    background-color: ${props => props.$bgcolor};

    &:hover {
        transform: scale(1.05, 1.05);
        transition: transform 100ms linear;
    }
`;

export { toggleBotonCentral, FALTAN_ETAPAS, GENERAR_EVOLUCION, FALTA_CONFIRMAR_EDICION }