import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Container } from "../../utils/Container/Container";

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

    return (
        <Container
            position="center"
            direction="column"
            height={"100%"}
            width={"100%"}
        >
            <DragDropContext onDragEnd={handleDragDrop}>
                <div className="droppable-div">
                    <Droppable droppableId="ROOT" type="group">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {diagnosticosSeleccionados.map((d, index) =>
                                    <Draggable draggableId={d.id + ""} key={d.id} index={index}>
                                        {(provided) => (
                                            <div
                                                className="draggable-div"
                                                {...provided.dragHandleProps}
                                                {...provided.draggableProps}
                                                ref={provided.innerRef}
                                            >{d.nombre}
                                            </div>
                                        )}
                                    </Draggable>
                                )}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            </DragDropContext>
        </Container>
    );
}

export { DragDropDiagnostico }