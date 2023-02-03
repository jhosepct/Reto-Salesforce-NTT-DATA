<h1 align="center" width="100%">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github.com/jhosepct/Reto-Salesforce-NTT-DATA/blob/main/logo.webp">
    <img width="33%" alt="NTT DATA" src="https://github.com/jhosepct/Reto-Salesforce-NTT-DATA/blob/main/logo.webp"> 
  </picture>
</h1>

La aplicación permite visualizar en una tabla los 15 datos de una [api](https://randomuser.me/documentation), poder ordenar(ascendente, descendente y desordenada), visualizar las imagenes en los tres tipos que proporsiona(miniatura, mediano y largo) y por ultimo exportar la data en formato csv.

- Demo: [NTT DATA](https://reto-salesforce-ntt-data.vercel.app/)

---

## Paquetes usados:

- storybook: [link](https://storybook.js.org/)
- emotion: [link](https://emotion.sh/docs/introduction)
- react-icons: [link](https://react-icons.github.io/react-icons/)
- react-csv: [link](https://www.npmjs.com/package/react-csv)
- axios: [link](https://axios-http.com/)
- uuidv4: [link](https://github.com/thenativeweb/uuidv4)

---

## Instalación

- Asegúrese de que sus versiones de NodeJS y npm estén actualizadas para `React ^18.2.0`

- Instalar dependencias: `npm` or `yarn`
  Una pequeña introducción sobre la instalación.

```
$ npm run install
```

- Inicie el servidor: `npm run start`

```
$ npm run start
```

- Las vistas están en: `localhost:3000`

---

### Storybook

Storybook es una librería de código abierto que permite desarrollar y documentar tus componentes en un entorno aislado.

Para poder ver los componentes listos para usar, podes entrar a [este enlace](https://storybook-two-tau.vercel.app).

Para poder usar localmente debes realizar lo siguiente:

- Inicie storybook: `npm run storybook`

```
$ npm run storybook
```

- Las vistas están en: `localhost:6006

### API

Obtener 15 usuarios

```
    GET https://randomuser.me/api/?results=15
```

Copyright © [Jhosep Ct](https://github.com/jhosepct)
