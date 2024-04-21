import { Collapse } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { ListaDeAcciones } from "./ListaDeAcciones";
import { AZUL_PRIMARIO } from "../../datos/colores";

const ListaDeDiagnosticos = () => {

    const diagnosticos = useSelector(state => state.diagnosticos)
        .filter(d => d.selected);

    const generarItem = (index, diagnostico) => {
        return {
            key: index,
            label: diagnostico.nombre,
            children: <ListaDeAcciones diagnostico={diagnostico} />,
            id: diagnostico.nombre,
            style: { backgroundColor: AZUL_PRIMARIO },
        }
    }



    const items = diagnosticos.map(d => generarItem(diagnosticos.indexOf(d), d));

    return (
        <Collapse
            items={items}
            size="large"
            collapsible={"header"}
        />
    );
}

export { ListaDeDiagnosticos }