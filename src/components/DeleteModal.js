import { ModalBody, ModalFooter } from "reactstrap";
import React from "react";

export const DeleteModal = (props) => {
  const gestorSeleccionado = props.gestorSeleccionado;

  const deleteGestor = () => {
    props.axiosDeleteGestor(gestorSeleccionado.id);
    props.abrirCerrarModals("deleteModal");
  };

  return (
    <div>
      <ModalBody>
        Estas Seguro Que Deseas Eliminar{" "}
        {gestorSeleccionado && gestorSeleccionado.nombre}
      </ModalBody>

      <ModalFooter>
        <button className="btn btn-danger" onClick={() => deleteGestor()}>
          Si
        </button>{" "}
        <button
          className="btn btn-secondary"
          onClick={() => props.abrirCerrarModals("deleteModal")}
        >
          No
        </button>
      </ModalFooter>
    </div>
  );
};
