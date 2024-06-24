import { Router } from "express";
import user from '../controller/userController.js';

const router = Router();

router.get('/', user.getUserAll);
router.get('/:id', user.getUserOne);
router.post('/', user.createUser);
router.put('/:id', user.updateUser);
router.delete('/:id', user.deletedUser);

export default router;