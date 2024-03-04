import { Collapse } from 'antd'
import React from 'react'
import { ExploracionFisica } from './ExploracionFisica/ExploracionFisica';

export const SeccionExploracionFisica = ({seccion, stateEtapas}) => {

    const items = [
        {
            key: 1,
            label: seccion,
            children: <ExploracionFisica
                estado={stateEtapas}
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
            items={items}
            defaultActiveKey={['1']}
            size="large"
            style={style}
            collapsible={"header"}
        />
    )
}
