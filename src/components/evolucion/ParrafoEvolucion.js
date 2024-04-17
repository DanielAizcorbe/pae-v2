import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { Columns } from "../utils/Containers";
import { Button } from "antd";
import { EditTwoTone, SaveTwoTone } from "@ant-design/icons";

const ParrafoEvolucion = ({ title, text, setText, editable }) => {

    const [seEstaEditando, setSeEstaEditando] = useState(false);

    const iconoEditable = <EditTwoTone />;
    const iconoGuardar = <SaveTwoTone />;

    const editar = () => {
        setSeEstaEditando(true);
    }

    const guardar = () => {
        setSeEstaEditando(false);
    }

    return (
        <Columns
            elementPosition={"top-left"}
            padding={"0rem 3rem"}
        >
            <Title
                level={3}
                style={{
                    margin: "0"
                }}>
                {title}
            </Title>
            <Columns
                elementPosition={"top-right"}
            >
                <TextArea
                    autoSize
                    value={text}
                    onChange={event => setText(event.target.value)}
                    size="large"
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "inherit",
                        color: "black",
                        overflowY: "hidden"
                    }}
                    disabled={!seEstaEditando}
                    variant={seEstaEditando ? "filled" : "borderless"}
                />
                {
                    editable ?

                        seEstaEditando ? <Button
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
                        </Button>
                        : ""
                }

            </Columns>
        </Columns >

    );
}

export { ParrafoEvolucion }