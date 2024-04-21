import { Collapse } from 'antd'
import React from 'react'
import { ExploracionFisica } from './ExploracionFisica/ExploracionFisica';
import {  } from '../../datos/colores';

export const SeccionExploracionFisica = ({ seccion, stateEtapas }) => {

    const panelStyle = {
        borderRadius: "10px",
        color: "white",
    };


    const items = [
        {
            key: 1,
            label: seccion + " (opcional)",
            children: <ExploracionFisica
                estado={stateEtapas}
            />,
            id: seccion,
            style: panelStyle,
            showArrow: false,
        }
    ];

    const style = {
        width: "100%",
        marginBottom: "1rem",
    };

    return (
        <Collapse
            items={items}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    )
}
