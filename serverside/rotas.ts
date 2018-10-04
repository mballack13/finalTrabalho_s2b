import { Router } from "express";
import { AutorControlador } from "./controlador";

const roteador = Router();
roteador.get('/autores',AutorControlador.todosAutores);
roteador.get('/alo',AutorControlador.alo);

export {roteador};