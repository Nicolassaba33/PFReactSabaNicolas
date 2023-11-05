import data from "../data/data.json";

export const pedirDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export const pedirDatoPorId = (id) => {
  return new Promise((resolve, reject) => {
    const dato = data.find((el) => el.id === id);

    if (dato) {
      resolve(dato);
    } else {
      reject({
        error: "No se encontró ",
      });
    }
  });
};
