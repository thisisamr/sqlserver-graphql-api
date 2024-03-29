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
import http from "http";
import { RequestResolver } from "./graphql/Resolvers/RequestsResolver.js";
import { typeDefs } from "./graphql/typeDefs.js";
import { UserResolver } from "./graphql/Resolvers/UsersResolver.js";
import { getUserFromToken } from "./lib/auth";
import prisma from "./prisma/prisma";
import { AddressesResolver } from "./graphql/Resolvers/addressesResolver.js";
import { UserProfileResolver } from "./graphql/Resolvers/UserProfileResolver.js";
import { ShippingOrdersResolver } from "./graphql/Resolvers/ShippingOrdersResolver.js";
import { PaymentTrasnsactionsResolver } from "./graphql/Resolvers/PaymentTrasnsactionsResolver.js";
import { UseraddressesRsolver } from "./graphql/Resolvers/UseraddressesResolver";
import { health } from "./graphql/Resolvers/healthResolver.js";
async function startApolloServer(t: any, r: any) {
  const app = express();
  app.use(cookieParser());
  const httpServer = http.createServer(app);
  const schema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, typeDefs],
    resolvers: [
      health,
      UserResolver,
      RequestResolver,
      AddressesResolver,
      UserProfileResolver,
      ShippingOrdersResolver,
      PaymentTrasnsactionsResolver,
      UseraddressesRsolver,
    ],
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
      const asd = req.headers.asd;
      if (!token && asd) {
        user = {
          id: 35,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          email: "admin@admin.com",
          firstname: "admin",
          lastname: "admin",
          avatar: "",
        };
      }
      return { req, res, prisma, user };
    },
  });
  await server.start();
  server.applyMiddleware({
    app,
    cors: { origin: "*", credentials: true },
  });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4001 }, resolve)
  );
  console.log(`Server ready at http://localhost:4001${server.graphqlPath}`);
}
const resolvers = [
  health,
  UserResolver,
  RequestResolver,
  AddressesResolver,
  UserProfileResolver,
  ShippingOrdersResolver,
  PaymentTrasnsactionsResolver,
  UseraddressesRsolver,
];
startApolloServer(typeDefs, resolvers).then(() => {
  console.log(" 🚀🚀🚀 Cheers🍺");
});
