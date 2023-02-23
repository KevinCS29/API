//import {pool} from '../db/db.js'
//const docente = require("../database/Docente");
import { obtenerMDocentes, obtenerMDocente, crearMDocente, modificarMDocente, eliminarMDocente } from '../config/DocenteBD.js';
import { v4 as uuidv4 } from 'uuid';


export const obtenerSDocentes = (filtro) => {
  try {
    const todoslosDocentes = obtenerMDocentes(filtro);
    return todoslosDocentes;
  } catch (error) {
    throw error;
  }
};

export const obtenerSDocente = (id_docente) => {
  try {
    const docente = obtenerMDocente(id_docente);
    return docente;
  } catch (error) {
    throw error;
  }
};

export const crearSDocente = (nuevoDocente) => {

  try {
    const crearDocente = crearMDocente(nuevoDocente);
    return crearDocente;
  } catch (error) {
    throw error;
  }
};

export const modificarSDocente = (id_docente, cambios) => {
  try {
    const modificarDocente = modificarMDocente(id_docente, cambios);
    return modificarDocente;
  } catch (error) {
    throw error;
  }

};

export const eliminarSDocente = (id_docente) => {
  try {
    eliminarMDocente(id_docente);
  } catch (error) {
    throw error;
  }
};

