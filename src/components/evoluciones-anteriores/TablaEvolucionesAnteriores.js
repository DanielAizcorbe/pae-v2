import React, { useState } from "react";
import { evoluciones } from "../datos/evoluciones-anteriores";
import { Pagination, Table } from "antd";
import "./rows.css";

const TablaEvolucionesAnteriores = ({ handleRowClick }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 10;
    const paginatedData = evoluciones.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
        <>
            <Table
                dataSource={paginatedData}
                columns={columns}
                pagination={false}
                style={{ height: "100%", width: "100%" }}
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
        </>
    );
}

export { TablaEvolucionesAnteriores }