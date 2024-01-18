import { useSelector } from "react-redux";
import Modal from "antd/es/modal/Modal";
import Title from "antd/es/typography/Title";
import { Columns } from "../utils/Containers";
import { ImportantText } from "../utils/Spans";
import { FilaDatoModal } from "../utils/VentanaModal";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

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
    >
        <Columns
            elementPosition={"top-left"}
            height={"400px"}
            padding={"1rem"}
        >
            <Title
                level={1}
            >
                Paciente
            </Title>
            <Columns>
                <FilaDatoModal>
                    <ImportantText>Nombre:</ImportantText>{" " + datosPaciente.nombreCompleto}
                </FilaDatoModal>
                <FilaDatoModal>
                    <ImportantText>Nacimiento:</ImportantText>{" " + datosPaciente.fechaNacimiento}
                </FilaDatoModal>
                <FilaDatoModal>
                    <ImportantText>Documento:</ImportantText>{" " + datosPaciente.documento}
                </FilaDatoModal>
            </Columns>
            <Columns
                elementPosition={"bottom-center"}
            >
                <Button 
                    type="primary"
                    onClick={goNext}
                >
                    Continuar
                </Button>
            </Columns>
        </Columns>
    </Modal>
    );
}

export { ModalDatosPaciente }