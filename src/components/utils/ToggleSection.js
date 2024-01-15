import React from "react";
import { styled } from "styled-components";
import { Rows } from "./Containers";

const ToggleSection = ({ showCondition, toggleFunction, children, title, elementPosition, bgcolor }) => {

    return (
        <ToggleContainer>
            <ToggleTitle 
                onClick={() => toggleFunction(!showCondition)}
                $bgcolor={bgcolor || ""}
            >
                {showCondition ? "- " : "+ "}{title}
            </ToggleTitle>
            {showCondition ? 
                <Rows
                    elementPosition={elementPosition}
                    padding="2rem"
                    width="100%"
                    height="100%"
                >
                    {children}
                </Rows>
            : ""}
        </ToggleContainer>
    );
};



const ToggleContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: none;
    margin-bottom: 0.5rem;
`;

const ToggleTitle = styled.h2`
    padding: 1rem 3rem;
    border-bottom: 1px solid black;
    background-color: ${props => props.$bgcolor === "" ? "var(--fondo-resaltado)" : props.$bgcolor };
    color: white;
    margin: 0;
    border-radius: 1rem;
    cursor: pointer;
`;

export { ToggleSection }