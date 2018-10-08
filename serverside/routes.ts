import { Router } from "express";
import { PointControlador } from "./controller";

const router = Router();
router.get('/points',PointController.allPontos);
router.get('/hello',PointController.hello);

export {router};