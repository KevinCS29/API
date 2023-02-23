import { crearMRespuesta } from '../config/RespuestaBD.js';


export const crearSRespuesta = (nuevoRespuesta) => {

  try {
    const crearRespuesta = crearMRespuesta(nuevoRespuesta);
    return crearRespuesta
  } catch (error) {
    throw error;
  }
};