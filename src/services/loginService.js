import { obtenerMLogin } from '../config/LoginBD.js';


export const obtenerSLogin = (id_estudiante) => {
  try {
    console.log("idestudiante" , id_estudiante);
    const estudiante = obtenerMLogin(id_estudiante);
    return estudiante;
  } catch (error) {
    throw error;
  }
};