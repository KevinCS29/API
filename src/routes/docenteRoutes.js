import { Router } from 'express';
import{ obtenerCDocentes, obtenerCDocente, crearCDocente, modificarCDocente, eliminarCDocente } from "../controllers/docenteController.js";
//const estudianteController = require("../controllers/estudianteController");
export const routerD = Router();


routerD.get("/docentes", obtenerCDocentes);
routerD.get("/docentes/:id_docente", obtenerCDocente);
routerD.post("/docentes", crearCDocente);
routerD.patch("/docentes/:id_docente", modificarCDocente);
routerD.delete("/docentes/:id_docente", eliminarCDocente);
//   .get("/", estudianteController.obtenerDocentes)
//   .get("/:estudianteId", estudianteController.obtenerDocente)
//   .post("/", estudianteController.crearDocente)
//   .patch("/:estudianteId", estudianteController.modificarDocente)
//   .delete("/:estudianteId", estudianteController.eliminarDocente);

export default routerD;