import Modal from "antd/es/modal/Modal";
import { Columns } from "../../utils/containers/Containers";
import { ListaPacientes } from "../ListaPacientes";

const ModalDatosPaciente = ({ openCondition, closeModal, pacientesRegistrados }) => {

    const getNombreCompleto = (item) => {
        return item.nombre + " " + item.apellido
    }
    console.log(pacientesRegistrados);

    const pacientesAMostrar = pacientesRegistrados
        .sort((a, b) => getNombreCompleto(a).localeCompare(getNombreCompleto(b)))

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
            <ListaPacientes
                pacientes={pacientesAMostrar}
                closeModal={closeModal}
            />
        </Columns>
    </Modal>
    );
}

export { ModalDatosPaciente }