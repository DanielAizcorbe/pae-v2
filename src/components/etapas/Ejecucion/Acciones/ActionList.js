import { List } from 'antd'
import React from 'react'
import { ActionCardItem } from './ActionCardItem'

export const ActionList = ({ acciones }) => {
    
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
