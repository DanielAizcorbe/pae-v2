import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

const ItemDraggable = (props) => {
    return (
        <Draggable {...props}>
            {
                (provided) => (
                    <div
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className='dragdrop-item'
                    >
                        {props.getPosition() + ". " + props.diagnostico}
                    </div>
                )
            }
        </Draggable>
    )
}

export default ItemDraggable
