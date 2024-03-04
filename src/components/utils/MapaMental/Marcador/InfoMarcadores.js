import { Collapse, List } from "antd";
import React from "react";

const InfoMarcadores = ({ marcadores }) => {

    const collapseStyle = {
        width: '100%',
        height: '666px',
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
                dataSource={marcadores.filter(m => m.etapa === "valoracion")}
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
                dataSource={marcadores.filter(m => m.etapa === "ejecucion")}
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