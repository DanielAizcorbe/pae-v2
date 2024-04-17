import React from 'react'
import { Rows } from '../utils/Containers'
import OptionCard from './OptionCard'
import doctorImage from "./User.svg";
import documentImage from "./addFileImage.svg"

export const Home = () => {

    return (
        <Rows
            elementPosition={"center"}
            padding={"2rem"}
        >
            <OptionCard 
                alt={"evolucionar paciente"}
                title={"Evolucionar"}
                imgSrc={doctorImage}
                nextPage={"/evolucion/paciente"}
            />
            <OptionCard
                alt={"registrar paciente"}
                title={"Registrar"}
                imgSrc={documentImage}
                nextPage={"/registro-paciente"}
            />
        </Rows>
    )
}
