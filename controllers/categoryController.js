import db from "../models/index.js"
const Category = db.Category

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll()
    res.json(categories)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las categorías" })
  }
}

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "El nombre es obligatorio" })
    }

    const nuevaCategoria = await Category.create({ name: name.trim() })
    res.status(201).json(nuevaCategoria)
  } catch (error) {
    console.error("Error al crear la categoría:", error)
    res.status(500).json({ error: "Error al crear la categoría" })
  }
}

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params
    const categoria = await Category.findByPk(id)

    if (!categoria) {
      return res.status(404).json({ error: "Categoría no encontrada" })
    }

    await categoria.destroy()
    res.json({ message: "Categoría eliminada correctamente" })
  } catch (error) {
    console.error("Error al eliminar la categoría:", error)
    res.status(500).json({ error: "Error al eliminar la categoría" })
  }
}
