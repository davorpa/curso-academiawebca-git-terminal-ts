# Esta es la documentación del proyecto

Bienvenidos al curso de "Inicia en la Programación: Primer Paso : Git y Terminal"

Sección 5: Introducción a Typescript

<https://www.udemy.com/course/curso-de-programacion-aprender-a-programar-git-terminal>

## Pasos

Instala NodeJS: <http://nodejs.org/>

Desde una terminal:

1. **Instala typescript** como libería global de nodejs:

```bash
npm install -g typescript
```

2. **Inicializa tu proyecto** con:

```bash
tsc --init
```

Esto genera el **archivo [.tsconfig](/.tsconfig)** que nos simplificará bastante las instrucciones a pasar al compilador de Typescript a la hora de interactuar con el proyecto de manera global.

Edítalo a gusto siguiendo [la documentación](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) y según las premisas de tu proyecto. Yo por ejemplo suelo como mínimo cambiar el directorio output a `build` (por convención) y habilitar los sourcemaps y compilación estricta.

Por último si quieres ejecutar Typescript directamente échale un ojo al proyecto [ts-node](https://github.com/TypeStrong/ts-node) e instálatelo:

```bash
npm install -g ts-node
```

**A codificar!!**
