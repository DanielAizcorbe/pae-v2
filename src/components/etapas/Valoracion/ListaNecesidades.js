import React from "react";
import { Necesidad } from "./Necesidad";
import { styled } from "styled-components";
import { UList } from "../../utils/List";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleSeleccion } from "../../../store/slices/necesidades";

const ListaNecesidades = () => {

    const necesidades = useSelector(state => state.necesidades);

    const dispatch = useDispatch();

    const toggleNecesidad = (id) => {
        dispatch(toggleSeleccion(id));
    }

    return (
            <Necesidades>
                {
                    necesidades.map(
                        n => <Necesidad 
                                key={n.id}
                                nombre={n.nombre} 
                                id={n.id} 
                                toggleSelection={toggleNecesidad}
                                selected={n.selected}
                            />
                    )
                }
            </Necesidades>
    );
}

const Necesidades = styled(UList)``;

export { ListaNecesidades }