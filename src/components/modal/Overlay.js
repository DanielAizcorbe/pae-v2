import React from "react";
import "./modal.css";

const Overlay = ({ children }) => {

    return (
        <div className="overlay">
            {children}
        </div>
    );
}

export { Overlay }