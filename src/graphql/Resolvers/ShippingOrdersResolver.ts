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
export const ShippingOrdersResolver: Resolvers<Icontext> = {
  Query: {
    shippingordersQuery: async (_, { after, first }, { prisma }) => {
      let queryResults = null;
      if (after) {
        //check for a a cursor
        queryResults = await prisma.shippingOrders.findMany({
          take: first,
          skip: 1,
          cursor: {
            Id: after,
          },
        });
      } else {
        queryResults = await prisma.shippingOrders.findMany({
          take: first,
        });
      }
      if (queryResults.length > 0) {
        const lastshippingOrdersResult = queryResults[queryResults.length - 1];
        const myCursor = lastshippingOrdersResult.Id;

        const secondQueryResults = await prisma.shippingOrders.findMany({
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
          edges: queryResults.map((shippingOrder) => ({
            cursor: shippingOrder.Id,
            node: {
              id: shippingOrder.Id,
              requestid: shippingOrder.RequestId,
              shippingtype: shippingOrder.ShippingType,
              shippingprice: shippingOrder.ShippingPrice,
              officeid: shippingOrder.OfficeId,
              longitude: shippingOrder.Longitude,
              latitude: shippingOrder.Latitude,
              districtid: shippingOrder.DistrictId,
              addeddate: shippingOrder.AddedDate,
              modifieddate: shippingOrder.ModifiedDate,
              createdby: shippingOrder.Createdby,
              updatedby: shippingOrder.UpdatedBy,
              numberofcopies: shippingOrder.NumberOfCopies,
              apartmentnumber: shippingOrder.ApartmentNumber,
              description: shippingOrder.Description,
              floornumber: shippingOrder.FloorNumber,
              propertynumber: shippingOrder.PropertyNumber,
              regionid: shippingOrder.RegionId,
              streetname: shippingOrder.StreetName,
              uniquemark: shippingOrder.UniqueMark,
              extracopiesprice: shippingOrder.ExtraCopiesPrice,
              orderstatus: shippingOrder.OrderStatus,
              sync_status: shippingOrder.SyncStatus,
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
