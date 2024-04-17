import { List } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleDiagnosticoSeleccion } from "../../../store/slices/diagnosticos";

const ListaDiagnosticos = () => {

    const necesidades = useSelector(state => state.necesidades).filter(n => n.selected).map(n => n.id);
    const diagnosticos = useSelector(state => state.diagnosticos).filter(d => necesidades.some(n => n === d.id));

    const dispatch = useDispatch();

    const toggleDiagnostico = (id) => {
        dispatch(toggleDiagnosticoSeleccion(id));
    }

    return (
        <List
            bordered
            dataSource={diagnosticos}
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