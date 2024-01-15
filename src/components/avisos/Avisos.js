import { styled } from "styled-components";

const AvisoContainer = styled.div`
    width: 32rem;
    height: 5rem;
    text-align: center;
    line-height: 2rem;
    font-size: 1.1rem;
    position: relative;
`;

const AvisoBody = styled.div`
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
    background-color: ${props => props.$bgcolor};
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
    background-color: ${props => props.$bgcolor};

    &:hover {
        background-color: ${props => props.$bgcolorhover};
        transition: background-color 100ms linear;
    }
`;

export { AvisoContainer, AvisoBody, BtnCierreAviso }