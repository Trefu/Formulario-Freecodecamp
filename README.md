# Starcraft 2 Tournament Form

Formulario de registro para un torneo de StarCraft 2 realizado como proyecto de **Responsive Web Design de freeCodeCamp**.

La interfaz fue migrada de HTML estático y Bootstrap a Vue 3, Vite y Tailwind CSS. El formulario mantiene el contrato requerido por el test oficial de freeCodeCamp: IDs, labels, tipos de campo, grupos de radio, checkboxes con `name`, restricciones HTML5 y botón de envío.

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev
```

Inicia el servidor de desarrollo de Vite.

```bash
npm run build
npm run preview
```

Genera y sirve la versión de producción desde `dist/`.

```bash
npm test
```

Ejecuta el contrato automatizado del formulario con Vitest y jsdom. Este contrato replica las comprobaciones estructurales del desafío de freeCodeCamp.

```bash
npm run lint
npm run typecheck
```

Valida la sintaxis Vue/JavaScript y la comprobación estática del proyecto.

## Test oficial de freeCodeCamp

`src/index.html` incluye el bundle oficial:

```html
<script defer src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

Para verlo, ejecuta `npm run dev`, abre la URL mostrada por Vite y revisa el panel de tests de freeCodeCamp. La aplicación monta primero el formulario Vue y el bundle inspecciona el DOM resultante.

## Estructura

- `src/App.vue`: formulario y estado reactivo de Vue.
- `src/main.js`: punto de entrada de Vue.
- `src/style.css`: capas de Tailwind y estilos base del fondo.
- `src/index.html`: documento HTML y bundle oficial de freeCodeCamp.
- `tailwind.config.js`: colores y tipografía del diseño.
- `tests/survey-form.spec.js`: pruebas automatizadas del contrato de Survey Form.
