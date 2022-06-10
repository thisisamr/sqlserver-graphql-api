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
export const UserResolver: Resolvers<Icontext> = {
  Query: {
    usersQuery: async (_, __, { prisma }) => {
      let queryResults = null;
      if (__.after) {
        //check for a a cursor
        queryResults = await prisma.aspNetUsers.findMany({
          take: __.first,
          skip: 1,
          cursor: {
            Id: __.after,
          },
        });
      } else {
        queryResults = await prisma.aspNetUsers.findMany({
          take: __.first,
        });
      }

      if (queryResults.length > 0) {
        const lastRequestResult = queryResults[queryResults.length - 1];
        const myCursor = lastRequestResult.Id;

        const secondQueryResults = await prisma.aspNetUsers.findMany({
          take: __.first,
          cursor: {
            Id: myCursor,
          },
        });
        const result = {
          pageInfo: {
            endCursor: myCursor,
            hasNextPage:
              secondQueryResults.length >= __.first ||
              (secondQueryResults.length < __.first &&
                secondQueryResults.length > 1),
          },
          edges: queryResults.map((user) => ({
            cursor: user.Id,
            node: {
              id: user.Id,
              arabicfullname: user.ArabicFullName,
              addeddate: user.AddedDate,
              modifieddate: user.ModifiedDate,
              makerid: user.MakerId,
              dateofbirth: user.DateOfBirth,
              firstlogin: user.FirstLogIn,
              addressid: user.AddressId,
              username: user.UserName,
              normalizedusername: user.NormalizedUserName,
              email: user.Email,
              normalizedemail: user.NormalizedEmail,
              emailconfirmed: user.EmailConfirmed,
              passwordhash: user.PasswordHash,
              securitystamp: user.SecurityStamp,
              concurrencystamp: user.ConcurrencyStamp,
              phonenumber: user.PhoneNumber,
              phonenumberconfirmed: user.PhoneNumberConfirmed,
              twofactorenabled: user.TwoFactorEnabled,
              lockoutendl: user.LockoutEnd,
              lockoutenabled: user.LockoutEnabled,
              accessfailedcount: user.AccessFailedCount,
              sync_status: user.SyncStatus,
            },
          })),
        };
        return result;
      }
      return {
        pageInfor: {
          endCursor: null,
          hasNextPage: false,
        },
        edges: [],
      };
    },
  },
};
