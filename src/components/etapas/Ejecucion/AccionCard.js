import { List } from 'antd'
import React from 'react'
import { ActionCard } from './IniciarAcciones/AccionList'

export const AccionCard = ({ acciones }) => {

    console.log("recibidas para renderizar: ", acciones);
    
    const renderFunction = (item) => {
        return (
            <ActionCard 
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
