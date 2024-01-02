import React from "react";
import { Overlay } from "./Overlay";

const VentanaModal = ({ children }) => {

    return (
        <Overlay>
            <div className="modal">
                {children}
            </div>
        </Overlay>
    );
}

export { VentanaModal }