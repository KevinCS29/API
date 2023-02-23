import { pool } from "./db.js";

async function validar(id_estudiante) {
  const [rows] = await pool.query("SELECT * FROM estudiante WHERE id_estudiante = ?", [id_estudiante]);
  const validar = rows.length == 1;
  if (!validar) {
    throw {
      status: 400,
      message: `Can't find workout with the id '${id_estudiante}' Error al Eliminar - Estudiante no encontrado`,
    };
  }

  return validar;
}


export const obtenerMEstudiantes = async () => {
  try {

    const [rows] = await pool.query("SELECT * FROM estudiante");
    if (rows.lenght <= 0) {
      return console.log("No existen Estudiantes Registrados");
    };
    return rows; 
  } catch (error) {
    throw { status: 500, message: error };
  }
};


export const obtenerMEstudiante = async (id_estudiante) => {
  try {

    const [rows] = await pool.query("SELECT * FROM estudiante WHERE id_estudiante = ?", [id_estudiante]);
    if (rows.length == 0) {
      throw {
        status: 400,
        message: `Can't find workout with the id '${id_estudiante}'`,
      };
    }

    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

};

export const crearMEstudiante = async (nuevoEstudiante) => {
  try {

    const [rows] = await pool.query("SELECT * FROM estudiante WHERE cedula = ?", [nuevoEstudiante.cedula]);

    if (rows.length > 0) {
      throw {
        status: 400,
        message: `Workout with the name '${nuevoEstudiante.cedula}' El estudiante ya existe`,
      };
    }

    await pool.query("INSERT INTO estudiante (id_estudiante, nombres, apellidos, direccion, sexo, cedula, telefono, email, fecha_creacion, fecha_modificacion) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [nuevoEstudiante.id_estudiante, nuevoEstudiante.nombres, nuevoEstudiante.apellidos, nuevoEstudiante.direccion, nuevoEstudiante.sexo, nuevoEstudiante.cedula, nuevoEstudiante.telefono, nuevoEstudiante.email, nuevoEstudiante.fecha_creacion, nuevoEstudiante.fecha_modificacion]
    );

    return [nuevoEstudiante];
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

export const modificarMEstudiante = async (id_estudiante, cambios) => {

  const { nombres, apellidos, direccion, sexo, cedula, telefono, email } = cambios;
  const fecha_modificacion = new Date();


  try {

    if (validar(id_estudiante)) {
      const [result] = await pool.query(
        "UPDATE estudiante SET nombres = IFNULL(?, nombres), apellidos = IFNULL(?, apellidos), direccion = IFNULL(?, direccion), sexo = IFNULL(?, sexo), cedula = IFNULL(?, cedula), telefono = IFNULL(?, telefono), email = IFNULL(?, email), fecha_modificacion = IFNULL(?, fecha_modificacion) WHERE id_estudiante = ?",
        [nombres, apellidos, direccion, sexo, cedula, telefono, email, fecha_modificacion, id_estudiante]
      );

      if (result.affectedRows === 0) {
        throw {
          status: 404,
          message: `Estudiante not found-Fallo la modificacion`,
        };
      }
    }

    const [rows] = await pool.query("SELECT * FROM estudiante WHERE id_estudiante = ?", [
      id_estudiante,
    ]);
    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  };

};


export const eliminarMEstudiante = async (id_estudiante) => {

  try {

    if (validar(id_estudiante)) {
      await pool.query("DELETE FROM estudiante WHERE id_estudiante = ?", [id_estudiante]);
    }

  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};


