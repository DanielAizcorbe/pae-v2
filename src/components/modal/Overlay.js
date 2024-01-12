import React from "react";
import "./modal.css";



const Overlay = ({ children, showBackground, position }) => {

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