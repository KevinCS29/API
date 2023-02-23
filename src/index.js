import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import express from "express";
import  apicache  from "apicache";
//import cors from "cors";
import { routerD } from "./routes/docenteRoutes.js";
import { routerE } from "./routes/estudianteRoutes.js";
import { routerL } from "./routes/loginRoutes.js";
import { routerR } from "./routes/respuestaRoutes.js";
import { routerI } from "./routes/imagenRoutes.js";

//import { PORT } from "./config/config.js";

//Variables 
const app = express();
const PORT = process.env.PORT || 8080;
const cache = apicache.middleware;

//app.use(cors);
//MIddlewares
app.use(express.json());
app.use(cache("2 minutes"));


//Routes
//app.use("/api/v1", router);
 app.use("/api/v1", routerD);
 app.use("/api/v1", routerE);
 app.use("/api/v1", routerL);
 app.use("/api/v1", routerR);
 app.use("/api/v1", routerI);

//Public


//Starting the server

app.listen(PORT);
console.log(`Server running on port '${PORT}'`);
