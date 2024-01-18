import Anchor from "antd/es/anchor/Anchor";
import React from "react";

const Secciones = ({secciones}) => {

    const getItem = (item, key) => {
        return {
            key: key,
            href: "#" + item,
            title: item
        };
    }
    const items = secciones.map(s => getItem(s, secciones.indexOf(s)));

    return (
        <Anchor
            affix={true}
            items={items}
        />
    );
}

export { Secciones }