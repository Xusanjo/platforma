import { Router } from "express";
import courses from "../controller/coursesController.js";

const router = Router();

router.get('/', courses.getAllCourses);
router.get('/:id', courses.getOneCourses);
router.post('/', courses.createdCourses);
router.put('/:id', courses.updatedCourses);
router.delete('/:id', courses.deletedCourse);

export default router;