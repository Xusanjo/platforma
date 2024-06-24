import { Router } from "express";
import enrollment from "../controller/enrolmentController.js";

const router = Router();

router.get('/', enrollment.getAllEnrollmen);
router.get('/:id', enrollment.getOneEnrollmen);
router.post('/', enrollment.createdEnrollmen);
router.put('/:id', enrollment.updatedEnrollmen);
router.delete('/:id', enrollment.deletedEnrollmen);

export default router;