import React from "react";
import { MapaMental } from "../../utils/MapaMental/MapaMental";
import { Collapse } from "antd";

const SeccionMapaMental = ({ seccion }) => {

    const mapa = [
        {
            key: 1,
            label: seccion,
            children: <MapaMental
                slice={"marcadoresValoracion"}
            />,
            id: seccion
        }
    ];

    const style = {
        width: "100%",
        marginBottom: "1rem",
    };

    return (
        <Collapse
            items={mapa}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    );

}

export { SeccionMapaMental }