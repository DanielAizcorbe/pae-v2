import React from "react";
import { setPosition } from "../../modal/Overlay";
import "./container.css";

const Container = ({ position, direction, width, height, children }) => {

    const [jc,ai] = setPosition(position);

    const style = {
        justifyContent: (position == "column" ? jc : ai),
        alignItems: (position == "column" ? ai : jc),
        flexDirection: direction ?? "row",
        width: width ?? "auto",
        height: height ?? "auto"
    };

    return(
        <div style={style} className="flex-container">
            {children}
        </div>
    );
}

export { Container }