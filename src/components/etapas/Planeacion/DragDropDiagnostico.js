import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Columns, Rows } from "../../utils/Containers";
import styled from "styled-components";

const DragDropDiagnostico = ({ diagnosticos }) => {

    const [diagnosticosSeleccionados, setDiagnosticosSeleccionados] = useState(diagnosticos);

    const handleDragDrop = (results) => {
        const { source, destination, type } = results;

        const destinationIndex = destination.index;
        const sourceIndex = source.index;

        if (!destination) return;

        if (source.droppableId === destination.droppableId
            && sourceIndex === destinationIndex) return;

        if (type === "group") {
            const reorderedDiagnosticos = Array.from(diagnosticosSeleccionados);

            const [removedDiagnostico] = reorderedDiagnosticos.splice(sourceIndex, 1);
            reorderedDiagnosticos.splice(destinationIndex, 0, removedDiagnostico);

            return setDiagnosticosSeleccionados(reorderedDiagnosticos);
        }

    };

    const getListPosition = (id) => {
        const indice = diagnosticosSeleccionados.findIndex(n => n.id === id);;
        console.log("ID RECIBIDO: ", id);
        console.log("DIAGNOSTICOS: ",diagnosticosSeleccionados);
        console.log("INDICE REDIBIDO: ", indice);
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
                >
                    <DropplableBody>
                        <Droppable droppableId="ROOT" type="group">
                            {(provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {diagnosticosSeleccionados.map((d, index) =>
                                        <Draggable draggableId={d.id + ""} key={d.id} index={index}>
                                            {(provided) => (
                                                <div
                                                    {...provided.dragHandleProps}
                                                    {...provided.draggableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <DraggableDiv
                                                        elementPosition={"center"}
                                                        height={"4rem"}
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
    heigth: 100%;
    padding: 1rem 2rem;
`;

const DraggableBody = styled.div`
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 1rem;
    font-size: 1.3rem;
    background-color: var(--fondo-resaltado);
    color: var(--color-fondo);
`;

const DraggableDiv = styled(Rows)`
    
`;


export { DragDropDiagnostico }