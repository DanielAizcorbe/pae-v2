import React from "react";
import { Columns } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";
import { Titulo } from "../utils/Titulos";
import Alert from "antd/es/alert/Alert";
import ContenidoBorrador from "../evolucion/ContenidoBorrador";

const Borrador = () => {

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <NavBar defaultSection={3} />
            <Columns
                elementPosition={"top-center"}
                width={"100%"}
                height={"auto"}
                padding={"0 0 4rem 0"}
            >
                <Titulo texto={"Borrador"} />
                <Columns
                    elementPosition={"center"}
                    margin={"2rem"}
                >
                    <Alert
                        message="Podrás editar este texto cuando termines todas las etapas de la evolución actual"
                        type="info"
                        showIcon
                    />
                </Columns>
                <Columns
                    elementPosition={"top-center"}
                >
                    <ContenidoBorrador
                        editable={false}
                    />
                </Columns>
            </Columns>
        </Columns>
    );
}

export { Borrador }