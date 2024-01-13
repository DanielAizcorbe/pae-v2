import React, { useState } from "react";
import { VentanaModal } from "../VentanaModal";

const Marcador = ({ color, posX, posY, numero, removeMarcador }) => {

    const [showBorrar, setShowBorrar] = useState(false);

    const style = {
        left: posX,
        top: posY,
        color: { color }
    };

    const remove = () => {
        setShowBorrar(true);
    }

    return (
        <>
            {showBorrar ?
                <VentanaModal
                    position={"center"}
                    width={"20rem"}
                    height={"9rem"}
                    showbackground={false}
                >
                    {/* <p style={{textAligh: "center", display: "flex", }}>
                        {"Desea remover el punto " + numero + "?"}
                    </p>
                    <button onClick={() => setShowBorrar(false)}>
                        Cancelar
                    </button>
                    <button onClick={removeMarcador}>
                        Borrar
                    </button> */}
                </VentanaModal> : ""
            }
            <div className="marcador" style={style} onClick={remove}>
                <span>{numero}</span>

            </div>
        </>

    );
}



export { Marcador }