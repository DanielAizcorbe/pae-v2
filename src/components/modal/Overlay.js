import React from "react";
import "./modal.css";

const Overlay = ({ children, showBackground, position }) => {

    const setPosition = (posicion) => {
        switch (posicion) {
            case "center":
                return ["center", "center"];
            case "center-left":
                return ["flex-start", "center"];
            case "center-right":
                return ["flex-end", "center"];
            case "bottom-center":
                return ["center", "flex-end"];
            case "bottom-left":
                return ["flex-start", "flex-end"];
            case "bottom-right":
                return ["flex-end", "flex-end"];
            case "top-center":
                return ["center", "flex-start"];
            case "top-left":
                return ["flex-start", "flex-start"];
            case "top-right":
                return ["flex-end", "flex-start"];
            default:
                return ["center", "center"];
        }
    };

    const [jc, ai] = setPosition(position);


    const style = {
        backgroundColor: !showBackground ? "rgba(0, 0, 0, 0.5)" : "transparent",
        justifyContent: jc,
        alignItems: ai
    };

    return (

        <div className={"overlay"} style={style}>  
            {/* {justifyContent + AlignItems} */}
            {children}
        </div>
    );
}

export { Overlay }