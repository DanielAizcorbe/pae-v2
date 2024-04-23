import React from 'react'
import { Rows } from '../../../../utils/containers/Containers'
import { BotonCronometrar } from './BotonCronometrar'
import BotonSetearTiempo from './BotonSetearTiempo'

export const SeccionBotones = ({ item, openCronometro, openTiempo }) => {

    return (
        <Rows
            width={"auto"}
        >
            {!item.completado ?
                <>
                    <BotonCronometrar
                        openModal={openCronometro}
                    />
                    <BotonSetearTiempo
                        openModal={openTiempo}
                        message={"Definir tiempo"}
                    />
                </>
                : (
                    <BotonSetearTiempo
                        openModal={openTiempo}
                        message={"Editar tiempo"}
                    />)
            }
        </Rows>
    )
}
