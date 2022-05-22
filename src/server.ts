import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import express from "express";
import {
  constraintDirective,
  constraintDirectiveTypeDefs,
} from "graphql-constraint-directive";
import { PubSub } from "graphql-subscriptions";
import http from "http";
import { RequestResolver } from "./graphql/Resolvers/RequestsResolver.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { UserResolver } from "./graphql/Resolvers/UsersResolver.js";
import { createToken, getUserFromToken } from "./lib/auth";
import prisma from "./prisma/prisma";

const pubSub = new PubSub();

async function startApolloServer(t: any, r: any) {
  const app = express();
  app.use(cookieParser());

  const httpServer = http.createServer(app);
  const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs],
    resolvers: [RequestResolver, UserResolver],
  });
  const server = new ApolloServer({
    schema: constraintDirective()(schema),
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
    context({ req, res }) {
      let user;
      const token = req.cookies.T_ACCESS_TOKEN || req.headers.authorization;
      if (token) {
        user = getUserFromToken(token);
      }
      return { req, res, prisma, createToken, user, pubSub };
    },
  });
  await server.start();
  server.applyMiddleware({
    app,
    cors: { origin: "http://localhost:3000", credentials: true },
  });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4001 }, resolve)
  );
  console.log(`Server ready at http://localhost:4001${server.graphqlPath}`);
}
const resolvers = [UserResolver, RequestResolver];
startApolloServer(typeDefs, resolvers).then(() => {
  console.log(" 🚀🚀🚀 Cheers🍺");
});