# Informe final - Construcción, versiones y entrega

## Resumen del producto

El proyecto es una aplicación CRUD web que usa HTML, CSS, JavaScript y `localStorage`. La versión publicada es **v1.0.0**, con mejoras de seguridad al mostrar nombres, envío del formulario con Enter y una señal visual para el modo de edición.

## Control de cambios y versiones

Git y GitHub se usaron para conservar el historial y separar el trabajo por ramas. Las mejoras reales se registraron en `feature/session2-crud-improvements` mediante commits separados:

- `4c7543e`: representar los nombres como texto seguro.
- `475d002`: procesar el envío del formulario mediante `submit`.
- `0ebc0e5`: documentar las mejoras.
- `8446657`: añadir el indicador visual del modo de edición.

La etiqueta `v1.0.0` identifica la versión publicada y el changelog describe su contenido. El pull request de `feature/session2-crud-improvements` todavía está pendiente de crear y fusionar en `main`; por eso las mejoras de esa rama no forman parte de `main` todavía. Las ramas con commits que empiezan con `SIMULACIÓN` son ejemplos de historial y no contienen modificaciones de archivos.

## Integración continua

El workflow [`.github/workflows/ci.yml`](.github/workflows/ci.yml) se ejecuta en cada `push` y pull request. Valida la sintaxis de JavaScript, construye el sitio estático en `dist/`, genera un reporte y publica el build como artefacto. No había pruebas automatizadas de comportamiento, así que el pipeline no ejecuta pruebas funcionales.

Evidencias de CI:

- Ejecución exitosa en `main`: https://github.com/VirusEC15/CRUD_EXPERIMENTAL-2/actions/runs/37138251348
- Ejecución exitosa con las mejoras de CRUD: https://github.com/VirusEC15/CRUD_EXPERIMENTAL-2/actions/runs/37142214671

## Entrega v1.0.0

La versión **CRUD LocalStorage v1.0.0** está publicada en [GitHub Releases](https://github.com/VirusEC15/CRUD_EXPERIMENTAL-2/releases/tag/v1.0.0). El release incluye `CRUD-EXPERIMENTAL-2-v1.0.0.zip`, con los archivos HTML, CSS y JavaScript construidos y `CHANGELOG.md`. GitHub también ofrece los archivos fuente del tag.

Entregables del proyecto:

- `CHANGELOG.md`: historial de cambios de v1.0.0.
- `dist/CRUD-EXPERIMENTAL-2-v1.0.0.zip`: paquete del sitio y changelog.
- `INFORME_FINAL.md`: resumen de la gestión, CI, entrega y lecciones.
- Release y artefactos: https://github.com/VirusEC15/CRUD_EXPERIMENTAL-2/releases/tag/v1.0.0

## Lecciones aprendidas

- Las ramas por funcionalidad y los commits enfocados facilitan rastrear y revisar cambios.
- El pull request debe revisarse antes de fusionar una mejora en `main`; en este ejercicio, ese paso sigue pendiente para la rama de la Sesión 2.
- La CI ofrece una verificación repetible de sintaxis y construcción, pero no sustituye pruebas de comportamiento.
- Un tag, changelog y archivo comprimido permiten identificar y distribuir una versión concreta.
- Para colaborar en grupo, es importante acordar responsables por funcionalidad, comunicar el estado de cada tarea y revisar la integración antes de publicar una entrega.