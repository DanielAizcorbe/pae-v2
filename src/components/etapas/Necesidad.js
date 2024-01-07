import React, { useState } from "react";

const Necesidad = ({nombre,id}) => {

    const [selected, setSelected] = useState(false);

    return (
       <li key={id} className={"item-necesidad" + (selected ? " selected" : "")} onClick={() => setSelected(!selected)}>
            {nombre}
       </li>
    );
}

export { Necesidad}