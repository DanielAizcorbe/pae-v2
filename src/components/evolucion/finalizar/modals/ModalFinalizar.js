import { Modal } from 'antd'
import React from 'react'
import { Columns } from '../../../utils/containers/Containers'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { finalizar } from '../../../../store/slices/paciente'

const ModalFinalizar = ({mostrar,closeModal}) => {

    const navegar = useNavigate();
    const dispatch = useDispatch();

    const nextPage = () => {
        dispatch(finalizar())
        navegar("/");
    }

    return (
        <Modal
            open={mostrar}
            mask
            centered
            onOk={nextPage}
            closable
            onCancel={closeModal}
            okText={"Continuar"}
            cancelText={"Volver"}
        >
            <Columns
                padding="1rem"
            >
                <p style={{fontWeight: "bold"}}>
                    Una vez finalizado, se te devolverá a la pestaña de busqueda/registro
                </p>
            </Columns>
        </Modal>
    )
}

export default ModalFinalizar
