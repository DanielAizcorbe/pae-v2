import React from "react";
import { styled } from "styled-components";
import { setPositionBy } from "./setPositionFunctions";

const ContainerFlex = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.alineaciony};
    align-items: ${props => props.alineacionx};
    padding: ${props => props.padding ?? "0"};
    margin: ${props => props.margin ?? "0"};
    height: ${props => props.height ?? "100%"};
    width: ${props => props.width ?? "100%"};
`;

const BotonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    height: 100%;
`;


const Columns = ({children, elementPosition, padding, margin, height, width}) => {

    const [y,x] = setPositionBy("column",elementPosition);

    return (
        <ContainerFlex
            direction="column"
            alineaciony={y}
            alineacionx={x}
            padding={padding}
            margin={margin}
            height={height}
            width={width}
        >
            {children}
        </ContainerFlex>
    );
}

const Rows = ({children, elementPosition, padding, margin, height, width}) => {

    const [y,x] = setPositionBy("row",elementPosition);

    return (
        <ContainerFlex
            direction="row"
            alineaciony={y}
            alineacionx={x}
            padding={padding}
            margin={margin}
            height={height}
            width={width}
        >
            {children}
        </ContainerFlex>
    );
}



export { Columns, Rows, BotonContainer }

