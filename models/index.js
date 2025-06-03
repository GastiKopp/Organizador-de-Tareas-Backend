import sequelize from '../config/db.js'
import Task from './task.js'
import Category from './category.js'

Task.belongsTo(Category, {
  foreignKey: 'categoryId',
  as: 'category'
})

Category.hasMany(Task, {
  foreignKey: 'categoryId',
  as: 'tasks'
})

const db = {}

db.sequelize = sequelize
db.Task = Task
db.Category = Category

export default db
