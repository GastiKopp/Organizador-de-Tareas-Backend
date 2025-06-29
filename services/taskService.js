import db from '../models/index.js'
const { Task, Category } = db


class TaskService {
  async getAll() {
    return await Task.findAll({
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    });
  }

  async getById(id) {
    return await Task.findByPk(id, {
      include: {
        model: Category,
        as: 'category',
        attributes: ['id', 'name']
      }
    });
  }

  async create(data) {
    return await Task.create(data);
  }

  async update(id, data) {
    const task = await Task.findByPk(id);
    if (!task) return null;
    return await task.update(data);
  }

  async delete(id) {
    const task = await Task.findByPk(id);
    if (!task) return null;
    await task.destroy();
    return task;
  }
}

export default TaskService;
