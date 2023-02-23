//const { v4: uuid } = require("uuid");
//import { v4 as uuidv4 } from 'uuid';
import { obtenerSDocentes, obtenerSDocente, crearSDocente, modificarSDocente, eliminarSDocente } from '../services/docenteService.js';
import { v4 as uuidv4 } from 'uuid';
//const docenteService = require("../services/docenteService");
// import { pool } from "../config/db.js";
// //const { pool } = require("../database/db");
// import { Docente } from "../Entidades/Docente.js"


export const obtenerCDocentes = async (req, res) => {
    //const { id_docente } = req.query;

    const { apellidos } = req.query;

    //const [rows] = pool.query("SELECT * FROM docente");
    try {
        //console.log("ESTOY EN OBTENER DOCENTES")
        const todosDocentes = await obtenerSDocentes( { apellidos } );
        //console.log("todos los docente", todosDocentes);
        res.status(200).json({ message: 'ok', data: todosDocentes });
        //console.log(rows[0]);
        //res.status(200).json({ message: 'ok' , data: rows});
        //console.log(res.json(rows));
        // const datos = rows.length;
        // for(let i = 0; i <= rows.length; i += 1) {
        //     const { nombres, apellidos, direccion, sexo, cedula, telefono, email } = rows[i];
        //      const docente = new Docente(nombres, apellidos, direccion, sexo, cedula, telefono, email);
        //      console.log(docente);
        //      //console.log(`Numero:  ${i} `);
        // };
        //console.log(rows[0]);
        //res.json(rows);

        //console.log(todosDocentes)

        //res.send({ status: "OK", data: rows });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


export const obtenerCDocente = async (req, res) => {
    const {
        params: { id_docente },
    } = req;
    //const { id_docente } = req.params;
    if (!id_docente) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':id_docente' can not be empty" },
        });
        return;
    }
    const id1 = id_docente.slice(1, 37);
    try {
        // if (rows.length <= 0) {
        //     res.status(400).send({
        //         status: "FAILED",
        //         data: { error: "Parameter ':id_docente' can not be empty" },
        //       });
        //       return;
        // }
        const docente = await obtenerSDocente(id1);
        res.status(200).json({ message: 'ok', data: docente });
        //res.json(rows[0]);
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

export const crearCDocente = async (req, res) => {
    const { body } = req;

    if (
        !body.nombres||
        !body.apellidos||
        !body.direccion||
        !body.sexo||
        !body.cedula||
        !body.telefono||
        !body.email
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error:
                    "One of the following keys is missing or is empty in request body: 'nombres', 'apellidos', 'direccion'... '",
            },
        });
    }


    const nuevoDocente = {
        id_docente: uuidv4(),
        nombres: body.nombres,
        apellidos: body.apellidos,
        direccion: body.direccion,
        sexo: body.sexo,
        cedula: body.cedula,
        telefono: body.telefono,
        email: body.email,
        fecha_creacion: new Date(),
        fecha_modificacion: new Date()
      };

    try {
        const crearDocente = await crearSDocente(nuevoDocente);
        console.log(crearCDocente);
        //res.status(201).send({ status: "OK", data: crearDocente });
        res.status(201).json({ status: "OK", data: crearDocente });
    } catch (error) {
        res.status(error?.status || 500) .send({ status: "FAILDED", data: { error: error?.message || error } });
    }


};

export const modificarCDocente = async (req, res) => {
    const {
        body,
        params: { id_docente },
      } = req;
    
      if (!id_docente) {
        res.status(400).send({
          status: "FAILED",
          data: { error: "Parameter ':id_docente' no se encontro el docente" },
        });
      }
      
      const id1 = id_docente.slice(1, 37);
      try {
        const modificarDocente = await modificarSDocente(id1, body);
        //res.send({ status: "OK", data: modificarDocente });
        res.json({ status: "OK", data: modificarDocente });
      } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
      }

};

export const eliminarCDocente = async (req, res) => {
    
    const {
        params: { id_docente },
    } = req;


    if (!id_docente) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parametro ':id_docente' can not be empty" },
        });
    }

    // if (rows.affectedRows <= 0) {
    //   return res.status(404).json({ message: "Docente not found" });
    // }

    const id = id_docente.slice(1, 37);
    
    try {
        await eliminarSDocente(id);
        res.status(204).send({ status: "OK" });

    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }


};

