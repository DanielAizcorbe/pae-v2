import { List } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDiagnosticoSeleccion } from "../../../store/slices/diagnosticos";

const ListaDiagnosticos = () => {

    const necesidades = useSelector(state => state.diagnosticos);

    const dispatch = useDispatch();

    const toggleDiagnostico = (id) => {
        dispatch(toggleDiagnosticoSeleccion(id));
    }

    return (
        <List
            bordered
            dataSource={necesidades}
            renderItem={
                (item) => (<List.Item
                    key={item.id}
                    style={{ backgroundColor: item.selected ? "lightgray" : "", cursor: "pointer" }}
                    onClick={() => toggleDiagnostico(item.id)}
                >
                    {item.nombre}
                </List.Item>)
            }
        />
    );
}

export { ListaDiagnosticos }