import { PrismaClient } from "@prisma/client";
import { AuthenticationError, Context } from "apollo-server-core";
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
    rualive: async (_,__,{user}) => {
      if(!user){
        throw new AuthenticationError("no auth")
      }
      return true;
    },
  },
};
