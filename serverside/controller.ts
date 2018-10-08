import { Request, Response, NextFunction } from "express";
import { PointRepo } from './persistence';

export class PointController{
    static async allPoints(req:Request,res:Response,next:NextFunction){
        console.log('aqui');
        
        try {
            //let docs = await PontoRepositorio.todos();
            res.send('oi');
            //console.log(docs);
            
        } catch (erro) {
            next(erro);
        }
    }
    static async hello(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}