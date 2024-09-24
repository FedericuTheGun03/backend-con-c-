Gestión de Tareas - Proyecto Fullstack
Descripción del Proyecto
Este proyecto es una aplicación Fullstack desarrollada con C# y .NET Core en el backend y React en el frontend, con integración de PostgreSQL para la persistencia de datos.
La aplicación permite gestionar tareas (CRUD) con autenticación mediante JWT, y está diseñada para ser fácilmente desplegada mediante Docker.

La aplicación tiene las siguientes funcionalidades:

Autenticación de usuarios (registro e inicio de sesión) utilizando JWT.
Gestión de tareas: Crear, Listar, Modificar, Eliminar.
Filtrado de tareas por estado: Pendiente o Completada.
Responsividad en el frontend usando librerías de UI como Material UI o Bootstrap.
Conexión con base de datos PostgreSQL.
Uso de Docker para la contenedorización de la aplicación.
Tecnologías Utilizadas
Backend: C# con .NET Core
Frontend: React y Javascript
Base de Datos: PostgreSQL
Autenticación: JWT (JSON Web Token)
Contenedorización: Docker y Docker Compose
Documentación API: Swagger
Control de Versiones: Git
Estructura del Proyecto
El proyecto está dividido en dos grandes secciones: Backend y Frontend. A continuación se detallan las funcionalidades de cada parte.

1. Backend - API REST con C# y .NET Core
   Funcionalidades:
Autenticación JWT: Los usuarios pueden registrarse e iniciar sesión. El sistema utiliza JWT para autenticar las solicitudes hacia las rutas protegidas.

CRUD de Tareas: La API permite la gestión de una entidad Tarea, la cual contiene los siguientes campos:

ID (autoincremental)
Título (string)
Descripción (string)
Estado (Pendiente, Completada)
Fecha de Creación (DateTime)
Las operaciones disponibles incluyen:

POST: Crear una nueva tarea.
GET: Listar todas las tareas o una tarea específica por su ID.
PUT: Modificar una tarea existente.
DELETE: Eliminar una tarea.
Validaciones:

Los campos obligatorios son validados en el servidor.
Las operaciones de creación y modificación verifican que los datos sean consistentes (e.g., formato de fecha correcto).
Base de Datos: El backend está conectado a una base de datos PostgreSQL mediante Entity Framework Core, lo que facilita las operaciones de CRUD sobre la entidad Tareas.

Swagger: La API está documentada y disponible en /swagger para visualizar y probar los endpoints de manera interactiva.

Configuración:
El archivo appsettings.json incluye la configuración para la conexión con PostgreSQL

Dockerfile:
El backend incluye un Dockerfile que permite su despliegue mediante contenedores

2. Frontend - Interfaz en React con JavaScript
   uncionalidades:
Lista de Tareas: El frontend consume la API para listar todas las tareas disponibles en el sistema, mostrando el título y el estado de cada una.
Agregar Tarea: Un formulario permite crear una nueva tarea, la cual se envía al backend a través de una solicitud POST.
Editar Tarea: Los usuarios pueden modificar una tarea existente (título, descripción, estado).
Eliminar Tarea: Permite eliminar una tarea mediante una solicitud DELETE al backend.
Filtrar por Estado: Las tareas pueden filtrarse por estado (Pendiente o Completada).
La interfaz ha sido diseñada para ser responsiva, asegurando que se vea correctamente en dispositivos móviles y de escritorio.

Componentes Clave:
TaskList.js: Muestra todas las tareas recuperadas desde el backend.
TaskForm.js: Un formulario para agregar nuevas tareas.
Dockerfile:
El frontend también cuenta con un Dockerfile para su despliegue

3. Contenedorización con Docker Compose
Este proyecto puede ser desplegado fácilmente mediante Docker Compose.
El archivo docker-compose.yml incluye la configuración necesaria para levantar tanto el backend como el frontend y la base de datos PostgreSQL en contenedores separados

4. Ejecución del Proyecto
Requisitos Previos:
Docker y Docker Compose instalados en tu máquina.
PostgreSQL instalado localmente o configurado en el archivo docker-compose.yml.
Pasos para Ejecutar el Proyecto:
Clona el repositorio.

Navega a la carpeta del proyecto.

Levanta los contenedores con Docker Compose

Accede a la aplicación en:

Backend (API REST): http://localhost:5000
Frontend (React): http://localhost:3000
Swagger (Documentación de API): http://localhost:5000/swagger

