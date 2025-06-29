export default class CategoryController {
  constructor(service) {
    this.service = service
  }

  getAll = async (req, res) => {
    try {
      const data = await this.service.getAll()
      res.json(data)
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  create = async (req, res) => {
    try {
      const { name } = req.body
      const newCategory = await this.service.create(name)
      res.status(201).json(newCategory)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  delete = async (req, res) => {
    try {
      const { id } = req.params
      const result = await this.service.delete(id)
      res.json(result)
    } catch (error) {
      res.status(404).json({ error: error.message })
    }
  }
}