import { Request, Response, NextFunction } from "express";
import {AutorRepositorio} from './persistencia';

export class AutorControlador{
    static async todosAutores(req:Request,res:Response,next:NextFunction){
        console.log('aqui');
        
        try {
            let autores = await AutorRepositorio.todosAutores();
            res.json(autores);
            console.log(autores);
            
        } catch (erro) {
            next(erro);
        }
    }
    static async alo(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}