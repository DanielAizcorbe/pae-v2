import React from 'react'
import { Columns } from '../../utils/Containers'
import { Button, Collapse } from 'antd'
import { AccionCard } from './AccionCard'
import { useNavigate } from 'react-router-dom'



export const Acciones = ({ acciones }) => {

    const navegar = useNavigate();

    const generateItem = (element) => {
        return {
            key: element.diagnostico,
            label: element.diagnostico,
            children: <AccionCard
                acciones={element.acciones}
            />
        }
    }

    const sePuedeActivar = () => {
        return acciones.every(a => a.completada);
    }

    const items = acciones.map(e => generateItem(e));
    console.log(("items del collapse: ",items));
    return (
        <Columns
            elementPosition={"top-center"}
            padding={"2rem"}
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
