import React from "react";
import { Necesidad } from "./Necesidad";
import { necesidades } from "../../datos/datos-necesidades";
import { styled } from "styled-components";
import { UList } from "../../utils/List";

const ListaNecesidades = () => {

    return (
            <Necesidades>
                {
                    necesidades.map(
                        n => <Necesidad nombre={n.nombre} id={n.id} />
                    )
                }
            </Necesidades>
    );
}

const Necesidades = styled(UList)``;

export { ListaNecesidades }