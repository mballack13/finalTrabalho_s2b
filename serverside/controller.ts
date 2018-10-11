import { Request, Response, NextFunction } from "express";
import { PointRepo } from './persistence';

export class PointController{
    static async allPoints(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            let docs = await PointRepo.all();
            res.json(docs);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    static async byName(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            let docs = await PointRepo.searchName(req.params.t);
            console.log(req.params.t);
            if(docs.length == 0){
                res.status(404).send("Nenhum hospital encontrado com o termo buscado.")
            }else{
                res.json(docs);
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    static async bySpecialties(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            let docs = await PointRepo.searchSpecialties(req.params.t);
            if(docs.length == 0){
                res.status(404).send("Nenhum hospital encontrado com o termo buscado.")
            }else{
                res.json(docs);
            }
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    static async byId(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            let doc = await PointRepo.getPoint(req.params.t);
            res.json(doc);
        } catch (erro) {
            res.status(404).send("Nenhum hospital encontrado!!!");
            next(erro);
        }
    }
    static async hello(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}