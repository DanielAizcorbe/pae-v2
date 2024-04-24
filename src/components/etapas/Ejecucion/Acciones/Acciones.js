import React from 'react'
import { Columns } from '../../../utils/containers/Containers'
import { Button, Collapse } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ActionList } from "./ActionList"



export const Acciones = ({ acciones }) => {

    const accionesStore = useSelector(state => state.accionesARealizar);

    const navegar = useNavigate();

    const generateItem = (element) => {
        return {
            key: element.diagnostico,
            label: element.diagnostico,
            children: <ActionList
                acciones={element.acciones}
            />
        }
    }


    const sePuedeActivar = () => {
        return accionesStore.every(d => d.acciones.every(a2 => a2.completado));
    }

    const items = acciones.map(e => generateItem(e));

    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
            width="100%"
            height="100%"
        >
            <Collapse
                items={items}
                style={{ width: "80%", marginBottom: "1rem" }}
                defaultActiveKey={items.map(i => i.key)}
            />
            <Columns
                elementPosition={"center"}
                padding={"2rem"}
            >
                <Button
                    type={'primary'}
                    size='large'
                    onClick={() => navegar("/evolucion")}
                    disabled={!sePuedeActivar()}
                >
                    Finalizar
                </Button>
            </Columns>
        </Columns>
    )
}
