import express from 'express'
import CategoryService from '../services/categoryService.js'
import CategoryController from '../controllers/categoryController.js'

const router = express.Router()
const service = new CategoryService()
const controller = new CategoryController(service)

router.get('/', controller.getAll)
router.post('/', controller.create)
router.delete('/:id', controller.delete)

export default router