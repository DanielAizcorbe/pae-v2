import React from "react";

import { Alert } from 'antd';
import { Rows } from "../utils/Containers";

const AvisoWarning = ({ closeAviso, mensaje }) => {

    const style = {
        padding: "1rem",
        fontSize: "1.1rem",
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
                closable
                showIcon
                onClose={closeAviso}
                style={style}
            />
        </Rows>
    );
}

export { AvisoWarning }