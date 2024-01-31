import React, { useState } from "react";
import { evoluciones } from "../datos/evoluciones-anteriores";
import { Pagination, Table } from "antd";
import "./rows.css";
import { Columns } from "../utils/Containers";
import { filtrar } from "./Filtros/filtrar";

const TablaEvolucionesAnteriores = ({ handleRowClick, filtros }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;

    const evolucionesFiltradas = filtrar(evoluciones, filtros);
    const paginatedData = evolucionesFiltradas.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    const handleChangePage = (page) => {
        setCurrentPage(page);
    };

    const columns = [
        {
            title: "Fecha",
            dataIndex: "fecha",
            key: "fecha"
        },
        {
            title: "Sector",
            dataIndex: "sector",
            key: "sector"
        },
        {
            title: "Enfermero",
            dataIndex: "enfermero",
            key: "enfermero"
        },
        {
            title: "Resumen",
            dataIndex: "resumen",
            key: "resumen"
        }
    ];

    const rowStyle = (record, index) => {
        return "row"
    };

    return (
        <Columns
            elementPosition={"top-center"}
        >
            <Table
                dataSource={paginatedData}
                columns={columns}
                pagination={false}
                style={{ width: "100%", height: "100%"}}
                rowClassName={rowStyle}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record),
                })}
            />
            <Pagination
                defaultCurrent={1}
                total={evoluciones.length}
                pageSize={pageSize}
                showSizeChanger={false}
                onChange={handleChangePage}
            />
        </Columns>
    );
}

export { TablaEvolucionesAnteriores }