import { Router } from "express";
import lesson from "../controller/lessonController.js";

const router = Router();

router.get('/', lesson.getAllLessons);
router.get('/:id', lesson.getOneLesson);
router.post('/', lesson.createdLesson);
router.put('/:id', lesson.updatedLesson);
router.delete('/:id', lesson.deletedLesson);

export default router;