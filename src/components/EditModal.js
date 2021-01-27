import { ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import React, { useState } from "react";

export const EditModal = (props) => {
  const [gestorSeleccionado, setgestorSeleccionado] = useState(
    props.gestorSeleccionado
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setgestorSeleccionado({
      ...gestorSeleccionado,
      [name]: value,
    });
  };

  const updateGestor = () => {
    props.axiosPutGestor(gestorSeleccionado);
    props.abrirCerrarModals("editModal");
  };

  return (
    <div>
      <ModalHeader>Editar Gestor de Bases De Datos</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Id: </label>
          <br />
          <input
            type="text"
            value={gestorSeleccionado && gestorSeleccionado.id}
            className="form-control"
            name="id"
            readOnly
          />
          <br />
          <label>Nombre: </label>
          <br />
          <input
            type="text"
            value={gestorSeleccionado && gestorSeleccionado.nombre}
            className="form-control"
            name="nombre"
            onChange={handleChange}
          />
          <br />
          <label>Lanzamiento: </label>
          <br />
          <input
            type="text"
            value={gestorSeleccionado && gestorSeleccionado.lanzamiento}
            className="form-control"
            name="lanzamiento"
            onChange={handleChange}
          />
          <br />
          <label>Desarrollador: </label>
          <br />
          <input
            type="text"
            value={gestorSeleccionado && gestorSeleccionado.desarrollador}
            className="form-control"
            name="desarrollador"
            onChange={handleChange}
          />
          <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={() => updateGestor()}>
          Editar
        </button>{" "}
        <button
          className="btn btn-danger"
          onClick={() => props.abrirCerrarModals("editModal")}
        >
          Cancelar
        </button>
      </ModalFooter>
    </div>
  );
};
