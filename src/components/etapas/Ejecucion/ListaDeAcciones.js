import { List } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleAccionSeleccion } from "../../../store/slices/diagnosticos";
import { AZUL_CLARO, AZUL_PRIMARIO, BLANCO } from "../../datos/colores";

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
                    style={{
                        backgroundColor: item.selected ? AZUL_PRIMARIO : "",
                        color: item.selected ? BLANCO : "",
                        cursor: "pointer",
                    }}
                    onClick={() => toggleSeleccion(diagnostico.id, item.id)}
                >
                    {item.nombre}
                </List.Item>)

            }   
            style={{ headerBg: AZUL_CLARO }}
        />
    );
}

export { ListaDeAcciones }