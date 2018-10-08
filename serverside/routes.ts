import { Router } from "express";
import { PointController } from "./controller";
 
const router = Router();
router.get('/points',PointController.allPoints);
router.get('/hello',PointController.hello);

export {router};