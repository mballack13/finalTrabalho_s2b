import { Request, Response, NextFunction } from "express";
import { PontoRepositorio } from './persistencia';

export class PontoControlador{
    static async todosPontos(req:Request,res:Response,next:NextFunction){
        console.log('aqui');
        
        try {
            //let docs = await PontoRepositorio.todos();
            res.send('oi');
            //console.log(docs);
            
        } catch (erro) {
            next(erro);
        }
    }
    static async alo(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}