import React, { useState } from "react";
import { Necesidad } from "../Necesidad";

const AgregarNecesidad = ({addNecesidad, placeholder}) => {

    const [nuevaNecesidad, setNuevaNecesidad] = useState({nombre:"",id:0});

    const agregarNecesidad = () => {
        addNecesidad(nuevaNecesidad);
        console.log(nuevaNecesidad);
        setNuevaNecesidad({nombre:"",id:0});
    };
    return (
        <div className="item-necesidad container">
            <input type="text" value={nuevaNecesidad.nombre} placeholder={placeholder} onChange={(event) => setNuevaNecesidad({nombre:event.target.value,id:10})}/>
            <button
                onClick={agregarNecesidad}
            >+</button>
        </div>
    );
}

export { AgregarNecesidad}