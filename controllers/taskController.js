class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
  }

  getAll = async (req, res) => {
    try {
      const tasks = await this.taskService.getAll();
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener tareas' });
    }
  }

  getById = async (req, res) => {
    try {
      const task = await this.taskService.getById(req.params.id);
      if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json(task);
    } catch (err) {
      res.status(400).json({ error: 'Error al buscar tarea' });
    }
  }

  create = async (req, res) => {
    try {
      const newTask = await this.taskService.create(req.body);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(400).json({ error: 'Error al crear la tarea' });
    }
  }

  update = async (req, res) => {
    try {
      const updatedTask = await this.taskService.update(req.params.id, req.body);
      if (!updatedTask) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json(updatedTask);
    } catch (err) {
      res.status(400).json({ error: 'Error al actualizar la tarea' });
    }
  }

  delete = async (req, res) => {
    try {
      const deleted = await this.taskService.delete(req.params.id);
      if (!deleted) return res.status(404).json({ error: 'Tarea no encontrada' });
      res.json({ message: 'Tarea eliminada' });
    } catch (err) {
      res.status(400).json({ error: 'Error al eliminar la tarea' });
    }
  }
}

export default TaskController;
