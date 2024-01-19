import { Collapse } from "antd";
import React from "react";
import { ListaDeDiagnosticos } from "./ListaDeDiagnosticos";

const SeccionAcciones = ({ seccion }) => {

    const style = {
        width: "100%",
        marginBottom: "1rem",
    };

    const acciones = [
        {
            key: 1,
            label: "Acciones",
            children: <ListaDeDiagnosticos />,
            id: seccion
        }
    ];

    return (
        <Collapse
            items={acciones}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    );
}

export { SeccionAcciones }