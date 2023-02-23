//const { v4: uuid } = require("uuid");
//import { v4 as uuidv4 } from 'uuid';
import { crearSRespuesta} from '../services/respuestaService.js';
import { v4 as uuidv4 } from 'uuid';
//const docenteService = require("../services/docenteService");
// import { pool } from "../config/db.js";
// //const { pool } = require("../database/db");
// import { Docente } from "../Entidades/Docente.js"

export const crearCRespuesta = async (req, res) => {
    const { body } = req;

    if (
        !body.id_estudiante||
        !body.respuesta_1||
        !body.respuesta_2||
        !body.respuesta_3
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "Error en el cuerpo: 'id_estudiante', 'respuesta_1', 'respuesta_2'. respuesta_3... '",
            },
        });
    }

    const nuevoRespuesta = {
        id_estudiante: body.id_estudiante,
        respuesta_1: body.respuesta_1,
        respuesta_2: body.respuesta_2,
        respuesta_3: body.respuesta_3,
      };

    try {
        const crearRespuesta = await crearSRespuesta(nuevoRespuesta);
        console.log(crearCRespuesta);
        res.status(201).json({ message: "OK", data: crearRespuesta });
    } catch (error) {
        res.status(error?.status || 500) .send({ message: "FAILDED", data: { error: error?.message || error } });
    }


};