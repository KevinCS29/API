import { obtenerMEstudiantes, obtenerMEstudiante, crearMEstudiante, modificarMEstudiante, eliminarMEstudiante } from '../config/EstudianteBD.js';

export const obtenerSEstudiantes = () => {
  try {
    const todoslosEstudiantes = obtenerMEstudiantes();
    return todoslosEstudiantes;
  } catch (error) {
    throw error;
  }
};

export const obtenerSEstudiante = (id_estudiante) => {
  try {
    const estudiante = obtenerMEstudiante(id_estudiante);
    return estudiante;
  } catch (error) {
    throw error;
  }
};

export const crearSEstudiante = (nuevoEstudiante) => {

  try {
    const crearEstudiante = crearMEstudiante(nuevoEstudiante);
    return crearEstudiante;
  } catch (error) {
    throw error;
  }
};

export const modificarSEstudiante = (id_estudiante, cambios) => {
  try {
    const modificarEstudiante = modificarMEstudiante(id_estudiante, cambios);
    return modificarEstudiante;
  } catch (error) {
    throw error;
  }

};

export const eliminarSEstudiante = (id_estudiante) => {
  try {
    eliminarMEstudiante(id_estudiante);
  } catch (error) {
    throw error;
  }
};

