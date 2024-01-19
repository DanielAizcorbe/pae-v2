import { Collapse } from "antd";
import React from "react";
import { ListaDiagnosticos } from "./ListaDiagnosticos";

const SeccionDiagnosticos = () => {

    const style = {
        width: "100%",
        marginBottom: "1rem",
    };

    const diagnosticos = [
        {
            key: 1,
            label: "Diagnosticos",
            children: <ListaDiagnosticos />,
            id: "Diagnosticos"
        }
    ];

    return (
        <Collapse
            items={diagnosticos}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    );
}

export { SeccionDiagnosticos }