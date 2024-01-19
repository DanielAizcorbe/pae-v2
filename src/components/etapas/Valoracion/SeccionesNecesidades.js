import { Collapse } from "antd";
import React from "react";
import { ListaNecesidades } from "./ListaNecesidades";

const SeccionNecesidades = ({ seccion }) => {

    const necesidades = [
        {
            key: 1,
            label: seccion,
            children: <ListaNecesidades />,
            id: seccion
        }
    ];

    const style = {
        width: "100%",
        marginBottom: "1rem",
    };

    return (
        <Collapse
            items={necesidades}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    );
}

export { SeccionNecesidades }