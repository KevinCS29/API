import { obtenerSEstudiantes, obtenerSEstudiante, crearSEstudiante, modificarSEstudiante, eliminarSEstudiante } from '../services/estudianteService.js';
import { v4 as uuidv4 } from 'uuid';

export const obtenerCEstudiantes = async (req, res) => {
    
    try {
        const todosEstudiantes = await obtenerSEstudiantes();
        res.status(200).json({ message: 'ok', data: todosEstudiantes });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


export const obtenerCEstudiante = async (req, res) => {
    const {
        params: { id_estudiante },
    } = req;
    if (!id_estudiante) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parameter ':id_estudiante' can not be empty" },
        });
        return;
    }
    const id1 = id_estudiante.slice(1, 37);
    try {
        const estudiante = await obtenerSEstudiante(id1);
        res.status(200).json({ message: 'ok', data: estudiante });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

export const crearCEstudiante = async (req, res) => {
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

    const nuevoEstudiante = {
        id_estudiante: uuidv4(),
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
        const crearEstudiante = await crearSEstudiante(nuevoEstudiante);
        console.log(crearCEstudiante);
        res.status(201).json({ status: "OK", data: crearEstudiante });
    } catch (error) {
        res.status(error?.status || 500) .send({ status: "FAILDED", data: { error: error?.message || error } });
    }


};

export const modificarCEstudiante = async (req, res) => {
    const {
        body,
        params: { id_estudiante },
      } = req;
    
      if (!id_estudiante) {
        res.status(400).send({
          status: "FAILED",
          data: { error: "Parameter ':id_estudiante' no se encontro el estudiante" },
        });
      }
      
      const id1 = id_estudiante.slice(1, 37);
      try {
        const modificarEstudiante = await modificarSEstudiante(id1, body);
        res.json({ status: "OK", data: modificarEstudiante });
      } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
      }

};

export const eliminarCEstudiante = async (req, res) => {
    
    const {
        params: { id_estudiante },
    } = req;


    if (!id_estudiante) {
        res.status(400).send({
            status: "FAILED",
            data: { error: "Parametro ':id_estudiante' can not be empty" },
        });
    }
    const id = id_estudiante.slice(1, 37);
    
    try {
        await eliminarSEstudiante(id);
        res.status(204).send({ status: "OK" });

    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }

};
