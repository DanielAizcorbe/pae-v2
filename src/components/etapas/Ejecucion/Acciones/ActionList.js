import { List } from 'antd'
import React from 'react'
import { ActionCardItem } from './ActionCardItem'

export const ActionList = ({ acciones }) => {

    console.log("recibidas para renderizar: ", acciones);
    
    const renderFunction = (item) => {
        return (
            <ActionCardItem 
                item={item}
            />
        )
    }
    //acciones.map(a => a.diagnostico)

    return (
        <List
            bordered
            dataSource={acciones}
            renderItem={renderFunction}
        />
    )
}
