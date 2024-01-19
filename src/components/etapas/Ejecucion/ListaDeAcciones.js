import { List } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleAccionSeleccion } from "../../../store/slices/diagnosticos";

const ListaDeAcciones = ({ diagnostico }) => {

    const dispatch = useDispatch();

    const toggleSeleccion = (diagnosticoId, accionId) => {
        dispatch(toggleAccionSeleccion(
            {
                diagnostico: diagnosticoId,
                accion: accionId
            }
        ));
    }

    return (
        <List
            bordered
            dataSource={diagnostico.acciones}
            renderItem={
                (item) => (<List.Item
                    key={item.id}
                    style={{ backgroundColor: item.selected ? "lightgray" : "", cursor: "pointer" }}
                    onClick={() => toggleSeleccion(diagnostico.id, item.id)}
                >
                    {item.nombre}
                </List.Item>)
            }
        />
    );
}

export { ListaDeAcciones }