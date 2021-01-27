import {
  peticionDELETE,
  peticionGET,
  peticionPOST,
  peticionPUT,
} from "../lib/api";

const initialState = {
  gestores: [],
};

const GET_GESTORES = "GET_GESTORES";
const ADD_GESTORES = "ADD_GESTORES";
const UPDATE_GESTORES = "UPDATE_GESTORES";
const DELETE_GESTORES = "DELETE_GESTORES";

const getGestores = (gestores) => ({ type: GET_GESTORES, payload: gestores });
const addGestor = (gestor) => ({ type: ADD_GESTORES, payload: gestor });
const updateGestor = (gestor) => ({ type: UPDATE_GESTORES, payload: gestor });
const deleteGestor = (id) => ({ type: DELETE_GESTORES, payload: id });

export const axiosGetGestores = () => {
  //redux-thunk nos permite mandar el dispatch como parámetro
  return (dispatch) => {
    //Llamamos a la función de la api
    peticionGET()
      .then((res) => {
        dispatch(getGestores(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const axiosAddGestor = (gestor) => {
  return (dispatch) => {
    peticionPOST(gestor)
      .then((res) => {
        dispatch(addGestor(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const axiosPutGestor = (gestor) => {
  return (dispatch) => {
    peticionPUT(gestor)
      .then((res) => {
        dispatch(updateGestor(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};
export const axiosDeleteGestor = (id) => {
  return (dispatch) => {
    peticionDELETE(id)
      .then((res) => {
        dispatch(deleteGestor(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GESTORES:
      return { ...state, gestores: action.payload };
    case ADD_GESTORES:
      return { ...state, gestores: [action.payload, ...state.gestores] };
    case UPDATE_GESTORES:
      return {
        ...state,
        gestores: [
          ...state.gestores.map((gestor) =>
            gestor.id === action.payload.id ? action.payload : gestor
          ),
        ],
      };
    case DELETE_GESTORES:
      return {
        ...state,
        gestores: [
          ...state.gestores.filter((elem) => elem.id !== action.payload),
        ],
      };
    default:
      return { ...state };
  }
};
