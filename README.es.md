# Hola Mundo con Typescript

La version en ingles de este readme esta disponible en `README.md`.

Empieza a programar un sitio con TypeScript/HTML/CSS en 30 segundos abriendo esta plantilla con One-Click Coding de 4Geeks o en tu computadora local.

## Antes de empezar

Instala los paquetes escribiendo:

```bash
npm install
```

## Como ejecuto mi sitio para ver cambios en vivo?

Escribe en la linea de comandos:

```bash
npm run start
```

Luego abre la URL local en el navegador (normalmente `http://localhost:5173`).

## Donde escribo mi codigo?

Depende del lenguaje:

- `./src/main.ts` para la logica en TypeScript.
- `./src/style.css` para estilos (Tailwind CSS v4 ya viene importado).
- `./index.html` para el HTML base.

Puedes agregar mas archivos cuando quieras, solo asegúrate de importarlos desde `main.ts`.

Nota: si puedes ver la tarjeta de "Hello Rigo" y el mensaje "If you can see this, Tailwind is working.", entonces Tailwind esta configurado correctamente.

## Solucion de problemas

### No veo mis cambios...

Cada vez que cambias cualquier archivo dentro de `./src`, el sitio se refresca automaticamente (hot reload).

Si aun no ves cambios, recarga limpiando cache:

- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

## Como incluyo mas imagenes en mi proyecto?

Agregalas dentro de `./public` y referencialas en HTML con `/nombre-imagen.ext`.

Ejemplo:

```html
<img src="/rigo-baby.jpg" alt="Rigo" />
```

## Como incluyo mas archivos TypeScript?

Agrega archivos en `./src` e importalos desde `main.ts`.

Ejemplo:

```ts
import { myVar } from "./file2";
```

## Como publico el sitio?

Este boilerplate es compatible con Vercel en un solo paso.

## Gracias

Este y muchos otros proyectos son construidos por estudiantes como parte del [Bootcamp de 4Geeks Academy](https://4geeksacademy.co/), por [@ehiber](https://github.com/ehiber). Conoce mas sobre nuestro [AI Engineering Course](https://4geeksacademy.com/us/coding-bootcamps/ai-engineering), [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), y [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

## Contribuidores

Gracias a:

1. [ehiber](https://github.com/ehiber) - setup de la plantilla, documentacion y mantenimiento.
