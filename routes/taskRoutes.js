import { Router } from 'express';
import TaskController from '../controllers/taskController.js';
import TaskService from '../services/taskService.js';

const router = Router();

const taskService = new TaskService();
const taskController = new TaskController(taskService);

router.get('/', taskController.getAll);
router.get('/:id', taskController.getById);
router.post('/', taskController.create);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.delete);

export default router;
