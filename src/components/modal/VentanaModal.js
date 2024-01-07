import React from "react";
import { Overlay } from "./Overlay";
import "./modal.css";

const VentanaModal = ({ children, showBackground, width, height, position, showAnimation }) => {

    
    const style = {
        height: height,
        width: width,
    };

    return (
        <Overlay showBackground={showBackground} position={position}>
            <div className={"modal " + (showAnimation ? "animated" : "")} style={style}>
                {children}
            </div>
        </Overlay>
    );
}

export { VentanaModal }