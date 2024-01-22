import Modal from "antd/es/modal/Modal";
import Title from "antd/es/typography/Title";
import React from "react";

const ModalEvolucionAnterior = ({ open, filaSeleccionada, closeModal }) => {

    return (
        <Modal
            open={open}
            title={filaSeleccionada.fecha}
            footer={null}
            onCancel={closeModal}
            width={"60%"}
        >
            <Title
                level={2}
            >
                Evolución realizada en{" " + filaSeleccionada.sector}
            </Title>
            <Title
                level={3}
            >
                Valoración
            </Title>
            <p>
                Anim sit in elit excepteur duis. Ad enim pariatur est laborum aliqua duis aliquip eiusmod nulla aliquip cupidatat laboris. Laboris dolor pariatur quis dolor aute tempor est proident tempor sunt ea pariatur. Elit voluptate proident esse enim culpa culpa est et voluptate nisi aute exercitation excepteur. Occaecat ea amet mollit deserunt qui dolor ea quis dolore incididunt occaecat commodo. Nostrud voluptate magna duis dolore irure in officia consequat velit aute duis sit. Ea id est ipsum est consequat ullamco velit culpa ut.
            </p>
            <img src="https://fakeimg.pl/600x700?text=Mapa+Mental" alt="mapa mental" />
            <Title
                level={3}
            >
                Diagnóstico
            </Title>
            <p>
                Anim sit in elit excepteur duis. Ad enim pariatur est laborum aliqua duis aliquip eiusmod nulla aliquip cupidatat laboris. Laboris dolor pariatur quis dolor aute tempor est proident tempor sunt ea pariatur. Elit voluptate proident esse enim culpa culpa est et voluptate nisi aute exercitation excepteur. Occaecat ea amet mollit deserunt qui dolor ea quis dolore incididunt occaecat commodo. Nostrud voluptate magna duis dolore irure in officia consequat velit aute duis sit. Ea id est ipsum est consequat ullamco velit culpa ut.
            </p>
            <Title
                level={3}
            >
                Planeación
            </Title>
            <p>
                Anim sit in elit excepteur duis. Ad enim pariatur est laborum aliqua duis aliquip eiusmod nulla aliquip cupidatat laboris. Laboris dolor pariatur quis dolor aute tempor est proident tempor sunt ea pariatur. Elit voluptate proident esse enim culpa culpa est et voluptate nisi aute exercitation excepteur. Occaecat ea amet mollit deserunt qui dolor ea quis dolore incididunt occaecat commodo. Nostrud voluptate magna duis dolore irure in officia consequat velit aute duis sit. Ea id est ipsum est consequat ullamco velit culpa ut.
            </p>
            <Title
                level={3}
            >
                Ejecución
            </Title>
            <p>
                Anim sit in elit excepteur duis. Ad enim pariatur est laborum aliqua duis aliquip eiusmod nulla aliquip cupidatat laboris. Laboris dolor pariatur quis dolor aute tempor est proident tempor sunt ea pariatur. Elit voluptate proident esse enim culpa culpa est et voluptate nisi aute exercitation excepteur. Occaecat ea amet mollit deserunt qui dolor ea quis dolore incididunt occaecat commodo. Nostrud voluptate magna duis dolore irure in officia consequat velit aute duis sit. Ea id est ipsum est consequat ullamco velit culpa ut.
            </p>
            <img src="https://fakeimg.pl/600x700?text=Mapa+Mental" alt="mapa mental" />
            <Title
                level={3}
            >
                Evaluación
            </Title>
            <p>
                Anim sit in elit excepteur duis. Ad enim pariatur est laborum aliqua duis aliquip eiusmod nulla aliquip cupidatat laboris. Laboris dolor pariatur quis dolor aute tempor est proident tempor sunt ea pariatur. Elit voluptate proident esse enim culpa culpa est et voluptate nisi aute exercitation excepteur. Occaecat ea amet mollit deserunt qui dolor ea quis dolore incididunt occaecat commodo. Nostrud voluptate magna duis dolore irure in officia consequat velit aute duis sit. Ea id est ipsum est consequat ullamco velit culpa ut.
            </p>
        </Modal>
    );
}

export { ModalEvolucionAnterior }