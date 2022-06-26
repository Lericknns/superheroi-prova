import "dotenv/config"
import express from "express"
import cors from "cors"
import controller from "./controller/controllerheroi.js"

const server = express();
server.use(controller);
server.use(cors());
server.use(express.json());


server.listen(process.env.PORT,() => console.log(`API conectado na porta ${process.env.PORT
}`))