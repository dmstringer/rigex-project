require('dotenv').config();
require('reflect-metadata');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const { createServer } = require('http');
const cookieParser = require('cookie-parser');

const { instantiateSequelize } = require('./db/models');
const resolvers = require('./graphql/resolvers/index');
const typeDefs = require('./graphql/schemas/index');

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res }),
  });

  await instantiateSequelize();

  const app = express();
  app.use(cookieParser());
  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
    })
  );

  app.get('/', function (req, res) {
    res.send('');
  });

  server.applyMiddleware({ app, path: '/graphql' });

  const httpServer = createServer(app);

  httpServer.listen({ port: process.env.PORT }, () =>
    console.log(`Server is running on port ${process.env.PORT}/graphql`)
  );
};

startServer().then();
