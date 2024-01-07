import React from "react";
import { VentanaModal } from "../modal/VentanaModal";

const ModalEvolucionAnterior = ({ evolucionSeleccionada, closeModal }) => {
    
    const evolucionFalsa = "Labore laborum sit irure sint duis ea nostrud magna in do fugiat ut cillum. Sit ad ad eu eiusmod est commodo laborum aute nisi. Mollit ipsum nostrud veniam mollit in nulla fugiat sint aliqua eu.\n\n" +
"Consectetur cillum velit nostrud in ipsum labore fugiat aliquip nisi Lorem adipisicing minim. Ut reprehenderit ad quis eiusmod anim tempor amet sunt exercitation amet ullamco in cillum quis. Eiusmod tempor exercitation exercitation cillum magna sint velit velit id incididunt laborum occaecat reprehenderit eiusmod.\n\n" +

"Deserunt ea ad enim irure aliquip laborum sunt proident esse minim. Aliqua elit sit culpa non laborum id esse tempor sit reprehenderit. Ut magna quis consectetur in. Cillum voluptate voluptate laborum eu ut occaecat. Minim reprehenderit reprehenderit labore magna mollit qui nulla fugiat officia voluptate."

    return (
        <VentanaModal >
            <h2>Evolución</h2>
            <p>Fecha: {evolucionSeleccionada.hora} - {evolucionSeleccionada.fecha}</p>
            <p>
                Sector: {evolucionSeleccionada.sector}
            </p>
            <textarea className="evo-anterior" readOnly>
                {evolucionFalsa}
            </textarea>
            <button onClick={closeModal}>
                VOLVER
            </button>
        </VentanaModal>
    );
}

export { ModalEvolucionAnterior }