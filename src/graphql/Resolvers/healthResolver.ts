import { PrismaClient } from "@prisma/client";
import { Context } from "apollo-server-core";
import { IncomingMessage, OutgoingMessage } from "http";
import { Resolvers, User } from "../../generated/graphql";
export interface Icontext extends Context {
  prisma: PrismaClient;
  user: User;
  res: OutgoingMessage;
  req: IncomingMessage;
  createToken: (user: User) => string;
}
export const health: Resolvers<Icontext> = {
  Query: {
    rualive: async () => {
      return true;
    },
  },
};
