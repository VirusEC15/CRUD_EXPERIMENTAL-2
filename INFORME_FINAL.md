# Informe final - Gestión de versiones y entrega

## Proyecto y versión

Aplicación CRUD web con HTML, CSS y JavaScript. La versión preparada para esta entrega es **v1.0.0**; el paquete comprimido contiene los archivos estáticos construidos y la documentación de cambios.

## Control de cambios y versiones

El proyecto se administra con Git y se publica en GitHub. La configuración de integración continua está en `main`. Las mejoras funcionales de esta entrega se desarrollaron en `feature/session2-crud-improvements` mediante commits separados para el renderizado seguro, el envío del formulario, la documentación y el estado visual de edición.

La rama de mejoras todavía requiere un pull request creado y revisado en GitHub antes de integrarse en `main`. Las otras ramas con commits vacíos están identificadas como simulaciones y no contienen cambios de archivos.

## Integración continua

GitHub Actions valida la sintaxis de JavaScript, construye los archivos estáticos en `dist/`, genera un reporte y publica el build como artefacto. La ejecución asociada al commit `8446657` finalizó correctamente. No había pruebas automatizadas de comportamiento configuradas en el proyecto.

Evidencia de la ejecución: https://github.com/VirusEC15/CRUD_EXPERIMENTAL-2/actions/runs/37142214671

## Entregables

- `CHANGELOG.md`: cambios incluidos en v1.0.0.
- `CRUD-EXPERIMENTAL-2-v1.0.0.zip`: paquete comprimido del sitio estático construido.
- `INFORME_FINAL.md`: resumen del proceso, la integración continua y las lecciones aprendidas.
- El workflow y los commits están disponibles en el repositorio de GitHub.

La publicación formal como GitHub Release debe realizarse desde la página de Releases usando la etiqueta `v1.0.0` y adjuntando el ZIP. Requiere iniciar sesión en GitHub.

## Lecciones aprendidas

- Separar las mejoras en ramas y commits pequeños facilita identificar y revisar cada cambio.
- Un pull request permite revisar las diferencias antes de integrar una rama en `main`.
- La integración continua detecta errores de sintaxis y comprueba que el build se genere después de cada push.
- Los artefactos, el changelog y el reporte hacen más clara la entrega de una versión.
- En un trabajo grupal conviene asignar responsables por funcionalidad y comunicar qué cambios están listos para revisión; esta práctica ayuda a evitar conflictos al integrar el trabajo.