# 🛒 Panel de Administración de Productos - React + MockAPI

Este proyecto es un panel de administración para productos, desarrollado con **React**, utilizando **MockAPI** como backend simulado. Permite a un administrador realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre los productos. 

---

## ⚙️ Tecnologías utilizadas

- ⚛️ React + Vite
- 🎨 TailwindCSS + ShadCN UI
- 📦 Context API
- 🧰 React Hook Form
- 📡 Fetch API
- 🧪 TypeScript
- 🧪 MockAPI para datos falsos
- 💡 `lucide-react` para íconos
- 🍞 `sonner` para notificaciones
- 🧠 Diseño modular y componentes reutilizables

---

## 🔐 Usuario administrador

> Para acceder a las funciones de administración, usá el siguiente usuario:

- **Email:** `admin@admin.com`  
- **Contraseña:** `adminadmin`

Este usuario tiene permisos para:
- Agregar nuevos productos
- Editar productos existentes
- Eliminar productos
- Ver todos los productos del sistema

---

## ✨ Funcionalidades

### ✅ Listado de productos
- Se obtienen desde **MockAPI**.
- Se muestran con carga (`loading`) y manejo de errores (`error`).
- Están filtrados por categoría si se elige.

### ➕ Crear producto
- Formulario validado con `react-hook-form`.
- Al enviar, se realiza una petición **POST**.
- El nuevo producto se agrega automáticamente al estado global.

### ✏️ Editar producto
- Cada producto tiene un botón "Editar".
- Al hacer clic, se abre un modal precargado con los datos.
- El modal permite actualizar los campos.
- Al guardar, se realiza un **PUT** y se actualiza el estado.

### 🗑️ Eliminar producto
- Cada producto puede eliminarse con un modal de confirmación (`AlertDialog`).
- Se realiza un **DELETE** a la API y se actualiza el contexto global.

---

