import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './models/index.js'
import taskRoutes from './routes/taskRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/tareas', taskRoutes)
app.use('/api/categorias', categoryRoutes)

db.sequelize.sync()
  .then(() => console.log('Base de datos conectada y modelos sincronizados'))
  .catch((err) => console.error('Error al conectar la base de datos:', err))

export default app
