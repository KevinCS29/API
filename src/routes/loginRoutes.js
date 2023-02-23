import { Router } from 'express';
import{obtenerCLogin} from "../controllers/loginController.js";

export const routerL = Router();

routerL.get("/login/:id_estudiante", obtenerCLogin);

export default routerL;