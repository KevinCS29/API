import { Router } from 'express';
import{obtenerCEstudiantes, obtenerCEstudiante, crearCEstudiante, modificarCEstudiante, eliminarCEstudiante } from "../controllers/estudianteController.js";

export const routerE = Router();

routerE.get("/estudiantes", obtenerCEstudiantes);
routerE.get("/estudiantes/:id_docente", obtenerCEstudiante);
routerE.post("/estudiantes/", crearCEstudiante);
routerE.patch("/estudiantes/:id_docente", modificarCEstudiante);
routerE.delete("/estudiantes/:id_docente", eliminarCEstudiante);

export default routerE;