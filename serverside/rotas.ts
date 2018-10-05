import { Router } from "express";
import { PontoControlador } from "./controlador";

const roteador = Router();
roteador.get('/pontos',PontoControlador.todosPontos);
roteador.get('/alo',PontoControlador.alo);

export {roteador};