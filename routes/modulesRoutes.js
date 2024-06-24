import { Router } from "express";
import modul from "../controller/modulesController.js";

const router = Router();

router.get('/', modul.getAllModul);
router.get('/:id', modul.getOneModul);
router.post('/', modul.createdModul);
router.put('/:id', modul.updatedModul);
router.delete('/:id', modul.deletedModul);

export default router;