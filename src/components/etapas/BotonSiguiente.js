import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { RightOutlined } from "@ant-design/icons";

const BotonSiguiente = ({ nextPage, text, onClick, sePuedeActivar, id }) => {

    const navegar = useNavigate();

    const onClickCompose = () => {
        if (typeof onClick === 'function') {
            onClick();
        }
        navegar(nextPage);
    }
    return (
        <Button
            type="primary"
            icon={<RightOutlined />}
            onClick={onClickCompose}
            disabled={!sePuedeActivar}
            htmlType="button" id={id}
            size="large"
        >
            {text ?? "Siguiente"}
        </Button>
    );
}

export { BotonSiguiente }