# Registro de cambios

## v1.0.0 - 2026-10-03

### Añadido

- Pipeline de GitHub Actions para validar la sintaxis de JavaScript, construir el sitio estático y generar un reporte.
- Indicador visual para distinguir el modo de edición del formulario.

### Mejorado

- Los nombres se renderizan como texto para que el contenido ingresado no se interprete como HTML.
- El formulario procesa el evento `submit`, por lo que se puede guardar con el botón o con Enter.
- Al editar, el botón cambia a `Update` y el formulario se resalta; al guardar o limpiar, vuelve a `Save`.

### Construcción y validación

- El build copia `CRUD.html`, `script.js` y `style.css` a `dist/`.
- La validación de sintaxis y el build terminaron correctamente en GitHub Actions.
- El proyecto no incluye pruebas automatizadas de comportamiento.