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
            
            res.json(docs);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    static async bySpecialties(req: Request, res: Response, next: NextFunction): Promise<void>{
        try {
            let docs = await PointRepo.searchSpecialties(req.params.t);
            res.json(docs);
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }

    static async hello(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}