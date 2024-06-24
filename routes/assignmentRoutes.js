import { Router } from "express";
import assign from "../controller/assignmentController.js";

const router = Router();

router.get('/', assign.getAssignmentAll);
router.get('/:id', assign.getAssignmentOne);
router.post('/', assign.createAssignment);
router.put('/:id', assign.updatedAssignment);
router.delete('/:id', assign.deletedAssignment);

export default router; 