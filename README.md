# Ficha Cursos

Vitrina de cursos — "Tus NOOC de autogestión académica". Muestra tarjetas de tus cursos disponibles (cada una enlaza al sitio independiente de ese curso) y tarjetas de "Próximamente" para los que estás preparando.

## Cómo funciona

Este sitio **no contiene el contenido de los cursos** — solo los presenta y enlaza a ellos. Cada curso (como Ficha APA) sigue siendo su propio proyecto independiente, publicado por separado en Vercel.

## Cómo agregar un curso nuevo cuando esté listo

1. Construye el curso nuevo como un proyecto aparte (usa `ficha-apa-project` como plantilla: cópialo, cambia el contenido de `src/App.jsx`, tu QR y tus datos en `src/Landing.jsx`, y el código de acceso en `src/Gate.jsx`).
2. Sube ese proyecto a un repositorio de GitHub nuevo y despliégalo en Vercel (mismo proceso que ya hiciste con Ficha APA). Obtendrás un enlace propio, por ejemplo `curso-metodologia.vercel.app`.
3. Abre `src/App.jsx` de **este** proyecto (Ficha Cursos) y mueve la tarjeta correspondiente desde la lista `UPCOMING` hacia la lista `COURSES`, completando sus datos:

   ```js
   {
     id: "metodologia",
     title: "Metodología de la Investigación Científica",
     description: "...",
     price: "$5 USD",
     duration: "2–3 horas",
     modules: "6 módulos",
     href: "https://curso-metodologia.vercel.app/",
     status: "disponible",
   },
   ```

4. Sube el cambio a GitHub — Vercel republica automáticamente la vitrina.

## Cómo quitar o agregar tarjetas de "Próximamente"

Edita la lista `UPCOMING` en `src/App.jsx`: agrega, quita o cambia el `title` y `description` de cada una. No necesitan `href` todavía, porque no son clicables.

## Requisitos

- [Node.js](https://nodejs.org) versión 18 o superior.

## Cómo correrlo en tu computadora

```
npm install
npm run dev
```

Abre la dirección que aparezca en la terminal (normalmente `http://localhost:5173`).

## Cómo publicarlo en internet (gratis)

1. Sube esta carpeta a un repositorio de GitHub nuevo (por ejemplo, `ficha-cursos`).
2. Entra a [vercel.com](https://vercel.com), inicia sesión con tu cuenta de GitHub, "Add New Project" → importa el repositorio.
3. Deja la configuración automática y haz clic en "Deploy".
4. Obtendrás un enlace público, por ejemplo `ficha-cursos.vercel.app` — ese es el que compartes como tu vitrina general.

## Autora

Msc. Betty Meneses Ayllón
