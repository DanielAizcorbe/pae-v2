import { Collapse } from 'antd'
import React from 'react'
import { MapaMentalFinal } from './MapaMentalFinal'
import { Columns } from '../utils/Containers'

export const CollapsableMap = ({ etapa }) => {
    return (
        <Columns
            width={"100%"}
            height={"auto"}
            padding={"0 3rem"}
            margin={"0 0 24px 0"}
        >
            <Collapse
                items={[
                    {
                        key: 1,
                        label: "Mapa mental",
                        children: <MapaMentalFinal
                            etapa={etapa}
                        />
                    }
                ]}
                size='large'
                style={{
                    width: "100%"
                }}
            />
        </Columns>
    )
}
