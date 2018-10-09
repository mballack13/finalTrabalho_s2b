import { Request, Response, NextFunction } from "express";
import { PointRepo } from './persistence';

export class PointController{
    static async allPoints(req: Request, res: Response, next: NextFunction): Promise<void>{
        
        try {
            console.log('all points');
            
            let docs = await PointRepo.all();
            res.json(docs);
            console.log(docs);
            
        } catch (erro) {
            res.status(500);
            next(erro);
        }
    }
    static async hello(req:Request,res:Response,next:NextFunction){
        res.send('alo');
    }
}