//const { v4: uuid } = require("uuid");
//import { v4 as uuidv4 } from 'uuid';
import { obtenerSImagenes } from '../services/imagenService.js';
//const docenteService = require("../services/docenteService");
// import { pool } from "../config/db.js";
// //const { pool } = require("../database/db");
// import { Docente } from "../Entidades/Docente.js"


export const obtenerCImagenes = async (req, res) => {
    //const { id_docente } = req.query;

    // const { apellidos } = req.query;

    //const [rows] = pool.query("SELECT * FROM docente");
    try {
        //console.log("ESTOY EN OBTENER DOCENTES")
        const todosDocentes = await obtenerSImagenes();
        //console.log("todos los docente", todosDocentes);
        res.status(200).json({ message: 'ok', data: todosDocentes });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};
