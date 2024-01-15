import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Columns, Rows } from "../../utils/Containers";
import styled from "styled-components";


const DragDropDiagnostico = ({ diagnosticos, switchOrderFunction }) => {
    
    const handleDragDrop = (results) => {
        const { source, destination, type } = results;

        const destinationIndex = destination.index;
        const sourceIndex = source.index;

        if (!destination) return;

        if (source.droppableId === destination.droppableId
            && sourceIndex === destinationIndex) return;

        if (type === "group") {
            const reorderedDiagnosticos = Array.from(diagnosticos);

            const [removedDiagnostico] = reorderedDiagnosticos.splice(sourceIndex, 1);
            reorderedDiagnosticos.splice(destinationIndex, 0, removedDiagnostico);
            console.log("ordenado: ",reorderedDiagnosticos);
            return switchOrderFunction(reorderedDiagnosticos);
        }

    };

    const getListPosition = (id) => {
        const indice = diagnosticos.findIndex(n => n.id === id);;
        return indice + 1;
    }

    return (
        <Columns
            elementPosition={"center"}
        >
            <DragDropContext onDragEnd={handleDragDrop}>
                <DropplableDiv
                    elementPosition={"center"}
                    padding={"1.5rem"}
                    width={"auto"}
                    height={"auto"}
                >
                    <DropplableBody
                    >
                        <Droppable droppableId="ROOT" type="group">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {diagnosticos.map((d, index) =>
                                        <Draggable draggableId={d.id + ""} key={d.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <DraggableDiv
                                                        elementPosition={"center"}
                                                        height={"7rem"}
                                                        width={"40rem"}
                                                        padding={"0"}
                                                    >
                                                        <DraggableBody>
                                                            {getListPosition(d.id) + ". " + d.nombre}
                                                        </DraggableBody>
                                                    </DraggableDiv>
                                                </div>
                                            )}
                                        </Draggable>
                                    )}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DropplableBody>
                </DropplableDiv>
            </DragDropContext>
        </Columns>
    );
}

const DropplableDiv = styled(Rows)`
    
`;

const DropplableBody = styled.div`
    border-radius: 1rem;
    width: 100%;
    padding: 1rem 2rem;
    max-height: 500px;
    height: auto;
    overflow-y: auto;

    &::-webkit-scrollbar-thumb {
        background-color: var(--fondo-resaltado);
        border-radius: 1rem;
        opacity: 0;
    }

    &::-webkit-scrollbar {
        width: 0.3rem;
    }
`;

const DraggableBody = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 6rem;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.3rem;
    background-color: var(--fondo-resaltado);
    color: var(--color-fondo);
    margin-bottom: 1rem;
`;

const DraggableDiv = styled(Rows)`
    
`;


export { DragDropDiagnostico }