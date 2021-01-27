import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  axiosGetGestores,
  axiosAddGestor,
  axiosPutGestor,
  axiosDeleteGestor,
} from "./reducers/gestoresReducer";
import { AddModal } from "./components/AddModal";
import { EditModal } from "./components/EditModal";
import { DeleteModal } from "./components/DeleteModal";
import { Modal } from "reactstrap";

const App = (props) => {
  const gestores = props.gestores;

  const [gestorSeleccionado, setgestorSeleccionado] = useState();
  const [modals, setmodals] = useState({
    addModal: false,
    editModal: false,
    deleteModal: false,
  });

  const abrirCerrarModals = (tipoModal) => {
    setmodals({ ...modals, [tipoModal]: !modals[tipoModal] });
  };

  const seleccionarGestor = (gestor, tipoModal) => {
    setgestorSeleccionado(gestor);
    abrirCerrarModals(tipoModal);
  };

  useEffect(() => {
    props.axiosGetGestores();
  }, []);

  return (
    <main>
      <div className="App">
        <br />
        <button
          className="btn btn-success"
          onClick={() => abrirCerrarModals("addModal")}
        >
          Insertar Nuevo Registro
        </button>
        <br />

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>NOMBRE</th>
              <th>LANZAMIENTO</th>
              <th>DESARROLLADOR</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody>
            {gestores &&
              gestores.map((gestor) => (
                <tr key={gestor.id}>
                  <td>{gestor.id} </td>

                  <td> {gestor.nombre} </td>
                  <td> {gestor.lanzamiento} </td>
                  <td> {gestor.desarrollador} </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => seleccionarGestor(gestor, "editModal")}
                    >
                      Editar
                    </button>{" "}
                    <button
                      className="btn btn-danger"
                      onClick={() => seleccionarGestor(gestor, "deleteModal")}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <Modal isOpen={modals.addModal}>
        <AddModal
          axiosAddGestor={props.axiosAddGestor}
          abrirCerrarModals={abrirCerrarModals}
        />
      </Modal>
      <Modal isOpen={modals.editModal}>
        <EditModal
          axiosPutGestor={props.axiosPutGestor}
          abrirCerrarModals={abrirCerrarModals}
          gestorSeleccionado={gestorSeleccionado}
        />
      </Modal>
      <Modal isOpen={modals.deleteModal}>
        <DeleteModal
          axiosDeleteGestor={props.axiosDeleteGestor}
          abrirCerrarModals={abrirCerrarModals}
          gestorSeleccionado={gestorSeleccionado}
        />
      </Modal>
    </main>
  );
};

const mapStateToProps = (state) => ({
  gestores: state.gestores.gestores,
});

export default connect(mapStateToProps, {
  axiosGetGestores,
  axiosAddGestor,
  axiosPutGestor,
  axiosDeleteGestor,
})(App);
