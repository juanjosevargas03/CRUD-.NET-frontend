import { ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import React, { useState } from "react";

export const AddModal = (props) => {
  const [gestorSeleccionado, setgestorSeleccionado] = useState({
    nombre: "",
    lanzamiento: "",
    desarrollador: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setgestorSeleccionado({
      ...gestorSeleccionado,
      [name]: value,
    });
  };

  const insertGestor = () => {
    props.axiosAddGestor(gestorSeleccionado);
    props.abrirCerrarModals("addModal");
  };

  return (
    <div>
      <ModalHeader>Insertar Gestor de Bases De Datos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="nombre"
            onChange={handleChange}
          />
          <br />
          <label>Lanzamiento: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="lanzamiento"
            onChange={handleChange}
          />
          <br />
          <label>Desarrollador: </label>
          <br />
          <input
            type="text"
            className="form-control"
            name="desarrollador"
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => insertGestor()}>
          Insertar
        </button>{" "}
        <button
          className="btn btn-danger"
          onClick={() => props.abrirCerrarModals("addModal")}
        >
          Cancelar
        </button>
      </ModalFooter>
    </div>
  );
};
