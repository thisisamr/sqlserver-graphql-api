import { PrismaClient } from "@prisma/client";
import { AuthenticationError, Context } from "apollo-server-core";
import bcrypt from "bcrypt";
import cookie from "cookie";
import { IncomingMessage, OutgoingMessage } from "http";
import { Request, Resolvers, User } from "../../generated/graphql";
import prisma from "../../prisma/prisma";
export interface Icontext extends Context {
  prisma: PrismaClient;
  user: User;
  res: OutgoingMessage;
  req: IncomingMessage;
  createToken: (user: User) => string;
}
export const UserProfileResolver: Resolvers<Icontext> = {
  Query: {
    userprofilesQuery: async (_, { after, first }, { prisma }) => {
      let queryResults = null;
      if (after) {
        //check for a a cursor
        queryResults = await prisma.userProfiles.findMany({
          take: first,
          skip: 1,
          cursor: {
            Id: after,
          },
        });
      } else {
        queryResults = await prisma.userProfiles.findMany({
          take: first,
        });
      }
      if (queryResults.length > 0) {
        const lastuserProfilesResult = queryResults[queryResults.length - 1];
        const myCursor = lastuserProfilesResult.Id;

        const secondQueryResults = await prisma.userProfiles.findMany({
          take: first,
          cursor: {
            Id: myCursor,
          },
        });
        const result = {
          pageInfo: {
            endCursor: myCursor,
            hasNextPage:
              secondQueryResults.length >= first ||
              (secondQueryResults.length < first &&
                secondQueryResults.length > 0),
          },
          edges: queryResults.map((userProfile) => ({
            cursor: userProfile.Id,
            node: {
              id: userProfile.Id,
              telephonenumber: userProfile.TelephoneNumber,
              userid: userProfile.UserId,
              addeddate: userProfile.AddedDate,
              modifieddate: userProfile.ModifiedDate,
              createdby: userProfile.Createdby,
              updatedby: userProfile.UpdatedBy,
              haswhatsapp: userProfile.HasWhatsApp,
              phonenumbertype: userProfile.PhoneNumberType,
              description: userProfile.Description,
              sync_status: userProfile.SyncStatus,
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
  // for testing
  Mutation: {},
};
