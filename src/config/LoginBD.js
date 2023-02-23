import { pool } from "./db.js";


export const obtenerMLogin = async (id_estudiante) => {
  try {

    const [rows] = await pool.query("SELECT * FROM login WHERE id_estudiante = ?", [id_estudiante]);

    console.log(rows);
    
    if (rows.length == 0) {
      throw {
        status: 400,
        message: `Can't jsnkadskd '${id_estudiante}'`,
      };
    }

    return rows;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }

};