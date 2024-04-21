import React from "react";

import { Alert } from 'antd';
import { Rows } from "../utils/containers/Containers";

const AvisoWarning = ({ closeAviso, mensaje, esVisible }) => {

    const style = {
        padding: "1rem",
        fontSize: "1.1rem",
        zIndex: esVisible ? "1" : "-1"
    };

    return (
        <Rows
            width="70%"
            height={"30%"}
            elementPosition={"center"}
        >
            <Alert
                message={mensaje}
                type="warning"
                showIcon
                onClose={closeAviso}
                style={style}
            />
        </Rows>
    );
}

export { AvisoWarning }