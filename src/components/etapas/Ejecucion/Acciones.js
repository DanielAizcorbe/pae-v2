import React from 'react'
import { Columns } from '../../utils/Containers'
import { Button, Collapse } from 'antd'
import { AccionCard } from './AccionCard'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'



export const Acciones = ({ acciones }) => {

    const accionesStore = useSelector(state => state.accionesARealizar);

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
        console.log(accionesStore);
        return accionesStore.every(d => d.acciones.every(a2 => a2.completado ));
    }

    const items = acciones.map(e => generateItem(e));

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
