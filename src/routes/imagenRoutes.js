import { Router } from 'express';
import{obtenerCImagenes} from "../controllers/imagenController.js";

export const routerI = Router();

routerI.get("/imagenes/", obtenerCImagenes);

export default routerI;