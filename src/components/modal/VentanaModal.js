import React from "react";
import { Overlay } from "./Overlay";
import "./modal.css";

const VentanaModal = ({ children, classes }) => {

    return (
        <Overlay>
            <div className={"modal " + classes}>
                {children}
            </div>
        </Overlay>
    );
}

export { VentanaModal }