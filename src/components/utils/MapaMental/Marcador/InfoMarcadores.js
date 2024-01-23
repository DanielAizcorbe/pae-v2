import { Collapse, List } from "antd";
import React from "react";

const InfoMarcadores = ({ marcadoresValoracion, marcadoresEjecucion, marcadores }) => {

    const collapseStyle = {
        position: 'relative',
        minWidth: '20rem',
        width: '50%',
        minHeight: '600px',
        height: '100%',
        maxHeight: '600px',
        left: '32rem',
        margin: 0,
        zIndex: 1,
    }; 

    const config = {
        emptyText: "No registró ninguna práctica"
    }

    const items = [
        {
            key: 1,
            label: "Prácticas Observadas",
            children: <List
                bordered
                dataSource={marcadoresValoracion}
                renderItem={(item) => <List.Item key={item.id}>{marcadores.indexOf(item) + 1 + ". "}{item.text}</List.Item>}
                style={{overflowY: 'auto', maxHeight: "400px", height: "100%"}}
                locale={config}
            />
        },
        {
            key: 2,
            label: "Prácticas Realizadas",
            children: <List
                bordered
                dataSource={marcadoresEjecucion}
                renderItem={(item) => <List.Item key={item.id}>{marcadores.indexOf(item) + 1 + ". "}{item.text}</List.Item>}
                style={{overflowY: 'auto', maxHeight: "400px", height: "100%"}}
                locale={config}
            />
        }
    ];


    return (
        <Collapse
            style={collapseStyle}
            items={items}
            defaultActiveKey={['1']}
            size="large"
            collapsible={"header"}
            accordion
        />
    );
}

export { InfoMarcadores }