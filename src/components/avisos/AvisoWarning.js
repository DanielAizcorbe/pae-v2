import React from "react";
import { styled } from "styled-components";
import { WARNING_COLOR, WARNING_COLOR_HOVER } from "../datos/colores";

const AvisoWarning = ({ text, closeAviso }) => {

    /* return (
        <div className="contexto-relativo-cartel-aviso">
            <div className="aviso-modificacion warning" >
                {text}
            </div>
            <button className="cerrar-cartel" onClick={closeAviso}>
                x
            </button>
        </div>
    ); */

    return (
        <Aviso>
            <CuerpoAviso
                bgcolor={WARNING_COLOR}
            >
                {text}
            </CuerpoAviso>
            <BtnCierreAviso
                bgcolor={WARNING_COLOR}
                bgcolorhover={WARNING_COLOR_HOVER}
                onClick={closeAviso}
            >
                x   
            </BtnCierreAviso>
        </Aviso>
    );
}

const Aviso = styled.div`
    width: 32rem;
    height: 5rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1.1rem;
    position: relative;
`;

const CuerpoAviso = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    width: 100%;
    height: 100%;
    background-color: ${props => props.bgcolor};
`;

const BtnCierreAviso = styled.button`
    position: absolute;
    border-radius: 50%;
    left: 30.5rem;
    top: -10px;
    width: 1.5rem;
    height: 1.5rem;
    z-index: 2;
    border: none;
    cursor: pointer;
    background-color: ${props => props.bgcolor};

    &:hover {
        background-color: ${props => props.bgcolorhover};
        transition: background-color 100ms linear;
    }
`;


export { AvisoWarning }