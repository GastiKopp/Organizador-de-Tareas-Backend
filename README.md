# 📦 Backend - Proyecto Final TP2

Este repositorio contiene el backend del Proyecto Final de Taller de Programación 2.

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


## 🧱 Arquitectura aplicada

El proyecto utiliza una arquitectura basada en capas con separación clara de responsabilidades:

- **Modelos (models/)**: Definición de las entidades (`Task`, `Category`) usando Sequelize.
- **Servicios (services/)**: Encapsulan la lógica de negocio en clases reutilizables.
- **Controladores (controllers/)**: Se encargan de manejar las peticiones HTTP y delegar la lógica a los servicios.
- **Rutas (routes/)**: Definen los endpoints y conectan con los métodos del controlador.

También se implementa **inyección de dependencias**, pasando instancias de servicios a los controladores desde las rutas. Esto mejora el desacoplamiento y la mantenibilidad del código.

 ## 📚 Endpoints principales

### Tareas (`/api/tareas`)
- `GET /`: Obtener todas las tareas
- `GET /:id`: Obtener tarea por ID
- `POST /`: Crear nueva tarea
- `PUT /:id`: Actualizar tarea
- `DELETE /:id`: Eliminar tarea

### Categorías (`/api/categorias`)
- `GET /`: Obtener todas las categorías
- `POST /`: Crear nueva categoría
- `DELETE /:id`: Eliminar categoría

🌐 **Relación con el frontend**
Este backend es consumido por el frontend disponible en:

🔗 https://github.com/fedecotler/proyecto-final-pnt2

## 👨‍💻 Autor

Gastón Kopplin Alva
