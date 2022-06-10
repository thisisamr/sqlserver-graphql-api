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
export const AddressesResolver: Resolvers<Icontext> = {
  Query: {
    addressesQuery: async (_, { after, first }, { prisma }) => {
      let queryResults = null;
      if (after) {
        //check for a a cursor
        queryResults = await prisma.addresses.findMany({
          take: first,
          skip: 1,
          cursor: {
            Id: after,
          },
        });
      } else {
        queryResults = await prisma.addresses.findMany({
          take: first,
        });
      }
      if (queryResults.length > 0) {
        const lastAddressesResult = queryResults[queryResults.length - 1];
        const myCursor = lastAddressesResult.Id;

        const secondQueryResults = await prisma.addresses.findMany({
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
          edges: queryResults.map((address) => ({
            cursor: address.Id,
            node: {
              id: address.Id,
              description: address.Description,
              floor_number: address.FloorNumber,
              apartment_number: address.ApartmentNumber,
              streetname: address.StreetName,
              unique_mark: address.UniqueMark,
              property_number: address.PropertyNumber,
              sync_status: address.SyncStatus,
              regionid: address.RegionId,
              updatedby: address.UpdatedBy,
              createdby: address.Createdby,
              modifieddate: address.ModifiedDate,
              addeddate: address.AddedDate,
              requestid: address.RequestId,
              districtid: address.DistrictId,
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
