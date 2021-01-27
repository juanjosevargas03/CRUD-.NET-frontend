import axios from "axios";

const URL = "https://localhost:5001/api/Gestores";

export const peticionGET = async () => {
  return await axios
    .get(URL)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const peticionPOST = async (gestor) => {
  return await axios
    .post(URL, gestor)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};

export const peticionPUT = async (gestor) => {
  return await axios
    .put(URL + "/" + gestor.id, gestor)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
export const peticionDELETE = async (id) => {
  return await axios
    .delete(URL + "/" + id)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
