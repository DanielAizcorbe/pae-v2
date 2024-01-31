import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Columns, Rows } from "../utils/Containers";
import { Button } from "antd";
import { EditTwoTone, SaveTwoTone } from "@ant-design/icons";

const ParrafoEvolucion = ({ title, text, setText }) => {

    const [seEstaEditando, setSeEstaEditando] = useState(false);

    const iconoEditable = <EditTwoTone />;
    const iconoGuardar = <SaveTwoTone />;

    const editar = () => {
        setSeEstaEditando(true);
    }

    const guardar = () => {
        setSeEstaEditando(false);
    }

    const textStyle = {
        width: "100%",
        padding: "7px 11px",
        margin: "0",
        lineHeight: "1.5714285714285714",
        fontSize: "1rem",
        border: "1px solid lightgray",
        borderRadius: "0.5rem",

    };

    const placeholderText = "si se deja en blanco, se autocompletará con la información recibida al completar la etapa";

    return (
        <Rows
            elementPosition={"top-left"}
            height={"auto"}
        >
            {seEstaEditando ?
                <TextArea
                    placeholder={placeholderText}
                    autoSize
                    value={text}
                    onChange={event => setText(event.target.value)}
                    size="large"
                    style={{ fontSize: "1rem" }}
                /> :
                <pre style={textStyle}>
                    {text === "" ? placeholderText : text}
                </pre>
            }
            <Columns
                elementPosition={"center"}
                height={"40px"}
                width={"140px"}
            >
                {seEstaEditando ? <Button
                    type="primary"
                    icon={iconoGuardar}
                    onClick={guardar}
                >
                    Guardar
                </Button> : <Button
                    type="default"
                    icon={iconoEditable}
                    onClick={editar}
                >
                    Editar
                </Button>}
            </Columns>
        </Rows>
    );
}

export { ParrafoEvolucion }