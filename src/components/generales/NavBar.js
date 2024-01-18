import React from 'react';
import { Menu } from "antd";
import {
    FileTextOutlined,
    HistoryOutlined,
    EditOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';


const NavBar = ({defaultSection}) => {

    const style = {
        lineHeight: '64px',
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const navegar = useNavigate();

    const goToEvolucion = () => {
        navegar("/evolucion");
    };

    const goToEvolucionesAnteriores = () => {
        navegar("/evoluciones-atenriores");
    }

    const goToBorrador = () => {
        navegar("/evolucion/borrador");
    }

    const items = [
        {
            key: "1",
            icon: <FileTextOutlined />,
            label: "Evolución",
            onClick: () => goToEvolucion()
        },
        {
            key: "2",
            icon: <HistoryOutlined />,
            label: "Evoluciones anteriores",
            onClick: () => goToEvolucionesAnteriores()
        },
        {
            key: "3",
            icon: <EditOutlined />,
            label: "Borrador",
            onClick: () => goToBorrador()
        }
    ];

    return (
        <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[defaultSection + ""]}
            style={style}
            items={items}
        />
    );
}

export { NavBar }