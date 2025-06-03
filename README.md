# 📦 Backend - Proyecto Final PNT2

Este repositorio contiene el backend del Proyecto Final de Programación en Nuevas Tecnologías 2.

Desarrollado con **Node.js**, **Express** y **Sequelize**, conectado a una base de datos **MySQL**.

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- dotenv
- cors

## 🔧 Instalación y configuración

1. **Clonar el repositorio**

```bash
git clone https://github.com/GastiKopp/backend-proyecto-final-tp2.git
cd backend-proyecto-final-tp2
```
2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar las variables de entorno**

Crear un archivo .env en la raíz con el siguiente contenido:

```bash
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_de_la_base
DB_PORT=3306
```

4. **Inicializar la base de datos**

Asegurate de tener creada la base de datos en MySQL con el nombre que configuraste en .env.

El modelo se sincroniza automáticamente al ejecutar el servidor.

## ▶️ Ejecutar el servidor

```bash
npm run dev
```
El backend se levantará en http://localhost:3000


📚 **Endpoints principales**

GET /api/tareas: Obtener todas las tareas

POST /api/tareas: Crear nueva tarea

PUT /api/tareas/:id: Actualizar tarea

DELETE /api/tareas/:id: Eliminar tarea

GET /api/tareas/:id: Obtener tarea por ID

GET /api/categorias: Obtener categorías

POST /api/categorias: Crear nueva categoría

DELETE /api/categorias/:id: Eliminar categoría

🌐 **Relación con el frontend**
Este backend es consumido por el frontend disponible en:

🔗 https://github.com/fedecotler/proyecto-final-pnt2

## 👨‍💻 Autor

Gastón Kopplin Alva