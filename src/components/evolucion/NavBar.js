import React from 'react';
import { Menu } from "antd";
import {
    FileTextOutlined,
    HistoryOutlined,
    EditOutlined,
} from '@ant-design/icons';


const NavBar = () => {

    const style = {
        lineHeight: '64px',
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const items = [
        {
            key: "1",
            icon: <FileTextOutlined />,
            label: "Evolución",
        },
        {
            key: "2",
            icon: <HistoryOutlined />,
            label: "Evoluciones anteriores",
        },
        {
            key: "3",
            icon: <EditOutlined />,
            label: "Borrador",
        }
    ];

    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={style}
            items={items}
        />
    );
}

export { NavBar }