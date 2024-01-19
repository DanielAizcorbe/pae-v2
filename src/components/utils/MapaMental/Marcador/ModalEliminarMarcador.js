import React from "react";
import Modal from "antd/es/modal/Modal";

const ModalEliminarMarcador = ({ closeModalFunction, numero, remove, showModal }) => {

    return (
        <Modal
            title= {"¿Remover el punto " + numero + "?"}
            open={showModal}
            onOk={remove}
            onCancel={closeModalFunction}
            centered
            width={"40%"}
        >
        </Modal>
    );
}

export { ModalEliminarMarcador }