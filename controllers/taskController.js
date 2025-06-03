import db from "../models/index.js";
const Task = db.Task;
const Category = db.Category;

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las tareas" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, status, due_date, completed, categoryId } = req.body;

    const newTask = await Task.create({
      title,
      description,
      status,
      due_date,
      completed,
      categoryId
    });

    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ error: "Error al crear la tarea" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed, status, due_date, categoryId } = req.body;

    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    task.title = title;
    task.description = description;
    task.completed = completed;
    task.status = status;
    task.due_date = due_date;
    task.categoryId = categoryId;

    await task.save();

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar la tarea" });
  }
};



export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    await task.destroy();
    res.json({ message: "Tarea eliminada" });
  } catch (error) {
    res.status(400).json({ error: "Error al eliminar la tarea" });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id, {
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    });

    if (!task) return res.status(404).json({ error: "Tarea no encontrada" });

    res.json(task);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener la tarea" });
  }
};

