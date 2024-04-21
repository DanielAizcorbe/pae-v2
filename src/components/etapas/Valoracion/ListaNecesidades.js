import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSeleccion } from "../../../store/slices/necesidades";
import { List } from "antd";
import { AZUL_PRIMARIO } from "../../datos/colores";

const ListaNecesidades = () => {

    const necesidades = useSelector(state => state.necesidades);

    const dispatch = useDispatch();

    const toggleNecesidad = (id) => {
        dispatch(toggleSeleccion(id));
    }

    return (
        <List
            bordered
            dataSource={necesidades}
            renderItem={
                (item) => (<List.Item
                    key={item.id}
                    style={{ backgroundColor: item.selected ? AZUL_PRIMARIO : "", cursor: "pointer" }}
                    onClick={() => toggleNecesidad(item.id)}
                >
                    {item.nombre}
                </List.Item>)
            }
        />
    );
}

export { ListaNecesidades }

/*
    <Necesidades>
                {
                    necesidades.map(
                        n => <Necesidad 
                                key={n.id}
                                nombre={n.nombre} 
                                id={n.id} 
                                toggleSelection={toggleNecesidad}
                                selected={n.selected}
                            />
                    )
                }
            </Necesidades>
*/