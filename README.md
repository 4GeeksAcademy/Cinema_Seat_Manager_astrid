# Hello World with Typescript

Spanish version of this readme is available in `README.es.md`.

Start coding a TypeScript/HTML/CSS website in 30 seconds by opening this template using 4Geeks' One-Click Coding or locally on your computer.

## Before you begin

Install the packages by typing:

```bash
npm install
```

## How do I run my website to see live changes?

Type on the command line:

```bash
npm run start
```

Then open your local URL in the browser (usually `http://localhost:5173`).

## Where do I write my code?

It depends on the language:

- `./src/main.ts` for TypeScript logic.
- `./src/style.css` for styles (Tailwind CSS v4 is already imported).
- `./index.html` for the HTML shell.

You can add more files as needed, just make sure to import them from `main.ts`.

Note: if you can see the "Hello Rigo" card and the message "If you can see this, Tailwind is working.", Tailwind is configured correctly.

## Troubleshooting

### I don't see my changes...

Every time you change any file inside `./src`, the website refreshes automatically (hot reload).

If changes still don't appear, refresh clearing cache:

- Mac: `Cmd + Shift + R`
- Windows/Linux: `Ctrl + Shift + R`

## How do I include more images in my project?

Add them inside `./public` and reference them in HTML using `/your-image-name.ext`.

Example:

```html
<img src="/rigo-baby.jpg" alt="Rigo" />
```

## How do I include more TypeScript files?

Add files into `./src` and import them from `main.ts`.

Example:

```ts
import { myVar } from "./file2";
```

## How do I publish the website?

This boilerplate is compatible with Vercel in one step.

## Thank you

This and many other projects are built by students as part of the [4Geeks Academy Bootcamp](https://4geeksacademy.co/), by [@ehiber](https://github.com/ehiber). Find out more about our [AI Engineering Course](https://4geeksacademy.com/us/coding-bootcamps/ai-engineering), [Full Stack Developer Course](https://4geeksacademy.com/us/coding-bootcamps/part-time-full-stack-developer), and [Data Science Bootcamp](https://4geeksacademy.com/us/coding-bootcamps/datascience-machine-learning).

## Contributors

Thanks to:

1. [ehiber](https://github.com/ehiber) - template setup, documentation, and maintenance.
