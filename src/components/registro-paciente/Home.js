import React from 'react'
import { Rows } from '../utils/Containers'
import OptionCard from './OptionCard'
import doctorImage from "./undraw_doctor_kw-5-l.svg";
import documentImage from "./undraw_add_files_re_v09g.svg"

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
