import Anchor from "antd/es/anchor/Anchor";
import React from "react";
import { Columns } from "../utils/Containers";

const Secciones = ({ secciones }) => {

    const getItem = (item, key) => {
        return {
            key: key,
            href: "#" + item,
            title: item
        };
    }
    const items = secciones.map(s => getItem(s, secciones.indexOf(s)));

    return (
        <Columns
            width={"20%"}
            height={"100%"}
            padding={"2rem"}
            elementPosition={"center-left"}
        >
            <Anchor
                affix={true}
                showInkInFixed={true}
                items={items}
                style={{ top: "8rem", position: "fixed" }}
            />
        </Columns>
    );
}

export { Secciones }