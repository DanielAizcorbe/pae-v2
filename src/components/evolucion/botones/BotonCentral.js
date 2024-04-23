import React from 'react'
import { IconoPaciente } from './IconoPaciente'
import { BotonFinalizar } from './BotonFinalizar'

const BotonCentral = ({ estanTodasCompletadas, finalizar }) => {
    return (
        <>
            {estanTodasCompletadas ?
                <BotonFinalizar 
                    onClick={finalizar}
                /> :
                <IconoPaciente />
            }
        </>
    )
}

export default BotonCentral
