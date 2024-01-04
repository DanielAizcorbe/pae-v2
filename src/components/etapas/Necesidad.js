import React from "react";

const Necesidad = ({nombre,id}) => {
    return (
       <li key={id} className="item-necesidad">
            {nombre}
       </li>
    );
}

export { Necesidad}