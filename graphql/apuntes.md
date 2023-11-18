# GraphQL

## ¿Qué es GraphQL?

GraphQL es un lenguaje de consulta para APIs y un tiempo de ejecución para cumplir con esas consultas con sus datos existentes. GraphQL proporciona una descripción completa y comprensible de los datos en su API, le brinda a los clientes el poder de pedir exactamente lo que necesitan y nada más, hace que sea más fácil evolucionar las API con el tiempo y permite herramientas potentes de desarrollo.

## ¿Por qué GraphQL?

GraphQL es una alternativa a REST para crear y consumir APIs. GraphQL es una especificación y un conjunto de herramientas que operan sobre HTTP.

## Implementaciones de GraphQL

- [Apollo](https://www.apollographql.com/)
- [Relay](https://relay.dev/)
- [GraphQL.js](https://graphql.org/graphql-js/)

Para usar graphql en nodejs se puede usar el paquete `graphql` de npm.

- Debemos instalar el paquete `graphql` y `express-graphql` para poder usar graphql en nodejs.

```bash
npm install graphql apollo-server-express express-graphql graphql-tools/load-files
```

- Creamos la carpeta `graphql` y dentro de ella el archivo `index.js`

- En el archivo `index.js` importamos los paquetes necesarios para poder usar graphql en nodejs.

```js
//index.js
const { ApolloServer } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { loadFiles } = require("@graphql-tools/load-files");
const resolvers = require("./resolvers");
const { buildContext } = require("graphql-passport");
const {
  typeDefs: scalarsTypeDefs,
  resolvers: scalarsResolvers,
} = require("graphql-scalars");
```

> - **apollo-server-express**: Es un paquete que nos permite crear un servidor de graphql en nodejs.
> - **ApolloServerPluginLandingPageGraphQLPlayground**: Es un paquete que nos permite crear un playground para poder probar las consultas de graphql.
> - **graphql-tools/load-files**: Es un paquete que nos permite cargar los archivos de graphql.
> - **graphql-passport**: Es un paquete que nos permite usar passport en graphql.
> - **graphql-scalars**: Es un paquete que nos permite usar tipos de datos escalares en graphql.

## Sistema de tipado

GraphQL tiene un sistema de tipado que nos permite definir los tipos de datos que vamos a usar en nuestra API.
