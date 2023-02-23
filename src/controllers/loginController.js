//const { v4: uuid } = require("uuid");
//import { v4 as uuidv4 } from 'uuid';
import { obtenerSLogin} from '../services/loginService.js';
import { v4 as uuidv4 } from 'uuid';
//const docenteService = require("../services/docenteService");
// import { pool } from "../config/db.js";
// //const { pool } = require("../database/db");
// import { Docente } from "../Entidades/Docente.js"

export const obtenerCLogin = async (req, res) => {
    const {
        params: { id_estudiante },
    } = req;
    //const { id_docente } = req.params;
    if (!id_estudiante) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':id_docente' can not be empty" },
        });
        return;
    }
    // const id1 = id_estudiante.slice(1, 37);
    console.log(id_estudiante);
    try {
        // if (rows.length <= 0) {
        //     res.status(400).send({
        //         status: "FAILED",
        //         data: { error: "Parameter ':id_docente' can not be empty" },
        //       });
        //       return;
        // }
        const estudiante = await obtenerSLogin(id_estudiante);
        res.status(200).json({ message: 'ok', data: estudiante });
        //res.json(rows[0]);
    } catch (error) {
        res.status(error?.status || 500).send({ message: "FAILED", data: { error: error?.message || error } });
    }
};