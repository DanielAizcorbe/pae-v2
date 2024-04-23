import React, { useEffect, useState } from "react";
import { Columns } from "../../../utils/containers/Containers";
import { Button, Statistic } from "antd";
import Title from "antd/es/typography/Title";

const Cronometro = ({ tareaIniciada, cerrar }) => {
    const [tiempoTotal, setTiempoTotal] = useState(0);
    const [activo, setActivo] = useState(false);

    useEffect(() => {
        let intervalo;

        if (activo) {
            intervalo = setInterval(() => {
                setTiempoTotal((tiempo) => tiempo + 1);
            }, 1000);
        } else {
            clearInterval(intervalo);
        }

        return () => clearInterval(intervalo);
    }, [activo]);

    const convertirTiempo = (tiempo) => {
        const horas = Math.floor(tiempo / 3600);
        const minutos = Math.floor((tiempo % 3600) / 60);
        const segundos = tiempo % 60;

        return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
    };

    const iniciarCronometro = () => {
        setTiempoTotal(0);
        setActivo(true);
    };

    const detenerCronometro = () => {
        setActivo(false);
        cerrar(tareaIniciada.id, Math.round((tiempoTotal % 3600) / 60))
    };

    const valueStyle = {
        color: "red",
        fontSize: "3rem",
    }

    return (
        <Columns
            padding={"2rem"}
        >
            <Title level={1}>
                {tareaIniciada.nombre}
            </Title>
            <Statistic valueStyle={valueStyle} value={convertirTiempo(tiempoTotal)} />
            <Columns
                padding={"2rem"}
            >
                {!activo ? <Button onClick={iniciarCronometro} size="large" type="primary">
                    Iniciar
                </Button> :
                    <Button onClick={detenerCronometro} size="large" type="primary">
                        Detener
                    </Button>}
            </Columns>
        </Columns>
    );
}

export { Cronometro }