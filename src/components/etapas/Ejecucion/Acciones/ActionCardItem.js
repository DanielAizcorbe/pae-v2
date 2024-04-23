import React, { useState } from 'react'
import { Rows } from '../../../utils/containers/Containers';
import { List } from 'antd';
import Title from 'antd/es/typography/Title';
import { ModalCronometro } from './modals/ModalCronometro';
import { ModalTiempo } from "./modals/ModalTIempo";
import { useDispatch } from 'react-redux';
import { completarAccion } from '../../../../store/slices/accionesARealizar';

export const ActionCardItem = ({ item }) => {

    const [showModalCronometro, setShowModalCronometro] = useState(false);
    const [showModalTiempo, setShowModalTiempo] = useState(false);
    const [minutos, setMinutos] = useState("");

    console.log("item recibido: ", item);

    const dispatch = useDispatch();

    const tomarTiempo = (id, minutos) => {
        setMinutos(minutos)
        dispatch(completarAccion({ "accionId": id, "minutos": minutos }));
        setShowModalTiempo(false);
    }

    const cronometrar = (id, minutos) => {
        let minutosRedondeados = (minutos < 1 ? 1 : minutos)
        setMinutos(minutosRedondeados);
        dispatch(completarAccion({ "accionId": id, "minutos": minutosRedondeados }));
        setShowModalCronometro(false)
    }

    const openCronometro = () => {
        setShowModalCronometro(true);
    }

    const openTiempo = () => {
        setShowModalTiempo(true);
    }

    return (
        <List.Item>
            <Rows
                elementPosition={"center-left"}
                width="100%"
            >
                <Rows
                    elementPosition={"center-left"}
                    width="100%"
                >
                    <Title level={5} style={{ margin: "0" }}>
                        {item.nombre}
                    </Title>
                </Rows>
                
            </Rows>
            <ModalCronometro
                open={showModalCronometro}
                tareaIniciada={item}
                closeModal={cronometrar}
            />
            <ModalTiempo
                open={showModalTiempo}
                closeModal={tomarTiempo}
                tareaIniciada={item}
                setMinutos={setMinutos}
                value={minutos}
            />
        </List.Item>
    )
}
