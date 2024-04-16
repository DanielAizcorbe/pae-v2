import { useSelector } from "react-redux";
import Modal from "antd/es/modal/Modal";
import Title from "antd/es/typography/Title";
import { Columns } from "../utils/Containers";
import { useNavigate } from "react-router-dom";
import { Button, Flex } from "antd";
import FilaModalPaciente from "./FilaModalPaciente";

const ModalDatosPaciente = ({ openCondition, closeModal, nextPage }) => {

    const datosPaciente = useSelector((state) => state.paciente);
    const navegar = useNavigate();

    const goNext = () => {
        navegar(nextPage);
    }

    return (<Modal
        title=""
        open={openCondition}
        onOk={() => { }}
        onCancel={closeModal}
        footer={null}
        afterClose={closeModal}
        keyboard
        centered
    >
        <Columns
            elementPosition={"top-center"}
            height={"400px"}
            padding={"1rem"}
        >
            <Title
                level={2}
            >
                Detalles del paciente
            </Title>
            <Flex
                vertical
                style={{
                    border: "1px solid lightgray",
                    borderRadius: "10px",
                    width: "100%",
                    height: "100%",
                    padding: "1rem",
                    marginBottom: "1rem"
                }}
                align="flex-start"
                justify="flex-start"
            >
                <FilaModalPaciente
                    title={"Nombre"}
                >
                    {datosPaciente.nombreCompleto}
                </FilaModalPaciente>
                <FilaModalPaciente
                    title={"Nacimiento"}
                >
                    {datosPaciente.fechaNacimiento}
                </FilaModalPaciente>
                <FilaModalPaciente
                    title={"Documento"}
                >
                    {datosPaciente.documento}
                </FilaModalPaciente>
            </Flex>
            <Button
                type="primary"
                size="large"
                onClick={goNext}
            >
                Continuar
            </Button>
        </Columns>
    </Modal>
    );
}

export { ModalDatosPaciente }