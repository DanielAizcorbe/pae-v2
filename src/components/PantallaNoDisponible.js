import React from 'react'
import { Columns } from './utils/Containers'
import { NavBar } from './generales/NavBar'
import { Image } from 'antd'
import imagenNoData from "../img/no-data.svg"
import Title from 'antd/es/typography/Title'

export const PantallaNoDisponible = ({ seccion }) => {
    return (
        <Columns
            elementPosition={"top-center"}
        >
            <NavBar
                defaultSection={seccion}
            />
            <Columns
                elementPosition={"top-center"}
                width={"600px"}
                padding={"3rem"}
            >
                <Title level={1}>
                    ¡Ups!
                </Title>
                <Image
                    src={imagenNoData}
                    preview={false}
                    style={{
                        width: "350px",
                        padding: "2rem"
                    }}
                />
                <Title
                    level={3}
                    style={{
                        textAlign: "center",

                    }}
                >
                    Esta función no esta disponible en la versión de prueba 
                </Title>
            </Columns>
        </Columns>
    )
}
