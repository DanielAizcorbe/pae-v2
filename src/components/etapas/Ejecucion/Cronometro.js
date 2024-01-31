import React, { useEffect, useState } from "react";
import { Columns } from "../../utils/Containers";
import { Button, Statistic } from "antd";

const Cronometro = ({tareaIniciada, completarTarea}) => {
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
    };

    return (
        <Columns
            width={"500px"}
            height={"500px"}
            padding={"2rem"}
        >
            <Statistic title="Tiempo Total" value={convertirTiempo(tiempoTotal)} />
            {!activo ? <Button onClick={iniciarCronometro}>
                Iniciar
            </Button> : 
            <Button onClick={detenerCronometro}>
                Detener
            </Button>}
        </Columns>
    );
}

export { Cronometro }