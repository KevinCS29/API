import { pool } from "./db.js";


export const crearMRespuesta = async (nuevoRespuesta) => {
  try {

    const [rows] = await pool.query("SELECT * FROM respuesta WHERE id_estudiante = ?", [nuevoRespuesta.id_estudiante]);

    if (rows.length > 0) {
      throw {
        status: 400,
        message: `Workout with the name '${nuevoRespuesta.id_estudiante}' La Respuesta ya existe`,
      };
    }

    await pool.query("INSERT INTO respuesta (id_estudiante, respuesta_1, respuesta_2, respuesta_3) VALUES (?, ?, ?, ?)",
      [nuevoRespuesta.id_estudiante, nuevoRespuesta.respuesta_1, nuevoRespuesta.respuesta_2, nuevoRespuesta.respuesta_3]
    );

    return [nuevoRespuesta];
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};
