import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { Columns } from "../../utils/containers/Containers";
import { Button } from "antd";
import { EditTwoTone, SaveTwoTone } from "@ant-design/icons";

const ParrafoEvolucion = ({ text, setText, editable }) => {

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
            width="100%"
            height="100%"
        >
            <Columns
                elementPosition={"top-right"}
                width="100%"
                height="100%"
            >
                <TextArea
                    autoSize
                    value={text + "\n"}
                    onChange={event => setText(event.target.value)}
                    size="large"
                    style={{
                        fontSize: "1rem",
                        backgroundColor: "inherit",
                        color: "black",
                        overflowY: "hidden",
                    }}
                    disabled={!seEstaEditando}
                    variant="outline"
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