import Category from '../models/category.js'

export default class CategoryService {
  async getAll() {
    return await Category.findAll()
  }

  async create(name) {
    if (!name || !name.trim()) {
      throw new Error("El nombre es obligatorio")
    }

    return await Category.create({ name: name.trim() })
  }

  async delete(id) {
    const category = await Category.findByPk(id)
    if (!category) throw new Error("Categoría no encontrada")
    await category.destroy()
    return { message: "Categoría eliminada correctamente" }
  }
}