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

export const UseraddressesRsolver: Resolvers<Icontext> = {
  Query: {
    useraddressesQuery: async (_, { after, first }, { prisma }) => {
      let queryResults = null;
      if (after) {
        //check for a a cursor
        queryResults = await prisma.userAddresses.findMany({
          take: first,
          skip: 1,
          cursor: {
            Id: after,
          },
        });
      } else {
        queryResults = await prisma.userAddresses.findMany({
          take: first,
        });
      }
      if (queryResults.length > 0) {
        const lastUserAddressesResult = queryResults[queryResults.length - 1];
        const myCursor = lastUserAddressesResult.Id;

        const secondQueryResults = await prisma.userAddresses.findMany({
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
                secondQueryResults.length > 1),
          },
          edges: queryResults.map((useraddresses) => ({
            cursor: useraddresses.Id,
            node: {
              id: useraddresses.Id,
              description: useraddresses.Description,
              districtid: useraddresses.DistrictId,
              userprofileid: useraddresses.UserProfileId,
              addeddate: useraddresses.AddedDate,
              modifieddate: useraddresses.ModifiedDate,
              createdby: useraddresses.Createdby,
              updatedby: useraddresses.UpdatedBy,
              regionid: useraddresses.RegionId,
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
