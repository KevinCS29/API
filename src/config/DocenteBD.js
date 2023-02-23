// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");
//const pool = require("./db");
import { pool } from "../config/db.js";

async function validar(id_docente) {
  const [rows] = await pool.query("SELECT * FROM docente WHERE id_docente = ?", [id_docente]);
  const validar = rows.length == 1;
  if (!validar) {
    throw {
      status: 400,
      message: `Can't find workout with the id '${id_docente}' Error al Eliminar - Docente no encontrado`,
    };
  }

  return validar;
}

export const obtenerMDocentes = async (filtro) => {
  try {

    //console.log("ESTOY EN BD OBTENER DOCENTES");
    //console.log(filtro);
    const [ rows ] = await pool.query("SELECT * FROM docente");
    //console.log(rows);
    //console.log("ESTOY EN BD OBTENER DOCENTES");
    //console.log(rows.length);

    

    if (rows.lenght <= 0) {
      return console.log("No existen Docentes Registrados");
    };

    if(filtro.apellidos != undefined){
      const filtro1 = filtro.apellidos.toLowerCase();
      const filtro2 = filtro.apellidos.toUpperCase();
      let [ rows2 ] = await pool.query(`SELECT * FROM docente WHERE apellidos REGEXP '^${filtro1}|${filtro2}'`); 
      return rows2;
    };

    // if (todosDocentes.lenght == 0) {
    //   return console.log("No existen Docentes Registrados");
    // }
    // let docentes = todosDocentes;
    return rows; //jQuery.parseJSON(rows);
  } catch (error) {
    throw { status: 500, message: error };
  }
};


export const obtenerMDocente = async (id_docente) => {
  try {

    //const validar = datos_docente.find((datos_docente) => datos_docente.id_docente === id);
    const [rows] = await pool.query("SELECT * FROM docente WHERE id_docente = ?", [id_docente]);
    //console.log("El docente es", rows);

    //console.log(typeof validar, validar);
    //console.log("validacioooooooooon", validar);

    if (rows.length == 0) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${id_docente}'`,
      };
    }

    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

};

export const crearMDocente = async (nuevoDocente) => {
  try {

    const [rows] = await pool.query("SELECT * FROM docente WHERE cedula = ?", [nuevoDocente.cedula]);

    if (rows.length > 0) {
      throw {
        status: 400,
        message: `Workout with the name '${nuevoDocente.cedula}' El docente ya existe`,
      };
    }

    await pool.query("INSERT INTO docente (id_docente, nombres, apellidos, direccion, sexo, cedula, telefono, email, fecha_creacion, fecha_modificacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nuevoDocente.id_docente, nuevoDocente.nombres, nuevoDocente.apellidos, nuevoDocente.direccion, nuevoDocente.sexo, nuevoDocente.cedula, nuevoDocente.telefono, nuevoDocente.email, nuevoDocente.fecha_creacion, nuevoDocente.fecha_modificacion]
    );

    return [nuevoDocente];
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

export const modificarMDocente = async (id_docente, cambios) => {

  const { nombres, apellidos, direccion, sexo, cedula, telefono, email } = cambios;
  const fecha_modificacion = new Date();


  try {
    // const { id } = req.params;
    // const { name, salary } = req.body;
    if (validar(id_docente)) {
      const [result] = await pool.query(
        "UPDATE docente SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), direccion = IFNULL(?, direccion), sexo = IFNULL(?, sexo), cedula = IFNULL(?, cedula), telefono = IFNULL(?, telefono), email = IFNULL(?, email), fecha_modificacion = IFNULL(?, fecha_modificacion) WHERE id_docente = ?",
        [nombres, apellidos, direccion, sexo, cedula, telefono, email, fecha_modificacion, id_docente]
      );

      if (result.affectedRows === 0) {
        throw {
          status: 404,
          message: `Docente not found-Fallo la modificacion`,
        };
      }
    }

    const [rows] = await pool.query("SELECT * FROM docente WHERE id_docente = ?", [
      id_docente,
    ]);
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  };

};


export const eliminarMDocente = async (id_docente) => {

  try {

    if (validar(id_docente)) {
      await pool.query("DELETE FROM docente WHERE id_docente = ?", [id_docente]);
    }

  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};


