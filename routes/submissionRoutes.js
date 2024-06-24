import { Router } from "express";
import submission from "../controller/submissionController.js";

const router = Router();

router.get('/', submission.getAllSubmession);
router.get('/:id', submission.getOneSubmession);
router.post('/', submission.createdSubmession);
router.put('/:id', submission.updatedSubmession);
router.delete('/:id', submission.deletedSubmession);

export default router;