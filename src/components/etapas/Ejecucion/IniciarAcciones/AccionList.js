import React, { useState } from 'react'
import { Rows } from '../../../utils/Containers';
import { Button, List, Popover } from 'antd';
import Title from 'antd/es/typography/Title';
import { FieldTimeOutlined, FormOutlined } from '@ant-design/icons';
import { ModalCronometro } from './ModalCronometro';
import { ModalTiempo } from "./ModalTIempo";

export const ActionCard = ({ item }) => {

    const [showModalCronometro, setShowModalCronometro] = useState(false);
    const [showModalTiempo, setShowModalTiempo] = useState(false);
    const [minutos, setMinutos] = useState("");
    const [completado, setCompletado] = useState(false);

    const tomarTiempo = () => {
        setCompletado(true);
        setShowModalTiempo(false);
    }

    const cronometrar = () => {
        setCompletado(true);
        setShowModalCronometro(false)
    }

    return (
        <List.Item>
            <Rows
                elementPosition={"center-left"}
            >
                <Rows elementPosition={"center-left"}>
                    <Title level={5} style={{ margin: "0" }}>
                        {item.nombre}
                    </Title>
                </Rows>
                {!completado ?
                    (<Rows width={"auto"}>
                        <Popover trigger={"hover"} content="Cronometrar acción">
                            <Button type='primary' size='large' onClick={() => setShowModalCronometro(true)} icon={<FieldTimeOutlined />} style={{ marginRight: "10px" }} />
                        </Popover>
                        <Popover trigger={"hover"} content="Marcar tiempo">
                            <Button type='default' size='large' onClick={() => setShowModalTiempo(true)} icon={<FormOutlined />} />
                        </Popover>
                    </Rows>)
                    : (<Rows width={"auto"}>
                        <Popover trigger={"hover"} content="Editar tiempo">
                            <Button type='default' size='large' onClick={() => setShowModalTiempo(true)} >
                                {minutos} minutos
                            </Button>
                        </Popover>
                    </Rows>)
                }
            </Rows>
            <ModalCronometro
                open={showModalCronometro}
                tareaIniciada={item}
                closeModal={cronometrar}
                setMinutos={setMinutos}
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
