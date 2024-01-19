import React from "react";
import { Columns } from "../utils/Containers";
import { NavBar } from "../generales/NavBar";
import TextArea from "antd/es/input/TextArea";
import { Titulo } from "../utils/Titulos";
import Alert from "antd/es/alert/Alert";

const Borrador = ({disabled}) => {

    const textAreaStyles = {
        width: '50%',
        minHeight: '200px',
        height: "60%",
        resize: "none",
        fontSize: "1rem",
        backgroundColor: disabled ? "white" : "",
        color: disabled ? "black" : "",
        cursor: "default"
    };

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <NavBar defaultSection={3} />
            <Columns
                elementPosition={"top-center"}
                width={"100%"}
                height={"100%"}
            >
                <Titulo texto={"Borrador"} />
                <TextArea
                    style={textAreaStyles}
                    placeholder="Completa las distintas etapas para generar la evaluación"
                    disabled={disabled}
                    spellCheck={false}
                    name="textarea"
                />
                <Columns
                    elementPosition={"top-center"}
                    width={"100%"}
                    height={"30%"}
                    padding={"2rem"}
                >
                    <Alert message="Podrás editar este texto cuando termines todas las etapas de la evolución actual" type="info" showIcon />
                </Columns>
            </Columns>
        </Columns>
    );
}

export { Borrador }