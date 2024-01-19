import { Collapse, List } from "antd";
import React from "react";
import { styled } from "styled-components";

const InfoMarcadores = ({ marcadoresValoracion, marcadoresEjecucion }) => {

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
                renderItem={(item) => <List.Item key={item.id}>{marcadoresValoracion.indexOf(item) + 1 + ". "}{item.text}</List.Item>}
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
                renderItem={(item) => <List.Item key={item.id}>{marcadoresEjecucion.indexOf(item) + 1 + ". "}{item.text}</List.Item>}
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

const ListaInfoMarcadores = styled.div`
    position: relative;
    max-width: 40rem;
    min-width: 20rem;
    width: 50%;
    min-height: 600px;
    height: 100%;
    left: 32rem;
    padding: 1rem 2rem;
    margin: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.2rem;
`;

const InfoMarcador = styled.li`
    font-size: 1.3rem;
    padding: 0.5rem;
`;

export { InfoMarcadores }