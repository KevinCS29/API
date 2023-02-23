// const DB = require("./db.json");
// const { saveToDatabase } = require("./utils");
//const pool = require("./db");
import { pool } from "./db.js";


export const obtenerMImagenes = async () => {
  try {

    //console.log("ESTOY EN BD OBTENER DOCENTES");
    //console.log(filtro);
    const [ rows ] = await pool.query("SELECT * FROM imagen");
    //console.log(rows);
    //console.log("ESTOY EN BD OBTENER DOCENTES");
    //console.log(rows.length);

    

    if (rows.lenght <= 0) {
      return console.log("No existen Imagenes Registrados");
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
