import Modal from "antd/es/modal/Modal";
import { Columns } from "../../utils/containers/Containers";
import { ListaPacientes } from "../ListaPacientes";

const ModalDatosPaciente = ({ openCondition, closeModal }) => {

    const getNombreCompleto = (item) => {
        return item.nombre + " " + item.apellido
    }

    const pacientes = [
        {
            nombre: "JUAN GONZALO",
            apellido: "WILLNECKER",
            fechaNacimiento: "09-12-1995"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "GUTIERREZ",
            fechaNacimiento: "09-12-1999"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "LOPEZ CRUZ",
            fechaNacimiento: "09-12-1980"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "LOPEZ",
            fechaNacimiento: "09-12-1998"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "SOSA",
            fechaNacimiento: "09-12-1990"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "WILLNECKER",
            fechaNacimiento: "09-12-1996"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "WILLNECKER",
            fechaNacimiento: "09-12-1996"
        },
        {
            nombre: "JUAN GONZALO",
            apellido: "WILLNECKER",
            fechaNacimiento: "09-12-1994"
        },
    ].sort((a, b) => getNombreCompleto(a).localeCompare(getNombreCompleto(b)))

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
                pacientes={pacientes}
                closeModal={closeModal}
            />
        </Columns>
    </Modal>
    );
}

export { ModalDatosPaciente }