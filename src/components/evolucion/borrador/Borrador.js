import React from "react";
import { Columns } from "../../utils/containers/Containers";
import { NavBar } from "../../generales/NavBar";
import { Titulo } from "../../utils/Titulos";
import Alert from "antd/es/alert/Alert";
import ContenidoBorrador from "./ContenidoBorrador";

const Borrador = () => {

    return (
        <Columns
            elementPosition={"top-center"}
            width="100%"
            height="100%"
        >
            <NavBar defaultSection={3} />
            <Columns
                elementPosition={"top-center"}
                width={"100%"}
                padding={"0 0 4rem 0"}
            >
                <Titulo texto={"Borrador"} />
                <Columns
                    elementPosition={"center"}
                    margin={"2rem"}
                    width="100%"
                    height="100%"
                >
                    <Alert
                        message="Podrás editar este texto cuando termines todas las etapas de la evolución actual"
                        type="info"
                        showIcon
                    />
                </Columns>
                <Columns
                    elementPosition={"top-center"}
                    width="100%"
                    height="100%"
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