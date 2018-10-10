import { Router } from "express";
import { PointController } from "./controller";
 
const router = Router();
router.get('/points', PointController.allPoints);
router.get('/points/name/:t', PointController.byName);
router.get('/points/spec/:t', PointController.bySpecialties);
router.get('/hello', PointController.hello);

export default router;