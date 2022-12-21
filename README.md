# MCGA - Proyecto backend API REST para final MCGA 2022

Un método GET para poder obtener datos de la base de datos.
Un método GET para poder obtener un elemento por id de la base de datos.
Un método POST para poder agregar un elemento a la base de datos.
Un método PUT para poder editar un elemento a la base de datos.
Un método DELETE para poder eliminar un elemento a la base de datos.

---
## Puesta en marcha del Servidor

Servidor desarrollado con Node.js, usando el framework express.

1. `npm install`  ->  _Para instalar las dependencias de desarrollo y del proyecto_
2. `npm start`  ->  _Para ejecutar el servidor_

---
## Arquitectura de carpetas

1. `/config`   ->  _conexion a la Base de datos_
2. `/controllers`   ->  _Controladores_
3. `/models`  ->  _Modelos_
4. `/routes`  ->  _Rutas_

---
## Conección a la Base de Datos

Se utiliza una base de datos noSQL ***MongoDB*** hosteada en la nube usando ***MongoDB Atlas***, conectado con ***mongoose***.

---
## Vista local del proyecto

en navegador, probarlo en el http://localhost:3000


---
## Vista Online del proyecto

View the hosted on [Heroku] (https://   xxxx   .herokuapp.com/)
=> No disponible, el servicio ya no es gratuito

---
## Desarrollo de APIs

### Recurso: `user`
- ruta de la api: (ruta del servidor)***/api/user***
- Acceso a los métodos  CRUD - MongoDB:
 1. `addNewUser` -> _Usuarios - Agregar usuario_
 2. `updateUser` -> _Usuarios - Actualizar datos del usuario_
 3. `deleteUser` -> _Usuarios - Borrar usuario por el Id_
 4. `getAllUsers` -> _Usuarios - Obtener todos los usuarios_
 5. `getUserById` -> _Usuarios - Obtener un usuario por el Id_

### Recurso: `supplier`
- ruta de la api: (ruta del servidor)***/api/supplier***
- Acceso a los métodos  CRUD - MongoDB:
 1. `addNewSupplier` -> _Proveedores - Agregar proveedor_
 2. `updateSupplier` -> _Proveedores - Actualizar datos del proveedor_
 3. `deleteSupplier` -> _Proveedores - Borrar proveedor por el Id_
 4. `getAllSuppliers` -> _Proveedores - Obtener todos los proveedores_
 5. `getSupplierById` -> _Proveedores - Obtener un proveedor por el Id_


---
## License & copyright

Ruben Sato

© Año 2022  
